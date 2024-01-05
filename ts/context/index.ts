import { AppContextMenu } from "$types/app";
import { SettingsSideBarContext } from "./sidebar";
import { ThemeContext } from "./themes";

export const SettingsContext: AppContextMenu = {
  ...ThemeContext,
  ...SettingsSideBarContext
}
