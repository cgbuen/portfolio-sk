<script>
    import Social from './social.svelte';
</script>

<div class="footer-container">
    <Social type="footer" />
    <div class="copyright">
        &copy; {(new Date()).getFullYear()} cgbuen
    </div>
</div>

<style>
    .footer-container {
      bottom: 0;
      margin: 15px 0;
      max-width: none;
      text-align: center;
      width: 100%;    
    }
</style>