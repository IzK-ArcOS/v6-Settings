import CustomWallpaperSvelte from "$apps/Settings/Components/Overlay/CustomWallpaper.svelte";
import { DesktopIcon } from "$ts/images/general";
import { App } from "$types/app";
import { OverlayRuntime } from "./runtime";

export const CustomWallpaper: App = {
  metadata: {
    name: "Custom Wallpaper",
    description: "Change your desktop wallpaper to something beautiful.",
    author: "ArcOS Team",
    version: "2.0.0",
    icon: DesktopIcon,
  },
  runtime: OverlayRuntime,
  size: { w: 350, h: 182 },
  minSize: { w: 350, h: 182 },
  maxSize: { w: 350, h: 182 },
  id: "CustomWallpaper",
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
  content: CustomWallpaperSvelte,
};
