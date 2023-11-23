import CATEGORIESMAP from '../utils/utils';
import CustomButton from '../CustomButton/CustomButton';
import './CustomButtonsGroup.css';

function CustomButtonsGroup() {
  return (
    <div className="buttons-group">
      {Object.entries(CATEGORIESMAP).map(([k, value]) => {
        if (value.name !== 'none') {
          console.log('!!!!!', k);
          return (
            <CustomButton k={k as keyof typeof CATEGORIESMAP} value={value} />
          );
        }
        return null;
      })}
    </div>
  );
}

export default CustomButtonsGroup;
