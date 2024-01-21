<script lang="ts">
  import { Runtime } from "$apps/Settings/ts/runtime";
  import { QuestionIcon } from "$ts/images/dialog";
  import { createErrorDialog } from "$ts/process/error";
  import { UserDataStore } from "$ts/stores/user";
  import { getWallpaper } from "$ts/wallpaper";
  import { Wallpaper } from "$types/wallpaper";
  import ThemePreview from "../../ThemePreview.svelte";
  import Login from "../../ThemePreview/Login.svelte";

  export let runtime: Runtime;
  let wallpaper: Wallpaper;

  UserDataStore.subscribe(async (v) => {
    wallpaper = await getWallpaper(v.acc.loginBackground, "img15");
  });

  function custom() {
    runtime.showOverlay("CustomLoginBackground");
  }

  function reset() {
    createErrorDialog(
      {
        title: "Reset login background?",
        message:
          "Are you sure you want to reset the login background? This will turn the login back to the factory default wallpaper.",
        buttons: [
          { caption: "No", action() {} },
          {
            caption: "Yes",
            action() {
              $UserDataStore.acc.loginBackground = null;
            },
            suggested: true,
          },
        ],
        image: QuestionIcon,
        sound: "arcos.dialog.warning",
      },
      runtime.pid,
      true
    );
  }
</script>

{#if wallpaper}
  <div class="theme-overview">
    <ThemePreview isLogin><Login /></ThemePreview>
    <div class="common">
      <div class="common-option">
        <div class="text">
          <p class="name">Name</p>
          <p class="value">{wallpaper.name}</p>
        </div>
      </div>
      <div class="common-option">
        <div class="text">
          <p class="name">Author</p>
          <p class="value">{wallpaper.author}</p>
        </div>
      </div>
      <div class="buttons">
        <button
          class="button material-icons-round"
          title="Login Background from URL"
          on:click={custom}
        >
          travel_explore
        </button>
        <button
          class="button material-icons-round"
          title="Use the default wallpaper"
          on:click={reset}
        >
          restart_alt
        </button>
      </div>
    </div>
  </div>
{/if}
