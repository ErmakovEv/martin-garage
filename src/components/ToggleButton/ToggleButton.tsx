import { Button } from '@mui/material';

type ToggleButtonProps = {
  handleClickPage: () => void;
  title: React.ReactNode;
};

function ToggleButton({ handleClickPage, title }: ToggleButtonProps) {
  return (
    <Button
      onClick={handleClickPage}
      sx={{
        color: 'white',
        fontSize: '1.2vh',
        lineHeight: '1.2',
        borderColor: '#29b249',
        fontFamily: ['Oswald'],
        '&:hover': { backgroundColor: '#29b249', borderColor: 'white' },
      }}
      size="small"
      variant="text"
    >
      <div></div>
      {title}
    </Button>
  );
}

export default ToggleButton;
