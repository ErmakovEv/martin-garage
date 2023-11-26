import { Global } from '@emotion/react';
import { styled } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { grey } from '@mui/material/colors';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import CustomButtonsGroup from '../CustomButtonsGroup/CustomButtonsGroup';
import CATEGORIESMAP from '../utils/utils';

const drawerBleeding = 36;

interface SwipeableEdgeDrawerProps {
  isOpen: boolean;
  handlerOpen: (open: boolean) => void;
  bottonActive: keyof typeof CATEGORIESMAP;
  handlerSetBottonActive: (newBottonActive: keyof typeof CATEGORIESMAP) => void;
}

const StyledBox = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'light' ? '#fff' : grey[800],
}));

const Puller = styled(Box)(({ theme }) => ({
  width: 30,
  height: 2,
  backgroundColor: theme.palette.mode === 'light' ? grey[300] : grey[900],
  borderRadius: 3,
  position: 'absolute',
  top: 5,
  left: 'calc(50% - 15px)',
}));

export default function SwipeableEdgeDrawer({
  isOpen,
  handlerOpen,
  handlerSetBottonActive,
}: SwipeableEdgeDrawerProps) {
  return (
    <>
      <CssBaseline />
      <Global
        styles={{
          '.MuiDrawer-root > .MuiPaper-root': {
            height: `calc(22% - ${drawerBleeding}px)`,
            overflow: 'visible',
          },
        }}
      />
      <SwipeableDrawer
        anchor="bottom"
        open={isOpen}
        onClose={() => handlerOpen(false)}
        onOpen={() => handlerOpen(true)}
        swipeAreaWidth={drawerBleeding}
        disableSwipeToOpen={false}
        ModalProps={{
          keepMounted: true,
        }}
      >
        <StyledBox
          sx={{
            position: 'absolute',
            top: -drawerBleeding,
            borderTopLeftRadius: 8,
            borderTopRightRadius: 8,
            visibility: 'visible',
            right: 0,
            left: 0,
          }}
        >
          <Puller />
          <Typography
            sx={{
              p: 1,
              color: 'white',
              fontSize: '1.8vh',
              backgroundColor: '#1b1b1b',
              fontFamily: ['Oswald'],
            }}
          >
            Конфигуратор работ
          </Typography>
        </StyledBox>

        <StyledBox
          sx={{
            px: 2,
            pb: 2,
            height: '100%',
            overflow: 'auto',
            backgroundColor: '#1b1b1b',
          }}
        >
          <Box component="div" sx={{ height: '100%' }}>
            <CustomButtonsGroup
              handlerSetBottonActive={handlerSetBottonActive}
            />
          </Box>
        </StyledBox>
      </SwipeableDrawer>
    </>
  );
}
