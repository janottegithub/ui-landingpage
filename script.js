
const hero = document.querySelector(".hero");
const slider = document.querySelector(".slider");
const logo = document.querySelector("#logo");
const hamburger = document.querySelector(".hamburger");
const headline = document.querySelector(".headline");
const bgImage = document.querySelector("#bgImage");
const li = document.querySelectorAll("li");
var btn = document.querySelector('.toggle-btn');


const tl = new TimelineMax();

tl.fromTo(
    hero,
    1, 
    {height: "0%"}, 
    {height: '80%', ease: Power2.easeInOut }
    ).fromTo(
    hero, 
    1.2, 
    {width: '100%'}, 
    {width: '80%', ease: Power2.easeInOut }
)
.fromTo(
    slider,
    1.2, 
    {x: "-100%"}, 
    {x: '0%' , ease: Power2.easeInOut },
    "-=1.2 "
    )
.fromTo(
    logo,
    0.5, 
    {opacity:0, x: 30}, 
    {opacity: 1, x: 0},
    "-=0.5"
    )
/*.fromTo(
    hamburger,
    0.5, 
    {opacity:0, x: 30}, 
    {opacity: 1, x: 0},
    "-=0.5"
    )
*/
.fromTo(
    btn,
    0.5, 
    {opacity:0, x: 30}, 
    {opacity: 1, x: 0},
    "-=0.5"
        )

.fromTo(
        bgImage,
        2, 
        {opacity:0}, 
        {opacity: 1},
        )

/*///////////////part for the flexible navbar////////////////*/

var bgImage2 = document.querySelector('.bgImage2');
var tl2 = new TimelineMax({paused: true});

tl2.to(".one", 0.8,{
    y:6,
    rotation: 45,
    ease: Expo.easeInOut
});
tl2.to(".two", 0.8,{
    y:-6,
    rotation: -45,
    ease: Expo.easeInOut,
    delay: -0.8
})

tl2.to(".menu", 2,{
    top:"0%",
    ease: Expo.easeInOut,
    delay: -2
})

tl2.staggerFrom(".menu ul li", 2, {x: -200, opacity: 0, ease:Expo.easeOut}, 0.3)

tl2.reverse();

var btn = document.querySelector('.toggle-btn');
btn.addEventListener('click', () => {
 tl2.reversed(!tl2.reversed());
 bgImage2.style.display = "block";
 //bgImage.style.display = "none";

})
