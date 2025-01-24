<script>
  import FilterButton from './filter-button.svelte'
  import GridIcon from 'virtual:icons/mdi/view-grid-outline'
  import ListIcon from 'virtual:icons/mdi/view-list'

  let {
    displayedList,
    filters,
    gridView,
    data,
    toggleGridView,
    updateFilter,
    updateSearch,
  } = $props()
</script>

<div class="top-section">
  <div class="left">
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
  </div>
  <div class="right">
    <div class="input-wrapper">
      <input
        class="input input-sm"
        type="text"
        placeholder="Search by name..."
        oninput={updateSearch}
      />
    </div>
    <div class="right-corner">
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
  </div>
</div>

<style>
  .top-section {
    display: flex;
    justify-content: space-between;
    margin-bottom: 15px;
  }
  .left,
  .right,
  .right-corner {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .right {
    flex: 1;
    margin-left: 10px;
  }
  .input-wrapper {
    margin-right: 10px;
  }
  .input {
    background: white;
    color: #171717;
    &:focus {
      outline-color: #69c;
    }
  }
  .results-count {
    font-size: 18px;
    font-weight: bold;
    text-align: right;
    white-space: nowrap;
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
    margin-right: 15px;
  }
  .filter-section {
    display: flex;
  }
  .filter-label {
    display: inline-block;
    font-weight: bold;
    margin-top: 6px;
  }
  @media (max-width: 900px) {
    .top-section {
      display: block;
    }
    .left {
      margin-bottom: 10px;
    }
    .right {
      margin-left: 0;
    }
    .input-wrapper,
    .input {
      height: 3rem;
      width: 100%;
    }
  }
  @media (max-width: 600px) {
    .left,
    .right {
      display: block;
    }
    .input-wrapper {
      margin-bottom: 10px;
    }
    .filter-section {
      display: block;
    }
  }
</style>
