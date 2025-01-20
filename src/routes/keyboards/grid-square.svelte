<script lang="ts">
  let {onclick, src, name, description} = $props()
</script>

  <div
    class="grid-square"
    {onclick}
    onkeydown={onclick}
    role="button"
    tabindex={0}
  >
    <img {src} alt={name} width="250" height="166.66" />
    <h2>{name}</h2>
    <div>{description}</div>
  </div>

<style>
  .grid-square {
    background: rgba(128, 128, 128, 0.15);
    box-shadow: 1px 1px 7px 0 rgba(32, 32, 32, 0.3);
    margin-bottom: 25px;
    padding: 15px;
    text-align: center;
    transition: background 0.2s ease-in-out;
    &:hover {
      background: rgba(128, 128, 128, 0.35);
    }
  }
  h2 {
    margin: 0;
  }
</style>
