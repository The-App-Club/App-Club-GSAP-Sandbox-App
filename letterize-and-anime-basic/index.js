import Letterize  from "letterizejs";
import anime from "animejs";

const eyeCatcherDom = new Letterize({
  targets: ".eye-catcher"
});

var animation = anime.timeline({
  targets: eyeCatcherDom.listAll,
  delay: anime.stagger(50),
  loop: true
});

animation
  .add({
    translateY: -40
  })
  .add({
    translateY: 0
  })
  ;