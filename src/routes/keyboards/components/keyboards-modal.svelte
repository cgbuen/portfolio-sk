<script lang="ts">
  import BuildInfo from './keyboards-build-info.svelte'
  import {Modal} from '$lib/components'
  let {activeKeyboard} = $props()
</script>

<Modal id="keyboards-modal" title={activeKeyboard.keyboard[0]?.name}>
  {#if activeKeyboard.keyboard.length === 1}
    <div class="single">
      <BuildInfo build={activeKeyboard.keyboard[0]} />
    </div>
  {:else}
    <div class="collapses">
      {#each activeKeyboard.keyboard as build, i}
        <div class="collapse collapse-arrow">
          <input
            type="radio"
            name="build-accordion"
            onclick={() => {
              activeKeyboard.buildActive = i
            }}
            checked={activeKeyboard.buildActive === i}
          />
          <div class="collapse-title">Build {i + 1}</div>
          <div class="collapse-content">
            <BuildInfo {build} />
          </div>
        </div>
      {/each}
    </div>
  {/if}
  {#each activeKeyboard.keyboard as build, i}
    <div
      class="background {activeKeyboard.buildActive === i ? '' : 'hide'}"
      style="background-image: url({build.src})"
    ></div>
  {/each}
</Modal>

<style>
  .collapses {
    padding: 0;
  }
  .collapse {
    border-radius: 0;
    border-bottom: 1px solid white;
    &:last-child {
      border-bottom: 0;
    }
  }
  .collapse-title {
    font-weight: bold;
    text-decoration: underline;
    text-decoration-color: #69c;
  }
  .background {
    background-position: 50% 50%;
    background-size: cover;
    background-repeat: no-repeat;
    height: 100%;
    top: 0;
    left: 0;
    position: absolute;
    width: 100%;
    z-index: -1;
  }
</style>
