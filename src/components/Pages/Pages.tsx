import { useState, createContext } from 'react';
import MainPage from '../MainPage/MainPage';
import ButtonsGroup from '../ButtonsGroup/ButtonsGroup';
import CustomDialog from '../CustomDialog/CustomDialog';
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

  const handleOpen = (cat: keyof typeof CATEGORIESMAP) => {
    setBottonActive(cat);
  };

  const handleClose = () => {
    setBottonActive(CATEGORIESMAP.none.name);
  };

  console.log(workList);

  return (
    <MyContext.Provider value={{ cb: handlerChangeList, list: workList }}>
      <div className="container">
        <section>
          <MainPage bottonActive={bottonActive} />
          <ButtonsGroup handleClick={handleOpen} bottonActive={bottonActive} />
          <CustomDialog bottonActive={bottonActive} handleClose={handleClose} />
        </section>
        <section>
          <h2>Page2</h2>
        </section>
      </div>
    </MyContext.Provider>
  );
}

export default Pages;
