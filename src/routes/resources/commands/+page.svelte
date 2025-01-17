<script>
  import { getContext } from 'svelte';
  import { page } from '$app/state';
</script>

<svelte:head>
    <title>Commands &mdash; Resources{getContext('titleSuffix')}</title>
</svelte:head>

<div class="commands-container">
  <h1>Chatbot Commands</h1>
  <p>A list of commands that can be used for my Twitch channel chat.</p>
  <table class="table">
    <thead>
      <tr>
        <td>Command</td>
        <td>Aliases</td>
        <td>Description</td>
      </tr>
    </thead>
    <tbody>
      {#each page.data.commands as command}
        <tr>
          <td>{command.command}</td>
          <td> {command.aliases}</td>
          <td>{command.description}</td>
        </tr>
      {/each}
    </tbody>
  </table>
</div>

<style>
</style>