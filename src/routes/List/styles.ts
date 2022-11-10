import { SxProps, Theme } from '@mui/material';

type Key = 'title' | 'button' | 'container';

export const styles: Record<Key, SxProps<Theme>> = {
  title: (theme: Theme) => ({
    fontSize: { xs: '2.5rem', md: '4rem' },
    marginBottom: '20px',
  }),
  container: {
    paddingBlockStart: '45px',
    justifyContent: 'center',
    display: 'flex',
    flexDirection: 'column',
  },
  button: (theme: Theme) => ({
    textDecoration: 'none',
    color: '#fff',
    border: `1px solid ${theme.palette.primary.main}`,
    backgroundColor: theme.palette.primary.main,
    padding: '12px',
    minWidth: '75px',
    margin: '0 5px'
  })
};