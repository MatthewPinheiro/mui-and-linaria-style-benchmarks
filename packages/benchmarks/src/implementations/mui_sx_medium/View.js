import React from 'react';
import Box from '@mui/material/Box';

class View extends React.Component {
  render() {
    const { style, ...other } = this.props;
    return <Box {...other} sx={{ ...viewStyle, ...style }} />;
  }
}
const viewStyle = {
  margin: 0,
  padding: 0,
  position: 'relative',
  // fix flexbox bugs
  minHeight: 0,
  minWidth: 0
};

export default View;
