import { AppContextMenu } from "$types/app";
import { SettingsAccountContext } from "./account";
import { SettingsAppsContext } from "./apps";
import { SettingsSideBarContext } from "./sidebar";
import { ThemeContext } from "./themes";

export const SettingsContext: AppContextMenu = {
  ...SettingsAccountContext,
  ...ThemeContext,
  ...SettingsSideBarContext,
  ...SettingsAppsContext,
}
