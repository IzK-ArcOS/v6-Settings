import { WarningIcon } from "$ts/images/dialog";
import { TrashIcon } from "$ts/images/general";
import { sendNotification } from "$ts/notif";
import { createErrorDialog } from "$ts/process/error";
import { WriteFileReturnCaptions } from "$ts/stores/filesystem/captions";
import { deleteCustomTheme } from "$ts/themes";
import { WriteFileReturnValue } from "$types/fs";

/**
 * Tells the user that their theme couldn't be saved
 * @param name The theme name
 */
export function FsThemeSaveFailed(name: string, status: WriteFileReturnValue) {
  sendNotification({
    title: "Couldn't save theme",
    message: `Failed to save ${name} to ArcFS: ${WriteFileReturnCaptions[status]}`,
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
