// import { forwardRef } from 'react';
// import Header from '../Header/Header';
// import MainPage from '../MainPage/MainPage';
// import CustomDialog from '../CustomDialog/CustomDialog';

// type FirstPageProps = {
//   toggleDrawer: (open: boolean) => void;
//   handleClickSecondPage: () => void;
// };

// const FirstPage = forwardRef<HTMLElement, FirstPageProps>(
//   ({ toggleDrawer, handleClickSecondPage }: FirstPageProps, ref) => (
//     <section>
//       <Header
//         handlerOpenDrawer={toggleDrawer}
//         handleClickSecondPage={handleClickSecondPage}
//         ref={ref}
//       />
//       <MainPage bottonActive={bottonActive} />
//       <CustomDialog bottonActive={bottonActive} handleClose={handleClose} />
//       <SwipeableEdgeDrawer
//         isOpen={openDrawer}
//         handlerOpen={toggleDrawer}
//         bottonActive={bottonActive}
//       />
//     </section>
//   )
// );
