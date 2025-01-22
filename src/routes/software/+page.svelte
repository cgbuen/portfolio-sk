<script lang="ts">
  import {getContext} from 'svelte'
  import {page} from '$app/state'
  import {Card} from '$lib/components'
</script>

<svelte:head>
  <title>Software{getContext('titleSuffix')}</title>
</svelte:head>

<div class="software-container">
  <h1>Software & Design Projects</h1>
  <p>
    I work as a software engineer / architect for a living, solving fun problems
    on the web. These are the projects that I&rsquo;ve worked on.
  </p>
  {#each page.data.software as project}
    <Card name={project.name} src={project.src}>
      <div class="text text-neutral-900 dark:text-white">
        {project.description}
      </div>
    </Card>
  {/each}
</div>

<style>
</style>
