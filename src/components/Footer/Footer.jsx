import AppBar from '@mui/material/AppBar';
import Container from '@mui/material/Container';

export function Footer() {
  return (
    <AppBar
      position="relative"
      component="footer"
      sx={{
        backgroundColor: '#f5c7f7',
        color: '#9d53c3',
      }}
    >
      <Container
        maxWidth="sm"
        sx={{
          alignItems: 'center',
          justifyContent: 'center',
          display: { xs: 'flex' },
          paddingY: 3,
        }}
      ></Container>
    </AppBar>
  );
}
