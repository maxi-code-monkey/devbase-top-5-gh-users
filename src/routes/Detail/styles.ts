import { SxProps, Theme } from '@mui/material';

type Key = 'infoContainer' | 'text';

export const styles: Record<Key, SxProps<Theme>> = {
  infoContainer: (theme: Theme) => ({
    display: 'flex',
    paddingBlockStart: '50px',
  }),
  text: {
    padding: '0 30px'
  },
};