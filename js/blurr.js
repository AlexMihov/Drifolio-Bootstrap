$(window).on('scroll', function() {
    var pixs = $(document).scrollTop()
    pixs = pixs / 100;
    $(".filter").css({ "-webkit-filter": "blur(" + pixs + "px)", "filter": "blur(" + pixs + "px)" })
});
