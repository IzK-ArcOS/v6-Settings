import { AppRuntime } from "$ts/apps";
import { Process } from "$ts/process";
import { StateHandler } from "$ts/states";
import type { App, AppMutator } from "$types/app";
import { SettingsStore } from "./store";

export class Runtime extends AppRuntime {
  state: StateHandler;
  constructor(app: App, mutator: AppMutator, process: Process) {
    super(app, mutator, process);

    this.state = new StateHandler(app.id, SettingsStore, "account")
  }
}