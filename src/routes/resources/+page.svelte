<script>
  import {getContext} from 'svelte'
  import {Card} from '$lib'
  import {page} from '$app/state'
</script>

<svelte:head>
  <title>Resources{getContext('titleSuffix')}</title>
</svelte:head>

<div class="resources-container">
  <h1>Resources</h1>
  <p>
    Below is a list of other resources that don&rsquo;t fall under any of the
    other categories on this site. Some are not mine, but are just added here
    for my own personal reference.
  </p>
  {#each page.data.links as link}
    <a
      class="card-link"
      href={link.href}
      target={link.href.startsWith('/') ? '_self' : '_blank'}
    >
      <Card
        name="{link.name} {link.author_name !== 'N/A'
          ? `(by ${link.author_name})`
          : ''}"
        src={link.src}
      >
        <div class="text text-neutral-900 dark:text-white">
          {link.description}
        </div>
      </Card>
    </a>
  {/each}
</div>

<style>
  .card-link {
    text-decoration: none;
  }
  .text {
    font-weight: normal;
  }
</style>
