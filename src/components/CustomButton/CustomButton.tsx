import { useState } from 'react';
import './CustomButton.css';
// import CATEGORIESMAP from '../utils/utils';
// import { ICategoryObj } from '../utils/utils';
// import TemporaryDrawer from '../TemporaryDrawer/TemporaryDrawer';
// import { useAppDispatch } from '../../hooks/reduxHooks';
// import { setButtonActive } from '../../redux/slices/activeButton';

const CustomButton = () => {
  // const dispatch = useAppDispatch();
  const [isActive, setIsActive] = useState<boolean>(false);

  const handleToggle = () => {
    // dispatch(setButtonActive(k));
    setIsActive((prevActive) => !prevActive);
  };

  const engineClass: string = isActive ? 'engine active' : 'engine';

  return (
    <div className="custom-button-wrapper">
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
                      <span className={isActive ? 'circle-active' : 'circle'}>
                        start-stop
                        <br />
                      </span>
                      <span>
                        {/* {value
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
                          : null} */}
                      </span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomButton;
