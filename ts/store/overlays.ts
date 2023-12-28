import { App } from "$types/app";
import { ChangePassword } from "../overlays/changePassword";
import { ChangeUsername } from "../overlays/changeUsername";
import { CustomLoginBackground } from "../overlays/customLoginBackground";
import { CustomProfilePicture } from "../overlays/customProfilePicture";
import { CustomWallpaper } from "../overlays/customWallpaper";
import { SaveTheme } from "../overlays/saveTheme";

export const SettingsOverlays: Record<string, App> = {
  ChangeUsername,
  ChangePassword,
  CustomProfilePicture,
  SaveTheme,
  CustomWallpaper,
  CustomLoginBackground
}