import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { TextPlugin } from "gsap/TextPlugin";
import { Flip } from "gsap/Flip";
import SplitType from 'split-type'

gsap.registerPlugin(TextPlugin, ScrollTrigger, Flip)

let nameLink = document.querySelector(".info_bar_name")
let nameLinkHover = gsap.to(nameLink,{
  paused:true,
  text:{
    value:"designer/developer",
    delimiter:""
  }
})
nameLink.addEventListener("mouseover",()=>{
  nameLinkHover.play()
})
nameLink.addEventListener("mouseleave",()=>{
  nameLinkHover.reverse()
})

let phoneLink = document.querySelector(".info_bar_link.phone")
let phoneLinkHover = gsap.to(phoneLink,{
  paused:true,
  text:{
    value:"[+359 896 510 702]",
    delimiter:""
  }
})
phoneLink.addEventListener("mouseover",()=>{
  phoneLinkHover.play()
})
phoneLink.addEventListener("mouseleave",()=>{
  phoneLinkHover.reverse()
})

let emailLink = document.querySelector(".info_bar_link.email")
let emailLinkHover = gsap.to(emailLink,{
  paused:true,
  text:{
    value:"[christiandechkov@icloud.com]",
    delimiter:""
  }
})
emailLink.addEventListener("mouseover",()=>{
  emailLinkHover.play()
})
emailLink.addEventListener("mouseleave",()=>{
  emailLinkHover.reverse()
})

let resumeLink = document.querySelector(".info_bar_link.resume")
let resumeLinkHover = gsap.to(resumeLink,{
  paused:true,
  text:{
    value:"[download .pdf]",
    delimiter:""
  }
})
resumeLink.addEventListener("mouseover",()=>{
  resumeLinkHover.play()
})
resumeLink.addEventListener("mouseleave",()=>{
  resumeLinkHover.reverse()
})

let githubLink = document.querySelector(".info_bar_link.github")
let githubLinkHover = gsap.to(githubLink,{
  paused:true,
  text:{
    value:"[src of the website]",
    delimiter:""
  }
})
githubLink.addEventListener("mouseover",()=>{
  githubLinkHover.play()
})
githubLink.addEventListener("mouseleave",()=>{
  githubLinkHover.reverse()
})

let infoBarAppear = gsap.to(".info_bar",{
  paused:true,
  yPercent:-101,
})
ScrollTrigger.create({
  trigger:".contacts_wrapper",
  start:"top 80%",
  end:"bottom 20%",
  onEnter:()=>{
    infoBarAppear.play()
  },
  onLeave:()=>{
    infoBarAppear.reverse()
  },
  onEnterBack:()=>{
    infoBarAppear.play()
  },
  onLeaveBack:()=>{
    infoBarAppear.reverse()
  }
})
