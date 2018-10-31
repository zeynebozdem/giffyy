


$(window).on("scroll", function () {
    var scrollHeight = $(document).height();
    var scrollPosition = $(window).height() + $(window).scrollTop();
    if ((scrollHeight - scrollPosition) / scrollHeight === 0) {
        offset += 20;

        if (id === 1) {
            trendingData(offset, limit);
        }
        else if (id === 2) {
            var searchvalue = $(".searchbar").val();
            searchData(offset, limit, searchvalue);
        }
        else if (id === 3) {
            categoryData(offset, limit, searchvalue);
        }
    }

});

/**categoryData(offset, limit, event.srcElement.textContent)
 *   var searchvalue = $(".searchbar").val();
            searchData(offset, limit, searchvalue);
 */