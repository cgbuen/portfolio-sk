<script lang="ts">
  import CloseIcon from 'virtual:icons/mdi/close.svg'
  let {children, id, title} = $props()
  let closeModal = () => {
    const modalElement = document.getElementById(id) as HTMLInputElement
    if (modalElement) {
      modalElement.checked = false
    }
  }
</script>

<!-- svelte-ignore a11y_no_noninteractive_element_interactions -->
<div>
  <input type="checkbox" {id} class="modal-toggle" />
  <!-- svelte-ignore a11y_click_events_have_key_events -->
  <div class="modal" role="dialog" onclick={closeModal}>
    <div
      role="document"
      class="modal-box max-w-6xl bg-teal-50 dark:bg-neutral-900"
      onclick={(e) => e.stopPropagation()}
    >
      <label class="close" for={id}><CloseIcon /></label>
      <h2>{title}</h2>
      <div class="modal-content-container">
        {@render children()}
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
</style>
