<script lang="ts">
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
          <td>
            <code>{command.command}</code>
          </td>
          <td>
            {#each command.aliases.split(', ') as alias, i}
              {#if alias.startsWith('!')}
                <code>{alias}</code>
                {' '}
              {:else}
                {alias}
              {/if}
            {/each}
          </td>
          <td>
            {#each command.description.split(/(!.*?)(\W|$)/) as part}
              {#if part.startsWith('!')}
                <code>{part}</code>
              {:else if part.startsWith('Link to') && command.href.startsWith('/')}
                <a href={command.href}>Link</a> to {part.split('Link to')[1]}
              {:else if part.startsWith('Link to')}
                <a href={command.href} target="_blank">Link</a> to {part.split('Link to')[1]}
              {:else}
                {part}
              {/if}
            {/each}
          </td>
        </tr>
      {/each}
    </tbody>
  </table>
</div>

<style>
  td:nth-child(2) {
    width: 30%;
  }
  code {
    background: rgba(128, 128, 128, .2);
    border-radius: 5px;
    display: inline-block;
    font-size: 13px; 
    padding: 5px;
    margin: 2px;
  }
</style>