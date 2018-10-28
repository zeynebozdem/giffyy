var apikey = 'QyoA3LBnlBLHUTh8cipaaJ56jXbXJoB2';
var limit = 20;
var offset = 0;

var categories=["agree","applause","aww","dance","deal with it","do not want","eww","eye roll","face palm","good luck","good bye","hearts","high five","hug","idk","kiss","no","omg","ok","oops","please","popcorn","scared","seriusly","shocked","slow clap","sorry","thank you","thumbs down","thumbs up","want","win","you got this"];

for(i=0;i<categories.length;i++){
   var newclassname=categories[i].replace(/ /g,'');
   $('.swiper-wrapper').append(`<div class="swiper-slide"><div class="flex-container button"><div><p  style="color: white;">${categories[i]}</p></div></div></div>`);
   
 
}
$('.swiper-slide').click(function(){
    $(".dataname").empty();
    $(".datadiv").empty();
    console.log(event.srcElement.textContent);
    offset += 20;

    var searchvalue = event.srcElement.textContent;
    $(".dataname").append(`<p style='color:white;'>${searchvalue}</p>`);

    categoryData(offset, limit, searchvalue);
    console.log(searchvalue);
});

function categoryData(skip, take, searchvalue) {
    var searchvalue = event.srcElement.textContent;
    var xhr = $.get(`http://api.giphy.com/v1/gifs/search?q=${searchvalue}&api_key=${apikey}&limit=${take}&offset=${skip}`);
    xhr.done(function (response) {
        console.log("searchdata", response);
        var results = response.data

        for (i in results) {
            $(".datadiv").append(`<img src=${results[i].images.fixed_width.url} style='height:200px; width:200px;'/>`);
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