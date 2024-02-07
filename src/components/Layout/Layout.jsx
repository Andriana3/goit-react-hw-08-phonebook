import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Header, Footer } from 'components';

import { CssBaseline } from '@mui/material';
import { Container } from '@mui/material';

export function Layout() {
  return (
    <>
      <CssBaseline />
      <Header />
      <Container
        maxWidth="sm"
        sx={{ minHeight: '100vh', pt: 9.5, mb: -9, pb: 4 }}
      >
        <Suspense fallback={<div>Loading...</div>}>
          <Outlet />
        </Suspense>
      </Container>
      <Footer />
    </>
  );
}
