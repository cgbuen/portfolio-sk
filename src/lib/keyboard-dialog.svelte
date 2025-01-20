<script lang="ts">
  let {activeKeyboard} = $props()
</script>

<div>
  <input type="checkbox" id="keyboard-modal" class="modal-toggle">
  <div class="modal" role="dialog">
    <div class="modal-box">
      <div class="modal-action">
        <label for="keyboard-modal">Close</label>
      </div>
      <h3>{activeKeyboard.name}</h3>
      <img src={activeKeyboard.src} alt={activeKeyboard.name} />
    </div>
  </div>
</div>