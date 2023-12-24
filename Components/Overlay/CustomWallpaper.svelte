<script lang="ts">
  import { OverlayRuntime } from "$apps/Settings/ts/overlays/runtime";
  import { DesktopIcon } from "$ts/images/general";
  import { ProfilePictures } from "$ts/stores/pfp";
  import { ProcessStack } from "$ts/stores/process";
  import { UserDataStore } from "$ts/stores/user";
  import ValueChanger from "../ValueChanger.svelte";

  let wallpaper = "";
  let valid = false;

  export let runtime: OverlayRuntime;

  async function check() {
    const v = await checkImage(wallpaper);

    valid = v;
  }

  function apply() {
    $UserDataStore.sh.desktop.wallpaper = wallpaper;

    cancel();
  }

  function cancel() {
    ProcessStack.kill(runtime.pid);
  }

  async function checkImage(url): Promise<boolean> {
    const img = new Image();

    img.src = url;

    return new Promise((resolve) => {
      img.onload = () => resolve(true);
      img.onerror = () => resolve(false);
    });
  }

  UserDataStore.subscribe((v) => {
    const current = v.sh.desktop.wallpaper;

    if (typeof current != "string" || !current.startsWith("http")) return;

    wallpaper = current;

    check();
  });
</script>

<ValueChanger
  img={valid ? wallpaper : DesktopIcon}
  {cancel}
  confirm={apply}
  disabled={!valid}
>
  <h3>Custom Wallpaper</h3>
  <p>Enter the URL to any wallpaper you like:</p>
  <input
    type="url"
    bind:value={wallpaper}
    placeholder="https://example.com/image.png"
    on:input={check}
  />
</ValueChanger>
