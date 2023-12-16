import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CATEGORIESMAP from '../utils/utils';
import CustomTabs from '../CustomTabs/CustomTabs';

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
  return (
    <Drawer
      anchor={'top'}
      open={open}
      onClose={closeDrawer}
      PaperProps={{
        sx: {
          m: 0,
          p: 0,
          width: '100%',
          minHeight: '250px',

          overflowY: 'hidden',
          overlowX: 'auto',
          backgroundColor: '#333',
        },
      }}
      slotProps={{
        backdrop: {
          invisible: true,
        },
      }}
    >
      <Box
        className="ASDSADA"
        component={'div'}
        role="presentation"
        sx={{
          color: '#c5dea1',
          m: 0,
          p: 0,
        }}
      >
        <CustomTabs bottonActive={bottonActive} />
      </Box>
    </Drawer>
  );
}
