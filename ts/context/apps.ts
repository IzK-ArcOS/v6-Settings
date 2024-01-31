import { UserDataStore } from "$ts/stores/user";
import { AppContextMenu } from "$types/app";

export const SettingsAppsContext: AppContextMenu = {
  "apps-grid": [
    {
      caption: "View",
      icon: "visibility",
      subItems: [
        {
          caption: "Grid",
          icon: "grid_view",
          action() {
            const udata = UserDataStore.get();

            udata.appdata["SettingsApp"].list = false;

            UserDataStore.set(udata);
          },
          isActive: () => !UserDataStore.get().appdata["SettingsApp"].list
        },
        {
          caption: "List",
          icon: "details",
          action() {
            const udata = UserDataStore.get();

            udata.appdata["SettingsApp"].list = true;

            UserDataStore.set(udata);
          },
          isActive: () => !!UserDataStore.get().appdata["SettingsApp"].list
        }
      ]
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