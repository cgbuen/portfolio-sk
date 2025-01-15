<script>
  import { getContext } from 'svelte';
  import Card from '$lib/card.svelte';
  import { PUBLIC_ASSET, PUBLIC_DISCORD_P, PUBLIC_INSTAGRAM, PUBLIC_EMAIL } from '$env/static/public';
</script>

<svelte:head>
    <title>Commissions{getContext('titleSuffix')}</title>
</svelte:head>

<div class="commissions-container">
  <h1>Commissions</h1>
  <p>A few things you can commission me for.</p>
  <Card
    classes={{ cardTitle: 'cardTitle' }}
    name="Shoots"
    src={`${PUBLIC_ASSET}/resources/shoots.jpg`}
  >
      <div class="text">
        Send me a message on Discord ({PUBLIC_DISCORD_P}) or 
        <a class="link-blank" href="{PUBLIC_INSTAGRAM}" target="_blank">Instagram</a>, or by 
        <a class="link-blank" href="mailto:{PUBLIC_EMAIL}">email</a>.
      </div>
  </Card>
  <a class="pointer" href="https://forms.gle/tefHXyEh9WsAJjBs9" target="_blank">
    <Card
      classes={{ cardTitle: 'cardTitle' }}
      name="Film Development & Scanning"
      src={`${PUBLIC_ASSET}/resources/film.jpg`}
    >
        <div class="text">
          I’ll develop and scan your photo film, ready for print or social media, starting at $3 per roll. 
          For the fastest response, fill out <span class="fake-link">this form</span>.
        </div>
    </Card>
  </a>
  <Card
    classes={{ cardTitle: 'cardTitle' }}
    name="Keyboard Builds"
    src={`${PUBLIC_ASSET}/resources/keyboards.jpg`}
  >
      <div class="text">
        Send me a message on Discord ({PUBLIC_DISCORD_P}), 
        <a class="link-blank" href="{PUBLIC_INSTAGRAM}" target="_blank">Instagram</a>, or 
        <a class="link-blank" href="mailto:{PUBLIC_EMAIL}">email</a>.
      </div>
  </Card>
</div>

<style>
  .commissions-container .cardTitle {
    color: white;
  }
  .pointer {
    cursor: pointer;
    display: block;
  }
  .light-mode .commissions-container .cardTitle {
    color: #151515;
  }
  .text {
    color: white;
    font-weight: normal;
  }
  .light-mode .text {
    color: #151515;
  }
  .link-blank-container {
    text-decoration: none;
  }
  .fake-link {
    color: #69c;
    font-weight: bold;
    text-decoration: underline;
  }
</style>