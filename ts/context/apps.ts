import { SEP_ITEM } from "$state/Desktop/ts/store";
import { UserDataStore } from "$ts/stores/user";
import { AppKeyCombinations } from "$types/accelerator";
import { AppContextMenu } from "$types/app";

export const SettingsAppsContext: AppContextMenu = {
  "apps-grid": [
    {
      caption: "View",
      icon: "visibility",
      subItems: [{
        caption: "Grid",
        icon: "grid_view"
      }, {
        caption: "List",
        icon: "details"
      }]
    },
    {
      caption: "Show hidden apps",
      icon: "hide_source",
      action(window, data, scope) {
        const udata = UserDataStore.get();

        udata.sh.showHiddenApps = !udata.sh.showHiddenApps;

        UserDataStore.set(udata);
      },
      isActive: () => UserDataStore.get().sh.showHiddenApps
    },
  ]
}