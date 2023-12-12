import './CustomButton.css';
import { useAppDispatch, useAppSelector } from '../../hooks/reduxHooks';
import { toggleDrawer } from '../../redux/slices/swipeableEdgeDrawerSlice';

const CustomButton = () => {
  const dispatch = useAppDispatch();

  const isOpen = useAppSelector(
    (state) => state.swipeableEdgeDrawerSlice.isOpen
  );

  const handleToggle = () => {
    dispatch(toggleDrawer());
  };

  const engineClass: string = isOpen ? 'engine active' : 'engine';

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
                      <span
                        className={isOpen ? 'circle-active' : 'circle'}
                        style={{ fontSize: '1.4vh' }}
                      >
                        <span
                          style={{
                            fontFamily: 'sans-serif',
                            fontSize: '1vh',
                            marginBottom: '0.8vh',
                          }}
                        >
                          Engine
                        </span>
                        <br />
                        Start
                        <br />
                        Stop
                        <br />
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
