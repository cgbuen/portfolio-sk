<script>
  import {PUBLIC_TWITCH, PUBLIC_INSTAGRAM, PUBLIC_YOUTUBE_V, PUBLIC_GITHUB, PUBLIC_DISCORD_S, PUBLIC_TWITTER} from '$env/static/public'
  import Twitch from 'virtual:icons/mdi/twitch'
  import Instagram from 'virtual:icons/mdi/instagram'
  import YouTube from 'virtual:icons/mdi/youtube'
  import GitHub from 'virtual:icons/mdi/github'
  import Discord from 'virtual:icons/mdi/discord'
  import Twitter from 'virtual:icons/mdi/twitter'
  import Mail from 'virtual:icons/mdi/email'

  export let type;

  const allIcons = [
    { name: 'twitch', icon: Twitch, href: PUBLIC_TWITCH },
    { name: 'instagram', icon: Instagram, href: PUBLIC_INSTAGRAM },
    { name: 'youtubeM', icon: YouTube, href: PUBLIC_YOUTUBE_V },
    { name: 'github', icon: GitHub, href: PUBLIC_GITHUB },
    { name: 'discordS', icon: Discord, href: PUBLIC_DISCORD_S },
    { name: 'twitter', icon: Twitter, href: PUBLIC_TWITTER },
  ];

  const inHero = ['heroBox', 'homeOutside'].includes(type);
  const iconsLine1 = allIcons.slice(0, inHero ? 3 : 4);
  const iconsLine2 = allIcons.slice(inHero ? 3 : 4);
</script>

<div class="social-container {type}">
  <div class="line">
    {#each iconsLine1 as x, i}
      <a class="link-blank-icon" href={x.href}>
        <x.icon />
      </a>
    {/each}
    {#each iconsLine2 as x, i}
      <a class="link-blank-icon" href={x.href}>
        <x.icon />
      </a>
    {/each}
  </div>
</div>

<style>
  .line {
    display: inline-block;
  }
  @media (max-width: 1080px), (min-width: 1920px) {
    .line {
      display: block;
    }
  }
  .link-blank-icon {
    color: white;
    display: inline-block;
    height: 48px;
    margin: 0 8px;
    padding: 5px;
    vertical-align: middle;
    width: 48px;
  }
  @media (min-width: 1920px) {
    .link-blank-icon {
      display: block;
      margin: 8px;
    }
  }
  .social-container {
    bottom: 15%;
    position: absolute;
    right: 15%;
  }
  @media (max-width: 1080px) {
    .social-container {
      display: none;
    }
  }
  .heroBox {
    display: none;
    margin-top: 15px;
    position: static;
    text-align: center;
  }
  @media (max-width: 1080px) {
    .heroBox {
      display: block;
    }
  }
  .footer {
    position: static;
  }
  @media (max-width: 1080px) {
    .footer {
      display: block;
    }
  }
  .footer .line {
    @media (max-width: 1080px), (min-width: 1920px) {
      display: inline-block;
    }
  }
  .footer .link-blank-icon {
    height: 32px;
    width: 32px;
  }
  @media (max-width: 1080px), (min-width: 1920px) {
    .footer .link-blank-icon {
      display: inline-block;
    }
  }
  .light-mode .footer .icon {
    fill: #151515;
    filter: none;
  }
</style>