import CATEGORIESMAP from '../utils/utils';
import CustomButton from '../CustomButton/CustomButton';
import './CustomButtonsGroup.css';

type CustomButtonsGroup = {
  handlerSetBottonActive: (newBottonActive: keyof typeof CATEGORIESMAP) => void;
};

function CustomButtonsGroup({ handlerSetBottonActive }: CustomButtonsGroup) {
  return (
    <div className="buttons-group">
      {Object.entries(CATEGORIESMAP).map(([k, value]) => {
        if (value.name !== 'none') {
          return (
            <CustomButton
              k={k as keyof typeof CATEGORIESMAP}
              key={k}
              value={value}
              handlerSetBottonActive={handlerSetBottonActive}
            />
          );
        }
        return null;
      })}
    </div>
  );
}

export default CustomButtonsGroup;
