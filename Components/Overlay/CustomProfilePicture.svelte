<script lang="ts">
  import { OverlayRuntime } from "$apps/Settings/ts/overlays/runtime";
  import { ProfilePictures, applyCustomPfp } from "$ts/stores/pfp";
  import { ProcessStack } from "$ts/stores/process";
  import { UserDataStore } from "$ts/stores/user";
  import ValueChanger from "../ValueChanger.svelte";
  let img = "";
  let valid = false;

  export let runtime: OverlayRuntime;

  async function check() {
    const v = await checkImage(img);

    valid = v;
  }

  function apply() {
    applyCustomPfp(img);

    ProcessStack.kill(runtime.pid, true);
  }

  function cancel() {
    ProcessStack.kill(runtime.pid, true);
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
    if (typeof v.acc.profilePicture == "string") img = v.acc.profilePicture;

    check();
  });
</script>

<ValueChanger
  img={valid ? img : ProfilePictures.def}
  {cancel}
  confirm={apply}
  disabled={!valid}
>
  <h3>Custom Profile Picture</h3>
  <p>Enter the URL to any image you like:</p>
  <input
    type="url"
    bind:value={img}
    placeholder="https://example.com/image.png"
    on:input={check}
  />
</ValueChanger>
