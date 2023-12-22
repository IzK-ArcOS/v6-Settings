<script lang="ts">
  import { Runtime } from "$apps/Settings/ts/runtime";
  import Credentials from "./Account/Credentials.svelte";
  import Profile from "./Account/Profile.svelte";

  export let runtime: Runtime;
</script>

<Profile />
<Credentials {runtime} />
<button class="delete">Delete account...</button>
