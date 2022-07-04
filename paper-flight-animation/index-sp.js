import * as ScrollMagic from 'scrollmagic'; // Or use scrollmagic-with-ssr to avoid server rendering problems
import {TweenMax, TimelineMax} from 'gsap'; // Also works with TweenLite and TimelineLite
import {ScrollMagicPluginGsap} from 'scrollmagic-plugin-gsap';
ScrollMagicPluginGsap(ScrollMagic, TweenMax, TimelineMax);

class SpScroll {
  start() {
    console.log('SP');

    var svg = $('#Layer_1'),
      plane = $('.plane'),
      pathString = $('#pathCubic').attr('d'),
      pathCubic = Snap.path.toCubic(pathString),
      arrayPath = [],
      quantity = 900,
      duration = svg.height(),
      position = {
        x: pathCubic[0].x,
        y: [pathCubic[0].y],
      },
      dot,
      i;

    var controller = new ScrollMagic.Controller();

    // function to measure how to keep element vertically centered
    function calcOffset() {
      var center =
          $(window).scrollTop() + window.innerHeight / 2 - plane.height() / 2,
        offset = plane.position().top,
        distance = center - offset;
    }

    // grab svg and turn it into x & y coords
    function setUpPoint(segment) {
      for (var i = 0; i < segment.length; i += 2) {
        //create a new object for the point so it can be passed to the bezier plugin
        var point = {};
        point.x = segment[i];
        point.y = segment[i + 1];
        //add the point to the array
        arrayPath.push(point);
      } //loop end
    }

    //set starting position for plane
    TweenLite.set(plane, {
      x: 0,
      y: -180,
    });

    // loop through the curves collection
    for (var i = 0; i < pathCubic.length; i++) {
      var segment = pathCubic[i],
        point;
      // 1st element returned in the array is a letter, remove it
      segment.shift();
      //call the function to set up the points based on the segment returned
      point = setUpPoint(segment);
    }

    // add looping plane to timeline
    var planeTL1 = new TimelineMax().add(
      TweenMax.to(plane, duration, {
        bezier: {
          values: arrayPath,
          type: 'cubic',
          autoRotate: true,
        },
        ease: Linear.easeNone,
        onUpdate: calcOffset,
      })
    );

    var dotTweenTwo = TweenMax.to(position, quantity, {
      bezier: {
        values: arrayPath,
        type: 'cubic',
      },
      ease: Linear.easeOut,
    });

    for (var i = 0; i < quantity; i++) {
      dotTweenTwo.time(i);
      //create each dot, add id, .dot class, set position, add it to the container.
      dot = $('<div />', {
        id: 'dot' + i,
      })
        .addClass('dot')
        .css({
          left: position.x + 'px',
          top: position.y + 'px',
        })
        .appendTo('.container');

      planeTL1.set(
        dot,
        {
          visibility: 'visible',
        },
        i * (duration / quantity) + 0.001
      );
    }

    // build scene
    var scene = new ScrollMagic.Scene({
      triggerElement: '.container',
      duration: duration,
    })
      .setTween(planeTL1)
      .addTo(controller)
      // when scroll direction changes, plane direction changes
      .on('update', function (e) {
        var st = e.target.controller().info('scrollDirection');
        if (st === 'FORWARD') {
          plane.attr(
            'src',
            'http://static.indigoimages.ca/2016/shop/114450_img01_blueAirplane_45deg.png'
          );
        } else if (st === 'REVERSE') {
          plane.attr(
            'src',
            'http://static.indigoimages.ca/114450_img01_blueAirplane_45deg__REVERSED.png'
          );
        }
      });
  }
}

export {SpScroll};
