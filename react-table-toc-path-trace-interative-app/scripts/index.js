import {v4 as uuid} from 'uuid';

const itemInfoList = [
  {
    id: uuid(),
    href: `#intro`,
    title: `Intro`,
    children: [],
  },
  {
    id: uuid(),
    href: `#dev`,
    title: `Developer Mode`,
    children: [
      {
        id: uuid(),
        href: `#dev-edit-html`,
        title: `Edit HTML`,
        children: [],
      },
      {
        id: uuid(),
        href: `#dev-element-classes`,
        title: `Element Classes`,
        children: [],
      },
      {
        id: uuid(),
        href: `#dev-slide-classes`,
        title: `Slide Classes`,
        children: [],
      },
      {
        id: uuid(),
        href: `#dev-export-html`,
        title: `Export HTML`,
        children: [],
      },
    ],
  },
  {
    id: uuid(),
    href: `#css`,
    title: `CSS Editor`,
    children: [
      {
        id: uuid(),
        href: `#css-fonts`,
        title: `Custom Fonts`,
        children: [],
      },
      {
        id: uuid(),
        href: `#css-developer-mode`,
        title: `Developer Mode`,
        children: [],
      },
      {
        id: uuid(),
        href: `#css-examples`,
        title: `Examples`,
        children: [],
      },
    ],
  },
];

function toFlat(itemInfoList, resultInfoList) {
  function walk(itemInfoList, resultInfoList) {
    if (itemInfoList.length === 0) {
      return resultInfoList;
    }
    itemInfoList.forEach((itemInfo) => {
      resultInfoList.push({
        id: itemInfo.id,
        href: itemInfo.href,
        title: itemInfo.title,
      });
      if (itemInfo.children) {
        return walk(itemInfo.children, resultInfoList);
      }
    });
  }
  walk(itemInfoList, resultInfoList);
  return resultInfoList;
}

console.log(toFlat(itemInfoList, []));
