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
  console.log('bottonActive', bottonActive);

  return (
    <Drawer
      anchor={'top'}
      open={open}
      onClose={closeDrawer}
      PaperProps={{
        sx: {
          maxHeight: '2vh',
          m: 0,
          p: 0,
        },
      }}
    >
      <Box
        component={'div'}
        role="presentation"
        sx={{ m: 0, p: 0, backgroundColor: 'black', color: 'white' }}
      >
        <CustomTabs bottonActive={bottonActive} />
      </Box>
    </Drawer>
  );
}
