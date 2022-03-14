let firstLottie = LottieInteractivity.create({
  player: "#firstLottie",
  mode: "chain",
  actions: [
    {
      state: "autoplay",
      transition: "onComplete",
      frames: [0, 90],
    },
    {
      state: "loop",
      transition: "onComplete",
      frames: [90, 260],
    },
    // {
    //   state: "autoplay",
    //   transition: "onComplete",
    //   frames: [230, 280],
    //   reset: true,
    // },
  ],
});
let secondLottie = LottieInteractivity.create({
  player: "#secondLottie",
  mode: "chain",
  actions: [
    {
      state: "autoplay",
      transition: "onComplete",
      frames: [0, 90],
    },
    {
      state: "loop",
      transition: "onComplete",
      frames: [90, 220],
    },
    // {
    //   state: "autoplay",
    //   transition: "onComplete",
    //   frames: [220, 240],
    //   reset: true,
    // },
  ],
});
let thirdLottie = LottieInteractivity.create({
  player: "#thirdLottie",
  mode: "chain",
  actions: [
    {
      state: "autoplay",
      transition: "onComplete",
      frames: [0, 90],
    },
    {
      state: "loop",
      transition: "onComplete",
      frames: [90, 200],
    },
    // {
    //   state: "autoplay",
    //   transition: "onComplete",
    //   frames: [180, 220],
    //   reset: true,
    // },
  ],
});

let landingAnim = LottieInteractivity.create({
  player: "#landing-anim",
  mode: "scroll",
  actions: [
    {
      visibility: [0, 0.2],
      type: "stop",
      frames: [0],
    },
    {
      visibility: [0.2, 1.0],
      type: "loop",
      frames: [0, 240],
    },
  ],
});

let calenderAnim = LottieInteractivity.create({
  player: "#calender-anim",
  mode: "scroll",
  actions: [
    {
      visibility: [0, 0.2],
      type: "stop",
      frames: [0],
    },
    {
      visibility: [0.2, 1.0],
      type: "loop",
      frames: [0, 240],
    },
  ],
});

let conveyorAnim = LottieInteractivity.create({
  player: "#conveyor-anim",
  mode: "scroll",
  actions: [
    {
      visibility: [0, 0.2],
      type: "stop",
      frames: [0],
    },
    {
      visibility: [0.2, 1.0],
      type: "loop",
      frames: [0, 240],
    },
  ],
});

let summaryAnim = LottieInteractivity.create({
  player: "#summary-anim",
  mode: "scroll",
  actions: [
    {
      visibility: [0, 0.2],
      type: "stop",
      frames: [0],
    },
    {
      visibility: [0.2, 1.0],
      type: "loop",
      frames: [0, 240],
    },
  ],
});

function splitScroll(element) {
  const controller = new ScrollMagic.Controller();

  new ScrollMagic.Scene({
    duration: "200%",
    triggerElement: element,
    triggerHook: 0,
  })
    .setPin(element)
    .addTo(controller);
}

splitScroll(".slider-right");
splitScroll(".slider-indicator");

console.log(0);
