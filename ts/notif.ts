import { WarningIcon } from "$ts/images/dialog";
import { TrashIcon } from "$ts/images/general";
import { sendNotification } from "$ts/notif";
import { createErrorDialog } from "$ts/process/error";
import { deleteCustomTheme } from "$ts/themes";

export function FsThemeSaveFailed(name: string) {
  sendNotification({
    title: "Couldn't save theme",
    message: `An error occured while saving ${name} to ArcFS. The file might already exist.`,
    image: WarningIcon
  })
}

export function DeleteUserThemeConfirm(pid: number, id: string) {
  createErrorDialog({
    title: "Delete theme?",
    message: "Are you sure you want to delete this theme? This cannot be undone.",
    image: TrashIcon,
    buttons: [
      {
        caption: "Cancel",
        action() { },
      }, {
        caption: "Delete Theme",
        action() {
          deleteCustomTheme(id);
        },
        suggested: true
      }],
    sound: "arcos.dialog.warning"
  }, pid, true)
}