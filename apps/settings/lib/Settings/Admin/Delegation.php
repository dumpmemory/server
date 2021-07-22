<?php
/**
 * @copyright Copyright (c) 2021 Nextcloud GmbH
 *
 * @author Carl Schwan <carl@carlschwan.eu>
 *
 * @license GNU AGPL version 3 or any later version
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as
 * published by the Free Software Foundation, either version 3 of the
 * License, or (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
 * GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with this program. If not, see <https://www.gnu.org/licenses/>.
 *
 */

namespace OCA\Settings\Settings\Admin;

use OCA\Settings\AppInfo\Application;
use OCA\Settings\Service\AuthorizedGroupService;
use OCP\AppFramework\Http\TemplateResponse;
use OCP\AppFramework\Services\IInitialState;
use OCP\IGroupManager;
use OCP\Settings\IDelegatedSettings;
use OCP\Settings\IIconSection;
use OCP\Settings\IManager;
use OCP\Settings\ISettings;

class Delegation implements ISettings {
	/** @var IManager */
	private $settingManager;

	/** @var IInitialState $initialStateService */
	private $initialStateService;

	/** @var IGroupManager $groupManager */
	private $groupManager;

	/** @var AuthorizedGroupService $service */
	private $service;

	public function __construct(
		IManager $settingManager,
		IInitialState $initialStateService,
		IGroupManager $groupManager,
		AuthorizedGroupService $service
	) {
		$this->settingManager = $settingManager;
		$this->initialStateService = $initialStateService;
		$this->groupManager = $groupManager;
		$this->service = $service;
	}

	public function getForm(): TemplateResponse {
		$settingsClasses = $this->settingManager->getAdminDelegationAllowedSettings();

		// Available settings page initialization
		$sections = $this->settingManager->getAdminSections();
		$settings = [];
		foreach ($settingsClasses as $settingClass) {
			$setting = \OC::$server->get($settingClass);
			$settingSection = $setting->getSection();
			$sectionName = $settingSection;
			$priority = -1;
			foreach ($sections as $sectionPriority => $sectionsInPriority) {
				foreach ($sectionsInPriority as $section) {
					/** @var IIconSection $section */
					if ($section->getID() === $sectionName) {
						$sectionName = $section->getName();
						$priority = $sectionPriority;
						break 2; // breaks the two foreach loop
					}
				}
			}
			if (($setting instanceof IDelegatedSettings) && $setting->getName()) {
				$sectionName .= ' - ' . $setting->getName();
			}
			$settings[] = [
				'class' => $settingClass,
				'sectionName' => $sectionName,
				'priority' => $priority,
			];
		}
		usort($settings, function (array $a, array $b) {
			if ($a['priority'] == $b['priority']) {
				return 0;
			}
			return ($a['priority'] < $b['priority']) ? -1 : 1;
		});
		$this->initialStateService->provideInitialState('available-settings', $settings);

		// Available groups initialization
		$groups = [];
		$groupsClass = $this->groupManager->search('');
		foreach ($groupsClass as $group) {
			if ($group->getGID() === 'admin') {
				continue; // Admin already have access to everything
			}
			$groups[] = [
				'displayName' => $group->getDisplayName(),
				'gid' => $group->getGID(),
			];
		}
		$this->initialStateService->provideInitialState('available-groups', $groups);

		// Already set authorized groups
		$this->initialStateService->provideInitialState('authorized-groups', $this->service->findAll());

		return new TemplateResponse(Application::APP_ID, 'settings/admin/delegation', [], '');
	}

	/**
	 * @return string the section ID, e.g. 'sharing'
	 */
	public function getSection() {
		return 'admindelegation';
	}

	/*
	 * @inheritdoc
	 */
	public function getPriority() {
		return 75;
	}
}
