let facebookBtn = document.querySelector(".facebook-btn");
let whatsappBtn = document.querySelector(".whatsapp-btn");
let emailBtn = document.querySelector(".email-btn");
let twitterBtn = document.querySelector(".twitter-btn");

let typing = document.querySelector(".typing");
let text = typing.innerHTML;

 typing.innerHTML = "";

 //IF PUT IT I=0 INSIDE if ,THE FIRST LETTER WILL BE MISSING
 let i = 0;
//typing effect function 
(typingEffect = () => {
        
    if (i < text.length){

         //PRINT OUT THE FIRST LETTER
         typing.innerHTML += text.charAt(i);

         //THEN i++, IF NOT, FIRST LETTER WILL BE MISSING
         i++;

         //IF SPEED VARIABLE IS SET OUTSIDE THE FUNCTION, 
         //IT WILL JUST GET ONE RANDOM NUM EACH TIME TO RUN THE FUNCTION
         let delay = 400;

         setTimeout(typingEffect, delay);
     }
})();

    
//function for the snowflake
getRandom = (min, max) => {
    return Math.random() * (max - min) + min;
};
  
(letItSnow = () => {
  var snowflakes = document.querySelectorAll('.snow');
  for (var i = 0; i < snowflakes.length; i++) {
    var snowflake = snowflakes[i];
    snowflake.setAttribute('cx', getRandom(1,100) + '%');
    snowflake.setAttribute('cy', '-' + getRandom(1,100));
    snowflake.setAttribute('r', getRandom(1,3));
  }
})();

//function for text appear
appearText = () =>{

  let text = document.querySelector(".game-text");
  let text2 = document.querySelector(".game-text-two");
  let text3 = document.querySelector(".game-text-three");
  let text4 = document.querySelector(".game-text-four");
  
  let textLocation = text.getBoundingClientRect().top;
  let text2Location = text2.getBoundingClientRect().top;
  let text3Location = text3.getBoundingClientRect().top;
  let text4Location = text4.getBoundingClientRect().top;

  let screenPosition = window.innerHeight/1.3 ;

  if(textLocation < screenPosition){
    text.classList.add("game-text-appear");
  } 
  if (text2Location < screenPosition){
    text2.classList.add("game-text-two-appear");
  }
  if (text3Location < screenPosition){
    text3.classList.add("game-text-three-appear");
  }
  if (text4Location < screenPosition){
    text4.classList.add("game-text-four-appear");
  }
}
window.addEventListener("scroll", appearText);

//ShareSection function
(ShareSite = () => {
 
  let postUrl = encodeURI(document.location.href);
  let postTitle = encodeURI("Some Fun For the Holiday?");

  facebookBtn.setAttribute(
    "href",
    `https://www.facebook.com/sharer.php?u=${postUrl}`
  );

  twitterBtn.setAttribute(
    "href",
    `https://twitter.com/share?url=${postUrl}&text=${postTitle}`
  );

  emailBtn.setAttribute(
    "href",
    `mailto:?subject=I wanted you to see this site&amp;body=${postTitle} ${postUrl}`
  );

  whatsappBtn.setAttribute(
    "href",
    `https://wa.me/?text=${postTitle} ${postUrl}`
  );
})();

