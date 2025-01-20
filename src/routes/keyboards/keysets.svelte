<script>
  import {page} from '$app/state'
  const legendQuality = [, 'Low', 'Acceptable', 'High']
</script>

<div>
  <table class="table">
    <thead>
      <tr>
        <td></td>
        <td>Name</td>
        <td>Date</td>
        <td>Type</td>
        <td>Status</td>
        <td>Keyboard</td>
        <td>6UC</td>
        <td>6UO</td>
        <td>Legend<br />Quality</td>
      </tr>
    </thead>
    <tbody>
      {#each page.data.collection.keysets as keyset}
        <tr>
          <td
            ><img
              src={keyset.src}
              alt={keyset.keyset}
              width="100"
              height="66.49"
            /></td
          >
          <td>{keyset.keyset}</td>
          <td>{keyset.purchase_date}</td>
          <td>{keyset.mount}</td>
          <td>{keyset.mount_status}</td>
          <td>{keyset.keyboard}</td>
          <td>{keyset.u6_center}</td>
          <td>{keyset.u6_off}</td>
          <td>{legendQuality[keyset.lq]}</td>
        </tr>
      {/each}
    </tbody>
  </table>
</div>

<style>
  .table tbody td {
    &:first-child {
      white-space: normal;
      padding: 0;
    }
    &:nth-child(3) {
      white-space: nowrap;
    }
    &:nth-child(7),
    &:nth-child(8),
    &:nth-child(9) {
      text-align: center;
    }
  }
</style>
