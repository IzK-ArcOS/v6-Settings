<script lang="ts">
  import { UserDataStore } from "$ts/stores/user";
  import { App } from "$types/app";
  import { ScopedAppData } from "$types/user";

  export let appdata: ScopedAppData;
  export let app: App;

  function toggleCollapsed() {
    appdata.collapsed = !appdata.collapsed;

    $UserDataStore.appdata[app.id] = appdata;
  }
</script>

<button class="menu-toggle material-icons-round" on:click={toggleCollapsed}>
  menu
</button>
