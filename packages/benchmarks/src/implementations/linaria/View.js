import { css } from '@linaria/core';
import React from 'react';

// Same as the viewStyle below, but in proper CSS syntax
const viewClassName = css`
  align-items: stretch;
  border-width: 0;
  border-style: solid;
  box-sizing: border-box;
  display: flex;
  flex-basis: auto;
  flex-direction: column;
  flex-shrink: 0;
  margin: 0;
  padding: 0;
  position: relative;
  min-height: 0;
  min-width: 0;
`;

class View extends React.Component {
  render() {
    const { classNames, ...other } = this.props;
    return (
      <div
        {...other}
        className={[viewClassName, ...classNames].join(' ')}
      />
    );
  }
}

export default View;
