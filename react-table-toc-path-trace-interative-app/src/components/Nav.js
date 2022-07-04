import styled from '@emotion/styled';
import {useId} from 'react';
import {useTraceToc} from '../hooks/useTraceToc';

const StyledToc = styled.nav`
  & {
    position: fixed;
    left: 3rem;
    top: 5rem;
    padding: 1rem;
    width: 14rem;
    line-height: 2;
  }
  & ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }
  & ul ul {
    padding-left: 2rem;
  }
  & li a {
    display: inline-block;
    color: #aaa;
    text-decoration: none;
    transition: all 0.3s cubic-bezier(0.23, 1, 0.32, 1);
  }
  & li.visible > a {
    color: #111;
    transform: translate(5px);
  }
`;
const StyledTocMarker = styled.svg`
  & {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
  }
  & path {
    transition: all 0.3s ease;
  }
`;

const Nav = () => {
  const itemInfoList = [
    {
      id: useId(),
      href: `#intro`,
      title: `Intro`,
      children: [],
    },
    {
      id: useId(),
      href: `#dev`,
      title: `Developer Mode`,
      children: [
        {
          id: useId(),
          href: `#dev-edit-html`,
          title: `Edit HTML`,
          children: [],
        },
        {
          id: useId(),
          href: `#dev-element-classes`,
          title: `Element Classes`,
          children: [],
        },
        {
          id: useId(),
          href: `#dev-slide-classes`,
          title: `Slide Classes`,
          children: [],
        },
        {
          id: useId(),
          href: `#dev-export-html`,
          title: `Export HTML`,
          children: [],
        },
      ],
    },
    {
      id: useId(),
      href: `#css`,
      title: `CSS Editor`,
      children: [
        {
          id: useId(),
          href: `#css-fonts`,
          title: `Custom Fonts`,
          children: [],
        },
        {
          id: useId(),
          href: `#css-developer-mode`,
          title: `Developer Mode`,
          children: [],
        },
        {
          id: useId(),
          href: `#css-examples`,
          title: `Examples`,
          children: [],
        },
      ],
    },
  ];

  const [setTocRef, setTocMarkerPathRef] = useTraceToc();

  const renderMenu = ({itemInfoList}) => {
    if (itemInfoList.length === 0) {
      return;
    }
    return (
      <ul>
        {itemInfoList.map((itemInfo, index) => {
          if (itemInfo.children.length > 0) {
            return (
              <li key={index}>
                <a href={itemInfo.href}>{itemInfo.title}</a>
                {renderMenu({itemInfoList: itemInfo.children})}
              </li>
            );
          }
          return (
            <li key={itemInfo.id}>
              <a href={itemInfo.href}>{itemInfo.title}</a>
            </li>
          );
        })}
      </ul>
    );
  };

  return (
    <StyledToc className="toc" ref={setTocRef}>
      {renderMenu({itemInfoList})}
      <StyledTocMarker
        className="toc-marker"
        width="200"
        height="200"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          ref={setTocMarkerPathRef}
          stroke="#444"
          strokeWidth="3"
          fill="transparent"
          strokeDasharray="0, 0, 0, 1000"
          strokeLinecap="round"
          strokeLinejoin="round"
          transform="translate(-0.5, -0.5)"
        />
      </StyledTocMarker>
    </StyledToc>
  );
};

export {Nav};
