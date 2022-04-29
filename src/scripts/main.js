import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { TextPlugin } from "gsap/TextPlugin";
import { Flip } from "gsap/Flip";
import SplitType from 'split-type';
import { info_bar } from './info_bar';
import { projects } from './projects';
import { text } from './text'

gsap.registerPlugin(TextPlugin, ScrollTrigger, Flip)

import {loaderOff, loaderOn, jurkane, heroScroll} from "./loader";

var imagesLoaded = require('imagesloaded');
let images = document.querySelectorAll("img")
 imagesLoaded(images, function(){
   loaderOff.play(),
   loaderOn.kill(),
   jurkane.play()
 })
 
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