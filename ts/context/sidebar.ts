import { AppContextMenu } from "$types/app";

export const SettingsSideBarContext: AppContextMenu = {
  "sidebar-page": [
    {
      caption: "Copy command to page",
      action(window, data, scope) {
        const command = `open ${window.id} ["${data.id}"]`;
        navigator.clipboard.writeText(command)
      },
      icon: "copy"
    }
  ]
}