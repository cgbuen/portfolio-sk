<script lang="ts">
  interface Props {
    className?: string;
    src?: string;
    name?: string;
    onClick?: () => void;
    right?: boolean;
    children?: () => any;
  }
  let {
    className = '',
    src = '',
    name = '',
    onClick,
    right = false,
    children,
  }: Props = $props()
</script>

<button class="card-wrapper {className}" onclick={onClick}>
  <div class="card-body {right ? 'right' : ''}">
    {#if !right}
      <img class="card-img" src={src} alt={name} />
    {/if}
    <div class="card-header-wrapper">
      <div class="card-title dark:text-white text-neutral-900">{name}</div>
      <div class="card-description">{@render children?.()}</div>
    </div>
    {#if right}
      <img class="card-img right" src={src} alt={name} />
    {/if}
  </div>
</button>

<style>
  .card-wrapper {
    background: rgba(128, 128, 128, 0.15);
    box-shadow: 1px 1px 7px 0 rgba(32, 32, 32, 0.3);
    cursor: auto;
    display: block;
    margin-bottom: 20px;
    padding: 20px;
    text-align: left;
    transition: background 0.2s ease-in-out;
    width: 100%;
  }
  .card-wrapper:hover {
    background: rgba(128, 128, 128, 0.35);
  }
  .card-img {
    display: block;
    margin: 0 15px 0 0;
    visibility: visible;
    width: 250px;
  }
  @media (max-width: 568px) {
    .card-img {
      display: block;
      margin: 0 0 15px 0;
      width: 100%;
    }
  }
  .card-body {
    align-items: center;
    display: flex;
  }
  @media (max-width: 568px) {
    .card-body {
      display: block;
    }
  }
  .card-body.right, .right {
    margin: 0 0 0 15px;
  }
  @media (max-width: 568px) {
    .card-body.right, .right {
      margin: 15px 0 0 0;
    }
  }
  .card-title {
    font-size: 18px;
    font-weight: bold;
  }
  .card-description {
    visibility: visible;
  }
</style>
