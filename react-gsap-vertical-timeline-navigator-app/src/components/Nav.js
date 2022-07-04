import styled from '@emotion/styled';
import {useId, createRef, useMemo, forwardRef, useState} from 'react';
import gsap from 'gsap';
import {Layout as SceneTitleLayout} from '../layouts/title';
import {Layout as SceneSubTitleLayout} from '../layouts/subTitle';
import {Layout as SceneCaptionLayout} from '../layouts/caption';
import {ScrollToPlugin} from 'gsap/all';
gsap.registerPlugin(ScrollToPlugin);

const StyledNav = styled.nav`
  & a {
    text-decoration: none;
  }

  & {
    position: fixed;
    z-index: 1;
    top: 5px;
    left: 5px;
    padding: 5px;
    display: flex;
    flex-flow: column nowrap;
    justify-content: flex-end;
  }

  & .nav {
    list-style: none;
    margin: 0 0 100px 30px;
    @media screen and (max-width: 768px) {
      margin: 0 0 10px 10px;
    }
    & li {
      & a {
        position: relative;
      }
      position: relative;
      transition: all 0.3s ease-out;
      margin-bottom: 15px;
      &:after {
        content: '';
        display: block;
        border-left: 2px solid #000;
        border-top: 2px solid #000;
        height: 150px;
        width: 10px;
        position: absolute;
        left: -30px;
        @media screen and (max-width: 768px) {
          left: -15px;
          top: 10px;
        }
        top: 15px;
      }
      & {
        .scene-sub-title,
        .scene-caption {
          height: 0;
          overflow: hidden;
          opacity: 0;
          visibility: hidden;
          transition: height 0.3s ease, opacity 0.2s ease;
        }
        .scene-title {
          font-size: 20px;
          font-weight: 800;
          @media screen and (max-width: 768px) {
            font-size: 18px;
          }
        }
        .scene-sub-title {
          @media screen and (max-width: 768px) {
            position: fixed;
            top: 5px;
            right: 5px;
          }
          font-size: 20px;
          font-weight: 500;
        }
        .scene-caption {
          @media screen and (max-width: 768px) {
            position: fixed;
            bottom: 5px;
            right: 5px;
          }
          font-size: 18px;
          font-weight: 300;
        }
      }
      &.active {
        .scene-title {
          font-size: 32px;
          @media screen and (max-width: 768px) {
            font-size: 28px;
          }
        }
        .scene-caption,
        .scene-sub-title {
          height: auto;
          opacity: 1;
          visibility: visible;
        }
      }
    }
  }
`;

const _Nav = ({children}, ref) => {
  const itemInfoList = [
    {
      id: useId(),
      sceneTitle: `01`,
      href: `#section1`,
      sceneSubTitle: `Prologue`,
      caption: `this is prologue caption.`,
    },
    {
      id: useId(),
      sceneTitle: `02`,
      href: `#section2`,
      sceneSubTitle: `Section 2 Title`,
      caption: `this is section 2 caption.`,
    },
    {
      id: useId(),
      sceneTitle: `03`,
      href: `#section3`,
      sceneSubTitle: `Section 3 Title`,
      caption: `this is section 3 caption.`,
    },
    {
      id: useId(),
      sceneTitle: `04`,
      href: `#section4`,
      sceneSubTitle: `Section 4 Title`,
      caption: `this is section 4 caption.`,
    },
    {
      id: useId(),
      sceneTitle: `05`,
      href: `#section5`,
      sceneSubTitle: `Section 5 Title`,
      caption: `this is section 5 caption.`,
    },
    {
      id: useId(),
      sceneTitle: `06`,
      href: `#section6`,
      sceneSubTitle: `Epilogue`,
      caption: `this is epilogue caption.`,
    },
  ];

  const detachActiveClass = () => {
    const domList = listRefs.map((listRef, index) => {
      return listRef.current;
    });
    for (let index = 0; index < domList.length; index++) {
      const dom = domList[index];
      if (dom.classList.contains('active')) {
        dom.classList.remove('active');
        setIsShow(false);
      }
    }
  };

  const handlePageJump = (e, sectionId, ref) => {
    detachActiveClass();
    ref.current.classList.add('active');
    setIsShow(true);
    setActiveSectionId(sectionId);
  };

  const [isShow, setIsShow] = useState(false);
  const [activeSectionId, setActiveSectionId] = useState('');

  const listRefs = useMemo(() => {
    return itemInfoList.map((_, index) => {
      return createRef();
    });
    // eslint-disable-next-line
  }, []);

  const renderMenu = ({itemInfoList}) => {
    return (
      <ul className="nav" ref={ref}>
        {itemInfoList.map((itemInfo, index) => {
          const sectionId = itemInfo.href.replace(/^#/, '');
          return (
            <li
              ref={listRefs[index]}
              className=""
              data-section-id={sectionId}
              key={itemInfo.id}
              onClick={(e) => {
                handlePageJump(e, sectionId, listRefs[index]);
              }}
            >
              <a href={`#${sectionId}`}>
                <SceneTitleLayout
                  isShow={isShow}
                  sectionId={sectionId}
                  activeSectionId={activeSectionId}
                >
                  <span data-section-id={sectionId} className="scene-title">
                    {itemInfo.sceneTitle}
                  </span>
                </SceneTitleLayout>
                <SceneSubTitleLayout
                  isShow={isShow}
                  sectionId={sectionId}
                  activeSectionId={activeSectionId}
                >
                  <h3 data-section-id={sectionId} className="scene-sub-title">
                    {itemInfo.sceneSubTitle}
                  </h3>
                </SceneSubTitleLayout>
                <SceneCaptionLayout
                  isShow={isShow}
                  sectionId={sectionId}
                  activeSectionId={activeSectionId}
                >
                  <p data-section-id={sectionId} className="scene-caption">
                    {itemInfo.caption}
                  </p>
                </SceneCaptionLayout>
              </a>
            </li>
          );
        })}
      </ul>
    );
  };

  return <StyledNav className="navbar">{renderMenu({itemInfoList})}</StyledNav>;
};

const Nav = forwardRef(_Nav);

export {Nav};
