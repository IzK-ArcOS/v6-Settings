import { SEP_ITEM } from "$state/Desktop/ts/store";
import { SaveIcon, ThemesIcon, TrashIcon } from "$ts/images/general";
import { tryJsonConvert } from "$ts/json";
import { applySystemTheme, applyUserTheme, saveThemeToFilesystem } from "$ts/themes";
import { AppContextMenu } from "$types/app";
import { UserTheme } from "$types/theme";
import { DeleteUserThemeConfirm, FsThemeSaveFailed } from "../notif";

export const ThemeContext: AppContextMenu = {
  "user-theme": [
    {
      image: ThemesIcon,
      caption: "Apply theme",
      action(_, data) {
        applyUserTheme(data.id);
      },
    },
    {
      image: SaveIcon,
      caption: "Save to ArcFS",
      async action(_, data) {
        const theme = tryJsonConvert<UserTheme>(data.theme);
        const name = data.name

        if (!theme || !name) return;

        const written = await saveThemeToFilesystem(theme, name);

        if (!written) FsThemeSaveFailed(name)
      }
    },
    SEP_ITEM,
    {
      image: TrashIcon,
      caption: "Delete theme",
      action(window, data) {
        DeleteUserThemeConfirm(window.pid, data.id);
      },
    }
  ],
  "system-theme": [
    {
      image: ThemesIcon,
      caption: "Apply built-in theme",
      action(_, data) {
        applySystemTheme(data.id);
      },
    },
    {
      image: SaveIcon,
      caption: "Save to ArcFS",
      async action(_, data) {
        const theme = tryJsonConvert<UserTheme>(data.theme);
        const name = data.name

        if (!theme || !name) return;

        const written = await saveThemeToFilesystem(theme, name);

        if (!written) FsThemeSaveFailed(name)
      }
    },
  ]
}