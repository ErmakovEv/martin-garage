import CATEGORIESMAP from "../utils/utils";
import CustomButton from "../CustomButton/CustomButton";
import "./CustomButtonsGroup.css";

function CustomButtonsGroup() {
  return (
    <div className="button-container">
      {Object.entries(CATEGORIESMAP).map(([k, value]) => {
        if (value.name !== "none") {
          return (
            <CustomButton
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

export default CustomButtonsGroup;
