<script lang="ts">
  import { getContext } from 'svelte';
  import { page } from '$app/state';
  
  interface Piece {
    id: string
    name: string
    kind: string
    active: string
    url: string
    notes: string
  }

  interface Desc {
    id: string
    name: string
    description: string
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
  const getGearSection = (section: string) => {
    return gear.filter((piece: Piece) => piece.active && piece.kind === section)
  }
  const getParagraphs = (section: string) => {
    return (gearDescriptions.find((desc: Desc) => desc.name === section) || {description: ''}).description.split('\n\n')
  }
</script>

<svelte:head>
    <title>Gear &mdash; Resources{getContext('titleSuffix')}</title>
</svelte:head>

<div class="gear-container">
  <h1>Gear</h1>
  <p>A list of gear that I recommend.</p>
  {#each sections as section, i}
    <div class="collapse collapse-arrow">
      <input type="checkbox" />
      <div class="collapse-title"><h2>{section}</h2></div>
      <div class="collapse-content">
        {#each (getParagraphs(section)) as paragraph}
          <p>{paragraph}</p>
        {/each}
        <div class="table-wrapper">
          <table class="table">
            <thead>
              <tr>
                <td class="text-neutral-900 dark:text-white">Item</td>
                <td class="text-neutral-900 dark:text-white">Notes</td>
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
      </div>
    </div>
  {/each}
</div>

<style>
  .collapse {
    border-radius: 0;
    border-bottom: 1px solid white;
  }
  .collapse-title, .collapse-content {
    padding-left: 0;
  }
  .collapse-content .table-wrapper {
    padding: 15px;
  }
  .item-name:first-child {
    white-space: initial;
    width: 30%;
  }
</style>