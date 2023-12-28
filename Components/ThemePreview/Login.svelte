<script>
  import ProfilePicture from "$lib/Components/ProfilePicture.svelte";
  import { UserName } from "$ts/stores/user";
</script>

<div class="fake-login">
  <ProfilePicture height={40} />
  <p class="name">{$UserName}</p>
</div>
