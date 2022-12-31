
    // notice that we are not using  handleCLick without the curlyBraces()
    // this is becuase it will be a method then and will call the function wihtout waitiing 
    //  this for loop select all the drum classes then 
   for (let index = 0; index < document.querySelectorAll(".drum").length; index++){
    document.querySelectorAll(".drum")[index].addEventListener("click", function(){
        // alert("I got clicked");
      
        // this.style.color="blue";

       makeSound(this.innerHTML);
       buttonStyleOnpressed(this.innerHTML);

    }); 
   }

   // this one listens to the key that is pressed on the keyboard
document.addEventListener("keydown", function (event){
console.log(event.key);
       makeSound(event.key);
       buttonStyleOnpressed(event.key);
});

function makeSound(key){
    switch (key) {
        case "w":
            var myAudio = new Audio("sounds/crash.mp3");
            myAudio.play();
            break;
        case "a":
            var myAudio = new Audio("sounds/kick-bass.mp3");
            myAudio.play();
            break;
        case "s":
            var myAudio = new Audio("sounds/snare.mp3");
            myAudio.play();
            break;
        case "d":
            var myAudio = new Audio("sounds/tom-1.mp3");
            myAudio.play();
            break;
        case "j":
            var myAudio = new Audio("sounds/tom-2.mp3");
            myAudio.play();
            break;
        case "k":
            var myAudio = new Audio("sounds/tom-3.mp3");
            myAudio.play();
            break;
        case "l":
            var myAudio = new Audio("sounds/tom-4.mp3");
            myAudio.play();
            break;
        
        default:
            console.log(this.innerHTML);
            break;
    }
}

function buttonStyleOnpressed(keyPressed){
    // this queryselector provides you with the class that we are at
    // then we can use classList to provide a certain class with different class
document.querySelector("."+keyPressed).classList.add("pressed")

// now this class get applied but it does not get removed and to remove it

setTimeout(function(){
    document.querySelector("."+keyPressed).classList.remove("pressed");

},100);

}