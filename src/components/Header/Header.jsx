import { AppNav, AuthNav, UserMenu } from 'components';
import { useAuth } from 'hooks';

import AppBar from '@mui/material/AppBar';
import Container from '@mui/material/Container';
import Toolbar from '@mui/material/Toolbar';

export function Header() {
  const { isLoggedIn } = useAuth();
  return (
    <AppBar
      position="fixed"
      sx={{
        backgroundColor: '#f5c7f7',
        color: '#9d53c3',
      }}
    >
      <Container maxWidth="md">
        <Toolbar disableGutters>
          <AppNav />
          {isLoggedIn ? <UserMenu /> : <AuthNav />}
        </Toolbar>
      </Container>
    </AppBar>
  );
}
