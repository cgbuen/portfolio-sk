<script>
  import { getContext } from 'svelte';
  import Card from '$lib/card.svelte';
  import { PUBLIC_ASSET, PUBLIC_DISCORD_P, PUBLIC_INSTAGRAM, PUBLIC_MAILTO } from '$env/static/public';
</script>

<svelte:head>
    <title>Commissions{getContext('titleSuffix')}</title>
</svelte:head>

<div class="commissions-container">
  <h1>Commissions</h1>
  <p>A few things you can commission me for.</p>
  <Card
    name="Shoots"
    src="{PUBLIC_ASSET}/resources/shoots.jpg"
  >
    <div class="text dark:text-white text-neutral-900">
      Send me a message on Discord ({PUBLIC_DISCORD_P}) or 
      <a class="link-blank" href="{PUBLIC_INSTAGRAM}" target="_blank">Instagram</a>, or by 
      <a class="link-blank" href="{PUBLIC_MAILTO}">email</a>.
    </div>
  </Card>
  <a class="pointer" href="https://forms.gle/tefHXyEh9WsAJjBs9" target="_blank">
    <Card
      name="Film Development & Scanning"
      src="{PUBLIC_ASSET}/resources/film.jpg"
    >
      <div class="text dark:text-white text-neutral-900">
        I’ll develop and scan your photo film, ready for print or social media, starting at $3 per roll. 
        For the fastest response, fill out <span class="fake-link">this form</span>.
      </div>
    </Card>
  </a>
  <Card
    name="Keyboard Builds"
    src="{PUBLIC_ASSET}/resources/keyboards.jpg"
  >
    <div class="text dark:text-white text-neutral-900">
      Send me a message on Discord ({PUBLIC_DISCORD_P}), 
      <a class="link-blank" href="{PUBLIC_INSTAGRAM}" target="_blank">Instagram</a>, or 
      <a class="link-blank" href="{PUBLIC_MAILTO}">email</a>.
    </div>
  </Card>
</div>

<style>
  .pointer {
    cursor: pointer;
    display: block;
    text-decoration: none;
  }
  .text {
    font-weight: normal;
  }
  .fake-link {
    color: #69c;
    font-weight: bold;
    text-decoration: underline;
  }
</style>