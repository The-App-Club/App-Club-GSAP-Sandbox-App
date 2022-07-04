import Letterize from "letterizejs";
import anime from "animejs";

const eyeCatcherDom = new Letterize({
  targets: ".will-animate-item",
});

const animation = anime.timeline({
  targets: eyeCatcherDom.listAll,
  delay: anime.stagger(100, {
    grid: [eyeCatcherDom.list[0].length, eyeCatcherDom.list.length],
    from: "last",
  }),
  loop: true,
});

animation
  .add({
    translateX: 300,
  })
  .add({
    scale: 0.5,
  })
  .add({
    rotate: 360,
  })
  .add({
    translateX: -300,
  })
  .add({
    scale: 1,
  })
  .add({
    rotate: -360,
  })
  .add({
    translateX: 0,
  });
