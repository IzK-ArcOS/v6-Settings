<script lang="ts">
  import { OverlayRuntime } from "$apps/Settings/ts/overlays/runtime";
  import { PasswordIcon } from "$ts/images/general";
  import { ProcessStack } from "$ts/stores/process";
  import { UserDataStore } from "$ts/stores/user";
  import ValueChanger from "../ValueChanger.svelte";

  let background = "";
  let valid = false;

  export let runtime: OverlayRuntime;

  async function check() {
    const v = await checkImage(background);

    valid = v;
  }

  function apply() {
    $UserDataStore.acc.loginBackground = background;

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
    const current = v.acc.loginBackground;

    if (typeof current != "string" || !current.startsWith("http")) return;

    background = current;

    check();
  });
</script>

<ValueChanger
  img={valid ? background : PasswordIcon}
  {cancel}
  confirm={apply}
  disabled={!valid}
>
  <h3>Custom Login Background</h3>
  <p>Enter the URL to any image you like:</p>
  <input
    type="url"
    bind:value={background}
    placeholder="https://example.com/image.png"
    on:input={check}
  />
</ValueChanger>
