import React, { useState } from 'react';
import './CustomButtonGroups.css';
import CATEGORIESMAP from '../utils/utils';

const EngineComponent: React.FC = () => {
  // const [rotation, setRotation] = useState<number>(20);
  const [engineActive, setEngineActive] = useState<boolean>(false);

  const handleEngineClick = (): void => {
    setEngineActive((prevActive) => !prevActive);
  };

  // const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>): void => {
  //   if (e.keyCode === 38) {
  //     setRotation((prevRotation) => prevRotation + 5);
  //   } else if (e.keyCode === 40) {
  //     setRotation((prevRotation) => prevRotation - 5);
  //   }
  // };

  // const wrapperStyle: React.CSSProperties = {
  //   transform: `rotateX(${rotation}deg) translateY(-110px)`,
  // };

  const engineClass: string = engineActive ? 'engine active' : 'engine';

  return (
    <div className="button-group-body">
      <div id="wrapper">
        <div className="outer-black">
          <div className="outer-iron">
            <div className="glare"></div>
            <div className="inner-black">
              <div className="inner-black-2">
                <div className="inner-black-3">
                  <button className={engineClass} onClick={handleEngineClick}>
                    <div className="light"></div>
                    <span className={engineActive ? 'span-active' : 'span'}>
                      Engine
                      <br />
                    </span>
                    <span>
                      <br />
                      {CATEGORIESMAP.engine.img && (
                        <CATEGORIESMAP.engine.img
                          // fill="black"
                          width="48"
                          className={
                            engineActive
                              ? 'image-system-active'
                              : 'image-system'
                          }
                        />
                      )}
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EngineComponent;
