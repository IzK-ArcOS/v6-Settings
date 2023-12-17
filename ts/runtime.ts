import type { App } from "$types/app";
import { AppRuntime } from "$ts/apps";
import { StateHandler } from "$ts/states";
import { SettingsStore } from "./store";

export class Runtime extends AppRuntime {
  state: StateHandler;
  constructor(app: App) {
    super(app);

    this.state = new StateHandler(app.id, SettingsStore, "account")
  }
}