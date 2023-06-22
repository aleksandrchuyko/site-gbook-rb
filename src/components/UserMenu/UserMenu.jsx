import { Box } from 'components/Box';
import { Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { authOperations, authSelectors } from 'redux/auth';

const UserMenu = () => {
  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(authOperations.logOut());
  };
  const visitor = useSelector(authSelectors.getUser);

  return (
    <Box display="flex" alignItems="center">
      <span
        className="text-light m-2"
        style={{ display: 'inline-block', color: '#fff' }}
      >
        {visitor}
      </span>
      <Button type="button" style={{ display: 'block' }} onClick={handleLogout}>
        Logout
      </Button>
    </Box>
  );
};

export default UserMenu;
