import CustomLoginBackgroundSvelte from "$apps/Settings/Components/Overlay/CustomLoginBackground.svelte";
import { PasswordIcon } from "$ts/images/general";
import { App } from "$types/app";
import { OverlayRuntime } from "./runtime";

export const CustomLoginBackground: App = {
  metadata: {
    name: "Custom Login Background",
    description: "Change your login background to something beautiful.",
    author: "ArcOS Team",
    version: "2.0.0",
    icon: PasswordIcon
  },
  runtime: OverlayRuntime,
  size: { w: 350, h: 182 },
  minSize: { w: 350, h: 182 },
  maxSize: { w: 350, h: 182 },
  id: "CustomWallpaper",
  pos: {
    x: 0, y: 0,
  },
  state: {
    minimized: false,
    maximized: false,
    headless: false,
    fullscreen: false,
    resizable: false
  },
  controls: { minimize: false, maximize: false, close: false },
  content: CustomLoginBackgroundSvelte
}