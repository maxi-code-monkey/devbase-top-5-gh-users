import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Link, useParams, useLocation } from 'react-router-dom';

export const APP_BAR_TEST_ID = "app-bar-test-id";

const CustomAppBar = () => {

  const { pathname } = useLocation();
  const isDetailPage = pathname.split('/')[1].length > 0;

  return (
    <Box data-testid={APP_BAR_TEST_ID} sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          {isDetailPage && (<Box>
            <Link to="/">
              <Typography variant="h6">
                Back
              </Typography>
            </Link>
          </Box>)}
          <Typography textAlign="center" variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Devbase | Top 5 Github Users
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default CustomAppBar;