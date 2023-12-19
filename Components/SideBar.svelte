<script lang="ts">
  import { ScopedAppData } from "$types/user";

  export let appdata: ScopedAppData;
</script>

<div class="sidebar" class:collapsed={appdata.collapsed}>Sidebarrr</div>
