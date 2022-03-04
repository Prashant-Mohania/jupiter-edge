console.log("hello");
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
      transition: "click",
      frames: [90, 180],
    },
    {
      state: "autoplay",
      transition: "complete",
      frames: [180, 220],
      reset: true,
    },
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
    {
      state: "autoplay",
      transition: "complete",
      frames: [220, 250],
      reset: true,
    },
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
      // transition: "click",
      frames: [90, 180],
    },
    {
      state: "autoplay",
      transition: "complete",
      frames: [180, 220],
      reset: true,
    },
  ],
});
// $(".vertical").addClass("active");

let calenderLottie = LottieInteractivity.create({
  player: "#calenderLottie",
  mode: "scroll",
  actions: [
    {
      visibility: [.1, .9],
      type: "loop",
      frames: [0, 180],
    },
  ],
});
