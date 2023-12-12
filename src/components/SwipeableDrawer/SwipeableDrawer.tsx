import { Global } from "@emotion/react";
import { styled } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { grey } from "@mui/material/colors";
import Box from "@mui/material/Box";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import CustomButtonsGroup from "../CustomButtonsGroup/CustomButtonsGroup";
import { useAppSelector, useAppDispatch } from "../../hooks/reduxHooks";
import { toggleDrawer } from "../../redux/slices/swipeableEdgeDrawerSlice";
import ButtonsGroup from "../ButtonsGroup/ButtonsGroup";

const drawerBleeding = 36;

const StyledBox = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "light" ? "#fff" : grey[800],
}));

export default function SwipeableEdgeDrawer() {
  const isOpen = useAppSelector(
    (state) => state.swipeableEdgeDrawerSlice.isOpen
  );
  const dispatch = useAppDispatch();

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
        onClose={() => dispatch(toggleDrawer())}
        onOpen={() => dispatch(toggleDrawer())}
        swipeAreaWidth={drawerBleeding}
        disableSwipeToOpen={false}
        sx={{ position: "fixed" }}
        slotProps={{
          backdrop: {
            invisible: true,
          },
        }}>
        <StyledBox
          sx={{
            px: 2,
            pb: 2,
            height: "100%",
            overflow: "auto",
            backgroundColor: "#333",
          }}>
          <Box component="div" sx={{ width: "100%" }}>
            <ButtonsGroup />
          </Box>
        </StyledBox>
      </SwipeableDrawer>
    </>
  );
}
