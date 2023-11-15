import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import CustomTabs from '../CustomTabs/CustomTabs';
import CATEGORIESMAP from '../utils/utils';
import { TransitionProps } from '@mui/material/transitions';

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement<any, any>;
  },
  ref: React.Ref<unknown>
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

interface CustomDialogProps {
  bottonActive: keyof typeof CATEGORIESMAP;
  handleClose: () => void;
}

export default function CustomDialog({
  bottonActive,
  handleClose,
}: CustomDialogProps) {
  const [open, setOpen] = React.useState(false);

  React.useEffect(() => {
    if (bottonActive !== CATEGORIESMAP.none.name) {
      setOpen(true);
    }
  });

  const handler = () => {
    setOpen(false);
    handleClose();
  };

  return (
    <React.Fragment>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handler}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle>{CATEGORIESMAP[bottonActive].title}</DialogTitle>
        <DialogContent>
          <CustomTabs bottonActive={bottonActive} />
        </DialogContent>
        <DialogActions>
          <Button onClick={handler}>Close</Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}
