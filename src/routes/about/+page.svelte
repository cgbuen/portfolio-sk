<script>
  import {
    PUBLIC_DISCORD_P,
    PUBLIC_INSTAGRAM,
    PUBLIC_MAILTO,
    PUBLIC_TWITCH,
    PUBLIC_YOUTUBE_V,
  } from '$env/static/public'

  let bioPhoto = 'https://ph-1080.cgbuen.com/0245+04+bio.jpg'
</script>

<svelte:head>
  <title>About</title>
</svelte:head>

<div>
  <h1>About</h1>
  <p>
    Hi! I&rsquo;m Chris, a software engineer, photographer, and content creator
    based in San Francisco, California. This website serves as a portfolio of
    work completed both professionally and for leisure.
  </p>
  <p>
    For any meaningful<sup id="footnote-source" class="superscript"
      >[<a href="#footnote-target">†</a>]</sup
    >
    inquiries, you can reach me through Discord ({PUBLIC_DISCORD_P}),
    <a href={PUBLIC_INSTAGRAM} target="_blank">Instagram</a> DM, or
    <a href={PUBLIC_MAILTO}>email</a>.
  </p>
  <p>
    I also stream a few different types of content on{' '}
    <a href={PUBLIC_TWITCH} target="_blank">Twitch</a>, including:
  </p>
  <ul>
    <li>Custom mechanical keyboard builds</li>
    <li>Photo film scanning</li>
    <li>Splatoon gameplay</li>
    <li>Personal software projects</li>
  </ul>
  <p>
    Past broadcasts can be found <a href={PUBLIC_YOUTUBE_V} target="_blank"
      >here</a
    >.
  </p>
  <p id="footnote-target">
    <small class="footnote">
      <sup class="superscript">[<a href="#footnote-source">†</a>]</sup> If you would
      like to contact me to advertise your SEO or other marketing services, you can
      go fuck yourself, thanks!
    </small>
  </p>
  <p>
    <img class="bio" alt={'cgbuen'} src={bioPhoto} />
  </p>
</div>

<style>
  .bio {
    display: block;
    width: 100%;
  }
  .superscript {
    font-size: 13px;
  }
  .superscript a {
    text-decoration: none;
  }
  #footnote-target {
    padding-left: 17px;
  }
  .footnote {
    margin-left: -17px;
  }
</style>
