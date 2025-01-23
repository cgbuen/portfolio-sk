<script lang="ts">
  import CheckboxMarked from 'virtual:icons/mdi/checkbox-marked'
  const {active, count, onclick, name} = $props()

  const translateName = (str1: string) => {
    return str1
      .replace(/([A-Z])/g, ' $1')
      .toLowerCase()
      .replace(/^./, function (str2: string) {
        return str2.toUpperCase()
      })
  }
</script>

<button {onclick} class="filter {active ? 'active' : ''}">
  <div class="icon-wrapper">
    <div class="icon-unchecked border-neutral-700 dark:border-white"></div>
    <div class="icon bg-neutral-700 dark:bg-white">
      <CheckboxMarked />
    </div>
  </div>
  <div class="text">
    {translateName(name)} ({count})
  </div>
</button>

<style>
  .filter {
    border-radius: 3px;
    cursor: pointer;
    display: inline-block;
    flex: 1;
    font-weight: bold;
    padding: 5px 0 5px 10px;
    white-space: nowrap;
  }
  .icon-wrapper {
    border-radius: 2px;
    display: inline-block;
    margin-right: 5px;
    overflow: hidden;
    position: relative;
    vertical-align: middle;
  }
  .icon-unchecked {
    border-width: 3px;
    border-style: solid;
    display: block;
    height: 24px;
    width: 24px;
    .active & {
      display: none;
    }
  }
  .icon {
    display: none;
    color: #69c;
    height: 24px;
    width: 24px;
    .active & {
      display: block;
    }
  }
  .text {
    display: inline-block;
    vertical-align: middle;
  }
</style>
