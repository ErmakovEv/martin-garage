import Pages from '../Pages/Pages';
import { useEffect, useState } from 'react';
import SpinnerMask from '../SpinnerMask/SpinnerMask';

function Main() {
  const [load, setLoad] = useState<boolean>(false);

  useEffect(() => {
    setTimeout(() => setLoad(true), 2000);
  }, []);

  return !load ? <SpinnerMask /> : <Pages />;
}

export default Main;
