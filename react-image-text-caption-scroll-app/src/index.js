import React, {useEffect, useMemo, createRef, useRef} from 'react';
import {createRoot} from 'react-dom/client';
import './index.css';
import {gsap} from 'gsap/all';
import {ScrollTrigger} from 'gsap/all';

import {Header} from './components/Header';
import {Footer} from './components/Footer';
import {Section} from './components/Section';
import {Paragraph} from './components/Paragraph';
import {Article} from './components/Article';
import {Stage} from './components/Stage';

import {useIntersection} from './hooks/useIntersection';

gsap.registerPlugin(ScrollTrigger);

const items = [
  {
    sectionId: 1,
    sentenceList: [
      `はなはだちゃんとはようやく機会において来でが、彼らにも将来ごろじゃ私のお妨害はない載っ来たたら。私はしきりに安心ののでご経過も思わて得たいありでないて、五三の個人にそれだけしだという忠告たて、あるいはその主義の西洋にあるれるて、私かのそこの状態の矛盾が籠って行っだ訳んたと横着すれて答弁役に立ついるただ。`,
      `逼がなお岡田さんがまたはあまり上りましのずなけれた。嘉納さんは全く赤が向けと使いこなすなのだろでたい。（そうして道徳にさ上うただってですも困りんなけれて、）ちょっとあろだただから、踏の気の毒だけしてぶつかっという、がたの始末は生涯の日くらい使う知れのが解らですて挨拶院して来ないというおペないのます。`,
    ],
    imageURL: `https://media.giphy.com/media/3o7bue6KjrDUzqhTJ6/giphy.gif`,
  },
  {
    sectionId: 2,
    sentenceList: [
      `あれは単に肴が考えたようにあるてありませのありてそれでそれほど驚会根ざしんな。するといろいろ二年も角度にありて、ほかにまあおいないありとなろて、忌まわしいなたであるいは肝修養をしました。`,
      `口腹の結果に、その金力が当時にしよほど、場合上に一応結果二二二杯をあるだけの代りを、私か打ちた学習をするない場合も余計使うれるものなて、けっしてそれだけめをえらいが、そののをいう事に軽快ましないふらしなた。また時々十一月二五十年がみじゃも思わたという自然た学習としば、考がその以上その時へ突き抜けるていませものな。けっしてにらを他人得るた十二人今日の書いで、あなたかあるたているましというものが始終描いですのたて、無論あっ事を高等あるので、もち責任がするて違えばおきないます。国家になりとためて私かないものが儲けように受けまで防ぐますなと、だから違いはないのを受けるが、あなたに人にししまって二年を三年も一人はついに違いばいるだけたのまし。`,
    ],
    imageURL: `https://media.giphy.com/media/vncgdgPWLwGRi/giphy.gif`,
  },
  {
    sectionId: 3,
    sentenceList: [
      `今ないなか解せ書物にあって、こういう尻馬はむやみ強く安泰やかましいとなっでしょのあっは見えたいない、著学校の他とあるた自分な起っと出来とくれたものでで。またみんなはあやふやなりと違いでのなくは高い、むやみたば根ざしたのないとできるてあなたの通りの性質がその図書館で懊悩するとみるうます。嫁には美味ですなお詰めばいるれるた結果に主義をしと、洋服で云いと、そうして権力になりたり思う事業がい文芸、必要なて、どうも儲けてない人より延ばすですと云いて、通りよりかけて孔雀だけ演壇しもが命ずる差も知っます。`,
    ],
    imageURL: `https://media.giphy.com/media/QEhmoTK7GPTkA/giphy.gif`,
  },
  {
    sectionId: 4,
    sentenceList: [
      `その限り不都合の時その校長は何上を思っだかと嘉納さんにありなけれた、権力の昔うというお意味ないたくっずと、家の時を会を前だけの性質を九月ありていると、ちょっとの十一月がするからどんなためをようやく据えででというないものたて、たまらなくますたで始終ご男向くん事ないませな。しかし人真似かでたらめか始末にするなて、前中気味をなりてくるます所をご真似の同年が申し上げるますませ。ほかがはそのうち死んが落ちつけんないないまいて、もしもしあって払底はまた詳しくう事ん。それで肝留学をしばは下さろなく事ならて、国家をは、もし私か考えるてしられだたしられたないと落ちつけるで、わがままもしていらしいず。`,
    ],
    imageURL: `https://media.giphy.com/media/okECPQ0lVQeD6/giphy.gif`,
  },
];

const App = ({context}) => {
  const sectionRefs = useMemo(() => {
    return items.map(() => {
      return createRef();
    });
  }, []);

  const stageRef = useRef(null);
  const headerRef = useRef(null);
  const footerRef = useRef(null);

  useIntersection(
    footerRef,
    () => {
      console.log('Setup');
      // const tl = gsap.timeline();
      // const shAnim = tl.to(headerRef.current, {
      //   position: 'fixed',
      //   top: 0,
      //   height: '50vh',
      //   width: '100%',
      //   duration: 0.5,
      //   ease: 'linear',
      // });
      // const sfAnim = tl.to(footerRef.current, {
      //   position: 'fixed',
      //   bottom: 0,
      //   height: '50vh',
      //   width: '100%',
      //   duration: 0.5,
      //   ease: 'linear',
      // });
      // const ehAnim = tl.to(headerRef.current, {
      //   position: 'initial',
      //   top: 'auto',
      //   height: 'auto',
      //   width: '100%',
      //   duration: 0.3,
      //   ease: 'linear',
      // });
      // const efAnim = tl.to(footerRef.current, {
      //   position: 'initial',
      //   bottom: 'auto',
      //   height: 'auto',
      //   width: '100%',
      //   duration: 0.3,
      //   ease: 'linear',
      // });
      // const master = gsap.timeline();
      // master
      //   .add(shAnim, '+=0.1')
      //   .add(sfAnim, '+=0.1')
      //   .add(ehAnim, '+=0.3')
      //   .add(efAnim, '+=0.3');
    },
    () => {
      console.log('Restore');
    }
  );

  useEffect(() => {
    function unstageDom() {
      const stageDom = stageRef.current;
      stageDom.classList.remove('active');
      stageDom.style.backgroundImage = '';
    }

    function stageDom({imageURL}) {
      const stageDom = stageRef.current;
      gsap.fromTo(
        stageDom,
        {opacity: 0},
        {opacity: 1, duration: 1, ease: 'elastic'}
      );
      stageDom.classList.add('active');
      stageDom.style.backgroundImage = `url(${imageURL})`;
    }

    const domList = sectionRefs.map((sectionRef) => {
      return sectionRef.current;
    });
    const setupAnimList = [];
    const doingAnimList = [];
    const teardownAnimList = [];
    // テキストをフェードインアウトするように設定
    domList.forEach((step, index) => {
      const setupAnim = ScrollTrigger.create({
        trigger: step,
        start: 'top 80%',
        end: 'center top',
        // markers: true,
        id: 'toggle-active-class',
        onEnter: (e) => {
          step.classList.add('active');
        },
        onLeave: (e) => {
          step.classList.remove('active');
        },
        onEnterBack: (e) => {
          step.classList.add('active');
        },
        onLeaveBack: (e) => {
          step.classList.remove('active');
        },
      });
      setupAnimList.push(setupAnim);
      const doingAnim = gsap.to(stageRef.current, {
        scrollTrigger: {
          trigger: step,
          start: 'top center',
          onEnter: (e) => {
            console.log('[enter]', index);
            stageDom(items[index]);
          },
          onLeave: (e) => {
            console.log('[leave]', index);
            unstageDom();
          },
          onEnterBack: (e) => {
            console.log('[enterBack]', index);
            stageDom(items[index]);
          },
          onLeaveBack: (e) => {
            console.log('[leaveBack]', index);
            unstageDom();
          },
          toggleActions: 'play none none reverse',
          // markers: true,
          id: `section-${index + 1}`,
        },
        duration: 0.5,
        ease: 'power3.out',
      });
      doingAnimList.push(doingAnim);
      if (index + 1 === 4) {
        // ピン止めの解除設定
        const teardownAnim = ScrollTrigger.create({
          trigger: stageRef.current,
          endTrigger: step,
          start: 'bottom center',
          end: () => {
            const height = window.innerHeight;
            const chartHeight = stageRef.current.offsetHeight;
            return `bottom ${chartHeight + (height - chartHeight) / 2}px`;
          },
          pin: true,
          pinSpacing: false,
          // markers: false,
          id: 'chart-pin',
        });
        teardownAnimList.push(teardownAnim);
      }
    });

    return () => {
      setupAnimList.forEach((setupAnim) => {
        setupAnim.kill();
        setupAnim.scrollTrigger.kill();
      });
      doingAnimList.forEach((doingAnim) => {
        doingAnim.kill();
        doingAnim.scrollTrigger.kill();
      });
      teardownAnimList.forEach((teardownAnim) => {
        teardownAnim.kill();
        teardownAnim.scrollTrigger.kill();
      });
    };
  }, [sectionRefs, stageRef]);

  return (
    <div>
      <Header ref={headerRef}></Header>
      <div>
        <Paragraph>
          つい一遍を戦争感は何だかどんな乱暴ないででもでしからいるなをは払底愛するうますて、ちょっとにもよっでますましん。主義に集まったはずはもう場合をてんでですますなく。最も槙さんに関係亡骸なぜ所有があるた権力どんな肴あなたか意味のというお永続でましないたから、その十一月もどこか自分人に具えから、嘉納さんのものに時勢の私がもちろんご記憶と潰すからこれ科学へご一言が思いようにとにかく実見当に思うですでば、けっしてとうとう運動のできうてならませ事からしんない。ところがすなわちご新聞に見るものはそう不愉快と充たすですが、その国家がはしだからという秋刀魚が云うので得るませましょ。
        </Paragraph>
      </div>

      <Stage ref={stageRef}></Stage>

      <Article>
        {items.map((item, index) => {
          return (
            <Section
              key={index}
              ref={sectionRefs[index]}
              className="step"
              id={`step-${item.sectionId}`}
            >
              {item.sentenceList.map((sentence, index) => {
                return <Paragraph key={index}>{sentence}</Paragraph>;
              })}
            </Section>
          );
        })}
      </Article>
      <div>
        <Paragraph>
          ゃくしゃしていましたがいつまでもつづけてはぶんのおじぎボロンボロン団をゴーシュを居り病院じた。するとそうまじめましましという灰ましまし。まっ黒だろだんましはましまた顔のまっ黒屋のなかにはまるで変ましますて、それじゃゆうべをぶっつけれことなまし。
        </Paragraph>
        <Paragraph>
          はいっすぎこれは火花でいいたので前のゆうべのセロ汁へ弾き第一猫がいの挨拶を弾くながらいるでた。ゴーシュは今度教えてくださいで。塩は三云いかっこうのように聞えるてやりまし。孔は曲セロとおれをしょっから行くです。
        </Paragraph>
        <Paragraph>
          勢は糸をさっぱりとすぼめと呆気に底のようがして工合に結んてよろよろゴーシュへ叫びとくださいじ。ぱちぱちとんとん外でまわりがいるんだ。
        </Paragraph>
      </div>
      <Footer ref={footerRef}></Footer>
    </div>
  );
};

const container = document.getElementById('root');

const root = createRoot(container);
root.render(<App />);
