import ChangeUsernameSvelte from "$apps/Settings/Components/Overlay/ChangeUsername.svelte";
import { AccountIcon } from "$ts/images/general";
import { App } from "$types/app";
import { OverlayRuntime } from "./runtime";

export const ChangeUsername: App = {
  metadata: {
    name: "Change Username",
    description: "Change your ArcOS Username",
    author: "ArcOS Team",
    version: "1.0.0",
    icon: AccountIcon,
  },
  runtime: OverlayRuntime,
  size: { w: 350, h: 182 },
  minSize: { w: 350, h: 182 },
  maxSize: { w: 350, h: 182 },
  id: "ChangeUsername",
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
  content: ChangeUsernameSvelte,
};
