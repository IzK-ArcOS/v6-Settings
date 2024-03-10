<script lang="ts">
  import { BuiltinThemes } from "$ts/stores/themes/builtins";
  import { UserDataStore } from "$ts/stores/user";
  import ThemeOption from "./ThemeSelector/ThemeOption.svelte";

  let oldlength = 0;

  let reload = false;

  UserDataStore.subscribe((v) => {
    if (!v || !v.sh || !v.sh.userThemes) return;

    const freshEntries = Object.entries(v.sh.userThemes);

    if (oldlength == freshEntries.length) return;

    oldlength = freshEntries.length;

    reload = true;

    setTimeout(() => {
      reload = false;
    });
  });
</script>

<div class="theme-selector">
  {#each Object.entries(BuiltinThemes) as [id, theme]}
    <ThemeOption {theme} {id} />
  {/each}
  {#if !reload && $UserDataStore.sh.userThemes}
    {#each Object.entries($UserDataStore.sh.userThemes) as theme}
      <ThemeOption theme={theme[1]} id={theme[0]} user />
    {/each}
  {/if}
</div>
