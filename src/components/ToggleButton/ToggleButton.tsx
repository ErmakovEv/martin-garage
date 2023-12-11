import { Button } from '@mui/material';
import { NavLink } from 'react-router-dom';
import './ToggleButton.css';

// type ToggleButtonProps = {
//   // handleClickPage: () => void;
//   // title: React.ReactNode;
// };

function ToggleButton() {
  return (
    <Button
      // sx={{
      //   color: 'white',
      //   fontSize: '16px',
      //   lineHeight: '1.2',
      //   borderColor: '#29b249',
      //   fontFamily: ['Oswald'],
      //   '&:hover': { backgroundColor: '#29b249', borderColor: 'white' },
      //   '.active': { color: 'white' },
      // }}
      size="small"
      variant="text"
    >
      <NavLink className="navlink" to="/form">
        Запись <br />
        на сервис
      </NavLink>
    </Button>
  );
}

export default ToggleButton;
