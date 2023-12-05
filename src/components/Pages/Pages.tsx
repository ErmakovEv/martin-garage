import { useState, createContext, useRef } from 'react';
import { Box, Modal } from '@mui/material';
import MainPage from '../MainPage/MainPage';
import Header from '../Header/Header';
import SwipeableEdgeDrawer from '../SwipeableDrawer/SwipeableDrawer';
// import SecondPage from './SecondPage';
// import ThirdPage from './ThirdPage';
import CustomForm from '../Form/Form';
import CATEGORIESMAP from '../utils/utils';
import './Pages.css';

type IMyContext = {
  cb: (checkboxValue: string) => void;
  list: Set<string>;
  cb2?: (newSet: Set<string>) => void;
};

export const MyContext = createContext<IMyContext | undefined>(undefined);

function Pages() {
  const [workList, setWorkList] = useState<Set<string>>(new Set<string>());

  const [numberPage, setNumberPage] = useState<number>(1);

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const refSecond = useRef<HTMLDivElement | null>(null);

  const refFirst = useRef<HTMLDivElement | null>(null);

  // const refThird = useRef<HTMLDivElement | null>(null);

  const handleClickPage = () => {
    if (numberPage === 1) {
      refSecond.current?.scrollIntoView({ behavior: 'smooth' });
      setNumberPage(2);
    } else {
      refFirst.current?.scrollIntoView({ behavior: 'smooth' });
      setNumberPage(1);
    }
  };

  const handleClickThirdPage = () => {
    // refThird.current?.scrollIntoView({ behavior: 'smooth' });
    handleOpen();
  };

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

  const handleChangeSet = (newSet: Set<string>) => {
    setWorkList(newSet);
  };

  const handlerSetBottonActive = (
    newBottonActive: keyof typeof CATEGORIESMAP
  ) => setBottonActive(newBottonActive);

  return (
    <MyContext.Provider
      value={{ cb: handlerChangeList, list: workList, cb2: handleChangeSet }}
    >
      <div className="container">
        {/* <section> */}
        <Header
          handlerOpenDrawer={toggleDrawer}
          handleClickPage={handleClickPage}
          handleClickThirdPage={handleClickThirdPage}
          title={
            numberPage === 1 ? (
              <>
                <>Запись на </>
                <br />
                <>сервис</>
              </>
            ) : (
              <>
                <>Вернуться</>
                <br />
                <>назад</>
              </>
            )
          }
        />
        <MainPage bottonActive={bottonActive} ref={refFirst} />
        <Box component="div" sx={{ position: 'absolute' }}>
          <SwipeableEdgeDrawer
            isOpen={openDrawer}
            handlerOpen={toggleDrawer}
            bottonActive={bottonActive}
            handlerSetBottonActive={handlerSetBottonActive}
          />
        </Box>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <CustomForm />
        </Modal>
        {/* </section> */}
        {/* <SecondPage ref={refSecond} />
        <section>
          <ThirdPage ref={refThird} />
        </section> */}
      </div>
    </MyContext.Provider>
  );
}

export default Pages;
