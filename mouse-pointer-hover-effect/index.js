import gsap, {Power2} from 'gsap';

const pointer = document.createElement('div');

// 見た目を整える
pointer.style.width = '20px';
pointer.style.height = '20px';
pointer.style.borderRadius = '50%';
pointer.style.backgroundColor = 'gray';
pointer.style.opacity = '0.5';

// 他の要素の上に表示されるように `z-index` の値を上げる
pointer.style.zIndex = '100000';

// 初期位置をページの真ん中にする
pointer.style.position = 'absolute';
pointer.style.transform = 'translate(-50%, -50%)';
pointer.style.top = '50%';
pointer.style.left = '50%';

// ポインターに対してのマウスイベントを透過させる
pointer.style.pointerEvents = 'none';

// ページに表示する
document.body.append(pointer);

window.addEventListener('mousemove', (event) => {
  const {pageX, pageY, clientX, clientY} = event;

  // マウス下の要素一覧を取得
  const elements = document.elementsFromPoint(clientX, clientY);
  // クラスが付いている要素を探す
  const target = elements.find((el) => el.classList.contains('item'));

  if (target) {
    // 要素があった時はポインターを要素と同じ場所・大きさに変形させる
    const rect = target.getBoundingClientRect();
    const top = rect.top + rect.height / 2;
    const left = rect.left + rect.width / 2;
    const {width, height} = rect;
    const borderRadius = Math.min(rect.height, rect.width) * 0.1;

    gsap.to(pointer, {
      top,
      left,
      width,
      height,
      borderRadius,
      duration: 0.1,
      ease: Power2.easeOut,
      overwrite: true,
    });
  } else {
    // 要素がない場合は元の形状に戻す
    gsap.to(pointer, {
      width: 20,
      height: 20,
      borderRadius: '50%',
      duration: 0.1,
      ease: Power2.easeOut,
      overwrite: true,
    });

    // マウス座標に移動させる
    gsap.to(pointer, {
      top: pageY,
      left: pageX,
      duration: 0.05,
      ease: Power2.easeOut,
    });
  }
});
