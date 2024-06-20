import { spawnApp } from "$ts/apps";
import { focusedPid } from "$ts/stores/apps/focus";
import { ProcessStack } from "$ts/stores/process";

export async function OpenSettingsPage(page: string, isolated = false) {
  const pid = ProcessStack.getAppPids("SettingsApp")[0];

  if (!pid) spawnApp("SettingsApp", 0, [page, isolated]);

  ProcessStack.dispatch.dispatchToPid<string>(pid, "change-page", page);
  focusedPid.set(pid);
}
