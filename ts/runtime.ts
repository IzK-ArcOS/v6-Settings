import { AppRuntime } from "$ts/apps";
import { spawnOverlay } from "$ts/apps/spawn";
import { Process } from "$ts/process";
import { StateHandler } from "$ts/states";
import type { App, AppMutator } from "$types/app";
import { SettingsStore } from "./store";
import { SettingsOverlays } from "./store/overlays";

export class Runtime extends AppRuntime {
  state: StateHandler;
  constructor(app: App, mutator: AppMutator, process: Process) {
    super(app, mutator, process);

    this.state = new StateHandler(app.id, SettingsStore, "account");
  }

  showOverlay(id: string) {
    const overlay = SettingsOverlays[id];

    if (!overlay) return false;

    spawnOverlay(overlay, this.process.pid);
  }
}
