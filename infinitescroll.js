$(window).on("scroll", function () {
    var scrollHeight = $(document).height();
    var scrollPosition = $(window).height() + $(window).scrollTop();
    if ((scrollHeight - scrollPosition) / scrollHeight === 0) {
        offset += 20;
       
        if(searchvalue!=''){
            var searchvalue = $(".searchbar").val();
            searchData(offset, limit, searchvalue);
        }
        else{

            categoryData(offset, limit, event.srcElement.textContent)
        }
    }
});

