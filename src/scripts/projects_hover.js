import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { TextPlugin } from "gsap/TextPlugin";
import { Flip } from "gsap/Flip";

gsap.registerPlugin(TextPlugin, ScrollTrigger, Flip)

let projectCover = document.querySelectorAll(".project_cover")
projectCover.forEach(cover=>{
  let popup = cover.querySelector(".project_popup")
  let popupText = popup.querySelector(".project_popup_text")
  let popupAppear = gsap.timeline({
    paused:true
  })
  popupAppear.to(popup,{
    opacity:0.8,
  })
  popupAppear.to(popupText,{
    ease:"none",
    text:{
      value:"[VIEW PROJECT]"
    }
  },"-=0.2")
  cover.addEventListener('mouseover',()=>{
    popupAppear.play()
  })
  cover.addEventListener('mouseleave',()=>{
    popupAppear.reverse()
  })
})