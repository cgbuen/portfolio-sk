<script lang="ts">
  interface Props {
    src?: string
    name?: string
    right?: boolean
    children?: () => any
  }
  let {src = '', name = '', right = false, children}: Props = $props()
</script>

<div class="card-variant-wrapper">
  <div class="card-variant-body {right ? 'right' : ''}">
    {#if !right}
      <img class="card-variant-img" {src} alt={name} />
    {/if}
    <div class="card-variant-header-wrapper">
      <div class="card-variant-title text-neutral-900 dark:text-white">
        {name}
      </div>
      <div class="card-variant-description">{@render children?.()}</div>
    </div>
    {#if right}
      <img class="card-variant-img right" {src} alt={name} />
    {/if}
  </div>
</div>

<style>
  .card-variant-wrapper {
    background: rgba(128, 128, 128, 0.15);
    box-shadow: 1px 1px 7px 0 rgba(32, 32, 32, 0.3);
    display: block;
    margin-bottom: 20px;
    padding: 20px;
    text-align: left;
    transition: background 0.2s ease-in-out;
    width: 100%;
  }
  .card-variant-wrapper:hover {
    background: rgba(128, 128, 128, 0.35);
  }
  .card-variant-img {
    display: block;
    margin: 0 15px 0 0;
    visibility: visible;
    width: 250px;
  }
  @media (max-width: 568px) {
    .card-variant-img {
      display: block;
      margin: 0 0 15px 0;
      width: 100%;
    }
  }
  .card-variant-body {
    align-items: center;
    display: flex;
  }
  @media (max-width: 568px) {
    .card-variant-body {
      display: block;
    }
  }
  .card-variant-body.right,
  .right {
    margin: 0 0 0 15px;
  }
  @media (max-width: 568px) {
    .card-variant-body.right,
    .right {
      margin: 15px 0 0 0;
    }
  }
  .card-variant-title {
    font-size: 18px;
    font-weight: bold;
  }
  .card-variant-description {
    visibility: visible;
  }
</style>
