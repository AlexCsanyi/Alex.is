TweenMax.to(".overlay h1", 2, {
  opacity: 0,
  y: -100,
  ease: Expo.easeInOut
});

TweenMax.to(".overlay", 2, {
  delay: 1,
  top: "-100%",
  ease: Expo.easeInOut
});

TweenMax.from(".navbar-brand", 1, {
  delay: 2.4,
  opacity: 0,
  y: 20,
  ease: Expo.easeInOut
});

TweenMax.staggerFrom(
  ".navbar-collapse ul li",
  1,
  {
    delay: 2.4,
    opacity: 0,
    y: 20,
    ease: Expo.easeInOut
  },
  0.2
);

TweenMax.staggerFrom(
  ".social-media ul li",
  1,
  {
    delay: 2.4,
    opacity: 0,
    y: 20,
    ease: Expo.easeInOut
  },
  0.2
);

TweenMax.from(".side-bar", 2, {
  delay: 2.4,
  opacity: 0,
  y: 20,
  ease: Expo.easeInOut
});
