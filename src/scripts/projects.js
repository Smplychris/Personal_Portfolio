import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { TextPlugin } from "gsap/TextPlugin";
import { Flip } from "gsap/Flip";

gsap.registerPlugin(TextPlugin, ScrollTrigger, Flip)

let viewProject = document.querySelectorAll(".work_wrapper");
 viewProject.forEach(project =>{
   let projectClick = project.querySelector(".project_cover")
   let projectWrapper = project.querySelector(".project_wrapper")
   let swiper = document.querySelector(".swiper")
   let swiperText = swiper.querySelector(".swiper_text")
   let projectClose = project.querySelector(".close_button")
   let openProject = gsap.timeline({
     paused:true,
     onReverseComplete:()=>{
       openProject.reverse()
     }
   })
   openProject.to(swiper,{
     y:"0vh"
   })
   openProject.to(swiperText,{
     ease:"none",
     duration:1,
    text:{
      value:" CHRISTIAN_DECHKOV_2022",
      delimiter: "",
    }
  })
   openProject.to(projectWrapper,{
     autoAlpha:1
   })
      openProject.to(swiper,{
    y:"100vh"
  })
   openProject.from(projectClose,{
     yPercent:-101,
     opacity:0
   })
   projectClick.addEventListener('click',()=>{
     openProject.play()
     let body = document.querySelector("body")
     body.classList.add("no-scroll")
   })
   projectClose.addEventListener('click',()=>{
    openProject.reverse()
    let body = document.querySelector("body")
    body.classList.remove("no-scroll")
  })
 })

