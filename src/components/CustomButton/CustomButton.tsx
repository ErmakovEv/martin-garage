import { useState } from "react";
import { useAppDispatch } from "../../hooks/reduxHooks";
import { setButtonActive } from "../../redux/slices/activeButton";

const CustomButton = () => {
  const dispatch = useAppDispatch();
  const [isActive, setIsActive] = useState<boolean>(false);

  const engineClass: string = isActive ? "engine active" : "engine";

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
                    <button className={engineClass} onClick={() => {}}>
                      <div className="light"></div>
                      <span className={isActive ? "span-active" : "span"}>
                        start
                        <br />
                      </span>
                      <span>
                        {/* {value
                          ? value.img && (
                              <value.img
                                width="4vh"
                                className={
                                  isActive
                                    ? "image-system-active"
                                    : "image-system"
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
    </>
  );
};

export default CustomButton;
