import CustomProfilePictureSvelte from "$apps/Settings/Components/Overlay/CustomProfilePicture.svelte";
import { PersonalizationIcon } from "$ts/images/general";
import { App } from "$types/app";
import { OverlayRuntime } from "./runtime";

export const CustomProfilePicture: App = {
  metadata: {
    name: "Custom Profile Picture",
    description: "Change your profile picture to something custom",
    author: "ArcOS Team",
    version: "2.0.0",
    icon: PersonalizationIcon,
  },
  runtime: OverlayRuntime,
  size: { w: 350, h: 182 },
  minSize: { w: 350, h: 182 },
  maxSize: { w: 350, h: 182 },
  id: "CustomProfilePicture",
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
  content: CustomProfilePictureSvelte,
};
