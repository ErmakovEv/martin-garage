/// <reference types="vite-plugin-svgr/client" />
import CATEGORIESMAP from '../utils/utils';
import './ButtonsGroup.css';

interface ButtonsGroupProps {
  handleClick: (cat: keyof typeof CATEGORIESMAP) => void;
  bottonActive: keyof typeof CATEGORIESMAP;
}

function ButtonsGroup({ handleClick, bottonActive }: ButtonsGroupProps) {
  return (
    <div className="buttons-group">
      <ul className="buttons-list">
        {Object.values(CATEGORIESMAP).map((value) => {
          if (value.name !== 'none') {
            return (
              <li key={value.name}>
                <label htmlFor={value.name}>
                  <input
                    type="radio"
                    id={value.name}
                    name="systems"
                    value={value.name}
                    onChange={() => handleClick(value.name)}
                    checked={bottonActive === value.name}
                  />
                  {value.img && (
                    <value.img fill="black" width="48" className="button" />
                  )}
                  <span></span>
                </label>
              </li>
            );
          }
          return null;
        })}
      </ul>
    </div>
  );
}

export default ButtonsGroup;
