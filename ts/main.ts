import { spawnApp } from "$ts/apps";
import { focusedPid } from "$ts/stores/apps/focus";
import { ProcessStack } from "$ts/stores/process";

export async function OpenSettingsPage(page: string) {
  const pid = ProcessStack.getAppPids("SettingsApp")[0];

  if (!pid) spawnApp("SettingsApp", 0, [page]);

  ProcessStack.dispatch.dispatchToPid<string>(pid, "change-page", page);
  focusedPid.set(pid);
}
