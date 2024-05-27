
var nuofbuttons=document.querySelectorAll(".drum").length;


//by clicking the area of
for(var i=0;i<nuofbuttons;i++){ 
document.querySelectorAll(".drum")[i].addEventListener("click",function(){
    playsound(this.innerHTML);
    dark(this.innerHTML);
});
}

//by pressing the key
    document.addEventListener("keydown",function(event){
        playsound(event.key);
        dark(event.key);
    });

    function playsound(x){
        if(x=="w"){
            var audio = new Audio('./sounds/tom-1.mp3');
            audio.play();
        }
        else if(x=='a'){
            var audio = new Audio('./sounds/tom-2.mp3');
            audio.play();
        }
        else if(x=='s'){
            var audio = new Audio('./sounds/tom-3.mp3');
            audio.play();
        }
        else if(x=='d'){
            var audio = new Audio('./sounds/tom-4.mp3');
            audio.play();
        }
        else if(x=='j'){
            var audio = new Audio('./sounds/snare.mp3');
            audio.play();
        }
        else if(x=='k'){
            var audio = new Audio('./sounds/crash.mp3');
            audio.play();
        }
        else if(x=='l'){
            var audio = new Audio('./sounds/kick-bass.mp3');
            audio.play();
        }
    }

    function dark(x){
      document.querySelector("."+x).classList.add("pressed"); 

      setTimeout(function(){
          document.querySelector("."+x).classList.remove("pressed");
      },100);
        
    }

/*document.addEventListener("keydown",function(event){
       console.log(event.key);
}); */


// var audio = new Audio('./sounds/crash.mp3');
// audio.play();
