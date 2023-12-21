import About from "$apps/Settings/Components/Page/About.svelte";
import Account from "$apps/Settings/Components/Page/Account.svelte";
import Apps from "$apps/Settings/Components/Page/Apps.svelte";
import Login from "$apps/Settings/Components/Page/Login.svelte";
import Shell from "$apps/Settings/Components/Page/Shell.svelte";
import Themes from "$apps/Settings/Components/Page/Themes.svelte";
import Visuals from "$apps/Settings/Components/Page/Visuals.svelte";
import Wallpaper from "$apps/Settings/Components/Page/Wallpaper.svelte";
import Windows from "$apps/Settings/Components/Page/Windows.svelte";
import { Logo } from "$ts/branding";
import { AccountIcon, AppsIcon, DesktopIcon, PasswordIcon, PersonalizationIcon, TaskbarIcon, ThemesIcon, WindowSettingsIcon } from "$ts/images/general";
import { States } from "$types/state";

export const SettingsStore: States = new Map([
  [
    "account",
    {
      key: "account",
      name: "Your Account",
      content: Account,
      attribs: {
        hidden: true
      },
      image: AccountIcon,
    },
  ],
  [
    "themes",
    {
      key: "themes",
      name: "Themes",
      content: Themes,
      attribs: {},
      image: ThemesIcon
    }
  ],
  [
    "wallpaper",
    {
      key: "wallpaper",
      name: "Wallpaper",
      content: Wallpaper,
      attribs: {},
      image: DesktopIcon
    }
  ],
  [
    "login",
    {
      key: "login",
      name: "Login Background",
      content: Login,
      attribs: {},
      image: PasswordIcon
    }
  ],
  [
    "visuals",
    {
      key: "visuals",
      name: "Visuals",
      content: Visuals,
      attribs: { separator: true },
      image: PersonalizationIcon
    }
  ],
  [
    "shell",
    {
      key: "shell",
      name: "Shell",
      content: Shell,
      attribs: {},
      image: TaskbarIcon,
    }
  ],
  [
    "windows",
    {
      key: "windows",
      name: "Windows",
      content: Windows,
      attribs: {},
      image: WindowSettingsIcon
    }
  ],
  [
    "apps",
    {
      key: "apps",
      name: "Apps",
      content: Apps,
      attribs: { separator: true },
      image: AppsIcon
    }
  ],
  [
    "about",
    {
      key: "about",
      name: "About ArcOS",
      content: About,
      attribs: {},
      image: Logo()
    }
  ]
]);
