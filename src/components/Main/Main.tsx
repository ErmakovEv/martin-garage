import Pages from '../Pages/Pages';
import { useEffect, useState } from 'react';
import Spinner from '../Spinner/Spinner';

function Main() {
  const [load, setLoad] = useState<boolean>(false);

  useEffect(() => {
    setTimeout(() => setLoad(true), 3000);
  }, []);

  return !load ? <Spinner /> : <Pages />;
}

export default Main;
