<script lang="ts">
  import { page } from "$app/state";

</script>

<div>
  Filters:
  Grid List
  {page.data.collection.keyboards.length} results
  {#each page.data.collection.keyboards as keyboard}
    <div>
      <img src={keyboard.image} alt={keyboard.name} />
      <h2>{keyboard.name}</h2>
      <p>{keyboard.description}</p>
    </div>
  {/each}
</div>