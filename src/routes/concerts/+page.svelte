<script lang="ts">
  import {getContext} from 'svelte'
  import {page} from '$app/state'
  import PhotoswipeGallery from 'svelte-photoswipe-gallery'

  const images = page.data.concerts
</script>

<svelte:head>
  <title>Concerts{getContext('titleSuffix')}</title>
</svelte:head>

<div class="concerts-container">
  <h1>Concerts</h1>
  <p>
    Here are a few live music events that I&rsquo;m lucky to have shot. Click
    each image for more info.
  </p>
  <PhotoswipeGallery
    {images}
    showDescription={true}
    showDownloadButton={false}
    showFullscreenButton={false}
  />
</div>

<style>
</style>
