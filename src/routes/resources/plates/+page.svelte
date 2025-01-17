<script>
  import { getContext } from 'svelte';
  import { page } from '$app/state';
</script>

<svelte:head>
    <title>Plates &mdash; Resources{getContext('titleSuffix')}</title>
</svelte:head>

<div class="plates-container">
  <h1>Plates</h1>
  <p>Below is a list of HHKB plate files that I have used for different keyboard build projects.</p>
  <table class="table">
    <thead>
      <tr>
        <td class="text-neutral-900 dark:text-white">Name</td>
        <td class="text-neutral-900 dark:text-white">Kerf</td>
        <td class="text-neutral-900 dark:text-white">Notes</td>
      </tr>
    </thead>
    <tbody>
      {#each page.data.plates as plate}
        <tr>
          <td><a class="link" href="{plate.src}">{plate.name}</a></td>
          <td> {plate.kerf}mm</td>
          <td>{plate.notes}</td>
        </tr>
      {/each}
    </tbody>
  </table>
</div>

<style>
</style>