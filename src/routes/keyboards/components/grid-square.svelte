<script lang="ts">
  let {onclick, src, name, description, labelFor} = $props()
</script>

<label class="grid-square-wrapper" for={labelFor}>
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
</label>

<style>
  .grid-square-wrapper {
    margin-bottom: 25px;
  }
  .grid-square {
    background: rgba(128, 128, 128, 0.15);
    box-shadow: 1px 1px 7px 0 rgba(32, 32, 32, 0.3);
    padding: 15px;
    text-align: center;
    transition: background 0.2s ease-in-out;
    &:hover {
      background: rgba(128, 128, 128, 0.35);
    }
  }
  h2 {
    margin: 0;
    max-width: 250px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  @media (max-width: 600px) {
    img {
      margin: 0 auto;
    }
    .grid-square-wrapper {
      display: block;
      text-align: center;
    }
    .grid-square {
      display: inline-block;
    }
  }
</style>
