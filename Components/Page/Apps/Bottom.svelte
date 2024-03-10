<script lang="ts">
  import { appLibrary } from "$ts/stores/apps";
  import { UserDataStore } from "$ts/stores/user";
</script>

<div class="bottom">
  <p class="app-count">
    {$appLibrary.size} loaded applications
  </p>
  <div class="right">
    <p>Show hidden applications</p>
    <input type="checkbox" bind:checked={$UserDataStore.sh.showHiddenApps} />
  </div>
</div>
