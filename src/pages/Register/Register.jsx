import { RegisterForm } from 'components';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';

export default function Register() {
  return (
    <Box
      sx={{
        display: { xs: 'flex' },
        alignItems: 'center',
        flexDirection: 'column',
      }}
    >
      <Divider sx={{ width: 1, pt: 2, pb: 1 }}>
        <Typography variant="h5" sx={{ fontWeight: 700, color: '#9d53c3' }}>
          Registration
        </Typography>
      </Divider>
      <RegisterForm />
      <Divider sx={{ width: 1, pt: 2, pb: 1 }} />
    </Box>
  );
}
