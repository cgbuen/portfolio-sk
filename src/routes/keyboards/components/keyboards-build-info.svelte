<script>
  import {showable} from '$lib/helpers/showable'

  let {build} = $props()
</script>

<ul>
  {#if build.build_status === 'Unbuilt'}
    <li>(Unbuilt)</li>
  {/if}

  <li>Purchase date: {build.date_bought}</li>

  {#if showable(build.date_built)}
    <li>
      Build date: {build.date_built}
      {#if build.date_built !== build.date_built_init}
        (initially: {build.date_built_init})
      {/if}
    </li>
  {/if}

  {#if showable(build.color)}
    <li>Color: {build.color}</li>
  {/if}

  {#if showable(build.layout) && !['60% HHKB 7u', '60% HHKB 6u'].includes(build.layout)}
    <li>Layout: {build.layout}</li>
  {/if}

  {#if showable(build.mount)}
    <li>
      Mounting style: {build.mount}
      {#if showable(build.pcb_thickness) && build.pcb_thickness !== '1.6mm'}
        ({build.pcb_thickness} PCB)
      {/if}
    </li>
  {/if}

  {#if showable(build.plate)}
    <li>Plate: {build.plate}</li>
  {/if}

  {#if showable(build.stabilizers)}
    <li>Stabilizers: {build.stabilizers}</li>
  {/if}

  {#if showable(build.switches)}
    <li>Switches: {build.switches}</li>
  {/if}

  {#if showable(build.keycaps)}
    <li>
      Current keyset: {build.keycaps}
      {#if ['(back)', '(none)'].includes(build.pictured)}
        (not pictured)
      {:else if showable(build.pictured) && build.keycaps !== build.pictured}
        (pictured here with {build.pictured})
      {/if}
    </li>
  {:else if showable(build.pictured)}
    <li>Pictured keyset: {build.pictured}</li>
  {/if}

  {#if showable(build.notes)}
    <li>Notes: {build.notes}</li>
  {/if}
</ul>

<style>
  ul {
    padding: 0;
    margin-bottom: 0;
  }
</style>
