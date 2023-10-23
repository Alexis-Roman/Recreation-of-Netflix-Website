<script>
    window.addEventListener('scroll', function() {
        const blackBar = document.querySelector('.black-bar');
        if (window.scrollY > 100) { // Change 100 to the scroll position where you want the black bar to appear
            blackBar.style.opacity = 1;
        } else {
            blackBar.style.opacity = 0;
        }
    });
</script>