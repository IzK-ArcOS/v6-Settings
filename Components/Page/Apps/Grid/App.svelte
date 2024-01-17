<script lang="ts">
  import { Runtime } from "$apps/Settings/ts/runtime";
  import { AppsViewMode } from "$apps/Settings/ts/types";
  import { isPopulatable } from "$ts/apps";
  import { isDisabled } from "$ts/apps/disable/utils";
  import { UserDataStore } from "$ts/stores/user";
  import { App } from "$types/app";

  export let id: string;
  export let app: App;
  export let runtime: Runtime;
  export let view: AppsViewMode;

  let render = true;
  let disabled = false;

  UserDataStore.subscribe(() => {
    render = isPopulatable(app);
    disabled = isDisabled(id);
  });

  function showDetails() {
    runtime.showOverlay("AppInfo", [id]);
  }
</script>

{#if (view == "all" || (view == "builtin" && !app.sideload) || (view == "sideloaded" && app.sideload)) && render}
  <button class="app" on:click={showDetails} class:disabled>
    <img src={app.metadata.icon} alt={id} />
    <div>
      <p class="name">{app.metadata.name}</p>
      <p class="author">{app.metadata.author}</p>
    </div>
  </button>
{/if}
