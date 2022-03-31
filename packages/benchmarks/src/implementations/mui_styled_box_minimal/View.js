import React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';

const StyledBox = styled(Box)(({ passedStyles }) => ({ ...passedStyles }));
class View extends React.Component {
  render() {
    const { style, ...other } = this.props;
    return <StyledBox {...other} passedStyles={style} />;
  }
}

export default View;
