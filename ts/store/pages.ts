import Account from "$apps/Settings/Components/Page/Account.svelte";
import { AccountIcon, MemoryIcon, PasswordIcon } from "$ts/images/general";
import { States } from "$types/state";

export const SettingsStore: States = new Map([
  [
    "foo",
    {
      key: "foo",
      name: "Foo barr",
      content: Account,
      attribs: {},
      image: MemoryIcon,
    },
  ],
  [
    "account",
    {
      key: "account",
      name: "Your account",
      content: Account,
      attribs: {},
      image: AccountIcon,
    },
  ],
  [
    "bar",
    {
      key: "bar",
      name: "Barr Baz",
      content: Account,
      attribs: {},
      image: PasswordIcon,
    },
  ],
]);
