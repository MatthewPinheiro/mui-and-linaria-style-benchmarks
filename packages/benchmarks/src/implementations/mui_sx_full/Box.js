import React from 'react';
import View from './View';

const Box = ({ color, fixed = false, layout = 'column', outer = false, ...other }) => {
  const stylesProp = {
    ...styles[`color${color}`],
    ...(fixed ? styles.fixed : undefined),
    ...(layout === 'row' ? styles.row : undefined),
    ...(outer ? styles.outer : undefined)
  };
  return <View {...other} style={stylesProp} />;
};

const styles = {
  outer: {
    alignSelf: 'flex-start',
    padding: '4px'
  },
  row: {
    flexDirection: 'row'
  },
  color0: {
    backgroundColor: '#14171A'
  },
  color1: {
    backgroundColor: '#AAB8C2'
  },
  color2: {
    backgroundColor: '#E6ECF0'
  },
  color3: {
    backgroundColor: '#FFAD1F'
  },
  color4: {
    backgroundColor: '#F45D22'
  },
  color5: {
    backgroundColor: '#E0245E'
  },
  fixed: {
    width: '6px',
    height: '6px'
  }
};

export default Box;
