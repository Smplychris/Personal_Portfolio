import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Flip } from "gsap/Flip";
import { TextPlugin } from "gsap/TextPlugin";
gsap.registerPlugin(Flip, ScrollTrigger, TextPlugin)


let jurkane = gsap.to(".hero_text", {
  ease:"none",
  paused:true,
  text: {
      value:" Hello my name is christian - designer / developer looking for a job",
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
let loaderOff = gsap.to (".hero_loader",{
  opacity:0,
  paused:true
})
;
export{
  jurkane,
  loaderOn,
  loaderOff
}
