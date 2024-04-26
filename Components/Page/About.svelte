<script lang="ts">
  import GlowingLogo from "$lib/Components/GlowingLogo.svelte";
  import { ArcOSVersion } from "$ts/env";
  import { GetHelp } from "$ts/help";
  import { ARCOS_BUILD, ARCOS_MODE } from "$ts/metadata";
  import { getPartialFile } from "$ts/server/fs/file";
  import { openFileWithApp } from "$ts/server/fs/open";
  import { HelpArticles } from "$ts/stores/articles";

  function contact() {
    GetHelp(HelpArticles.contact);
  }

  async function license() {
    const partial = await getPartialFile("@client/LICENSE.md");
    openFileWithApp("MarkDownViewer", partial);
  }
</script>

<GlowingLogo className="logo" />
<h1>ArcOS <span class="colored">v6</span></h1>
<p>
  Thank you for using ArcOS! We're constantly working on improving it to give you the best
  experience possible. Curious who works on ArcOS? Go ahead and visit our Frontend GitHub page, we
  list our contributors there.
  <br /><br />
  Want to contact us?
  <button class="link" on:click={contact}>Do so here</button>.
</p>
<p class="version">
  v{ArcOSVersion}-{ARCOS_MODE}
  {ARCOS_BUILD} - <button class="link" on:click={license}>License</button>
</p>
