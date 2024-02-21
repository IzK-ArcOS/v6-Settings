<script lang="ts">
  import { Runtime } from "$apps/Settings/ts/runtime";
  import { UserName } from "$ts/stores/user";

  export let runtime: Runtime;

  function changeUsername() {
    runtime.showOverlay("ChangeUsername");
  }

  function changePassword() {
    runtime.showOverlay("ChangePassword");
  }
</script>

<div class="credentials">
  <div class="credential username" data-contextmenu="account-username">
    <div>
      <p class="caption">What's your name?</p>
      <p class="value">{$UserName}</p>
    </div>
    <button class="edit material-icons-round" on:click={changeUsername}> edit </button>
  </div>
  <div class="credential password" data-contextmenu="account-password">
    <div>
      <p class="caption">Your password</p>
      <p class="value">••••••••••••••••••</p>
    </div>
    <button class="edit material-icons-round" on:click={changePassword}>edit</button>
  </div>
</div>
