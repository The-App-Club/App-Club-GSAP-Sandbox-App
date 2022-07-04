import {useContext} from 'react';
import {NiceContext} from '../contexts/Nice';

const Menu = () => {
  const {selected, setSelected} = useContext(NiceContext);

  const onChange = (e) => {
    setSelected(e.target.value);
  };

  return (
    <div className="menu">
      <label>
        <input
          onChange={onChange}
          checked={selected === '1'}
          type="radio"
          value="1"
          name="selcted"
        />
        Box 1
      </label>
      <label>
        <input
          onChange={onChange}
          checked={selected === '2'}
          type="radio"
          value="2"
          name="selcted"
        />
        Box 2
      </label>
      <label>
        <input
          onChange={onChange}
          checked={selected === '3'}
          type="radio"
          value="3"
          name="selcted"
        />
        Box 3
      </label>
    </div>
  );
};

export {Menu};
