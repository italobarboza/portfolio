jQuery(document).ready(function($) {
    $('.level-bar-inner').css('width', '0');
    $('.level-bar-inner').each(function() {
        var itemWidth = $(this).data('level');
        $(this).animate({
            width: itemWidth
        }, 800);
    });

    $('.level-label').tooltip();

    GitHubCalendar("#github-graph", "italobarboza");

    GitHubActivity.feed({ username: "italobarboza", selector: "#ghfeed" });
});