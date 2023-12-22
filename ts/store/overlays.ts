import { App } from "$types/app";
import { ChangePassword } from "../overlays/changePassword";
import { ChangeUsername } from "../overlays/changeUsername";
import { CustomProfilePicture } from "../overlays/customProfilePicture";

export const SettingsOverlays: Record<string, App> = {
  ChangeUsername,
  ChangePassword,
  CustomProfilePicture
}