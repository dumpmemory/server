<?php

declare(strict_types=1);

/**
 * SPDX-FileCopyrightText: 2024 Nextcloud GmbH and Nextcloud contributors
 * SPDX-License-Identifier: AGPL-3.0-only
 */

use Rector\Config\RectorConfig;

$config = RectorConfig::configure()
	->withPaths([
		__DIR__ . '/apps',
		// __DIR__ . '/config',
		// __DIR__ . '/core',
		// __DIR__ . '/lib',
		// __DIR__ . '/ocs',
		// __DIR__ . '/ocs-provider',
		// __DIR__ . '/tests',
		// __DIR__ . '/themes',
	])
	->withSkip([
		__DIR__ . '/apps/*/3rdparty/*',
		__DIR__ . '/apps/*/build/stubs/*',
		__DIR__ . '/apps/*/composer/*',
		__DIR__ . '/apps/*/config/*',
	])
	// uncomment to reach your current PHP version
	// ->withPhpSets()
	->withTypeCoverageLevel(0);


$ignoredEntries = shell_exec('git status --porcelain --ignored ' . escapeshellarg(__DIR__));
$ignoredEntries = explode("\n", $ignoredEntries);
$ignoredEntries = array_filter($ignoredEntries, static fn (string $line) => str_starts_with($line, '!! '));
$ignoredEntries = array_map(static fn (string $line) => substr($line, 3), $ignoredEntries);
$ignoredEntries = array_values($ignoredEntries);

foreach ($ignoredEntries as $ignoredEntry) {
	if (str_ends_with($ignoredEntry, '/')) {
		$config->withSkip([$ignoredEntry . '*']);
	} else {
		$config->withSkip([$ignoredEntry . '/*']);
	}
}

return $config;
