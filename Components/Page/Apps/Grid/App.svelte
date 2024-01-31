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

{#if (view == "all" || (view == "user" && !app.metadata.hidden) || (view == "system" && app.metadata.hidden)) && render}
  <button class="app" on:click={showDetails} class:disabled>
    <img src={app.metadata.icon} alt={id} />
    <div>
      <p class="name" title={app.metadata.name}>{app.metadata.name}</p>
      <p class="author" title={app.metadata.description}>
        {app.metadata.description} - v{app.metadata.version}
      </p>
    </div>
  </button>
{/if}
