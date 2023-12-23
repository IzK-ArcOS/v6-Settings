<script lang="ts">
  import { onMount } from "svelte";

  export let disabled: boolean;

  let input = "";

  onMount(() => {
    disabled = true;
  });

  function update() {
    disabled = input != "I want to delete my account";
  }
</script>

<p>
  Are you sure you want to delete your ArcOS account? This will delete any and
  all user data associated with this account. These changes cannot be reverted!<br
  /><br />
  Type <code>I want to delete my account</code> to continue.
</p>
<input
  type="text"
  on:keydown={update}
  on:keyup={update}
  on:input={update}
  bind:value={input}
/>
