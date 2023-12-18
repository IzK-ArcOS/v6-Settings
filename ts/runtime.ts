import type { App, AppMutator } from "$types/app";
import { AppRuntime } from "$ts/apps";
import { StateHandler } from "$ts/states";
import { SettingsStore } from "./store";
import { Process } from "$ts/process";

export class Runtime extends AppRuntime {
  state: StateHandler;
  constructor(app: App, mutator: AppMutator, process: Process) {
    super(app, mutator, process);

    this.state = new StateHandler(app.id, SettingsStore, "account")
  }
}