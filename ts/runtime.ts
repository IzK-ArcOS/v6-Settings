import { AppRuntime } from "$ts/apps/runtime";
import { spawnOverlay } from "$ts/apps/spawn";
import { Process } from "$ts/process";
import { StateHandler } from "$ts/states";
import { Store } from "$ts/writable";
import type { App, AppMutator } from "$types/app";
import { LogLevel } from "$types/console";
import { OpenSettingsPage } from "./main";
import { SettingsStore } from "./store";
import { SettingsOverlays } from "./store/overlays";

export class Runtime extends AppRuntime {
  public state: StateHandler;
  public isolated = Store<boolean>(false);

  constructor(app: App, mutator: AppMutator, process: Process) {
    super(app, mutator, process);

    this.state = new StateHandler(app.id, SettingsStore(), "account");

    process.handler.dispatch.subscribe<string>(process.pid, "change-page", (page) => {
      this.state.navigate(page);
      this.isolated.set(false);
    });

    const args = process.args;

    if (!args.length || typeof args[0] != "string") return;

    this.state.navigate(args[0]);
    this.isolated.set(!!args[1]);
  }

  showOverlay(id: string, args: any[] = []) {
    this.Log(`Showing overlay ${id} (${args.length} arguments)`, "showOverlay");

    const overlay = SettingsOverlays[id];

    if (!overlay) {
      this.Log(
        `Can't show non-existent overlay ${id}. This is a bug.`,
        "showOverlay",
        LogLevel.error
      );
      return false;
    }

    spawnOverlay(overlay, this.process.pid, args);

    return true;
  }
}
