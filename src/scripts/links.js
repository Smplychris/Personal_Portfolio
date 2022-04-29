import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Flip } from "gsap/Flip";
import { TextPlugin } from "gsap/TextPlugin";
gsap.registerPlugin(Flip, ScrollTrigger, TextPlugin)

let link = document.querySelectorAll(".link_wrapper")
link.forEach(link =>{
  let linkUnderline = link.querySelector(".link_underline")
  let linkLine = gsap.to(linkUnderline,{
    xPercent:102,
    paused:true
  })
  link.addEventListener('mouseover',()=>{
    linkLine.play()
  })
  link.addEventListener('mouseleave',()=>{
   linkLine.reverse()
 })
})