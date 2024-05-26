"use strict"
/*                                     banner read more                */

let button= document.getElementById("abhi");
let hide= document.getElementById("hide");
let banner=document.getElementById("show");

  button.addEventListener("click", function() {
if (hide.style.display === "block") {
   hide.style.display = "none";
//    hide.style.opacity = "0"
   button.innerText = "READ MORE";
    button.style.marginBottom ="197px"; //190
    button.style.marginTop ="10px";
   console.log(1);
} else {
  hide.style.display = "block";
//    hide.style.opacity ="1"
  hide.style.paddingTop = "-10px";
  banner.style.marginBottom = "5px";  
   hide.style.marginBottom = "1px";
  button.innerText = "Read Less";
  button.style.marginBottom = "165px"; //151px
   console.log(2);
}
});
 /*                                             nav bar menu                          */
let menu = document.querySelector(".burger")
let navlinks = document.querySelector(".link")
let nav = document.getElementById("nav")
let one = document.querySelector(".one")
let two = document.querySelector(".two")
let three = document.querySelector(".three")
menu.addEventListener("click",function(){
    if(nav.style.display ==="block"){
        nav.style.display ="none";
        two.style.opacity="1";
        one.style.transform="rotate(0deg)";
        three.style.transform="rotate(0deg)";
        console.log(3)}
    else{
    nav.style.display = "block";
    one.style.transform="rotate(-25deg)";
    three.style.transform="rotate(25deg)";
    two.style.opacity="0";
    console.log(4);};

});

    navlinks.addEventListener("click",function(){
    let x=window.matchMedia("(max-width:460px)")
    if(x.matches){
        nav.style.display="none";
        two.style.opacity="1";
        one.style.transform="rotate(0deg)";
        three.style.transform="rotate(0deg)";
        console.log(5)
}
})
    // navlinks.addEventListener("click",function(){
    // nav.style.display ="none";
// })




/*                                              wrap-4 read more                                 */
let button4 = document.getElementById("btn4");
let hidden =document.getElementById("hidden")
button4.addEventListener("click",function(){
if(hidden.style.display==="flex")
{hidden.style.display = "none"}
else{hidden.style.display="flex";}})


/*                                                            wrap-4 accordion        js               */ 
/* let click =document.querySelectorAll(".accr");
let para =document.querySelectorAll(".para");
click.addEventListener("click",function(){

    
}) */


     $(function(){
   $(".accordion .flex").on("click",function(e){                  //.accordion .accr

       if($(this).parent().hasClass("active")){
            //$(".accordion .accr").removeClass( "active")
            //$(".accr").next(".para").slideDown();
            //$(this).next(".para").slideUp();
           console.log(6);
       }
       else{
           $(".accordion .accr").removeClass("active")
            $(".accordion .para").slideUp(900);
           $(this).next(".para").slideDown(900);
           $(".accr").next(".para").slideUp(900);
        //    $(this).addClass("active");
           console.log(7);
       }
   });
}); 
