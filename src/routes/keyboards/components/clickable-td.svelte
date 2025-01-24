<script>
  let {
    children,
    style = '',
    labelFor,
    hasImg = false,
    hideTablet = false,
    hideMobile = false,
  } = $props()
</script>

<td
  {style}
  class="{hideTablet ? 'hide-tablet' : ''} {hideMobile ? 'hide-mobile' : ''}"
>
  <label class="modal-td" for={labelFor}>
    <div class="inner-label">{@render children()}</div>
    <div class="cheat">
      {#if hasImg}
        <div class="img"></div>
      {:else}
        {@render children()}
      {/if}
    </div>
  </label>
</td>

<style>
  td {
    padding: 0;
    &:first-child {
      padding: 0;
    }
  }
  .cheat {
    display: block;
    visibility: hidden;
    .img {
      height: 66.49px;
      width: 100px;
    }
  }
  .modal-td {
    cursor: pointer;
    display: block;
    height: 100%;
    padding-bottom: 0.75rem;
    padding-left: 1rem;
    padding-right: 1rem;
    padding-top: 0.75rem;
    position: relative;
    td:first-child & {
      padding: 10px 0;
    }
  }
  .inner-label {
    display: block;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
  }
  @media (max-width: 800px) {
    .hide-tablet {
      display: none;
    }
  }
  @media (max-width: 600px) {
    .modal-td {
      padding: 0.75rem 0.5rem;
    }
    .hide-mobile {
      display: none;
    }
    .cheat .img {
      height: 33.25px;
      width: 50px;
    }
  }
</style>
