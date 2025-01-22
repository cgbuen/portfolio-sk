<script lang="ts">
  import CloseIcon from 'virtual:icons/mdi/close.svg'
  import {BuildInfo} from './components'
  let {activeKeyboard} = $props()
</script>

<div>
  <input type="checkbox" id="keyboard-modal" class="modal-toggle" />
  <div class="modal" role="dialog">
    <div class="modal-box max-w-6xl bg-teal-50 dark:bg-neutral-900">
      <label class="close" for="keyboard-modal"><CloseIcon /></label>
      <h2>{activeKeyboard.keyboard[0]?.name}</h2>
      <div class="modal-content-container">
        {#if activeKeyboard.length === 1}
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
      </div>
    </div>
  </div>
</div>

<style>
  .modal-box {
    border-radius: 0;
    padding: 20px;
    position: relative;
  }
  .close {
    cursor: pointer;
    position: absolute;
    right: 15px;
    top: 15px;
  }
  .modal-content-container {
    color: white;
    min-height: 450px;
    padding: 15px;
    position: relative;
  }
  .single {
    padding: 15px;
  }
  .single,
  .collapses {
    background: rgba(0, 0, 0, 0.5);
    max-width: 35%;
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
