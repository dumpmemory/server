({39583:function(){var e=this;window.addEventListener("DOMContentLoaded",(function(){$("#excludedGroups,#linksExcludedGroups,#passwordsExcludedGroups").each((function(e,t){var s=this;OC.Settings.setupGroupsSelect($(t)),$(t).change((function(e){var t=e.val||[];t=JSON.stringify(t),OCP.AppConfig.setValue("core",$(s).attr("name"),t)}))})),$("#loglevel").change((function(){$.post(OC.generateUrl("/settings/admin/log/level"),{level:$(e).val()},(function(){OC.Log.reload()}))})),$("#backgroundjobs span.crondate").tooltip({placement:"top"}),$("#backgroundjobs input").change((function(){if($(e).is(":checked")){var t=$(e).val();"ajax"!==t&&"webcron"!==t&&"cron"!==t||OCP.AppConfig.setValue("core","backgroundjobs_mode",t,{success:function(){OCP.AppConfig.deleteKey("core","cronErrors")}})}})),$("#shareAPIEnabled").change((function(){$("#shareAPI p:not(#enable)").toggleClass("hidden",!e.checked)})),$("#enableEncryption").change((function(){$("#encryptionAPI div#EncryptionWarning").toggleClass("hidden")})),$("#reallyEnableEncryption").click((function(){$("#encryptionAPI div#EncryptionWarning").toggleClass("hidden"),$("#encryptionAPI div#EncryptionSettingsArea").toggleClass("hidden"),OCP.AppConfig.setValue("core","encryption_enabled","yes"),$("#enableEncryption").attr("disabled","disabled")})),$("#startmigration").click((function(e){$(window).on("beforeunload.encryption",(function(e){return t("settings","Migration in progress. Please wait until the migration is finished")})),e.preventDefault(),$("#startmigration").prop("disabled",!0),OC.msg.startAction("#startmigration_msg",t("settings","Migration started …")),$.post(OC.generateUrl("/settings/admin/startmigration"),"",(function(e){OC.msg.finishedAction("#startmigration_msg",e),"success"===e.status?($("#encryptionAPI div#selectEncryptionModules").toggleClass("hidden"),$("#encryptionAPI div#migrationWarning").toggleClass("hidden")):$("#startmigration").prop("disabled",!1),$(window).off("beforeunload.encryption")}))})),$("#shareapiExpireAfterNDays").on("input",(function(){this.value=this.value.replace(/\D/g,"")})),$("#shareAPI input:not(.noJSAutoUpdate)").change((function(){var e=$(this).val();"checkbox"===$(this).attr("type")&&(e=this.checked?"yes":"no"),OCP.AppConfig.setValue("core",$(this).attr("name"),e)})),$("#shareapiDefaultExpireDate").change((function(){$("setDefaultExpireDate").toggleClass("hidden",!this.checked)})),$("#shareapiDefaultInternalExpireDate").change((function(){$("#setDefaultInternalExpireDate").toggleClass("hidden",!this.checked)})),$("#shareapiDefaultRemoteExpireDate").change((function(){$("#setDefaultRemoteExpireDate").toggleClass("hidden",!this.checked)})),$("#enforceLinkPassword").change((function(){$("#selectPasswordsExcludedGroups").toggleClass("hidden",!this.checked)})),$("#publicShareDisclaimer").change((function(){$("#publicShareDisclaimerText").toggleClass("hidden",!this.checked),this.checked||s("")})),$("#shareApiDefaultPermissionsSection input").change((function(e){var t=$("#shareApiDefaultPermissions"),s=$(e.target),n=t.val();return s.is(":checked")?n|=s.val():n&=~s.val(),n|=OC.PERMISSION_READ,t.val(n).change(),e.preventDefault(),!1}));var s=_.debounce((function(e){var s={success:function(){OC.msg.finishedSuccess("#publicShareDisclaimerStatus",t("settings","Saved"))},error:function(){OC.msg.finishedError("#publicShareDisclaimerStatus",t("settings","Not saved"))}};OC.msg.startSaving("#publicShareDisclaimerStatus"),_.isString(e)&&""!==e?OCP.AppConfig.setValue("core","shareapi_public_link_disclaimertext",e,s):($("#publicShareDisclaimerText").val(""),OCP.AppConfig.deleteKey("core","shareapi_public_link_disclaimertext",s))}),500);$("#publicShareDisclaimerText").on("change, keyup",(function(){s(this.value)})),$("#shareapi_allow_share_dialog_user_enumeration").on("change",(function(){$("#shareapi_restrict_user_enumeration_to_group_setting").toggleClass("hidden",!this.checked),$("#shareapi_restrict_user_enumeration_to_phone_setting").toggleClass("hidden",!this.checked),$("#shareapi_restrict_user_enumeration_combinewarning_setting").toggleClass("hidden",!this.checked)})),$("#shareapi_restrict_user_enumeration_full_match").on("change",(function(){$("#shareapi_restrict_user_enumeration_full_match_userid_setting").toggleClass("hidden",!this.checked),$("#shareapi_restrict_user_enumeration_full_match_email_setting").toggleClass("hidden",!this.checked),$("#shareapi_restrict_user_enumeration_full_match_ignore_second_display_name_setting").toggleClass("hidden",!this.checked)})),$("#allowLinks").change((function(){$("#publicLinkSettings").toggleClass("hidden",!this.checked),$("#setDefaultExpireDate").toggleClass("hidden",!(this.checked&&$("#shareapiDefaultExpireDate")[0].checked))})),$("#mail_smtpauth").change((function(){this.checked?$("#mail_credentials").removeClass("hidden"):$("#mail_credentials").addClass("hidden")})),$("#mail_smtpmode").change((function(){"smtp"!==$(this).val()?($("#setting_smtpauth").addClass("hidden"),$("#setting_smtphost").addClass("hidden"),$("#mail_smtpsecure_label").addClass("hidden"),$("#mail_smtpsecure").addClass("hidden"),$("#mail_credentials").addClass("hidden"),$("#mail_sendmailmode_label, #mail_sendmailmode").removeClass("hidden")):($("#setting_smtpauth").removeClass("hidden"),$("#setting_smtphost").removeClass("hidden"),$("#mail_smtpsecure_label").removeClass("hidden"),$("#mail_smtpsecure").removeClass("hidden"),$("#mail_smtpauth").is(":checked")&&$("#mail_credentials").removeClass("hidden"),$("#mail_sendmailmode_label, #mail_sendmailmode").addClass("hidden"))})),$("#mail_general_settings_form").change((function e(){OC.PasswordConfirmation.requiresPasswordConfirmation()?OC.PasswordConfirmation.requirePasswordConfirmation(e):(OC.msg.startSaving("#mail_settings_msg"),$.ajax({url:OC.generateUrl("/settings/admin/mailsettings"),type:"POST",data:$("#mail_general_settings_form").serialize(),success:function(){OC.msg.finishedSuccess("#mail_settings_msg",t("settings","Saved"))},error:function(e){OC.msg.finishedError("#mail_settings_msg",e.responseJSON)}}))})),$("#mail_credentials_settings_submit").click((function e(){OC.PasswordConfirmation.requiresPasswordConfirmation()?OC.PasswordConfirmation.requirePasswordConfirmation(e):(OC.msg.startSaving("#mail_settings_msg"),$.ajax({url:OC.generateUrl("/settings/admin/mailsettings/credentials"),type:"POST",data:$("#mail_credentials_settings").serialize(),success:function(){OC.msg.finishedSuccess("#mail_settings_msg",t("settings","Saved"))},error:function(e){OC.msg.finishedError("#mail_settings_msg",e.responseJSON)}}))})),$("#mail_smtppassword").click((function(){"text"===e.type&&"********"===e.value&&(e.type="password",e.value="")})),$("#sendtestemail").click((function(e){e.preventDefault(),OC.msg.startAction("#sendtestmail_msg",t("settings","Sending…")),$.ajax({url:OC.generateUrl("/settings/admin/mailtest"),type:"POST",success:function(){OC.msg.finishedSuccess("#sendtestmail_msg",t("settings","Email sent"))},error:function(e){OC.msg.finishedError("#sendtestmail_msg",e.responseJSON)}})})),$("#allowGroupSharing").change((function(){$("#allowGroupSharing").toggleClass("hidden",!e.checked)})),$("#shareapiExcludeGroups").change((function(){$("#selectExcludedGroups").toggleClass("hidden",!e.checked)})),null!==document.getElementById("security-warning")&&$.when(OC.SetupChecks.checkWebDAV(),OC.SetupChecks.checkWellKnownUrl("GET","/.well-known/webfinger",OC.theme.docPlaceholderUrl,!0===$("#postsetupchecks").data("check-wellknown"),[200,404],!0),OC.SetupChecks.checkWellKnownUrl("GET","/.well-known/nodeinfo",OC.theme.docPlaceholderUrl,!0===$("#postsetupchecks").data("check-wellknown"),[200,404],!0),OC.SetupChecks.checkWellKnownUrl("PROPFIND","/.well-known/caldav",OC.theme.docPlaceholderUrl,!0===$("#postsetupchecks").data("check-wellknown")),OC.SetupChecks.checkWellKnownUrl("PROPFIND","/.well-known/carddav",OC.theme.docPlaceholderUrl,!0===$("#postsetupchecks").data("check-wellknown")),OC.SetupChecks.checkProviderUrl(OC.getRootPath()+"/ocm-provider/",OC.theme.docPlaceholderUrl,!0===$("#postsetupchecks").data("check-wellknown")),OC.SetupChecks.checkProviderUrl(OC.getRootPath()+"/ocs-provider/",OC.theme.docPlaceholderUrl,!0===$("#postsetupchecks").data("check-wellknown")),OC.SetupChecks.checkSetup(),OC.SetupChecks.checkGeneric(),OC.SetupChecks.checkWOFF2Loading(OC.filePath("core","","fonts/NotoSans-Regular-latin.woff2"),OC.theme.docPlaceholderUrl),OC.SetupChecks.checkDataProtected()).then((function(e,t,s,n,i,a,r,l,c,o,d){var h=[].concat(e,t,s,n,i,a,r,l,c,o,d),g=$("#postsetupchecks");$("#security-warning-state-loading").addClass("hidden");for(var u=!1,p=g.find(".errors"),m=g.find(".warnings"),C=g.find(".info"),_=0;_<h.length;_++)switch(h[_].type){case OC.SetupChecks.MESSAGE_TYPE_INFO:C.append("<li>"+h[_].msg+"</li>");break;case OC.SetupChecks.MESSAGE_TYPE_WARNING:m.append("<li>"+h[_].msg+"</li>");break;case OC.SetupChecks.MESSAGE_TYPE_ERROR:default:p.append("<li>"+h[_].msg+"</li>")}p.find("li").length>0&&(p.removeClass("hidden"),u=!0),m.find("li").length>0&&(m.removeClass("hidden"),u=!0),C.find("li").length>0&&(C.removeClass("hidden"),u=!0),u?($("#postsetupchecks-hint").removeClass("hidden"),p.find("li").length>0?$("#security-warning-state-failure").removeClass("hidden"):$("#security-warning-state-warning").removeClass("hidden")):0===$("#security-warning").children("ul").children().length?$("#security-warning-state-ok").removeClass("hidden"):$("#security-warning-state-failure").removeClass("hidden")}))}))}})[39583]();
//# sourceMappingURL=settings-legacy-admin.js.map?v=e5ae92977aa6fb6946a0