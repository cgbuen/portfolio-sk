<svelte:head>
  <title>About</title>
</svelte:head>

<script>
  import { PUBLIC_DISCORD_P, PUBLIC_INSTAGRAM, PUBLIC_MAILTO, PUBLIC_TWITCH, PUBLIC_YOUTUBE_V } from "$env/static/public";
  
  let bioPhoto = 'https://ph-1080.cgbuen.com/0245+04+bio.jpg'
</script>

<div>
  <h1>About</h1>
  <p>
    Hi! I&rsquo;m Chris, a software engineer, photographer, and content
    creator based in San Francisco, California. This website serves as a
    portfolio of work completed both professionally and for leisure.
  </p>
  <p>
    For any meaningful<a href="#footnote"><sup>†</sup></a> inquiries, you
    can reach me through Discord ({PUBLIC_DISCORD_P}),
    <a href={PUBLIC_INSTAGRAM}>Instagram</a> DM, or
    <a href={PUBLIC_MAILTO}>email</a>.
  </p>
  <p>
    I also stream a few different types of content on{" "}
    <a href={PUBLIC_TWITCH}>Twitch</a>, including:
  </p>
  <ul>
    <li>Custom mechanical keyboard builds</li>
    <li>Photo film scanning</li>
    <li>Splatoon gameplay</li>
    <li>Personal software projects</li>
  </ul>
  <p>
    Past broadcasts can be found <a href={PUBLIC_YOUTUBE_V}>here</a>.
  </p>
  <p id="footnote">
    <small class="footnote">
      <sup>†</sup> If you would like to contact me to advertise your SEO or
      other marketing services, you can go fuck yourself, thanks!
    </small>
  </p>
  <p>
    <img class="bio" alt={"cgbuen"} src={bioPhoto} />
  </p>
</div>

<style>
  .bio {
    display: block;
    width: 100%;
  }
  .footnote {
    margin-left: -8px;
  }
</style>
