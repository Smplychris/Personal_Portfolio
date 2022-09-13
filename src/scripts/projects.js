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
     width:"100%",
     ease:"power4.out",
     duration:1,
   })
   openProject.to(swiperText,{
    opacity:1
  })
   openProject.to(swiperText,{
     ease:"none",
     duration:1,
    text:{
      value:"SMPLYCREATIVE.DESIGN",
      delimiter: "",
    }
  })
   openProject.to(projectWrapper,{
     autoAlpha:1
   })
      openProject.to(swiper,{
    yPercent:"100",
    duration:1,
    ease:"power4.out"
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

