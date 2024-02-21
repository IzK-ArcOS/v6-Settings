import SaveThemeSvelte from "$apps/Settings/Components/Overlay/SaveTheme.svelte";
import { SaveIcon } from "$ts/images/general";
import { App } from "$types/app";
import { OverlayRuntime } from "./runtime";

export const SaveTheme: App = {
  metadata: {
    name: "Save Theme",
    description: "Save your beautiful theme to your account",
    author: "ArcOS Team",
    version: "2.0.0",
    icon: SaveIcon,
  },
  runtime: OverlayRuntime,
  size: { w: 350, h: 380 },
  minSize: { w: 350, h: 380 },
  maxSize: { w: 350, h: 380 },
  id: "SaveTheme",
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
  content: SaveThemeSvelte,
};
