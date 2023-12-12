import { useState } from "react";
import CATEGORIESMAP from "../utils/utils";
import { ICategoryObj } from "../utils/utils";
import TemporaryDrawer from "../TemporaryDrawer/TemporaryDrawer";
import { useAppDispatch } from "../../hooks/reduxHooks";
import { setButtonActive } from "../../redux/slices/activeButton";

type SystemButtonProps = {
  k: keyof typeof CATEGORIESMAP;
  value: ICategoryObj;
};

function SystemButton({ k, value }: SystemButtonProps) {
  const dispatch = useAppDispatch();
  const [isActive, setIsActive] = useState<boolean>(false);

  const handleToggle = () => {
    dispatch(setButtonActive(k));
    setIsActive((prevActive) => !prevActive);
  };
  return (
    <>
      <div className="label" key={k} onClick={() => handleToggle()}>
        {value.img && (
          <value.img
            fill="black"
            width="48"
            className={isActive ? "image-checked" : "image"}
          />
        )}
        <span className={isActive ? "span-checked" : "span"}></span>
      </div>
      <TemporaryDrawer
        bottonActive={k}
        open={isActive}
        closeDrawer={() => {
          setIsActive(false);
          dispatch(setButtonActive(CATEGORIESMAP.none.name));
        }}
      />
    </>
  );
}

export default SystemButton;
