$(window).on("scroll", function () {
    var scrollHeight = $(document).height();
    var scrollPosition = $(window).height() + $(window).scrollTop();
    if ((scrollHeight - scrollPosition) / scrollHeight === 0) {
        offset += 20;
        var searchvalue = $(".searchbar").val();
        if(searchvalue!=''){
            searchData(offset, limit, searchvalue);
        }
        else{
            trendingData(offset, limit);

        }
    }
});

