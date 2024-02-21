import ChangePasswordSvelte from "$apps/Settings/Components/Overlay/ChangePassword.svelte";
import { PasswordIcon } from "$ts/images/general";
import { App } from "$types/app";
import { OverlayRuntime } from "./runtime";

export const ChangePassword: App = {
  metadata: {
    name: "Change Password",
    description: "Change your ArcOS Password",
    author: "ArcOS Team",
    version: "1.0.0",
    icon: PasswordIcon,
  },
  runtime: OverlayRuntime,
  size: { w: 430, h: 265 },
  minSize: { w: 430, h: 265 },
  maxSize: { w: 430, h: 265 },
  id: "ChangePassword",
  pos: {
    x: 0,
    y: 0,
  },
  state: {
    minimized: false,
    maximized: false,
    headless: false,
    fullscreen: false,
    resizable: false,
  },
  controls: { minimize: false, maximize: false, close: false },
  content: ChangePasswordSvelte,
};
