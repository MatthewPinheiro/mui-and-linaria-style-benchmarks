import React from 'react';
import { styled } from '@mui/material/styles';

const StyledDiv = styled('div')(({ passedStyles }) => ({ ...passedStyles }));
class View extends React.Component {
  render() {
    const { style, ...other } = this.props;
    return <StyledDiv {...other} passedStyles={style} />;
  }
}

export default View;
