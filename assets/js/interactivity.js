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
// $(".vertical").addClass("active");
// $("#text-carousel").carousel();

$("#img-carousel").on("slide.bs.carousel", function (event) {
  var to = $(event.relatedTarget).index();
  $("#text-carousel").carousel(to);
});
