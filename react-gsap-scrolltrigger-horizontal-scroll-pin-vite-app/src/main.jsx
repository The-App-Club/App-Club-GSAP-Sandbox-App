import {createRoot} from 'react-dom/client';
import {css, cx} from '@emotion/css';
import Lenis from '@studio-freight/lenis';
import {useEffect, useRef, useMemo} from 'react';
import {HorizontalScrollContent} from './components/HorizontalScrollContent';
import '@fontsource/inter';
import './styles/index.css';
import './styles/index.scss';

const App = () => {
  // const reqId = useRef(null);

  // const lenis = useMemo(() => {
  //   // Smooth scrolling initialization (using Lenis https://github.com/studio-freight/lenis)
  //   if (window.matchMedia('(max-width: 768px)').matches) {
  //     return new Lenis({
  //       lerp: 0.05,
  //       smooth: true,
  //     });
  //     // return null;
  //   } else {
  //     return new Lenis({
  //       lerp: 0.05,
  //       smooth: true,
  //     });
  //   }
  // }, []);

  // useEffect(() => {
  //   if (lenis) {
  //     (() => {
  //       const animate = (time) => {
  //         lenis.raf();
  //         reqId.current = window.requestAnimationFrame(animate);
  //       };
  //       animate();
  //     })();
  //   }
  //   return () => {
  //     if (reqId.current) {
  //       window.cancelAnimationFrame(reqId.current);
  //     }
  //   };
  // }, []);

  return (
    <div>
      <section className="min-h-screen w-full flex items-center justify-center text-3xl">
        Scene1
      </section>
      <section className="min-h-screen w-full flex items-center justify-center text-3xl">
        Scene2
      </section>

      <HorizontalScrollContent isDebug={false} />

      <section className="min-h-screen w-full flex items-center justify-center text-3xl">
        Scene3
      </section>

      <section className="min-h-screen w-full flex items-center justify-center text-3xl">
        Scene4
      </section>

      <section className="min-h-screen w-full flex items-center justify-center text-3xl">
        Scene5
      </section>
    </div>
  );
};

const scrollingDom = document.getElementById('root');

const root = createRoot(scrollingDom);

root.render(<App />);
