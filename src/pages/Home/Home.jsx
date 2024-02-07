import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

export default function Home() {
  return (
    <Box
      sx={{
        display: { xs: 'flex' },
        alignItems: 'center',
        pt: 10,
        flexDirection: 'column',
        minHeight: '80vh',
      }}
    >
      <Typography
        variant="h4"
        sx={{
          mr: 1,
          fontFamily: 'Unkempt',
          fontWeight: 700,
          color: ' #9d53c3',
        }}
      >
        Phonebook
      </Typography>
      <Typography
        variant="h6"
        sx={{
          paddingX: 4,
          fontFamily: 'Unkempt',
          fontWeight: 400,
          textAlign: 'center',
        }}
      >
        Sign Up, Log In, and Stay Connected.
        <br />
        Easily Manage Your Profile and Contacts.
        <br />
        Your Safe Spot for Staying Connected
      </Typography>
    </Box>
  );
}
