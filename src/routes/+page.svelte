<script>
  import { getContext } from "svelte";
  let items = [
    { name: 'Projects', href: '/projects' },
    { name: 'Photos', href: '/photography' },
    { name: 'Keyboards', href: '/collection' },
  ];
</script>

<svelte:head>
  <title>Home{getContext('titleSuffix')}</title>
</svelte:head>

<div class="hero-container">
  <div class="hero-text-container">
    <h1 class="headline">cgbuen</h1>
    <div class="headline cheat">cgbuen</div>
    <div class="hero-subtext-container">
      <a class="hero-link" href="/projects">Software Engineering</a>
      <a class="hero-link" href="/photography">Concert Photography</a>
      <a class="hero-link" href="/collection">Keyboard Building</a>
    </div>
    <section class="heroBox"></section>
  </div>
  <section class="homeOutside"></section>
</div>
<div class="items">
  {#each items as item, i}
    <div class="item">
      <a class="item-link {item.name.toLowerCase()}" href={item.href} aria-label={item.name}></a>
      <span class="item-text">{item.name}</span>
    </div>
  {/each}
</div>

<style>
  .hero-container {
    background-image: url('https://ph-1080.cgbuen.com/hero-1.jpg');
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    height: 1228px;
    position: relative;
  }
  @media (max-width: 1920px) {
    .hero-container {
      height: auto;
      padding: 32%;
    }
  }
  @media (max-width: 1080px) {
    .hero-container {
      height: 689px;
      padding: 0;
    }
  }
  .hero-text-container {
    background: rgba(128, 128, 128, 0.5);
    border-radius: 3px;
    font-weight: bold;
    left: 57%;
    line-height: 2;
    overflow: hidden;
    padding: 20px;
    position: absolute;
    top: 45%;
    transform: translateY(-60%);
  }
  @media (max-width: 1080px) {
    .hero-text-container {
      top: 58%;
    }
  }
  @media (max-width: 768px) {
    .hero-text-container {
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
    }
  }
  .headline {
    color: white;
    font-size: 72px;
    line-height: 1;
    margin: 0;
    text-decoration: underline;
    text-decoration-color: #69c;
  }
  .headline.cheat {
    position: absolute;
    text-decoration: none;
    text-shadow: 1px 1px 1px rgba(128, 128, 128, 0.5);
    top: 20px;
  }
  .hero-subtext-container {
    font-size: 20px;
    padding-top: 15px;
  }
  .hero-link {
    color: white;
    cursor: pointer;
    display: block;
    text-decoration: none;
  }
  .items {
    align-items: center;
    display: flex;
    margin: 0 auto;
    max-width: 960px;
    padding: 0 15px;
  }
  @media (max-width: 568px) {
    .items {
      display: block;
    }
  }
  .item {
    flex: 1;
    margin: 15px;
    position: relative;
  }
  .item-link {
    background-position: center;
    background-repeat: no-repeat;
    cursor: pointer;
    display: block;
    height: 500px;
  }
  @media (max-width: 568px) {
    .item-link {
      height: 240px;
    }
  }
  .item-link.projects {
    background-image: url('https://ph-1080.cgbuen.com/projects/moovweb-geico-01.jpg');
    background-position: 2% 72%;
  }
  @media (max-width: 568px) {
    .item-link.projects {
      background-size: cover;
      background-position: center;
    }
  }
  .item-link.photos {
    background-image: url('https://ph-1080.cgbuen.com/concerts/0135%2026.jpg');
    background-position: center 75%;
  }
  @media (max-width: 568px) {
    .item-link.photos {
      background-position: center 60%;
    }
  }
  .item-link.keyboards {
    background-image: url('https://ph-1080.cgbuen.com/keyboards/ai03-polaris.jpg');
  }
  .item-text {
    background: #69c;
    color: white;
    display: inline-block;
    font-weight: bold;
    left: 50%;
    min-width: 120px;
    padding: 10px;
    pointer-events: none;
    position: absolute;
    text-align: center;
    top: 50%;
    transform: translate(-50%, -50%);
  }
</style>
