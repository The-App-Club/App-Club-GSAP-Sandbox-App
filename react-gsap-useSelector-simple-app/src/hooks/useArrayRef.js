import {useRef} from 'react';

function useArrayRef() {
  const refs = useRef([]);
  refs.current = [];
  return [
    refs,
    (ref) => {
      ref && refs.current.push(ref);
    },
  ];
}

export {useArrayRef};
