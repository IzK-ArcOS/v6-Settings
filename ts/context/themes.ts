import { SEP_ITEM } from "$state/Desktop/ts/store";
import { GetHelp } from "$ts/help";
import { SaveIcon, ThemesIcon, TrashIcon } from "$ts/images/general";
import { tryJsonConvert } from "$ts/json";
import { textToBlob } from "$ts/server/fs/convert";
import { writeFile } from "$ts/server/fs/file";
import { GetSaveFilePath } from "$ts/stores/apps/file";
import { HelpArticles } from "$ts/stores/articles";
import { applySystemTheme, applyUserTheme } from "$ts/themes";
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
      async action(app, data) {
        const theme = tryJsonConvert<UserTheme>(data.theme);
        const name = data.name;

        if (!theme || !name) return;

        const path = await GetSaveFilePath(app.pid, {
          title: "Save theme file to...",
          icon: ThemesIcon,
          saveName: `${name}.arctheme`,
          startDir: "./Themes",
          isSave: true,
        });

        const written = await writeFile(path, textToBlob(JSON.stringify(theme, null, 2)));

        if (written != "success") FsThemeSaveFailed(name, written);
      },
    },
    SEP_ITEM,
    {
      image: TrashIcon,
      caption: "Delete theme",
      action(window, data) {
        DeleteUserThemeConfirm(window.pid, data.id);
      },
    },
    SEP_ITEM,
    {
      icon: "question_mark",
      caption: "Get Help",
      action() {
        GetHelp(HelpArticles.settingsThemesApply);
      },
    },
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
      async action(app, data) {
        const theme = tryJsonConvert<UserTheme>(data.theme);
        const name = data.name;

        if (!theme || !name) return;

        const path = await GetSaveFilePath(app.pid, {
          title: "Save theme file to...",
          icon: ThemesIcon,
          saveName: `${name}.arctheme`,
          startDir: "./Themes",
          isSave: true,
        });

        const written = await writeFile(path, textToBlob(JSON.stringify(theme, null, 2)));

        if (written != "success") FsThemeSaveFailed(name, written);
      },
    },
    SEP_ITEM,
    {
      icon: "question_mark",
      caption: "Get Help",
      action() {
        GetHelp(HelpArticles.settingsThemesApply);
      },
    },
  ],
  "themes-accent": [
    {
      caption: "What's this?",
      icon: "question_mark",
      action() {
        GetHelp(HelpArticles.settingsThemesStyle);
      },
    },
  ],
  "themes-save": [
    {
      caption: "What's this?",
      icon: "question_mark",
      action() {
        GetHelp(HelpArticles.settingsThemesSave);
      },
    },
  ],
};
