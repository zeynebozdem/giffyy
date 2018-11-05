var offset = 0;
var limit = 20;
var categories=["agree","applause","aww","dance","deal with it","do not want","eww","eye roll","face palm","good luck","good bye","hearts","high five","hug","idk","kiss","no","omg","ok","oops","please","popcorn","scared","seriously","shocked","sorry","thank you","thumbs down","thumbs up","want","win","you got this"];
var categoriesFileName=["agree","applause","aww","dance","deal-with-it","do-not-want","eww","eye-roll","face-palm","good-luck","good-bye","hearts","high-five","hug","idk","kiss","no","omg","ok","oops","please","popcorn","scared","seriously","shocked","sorry","thank-you","thumbs-down","thumbs-up","want","win","you-got-this"];

for(i=0;i<categories.length;i++){
   var newclassname=categories[i].replace(/ /g,'');
   $('.swiper-wrapper').append(`<div class="swiper-slide"><div class="flex-container"><div class='category-image'><img src="assets/categories/${categoriesFileName[i]}.png"></div><div class='category-title'><p>${categories[i]}</p></div></div></div>`);
}
$('.swiper-slide').click(function(){
    $(this).addClass('active').siblings().removeClass('active');

    $(".data-title").empty();
    $(".data-gifs").empty();
    console.log(this.textContent);
    offset += 20;
    var searchvalue = this.textContent;
    $(".data-title").append(`<p>${searchvalue.charAt(0).toUpperCase()}${searchvalue.slice(1)} Reactions </p>`);
    categoryData(offset, limit, searchvalue);
    console.log(searchvalue);
    var ss=searchvalue;    
    
});

function categoryData(skip, take, searchvalue) {
    id=3;
 
    var xhr = $.get(`http://api.giphy.com/v1/gifs/search?q=${searchvalue}&api_key=${apikey}&limit=${take}&offset=${skip}`);
    xhr.done(function (response) {
        console.log("categoryData", response);
        var results = response.data

        for (i in results) {
            $(".data-gifs").append(`<img src=${results[i].images.fixed_width.url} style='height:200px; width:200px;'/>`);
             }

    });

}


/* $(".datadiv").empty();
    offset += 20;
    var searchvalue = $(".swiper-slide p").replace(/ /g,'');
    searchData(offset, limit, searchvalue); */
/* var btn=document.createElement("BUTTON");
    btn.className=categories[i].replace(/ /g,'');
    btn.onclick=Results;
    var text=document.createTextNode(categories[i]);
    btn.appendChild(text);
    $('.categories').append(btn); */
   /*$(`.${categories[i]}`).click(function(){
    console.log(categories[i]);

}); */