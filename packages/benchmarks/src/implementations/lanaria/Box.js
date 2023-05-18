import React from 'react';
import View from './View';
import { css } from '@linaria/core';




const Box = ({ color, fixed = false, layout = 'column', outer = false, ...other }) => {

  return (
    <View
      {...other}
      classNames={[
        classNames[`color${color}`],
        (fixed ? classNames.fixed : ''),
        (layout === 'row' ? classNames.row : ''),
        (outer ? classNames.outer : '')
      ]}
    />
  );
};


const classNames = {
  outer: css`
    align-self: flex-start;
    padding: 4px;
  `,
  row: css`
    flex-direction: row;
  `,
  color0: css`
    background-color: #14171A;
  `,
  color1: css`
    background-color: #AAB8C2;
  `,
  color2: css`
    background-color: #E6ECF0;
  `,
  color3: css`
    background-color: #FFAD1F;
  `,
  color4: css`
    background-color: #F45D22;
  `,
  color5: css`
    background-color: #E0245E;
  `,
  fixed: css`
    width: 6px;
    height: 6px;
  `
};


export default Box;
