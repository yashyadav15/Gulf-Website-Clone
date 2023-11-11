//Scroller Bar
var crsr = document.querySelector("#cursor");
var blur  = document.querySelector("#cursor-blur");
document.addEventListener("mousemove",function(dets){
    crsr.style.left = dets.x+"px";
    crsr.style.top = dets.y + "px";
    blur.style.left = dets.x - 100 + "px";
    blur.style.top = dets.y - 100  + "px";



})


var allone = document.querySelectorAll("#nav h4");
allone.forEach(function(elem){
    elem.addEventListener("mouseenter",function(){
        crsr.style.scale = 3;
        crsr.style.border = "1px solid #fff";
        crsr.style.backgroundColor = "transparent";
    })
    elem.addEventListener("mouseleave", function () {
      crsr.style.scale = 1;
      crsr.style.border = "0px solid #95C11E";
      crsr.style.backgroundColor = "#95C11E";
    });
})


// about us scroll bar animations

gsap.from("#aboutus img, #aboutdesc", {
  y: 50,
  opacity: 0,
  duration: 1,
  scrollTrigger: {
    trigger: "#aboutus",
    scroller: "body",
    // markers:true,
    start: "top 70%",
    end: "top 65%",
    scrub: 1,
  },
});

// card section animation gsap

gsap.from(".card", {
  scale: 0.8,
  opacity:0,
  duration: 1,
  stagger:0.1,
  scrollTrigger: {
    trigger: ".card",
    scroller: "body",
    // markers:false,
    start: "top 70%",
    end: "top 65%",
    scrub: 2,
  },
});

// Colon1 

gsap.from("#colon1", {
  y: -70,
  x: -70,
  scrollTrigger: {
    trigger: "#colon1",
    scroller: "body",
    // markers:true,
    start: "top 55%",
    end: "top 45%",
    scrub: 4,
  },
});
// Colon2 

gsap.from("#colon2", {
  y: 70,
  x: 70,
  scrollTrigger: {
    trigger: "#colon1",
    scroller: "body",
    // markers:true,
    start: "top 55%",
    end: "top 45%",
    scrub: 4,
  },
});
 
// page 4
gsap.from("#page4 h2", {
  y: 50,
  scrollTrigger: {
    trigger: "#page4 h2",
    scroller: "body",
    // markers:true,
    start: "top 80%",
    end: "top 70%",
    scrub: 3,
  },
});










// Navbar Gsap
gsap.to("#nav",{
    backgroundColor : "#000",
    duration:0.5,
    height:"75px",
    scrollTrigger:{
        trigger:"#nav",
        scroller:"body",
        // markers:true,
        start:"top -10%",
        end:"top -11%",
        scrub:1
    }
})

// Page 2 GSAP
gsap.to("#main",{
    backgroundColor: "#000",
    scrollTrigger:{
        trigger:"#main",
        scroller:"body",
        start:"top -30%",
        end:"top -80%",
        scrub:2

    }
})