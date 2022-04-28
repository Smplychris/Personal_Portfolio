import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { TextPlugin } from "gsap/TextPlugin";
import { Flip } from "gsap/Flip";
import SplitType from 'split-type'

gsap.registerPlugin(TextPlugin, ScrollTrigger, Flip)

if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
  let cursor = document.querySelector(".dot")
  cursor.classList.add("invisible")
 }


gsap.set(".dot", {xPercent: -50, yPercent: -100});
let xToO = gsap.quickTo(".dot", "x", {duration: 0.5, ease: "power3"}),
    yToO = gsap.quickTo(".dot", "y", {duration: 0.5, ease: "power3"});
    
window.addEventListener("mousemove", e => {
  xToO(e.x);
  yToO(e.y);
});

let hoverImage = document.querySelectorAll(".project_cover")
hoverImage.forEach(hover =>{
  let dotBig = gsap.to(".dot",{
    opacity:1,
    duration:0.8,
    ease:"none",
    onInterrupt:()=>{
      dotBig.kill()
    },
    paused:true,
    text: {
      value:"[view]",
      delimiter: "",
  }
  })
  hover.addEventListener('mouseover',()=>{
    dotBig.play()
  })
  hover.addEventListener('mouseleave',()=>{
    dotBig.reverse()
  })
})