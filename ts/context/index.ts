import { AppContextMenu } from "$types/app";
import { SettingsAppsContext } from "./apps";
import { SettingsSideBarContext } from "./sidebar";
import { ThemeContext } from "./themes";

export const SettingsContext: AppContextMenu = {
  ...ThemeContext,
  ...SettingsSideBarContext,
  ...SettingsAppsContext
}
