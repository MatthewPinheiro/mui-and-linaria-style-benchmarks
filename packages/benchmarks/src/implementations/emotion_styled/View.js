import React from 'react';
import styled from '@emotion/styled';

const StyledDiv = styled('div')(({ passedStyles }) => ({ ...viewStyle, ...passedStyles }));
class View extends React.Component {
  render() {
    const { style, ...other } = this.props;
    return <StyledDiv {...other} passedStyles={style} />;
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
