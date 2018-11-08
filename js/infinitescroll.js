


$(window).on("scroll", function () {
    var scrollHeight = $(document).height();
    var scrollPosition = $(window).height() + $(window).scrollTop();
    if ((scrollHeight - scrollPosition) / scrollHeight === 0) {
        offset += 20;

       var searchvalue=$('.searchbar').val();
       GetData(limit, offset, searchvalue);
    }

});

/**categoryData(offset, limit, event.srcElement.textContent)
 *   var searchvalue = $(".searchbar").val();
            searchData(offset, limit, searchvalue);
 */