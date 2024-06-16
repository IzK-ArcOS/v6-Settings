import UserStyleEditorSvelte from "$apps/Settings/Components/Overlay/UserStyleEditor.svelte";
import { ThemesIcon } from "$ts/images/general";
import { App } from "$types/app";
import { OverlayRuntime } from "./runtime";

export const UserStyleEditor: App = {
  metadata: {
    name: "User Style Editor",
    description: "Add custom CSS to your ArcOS desktop",
    author: "ArcOS Team",
    version: "1.0.0",
    icon: ThemesIcon,
  },
  runtime: OverlayRuntime,
  size: { w: 600, h: 400 },
  minSize: { w: 600, h: 400 },
  maxSize: { w: 600, h: 400 },
  id: "UserStyleEditor",
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
  content: UserStyleEditorSvelte,
};
