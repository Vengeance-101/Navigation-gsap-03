var tl = gsap.timeline({ paused: true });

tl.to(".nav-container", 0.1, {
  autoAlpha: 1,
});

tl.to(
  ".site-logo",
  0.2,
  {
    color: "white",
  },
  "-=0.1"
);

tl.to(".flex >div", 0.2, {
  opacity: 1,
  y: 0,
  stagger: 0.1,
});
tl.to(".nav-socials a", 0.3, {
  delay: 0.1,
  opacity: 1,
  x: 0,
  stagger: 0.1,
});

tl.to(
  ".nav-link>a",
  0.4,
  {
    top: 0,
    ease: "power2.inOut",
    stagger: 0.2,
  },
  "-=0.4"
);
tl.to(
  ".nav-footer",
  0.5,
  {
    delay: 0.1,
    bottom: 0,
  },
  "-=0.5"
);

var toggleBtn = document.querySelector("#menu-toggle-btn");
toggleBtn.addEventListener("click", function () {
  var click = this.classList.toggle("active");
  if (click) {
    tl.play();
  } else {
    [tl.reverse()];
  }
});
