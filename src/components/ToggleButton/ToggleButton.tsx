import { Button } from '@mui/material';

type ToggleButtonProps = {
  handleClickPage: () => void;
  title: string;
};

function ToggleButton({ handleClickPage, title }: ToggleButtonProps) {
  return (
    <Button
      onClick={handleClickPage}
      sx={{
        color: 'black',
        fontSize: '2vmin',
        fontFamily: 'Roboto',
        width: '15vmin',
        lineHeight: '1.2',
      }}
      size="small"
      variant="contained"
    >
      {title}
    </Button>
  );
}

export default ToggleButton;
