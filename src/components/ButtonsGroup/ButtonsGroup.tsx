/// <reference types="vite-plugin-svgr/client" />
import CATEGORIESMAP from '../utils/utils';
import SystemButton from '../SystemButton/SystemButton';
import './ButtonsGroup.css';

function ButtonsGroup() {
  return (
    <div className="buttons-group">
      {Object.entries(CATEGORIESMAP).map(([k, value]) => {
        if (value.name !== 'none') {
          return (
            <SystemButton
              k={k as keyof typeof CATEGORIESMAP}
              key={k}
              value={value}
            />
          );
        }
        return null;
      })}
    </div>
  );
}

export default ButtonsGroup;
