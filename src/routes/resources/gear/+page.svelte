<script lang="ts">
  import { getContext } from 'svelte';
  import { page } from '$app/state';
  
  interface Desc {
    id: string
    name: string
    description: string
  }
  
  interface Piece {
    id: string
    name: string
    kind: string
    active: string
    url: string
    notes: string
  }

  const sections = [
    'Stream Video',
    'Stream Audio',
    'Lighting',
    'Soldering',
    'Film Development',
    'Film Scanning',
    'Nintendo Switch',
  ]
  const gear = page.data.gear.gear
  const gearDescriptions = page.data.gear.gearDescriptions
  const getParagraphs = (section: string) => {
    return (gearDescriptions.find((desc: Desc) => desc.name === section) || {description: ''}).description.split('\n\n')
  }
  const getGearSection = (section: string) => {
    return gear.filter((piece: Piece) => piece.active && piece.kind === section)
  }
</script>

<svelte:head>
    <title>Gear &mdash; Resources{getContext('titleSuffix')}</title>
</svelte:head>

<div class="gear-container">
  <h1>Gear</h1>
  <p>A list of gear that I recommend.</p>
  {#each sections as section}
    <h2>{section}</h2>
    <div>
      {#each (getParagraphs(section)) as paragraph}
        <p>{paragraph}</p>
      {/each}
      <table class="table">
        <thead>
          <tr>
            <td>Item</td>
            <td>Notes</td>
          </tr>
        </thead>
        <tbody>
          {#each (getGearSection(section)) as piece}
            <tr>
              <td class="item-name"><a class="link" href="{piece.url}">{piece.name}</a></td>
              <td>{piece.notes}</td>
            </tr>
          {/each}
        </tbody>
      </table>
    </div>
  {/each}
</div>

<style>
  .table {
    border-bottom: 1px solid white;
    margin-bottom: 50px;
  }
  .table thead {
    border-bottom: 0;
  }
  .table tr:last-child td {
    padding-bottom: 30px;
  }
  .item-name:first-child {
    white-space: initial;
    width: 30%;
  }
</style>