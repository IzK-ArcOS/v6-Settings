import type { App, AppMutator } from "$types/app";
import { AppRuntime } from "$ts/apps";
import { StateHandler } from "$ts/states";
import { SettingsStore } from "./store";

export class Runtime extends AppRuntime {
  state: StateHandler;
  constructor(app: App, mutator: AppMutator) {
    super(app, mutator);

    this.state = new StateHandler(app.id, SettingsStore, "account")
  }
}