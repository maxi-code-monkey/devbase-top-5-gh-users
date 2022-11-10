import React from 'react';
import { useParams } from 'react-router-dom';

import { Box, Container, Avatar, Typography } from '@mui/material';
import { useGetUserInfo } from '../../hooks/useGetUserInfo';

import { styles } from "./styles";

const UserDetail = () => {

  const { userName } = useParams();
  const { data: userInfo } = useGetUserInfo(userName || "");

  return (
    <Box>
      {userInfo && (<Container sx={styles.infoContainer}>
        <Avatar src={userInfo.avatar_url} sizes="small" variant="circular" />
        <Box sx={styles.text}>
          <Typography variant="h4">
            {userInfo.name}
          </Typography>
          <Typography variant="body1">
            {userInfo.location}
          </Typography>
        </Box>
      </Container>)}
    </Box>
  )
};

export default UserDetail;