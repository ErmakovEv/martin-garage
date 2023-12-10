import { Button } from '@mui/material';
import { NavLink } from 'react-router-dom';

// type ToggleButtonProps = {
//   // handleClickPage: () => void;
//   // title: React.ReactNode;
// };

function ToggleButton() {
  return (
    <Button
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
      <NavLink to="/form">
        <div></div>
        {'TEST'}
      </NavLink>
    </Button>
  );
}

export default ToggleButton;
