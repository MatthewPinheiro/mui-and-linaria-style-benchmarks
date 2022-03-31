import React from 'react';
import Box from '@mui/material/Box';

class View extends React.Component {
  render() {
    const { style, ...other } = this.props;
    return <Box {...other} sx={{ ...style }} />;
  }
}

export default View;
