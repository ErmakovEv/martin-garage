import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import CATEGORIESMAP from "../utils/utils";
import CustomTabs from "../CustomTabs/CustomTabs";

interface TemporaryDrawerProps {
  bottonActive: keyof typeof CATEGORIESMAP;
  open: boolean;
  closeDrawer: () => void;
}

export default function TemporaryDrawer({
  bottonActive,
  open,
  closeDrawer,
}: TemporaryDrawerProps) {
  console.log("bottonActive", bottonActive);

  return (
    <Drawer
      anchor={"top"}
      open={open}
      onClose={closeDrawer}
      PaperProps={{
        sx: {
          m: 0,
          p: 0,
          minHeight: "26vh",
          overflowY: "hidden",
          overlowX: "auto",
          backgroundColor: "black",
        },
      }}>
      <Box
        component={"div"}
        role="presentation"
        sx={{
          color: "white",
          m: 0,
          p: 0,
        }}>
        <CustomTabs bottonActive={bottonActive} />
      </Box>
    </Drawer>
  );
}
