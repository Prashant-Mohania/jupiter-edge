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
      transition: "onComplete",
      frames: [220, 240],
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
$("#text-carousel").carousel();

$("#img-carousel").on("slide.bs.carousel", function (event) {
  // do something…
  var to = $(event.relatedTarget).index();
  $("#text-carousel").carousel(to);
  console.log("slide");
});
