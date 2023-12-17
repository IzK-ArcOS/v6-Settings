import { ArcOSVersion } from "$ts/env";
import { SettingsIcon } from "$ts/images/apps";
import { App } from "$types/app";
import AppSvelte from "../App.svelte";
import { Runtime } from "./runtime";

export const SettingsApp: App = {
  metadata: {
    name: "Settings",
    description: "Change your ArcOS settings",
    author: "The ArcOS Team",
    version: ArcOSVersion,
    icon: SettingsIcon
  },
  runtime: Runtime,
  content: AppSvelte,
  id: "SettingsApp",
  size: { w: 730, h: 500 },
  minSize: { w: 730, h: 500 },
  maxSize: { w: 1100, h: 600 },
  pos: { x: 30, y: 40 },
  state: {
    minimized: false,
    maximized: false,
    headless: false,
    fullscreen: false,
    resizable: true
  },
  controls: {
    minimize: true,
    maximize: true,
    close: true
  }
}