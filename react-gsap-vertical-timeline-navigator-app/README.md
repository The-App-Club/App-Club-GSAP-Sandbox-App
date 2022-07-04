- Reference

  - [react-intersection-observer](https://github.com/thebuilder/react-intersection-observer)
  - [intersection-observer-using-react](https://dev.to/producthackers/intersection-observer-using-react-49ko)

- Memo
  - アンカーページジャンプとスクロールイベントを監視する IntersectionObserver との兼ね合い
    - click イベントを発火させないでアンカーのデフォルトの動きを尊重する
      - ページジャンプによるスクロールイベントとデフォルトのスクロールイベントを区別できなくなるため
        - NG
          ```javascript
          const handlePageJump = (e, sectionId, ref) => {
            e.preventDefault();
            gsap.to(window, {
              duration: 0.3,
              scrollTo: {y: `#${sectionId}`, offsetY: 30},
            });
            detachActiveClass();
            ref.current.classList.add('active');
          };
          ```
        - OK
          ```javascript
          const handlePageJump = (e, sectionId, ref) => {
            detachActiveClass();
            ref.current.classList.add('active');
          };
          ```
  - Layout で fixed する際のスクロールイベントを監視する IntersectionObserver との兼ね合い
    - 親と子でそれぞれ fixed しておかないといけない
    - 少しずれるのが気に入らない
