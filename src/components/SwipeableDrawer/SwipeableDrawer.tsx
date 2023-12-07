import { Global } from "@emotion/react";
import { styled } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { grey } from "@mui/material/colors";
import Box from "@mui/material/Box";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import CustomButtonsGroup from "../CustomButtonsGroup/CustomButtonsGroup";
import CATEGORIESMAP from "../utils/utils";

const drawerBleeding = 36;

interface SwipeableEdgeDrawerProps {
  isOpen: boolean;
  handlerOpen: (open: boolean) => void;
  bottonActive: keyof typeof CATEGORIESMAP;
  handlerSetBottonActive: (newBottonActive: keyof typeof CATEGORIESMAP) => void;
}

const StyledBox = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "light" ? "#fff" : grey[800],
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
          ".MuiDrawer-root > .MuiPaper-root": {
            height: `calc(22% - ${drawerBleeding}px)`,
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
        sx={{ position: "fixed" }}
        slotProps={{
          backdrop: {
            invisible: true,
          },
        }}>
        {/* ModalProps={{
          keepMounted: true,
          hideBackdrop: true,
        }} */}
        <StyledBox
          sx={{
            px: 2,
            pb: 2,
            height: "100%",
            overflow: "auto",
            backgroundColor: "#1b1b1b",
          }}>
          <Box component="div" sx={{ height: "100%" }}>
            <CustomButtonsGroup
              handlerSetBottonActive={handlerSetBottonActive}
            />
          </Box>
        </StyledBox>
      </SwipeableDrawer>
    </>
  );
}
