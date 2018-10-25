var categories=["agree","applause","aww","dance","deal with it","do not want","eww","eye roll","face palm","good luck","good bye","hearts","high five","hug","idk","kiss","no","omg","ok","oops","please","popcorn","scared","seriusly","shocked","slow clap","sorry","thank you","thumbs down","thumbs up","want","win","you got this"];

for(i=0;i<categories.length;i++){
    var btn=document.createElement("BUTTON");
    btn.className=categories[i].replace(/ /g,'');
    btn.onclick=Results;
    var text=document.createTextNode(categories[i]);
    btn.appendChild(text);
    $('.categories').append(btn);
   
}

function Results(){
    alert(event.srcElement.className);
}

   /*$(`.${categories[i]}`).click(function(){
    console.log(categories[i]);

}); */