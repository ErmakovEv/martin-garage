import { useState, createContext, useRef } from 'react';
import MainPage from '../MainPage/MainPage';
import CustomDialog from '../CustomDialog/CustomDialog';
import Header from '../Header/Header';
import SwipeableEdgeDrawer from '../SwipeableDrawer/SwipeableDrawer';
import SecondPage from './SecondPage';
import CATEGORIESMAP from '../utils/utils';

import './Pages.css';

type IMyContext = {
  cb: (checkboxValue: string) => void;
  list: Set<string>;
};

export const MyContext = createContext<IMyContext | undefined>(undefined);

function Pages() {
  const [workList, setWorkList] = useState<Set<string>>(new Set<string>());

  const [bottonActive, setBottonActive] = useState<keyof typeof CATEGORIESMAP>(
    CATEGORIESMAP.none.name
  );

  const [openDrawer, setOpenDrawer] = useState<boolean>(false);

  const toggleDrawer = (newOpen: boolean) => {
    setOpenDrawer(newOpen);
  };

  const handlerChangeList = (checkboxValue: string) => {
    if (workList.has(checkboxValue)) {
      const newWorkList = new Set(workList);
      newWorkList.delete(checkboxValue);
      setWorkList(newWorkList);
    } else {
      const newWorkList = new Set(workList);
      newWorkList.add(checkboxValue);
      setWorkList(newWorkList);
    }
  };

  const handleClose = () => {
    setBottonActive(CATEGORIESMAP.none.name);
  };

  const ref = useRef<HTMLDivElement | null>(null);

  const handleClickFirstPage = () => {
    ref.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <MyContext.Provider value={{ cb: handlerChangeList, list: workList }}>
      <div className="container">
        <section>
          <Header
            handlerOpenDrawer={toggleDrawer}
            handleClickFirstPage={handleClickFirstPage}
          />
          <MainPage bottonActive={bottonActive} />
          <CustomDialog bottonActive={bottonActive} handleClose={handleClose} />
          <SwipeableEdgeDrawer
            isOpen={openDrawer}
            handlerOpen={toggleDrawer}
            bottonActive={bottonActive}
          />
        </section>
        <SecondPage ref={ref} />
      </div>
    </MyContext.Provider>
  );
}

export default Pages;
