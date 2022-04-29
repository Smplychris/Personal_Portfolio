import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Flip } from "gsap/Flip";
import { TextPlugin } from "gsap/TextPlugin";
gsap.registerPlugin(Flip, ScrollTrigger, TextPlugin)

let body = document.querySelector("body")
let jurkane = gsap.to(".hero_text", {
  ease:"none",
  paused:true,
  text: {
      value:" Hello my name is christian a designer / developer looking for a job",
      delimiter: "",
      speed:2
  }
});
let loaderOn = gsap.from(".hero_loader", {
  ease:"none",
  repeat:-1,
  paused:false,
  yoyo:true,
  text: {
      value:"7914524",
      delimiter: "",
      speed:0.4
  }
});
let loaderOff = gsap.timeline({
  paused:true,
  onComplete:()=>{
    loaderOn.kill()
    body.classList.remove("no-scroll")
  }
}) 
loaderOff.to(".hero_loader",{
  opacity:0,
})
loaderOff.from(".hero_scroll",{
  duration:0.8,
  opacity:0,
})
loaderOff.to(".hero_scroll",{
  duration:0.6,
  y:100
},"-=0.9")

let heroScroll = ScrollTrigger.create({
  trigger:".hero_wrapper",
  start:"bottom 80%",
  end:"bottom 80%",
  onEnter:()=>{
    gsap.to(".hero_scroll",{
      opacity:0,
      y:-150
    })
    gsap.to(".hero_text",{
      opacity:0,
      y:-100
    })
    gsap.to(".info_bar",{
      opacity:1
    })
  },
  onEnterBack:()=>{
   gsap.to(".hero_scroll",{
     opacity:1,
     y:100
   })
   gsap.to(".hero_text",{
     opacity:1,
     y:0
   })
   gsap.to(".info_bar",{
    opacity:0
  })
 }
})

var imagesLoaded = require('imagesloaded');
let images = document.querySelectorAll("img")
 imagesLoaded(images, function(){
   loaderOff.play(),
   loaderOn.kill(),
   jurkane.play()
 })
