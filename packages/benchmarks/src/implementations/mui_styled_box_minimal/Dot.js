import React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';

const StyledBox = styled(Box)(({ size, x, y, color }) => ({
  ...styles.root,
  borderBottomColor: color,
  borderRightWidth: `${size / 2}px`,
  borderBottomWidth: `${size / 2}px`,
  borderLeftWidth: `${size / 2}px`,
  marginLeft: `${x}px`,
  marginTop: `${y}px`
}));
const Dot = props => <StyledBox {...props} />;

export default Dot;

const styles = {
  root: {
    position: 'absolute',
    cursor: 'pointer',
    width: 0,
    height: 0,
    borderColor: 'transparent',
    borderStyle: 'solid',
    borderTopWidth: 0,
    transform: 'translate(50%, 50%)'
  }
};
