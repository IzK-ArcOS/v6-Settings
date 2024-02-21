import { WarningIcon } from "$ts/images/dialog";
import { TrashIcon } from "$ts/images/general";
import { sendNotification } from "$ts/notif";
import { createErrorDialog } from "$ts/process/error";
import { deleteCustomTheme } from "$ts/themes";

/**
 * Tells the user that their theme couldn't be saved
 * @param name The theme name
 */
export function FsThemeSaveFailed(name: string) {
  sendNotification({
    title: "Couldn't save theme",
    message: `An error occured while saving ${name} to ArcFS. The file might already exist.`,
    image: WarningIcon,
  });
}

/**
 * Asks the user if they want to delete the specified theme
 * @param pid the originating process
 * @param id the ID of the custom theme
 */
export function DeleteUserThemeConfirm(pid: number, id: string) {
  createErrorDialog(
    {
      title: "Delete theme?",
      message: "Are you sure you want to delete this theme? This cannot be undone.",
      image: TrashIcon,
      buttons: [
        {
          caption: "Cancel",
          action() {},
        },
        {
          caption: "Delete Theme",
          action() {
            deleteCustomTheme(id);
          },
          suggested: true,
        },
      ],
      sound: "arcos.dialog.warning",
    },
    pid,
    true
  );
}
