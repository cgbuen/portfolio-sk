<script>
  import {page} from '$app/state'
</script>

<div>
  <table class="table">
    <thead>
      <tr>
        <td>Name</td>
        <td>Purchased</td>
        <td>Mount</td>
        <td>Type</td>
        <td>Status</td>
        <td>Keyboard</td>
        <td>Weight</td>
      </tr>
    </thead>
    <tbody>
      {#each page.data.collection.switches as switchSet}
        <tr>
          <td>{switchSet.name}</td>
          <td>{switchSet.purchase_date}</td>
          <td>{switchSet.mount}</td>
          <td>{switchSet.switch_type}</td>
          <td>{switchSet.mount_status}</td>
          <td>{switchSet.keyboard}</td>
          <td>{switchSet.weight_springs}</td>
        </tr>
      {/each}
    </tbody>
  </table>
</div>

<style>
  table tbody td {
    &:nth-child(1) {
      white-space: normal;
      padding: 0;
    }
    &:nth-child(2) {
      white-space: nowrap;
    }
  }
</style>
