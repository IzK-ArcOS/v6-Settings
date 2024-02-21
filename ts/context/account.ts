import { GetHelp } from "$ts/help";
import { HelpArticles } from "$ts/stores/articles";
import { AppContextMenu } from "$types/app";

export const SettingsAccountContext: AppContextMenu = {
  "account-pfp": [
    {
      caption: "What's this?",
      icon: "question_mark",
      action() {
        GetHelp(HelpArticles.settingsAccountProfile);
      },
    },
  ],
  "account-username": [
    {
      caption: "What's this?",
      icon: "question_mark",
      action() {
        GetHelp(HelpArticles.settingsAccountCredentials);
      },
    },
  ],
  "account-password": [
    {
      caption: "What's this?",
      icon: "question_mark",
      action() {
        GetHelp(HelpArticles.settingsAccountCredentials);
      },
    },
  ],
  "account-delete": [
    {
      caption: "What's this?",
      icon: "question_mark",
      action() {
        GetHelp(HelpArticles.settingsAccountDelete);
      },
    },
  ],
};
