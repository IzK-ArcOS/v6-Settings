import { spawnApp } from "$ts/apps";
import { killAllAppInstances } from "$ts/process/kill";

export async function OpenSettingsPage(page: string) {
  await killAllAppInstances("SettingsApp");
  spawnApp("SettingsApp", null, [page]);
}