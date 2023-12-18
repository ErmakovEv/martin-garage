import { Badge, Button } from '@mui/material';
import { NavLink } from 'react-router-dom';
import './ToggleButton.css';
import { useAppSelector } from '../../hooks/reduxHooks';

function ToggleButton() {
  const workList = useAppSelector((state) => state.worksSlice.worksList);

  return (
    <Button size="small" variant="text">
      <Badge badgeContent={workList.length} color="primary">
        <NavLink className="navlink" to="/form">
          Запись <br />
          на сервис
        </NavLink>
      </Badge>
    </Button>
  );
}

export default ToggleButton;
