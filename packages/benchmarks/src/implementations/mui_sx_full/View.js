import React from 'react';
import Box from '@mui/material/Box';

class View extends React.Component {
  render() {
    const { style, ...other } = this.props;
    return <Box {...other} sx={{ ...viewStyle, ...style }} />;
  }
}

const viewStyle = {
  alignItems: 'stretch',
  borderWidth: 0,
  borderStyle: 'solid',
  boxSizing: 'border-box',
  display: 'flex',
  flexBasis: 'auto',
  flexDirection: 'column',
  flexShrink: 0,
  margin: 0,
  padding: 0,
  position: 'relative',
  // fix flexbox bugs
  minHeight: 0,
  minWidth: 0
};

export default View;
