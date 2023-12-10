import { useState } from 'react';
import './CustomButton.css';
import CATEGORIESMAP from '../utils/utils';
import { ICategoryObj } from '../utils/utils';
import TemporaryDrawer from '../TemporaryDrawer/TemporaryDrawer';
import { useAppDispatch } from '../../hooks/reduxHooks';
import { setButtonActive } from '../../redux/slices/activeButton';

type CustomButtonProps = {
  k: keyof typeof CATEGORIESMAP;
  value: ICategoryObj;
};

const CustomButton = ({ k, value }: CustomButtonProps) => {
  const dispatch = useAppDispatch();
  const [isActive, setIsActive] = useState<boolean>(false);

  const handleToggle = () => {
    dispatch(setButtonActive(k));
    setIsActive((prevActive) => !prevActive);
  };

  const engineClass: string = isActive ? 'engine active' : 'engine';

  return (
    <>
      <div className="button-group-body">
        <div id="wrapper">
          <div className="outer-black">
            <div className="outer-iron">
              <div className="glare"></div>
              <div className="inner-black">
                <div className="inner-black-2">
                  <div className="inner-black-3">
                    <button
                      className={engineClass}
                      onClick={() => handleToggle()}
                    >
                      <div className="light"></div>
                      <span className={isActive ? 'span-active' : 'span'}>
                        {k}
                        <br />
                      </span>
                      <span>
                        {value
                          ? value.img && (
                              <value.img
                                width="4vh"
                                className={
                                  isActive
                                    ? 'image-system-active'
                                    : 'image-system'
                                }
                              />
                            )
                          : null}
                      </span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
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
};

export default CustomButton;
