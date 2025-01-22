<script>
  import FilterButton from './filter-button.svelte'
  import GridIcon from 'virtual:icons/mdi/view-grid-outline'
  import ListIcon from 'virtual:icons/mdi/view-list'

  let {displayedList, filters, gridView, data, toggleGridView, updateFilter} =
    $props()
</script>

<div class="top-section">
  <div class="filter-section-wrapper">
    <div class="filter-label">Filters:</div>
    <div class="filter-section">
      {#each Object.keys(filters) as filter}
        {#if data[filter].length > 0}
          <FilterButton
            name={filter}
            count={data[filter].length}
            active={filters[filter]}
            onclick={updateFilter(filter)}
          />
        {/if}
      {/each}
    </div>
  </div>
  <div class="results-count">{displayedList.length} results</div>
  <div class="view-options">
    <button
      class="view-option {gridView ? 'active' : ''}"
      onclick={toggleGridView(true)}
    >
      <GridIcon />
    </button>
    <button
      class="view-option {gridView ? '' : 'active'}"
      onclick={toggleGridView(false)}
    >
      <ListIcon />
    </button>
  </div>
</div>

<style>
  .top-section {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 15px;
  }
  .results-count {
    font-size: 18px;
    font-weight: bold;
    text-align: right;
    white-space: nowrap;
    flex: 1;
    justify-content: end;
    margin-right: 10px;
  }
  .view-options {
    display: flex;
  }
  .view-option {
    display: block;
    height: 24px;
    opacity: 0.25;
    width: 24px;
    &.active {
      opacity: 1;
    }
  }
  .filter-section-wrapper {
    display: flex;
  }
  .filter-label {
    display: inline-block;
    font-weight: bold;
    margin-top: 6px;
  }
</style>
