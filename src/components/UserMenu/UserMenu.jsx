import { useDispatch } from 'react-redux';
import { logOut } from '../../redux/auth/operations';
import { useAuth } from 'hooks';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import LogoutIcon from '@mui/icons-material/Logout';

export function UserMenu() {
  const dispatch = useDispatch();
  const { user } = useAuth();

  return (
    <Box component="div" sx={{ display: 'flex', alignItems: 'center' }}>
      <Typography
        variant="h6"
        sx={{ mr: 1, fontFamily: 'Unkempt', fontWeight: 400 }}
      >
        Welcome, {user.name}
      </Typography>
      <LogoutIcon
        sx={{ color: '#fffa', ml: 2, cursor: 'pointer' }}
        onClick={() => dispatch(logOut())}
      />
    </Box>
  );
}
