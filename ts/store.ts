import { States } from "$types/state";
import Account from "../Components/Page/Account.svelte";

export const SettingsStore: States = new Map([
  [
    "account",
    {
      key: "account",
      name: "You",
      content: Account,
      attribs: {},
    },
  ],
]);
