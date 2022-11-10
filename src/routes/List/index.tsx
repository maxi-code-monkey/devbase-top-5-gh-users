import React, { useMemo } from 'react';
import { Box, Typography, Button, Container } from '@mui/material';
import { Link } from 'react-router-dom';

import { styles } from './styles';

const USERS: Array<string> = ["GrahamCampbell","fabpot","weierophinney","rkh","josh"];

const List = () => {
  const renderUsers = useMemo(() => {
    return USERS.map((userName: string) => 
      <Link style={{ textDecoration: 'none' }} to={`/${userName}`}>
        <Button sx={styles.button}>{userName}</Button>
      </Link>
     )
  }, [USERS]);

  return (
    <Box maxWidth="xl" sx={styles.container}>
      <Container>
        <Typography sx={styles.title} variant="h1">
          Top 5 GitHub Users
        </Typography>
        <Typography variant="body1">
          Tap the username to see more information
        </Typography>
        <Box>
          {renderUsers}
        </Box>
      </Container>
    </Box>
  )
};

export default List;