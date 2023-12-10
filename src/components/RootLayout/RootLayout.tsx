import { Outlet } from 'react-router-dom';
import Header from '../Header/Header';

function RootLayout() {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
    </>
  );
}

export default RootLayout;
