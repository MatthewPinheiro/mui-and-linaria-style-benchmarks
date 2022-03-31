import React from 'react';
import Box from '@mui/material/Box';

const Dot = ({ size, x, y, children, color }) => (
  <Box
    sx={{
      ...styles.root,
      borderBottomColor: color,
      borderBottomWidth: `${size / 2}px`,
      marginLeft: `${x}px`,
      marginTop: `${y}px`
    }}
  >
    {children}
  </Box>
);

export default Dot;

const styles = {
  root: {
    position: 'absolute',
    // cursor: 'pointer',
    // width: 0,
    // height: 0,
    // borderColor: 'transparent',
    borderStyle: 'solid'
    // borderTopWidth: 0,
    // transform: 'translate(50%, 50%)'
  }
};
