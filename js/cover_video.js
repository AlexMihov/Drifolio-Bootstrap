function scaleVideoContainer() { var i = $(window).height() + 5,
        e = parseInt(i) + "px";
    $(".homepage-hero-module").css("height", e) }

function initBannerVideoSize(i) { $(i).each(function() { $(this).data("height", $(this).height()), $(this).data("width", $(this).width()) }), scaleBannerVideoSize(i) }

function scaleBannerVideoSize(i) { var e, n, t = $(window).width(),
        o = $(window).height() + 5;
    $(i).each(function() { var i = $(this).data("height") / $(this).data("width");
        $(this).width(t), t < 1e3 && (e = (n = o) / i, $(this).css({ "margin-top": 0}), $(this).height(n)), $(".homepage-hero-module .video-container video").addClass("fadeIn animated") }) } $(document).ready(function() { scaleVideoContainer(), initBannerVideoSize(".video-container .poster img"), initBannerVideoSize(".video-container .filter"), initBannerVideoSize(".video-container video"), $(window).on("resize", function() { scaleVideoContainer(), scaleBannerVideoSize(".video-container .poster img"), scaleBannerVideoSize(".video-container .filter"), scaleBannerVideoSize(".video-container video") }) });