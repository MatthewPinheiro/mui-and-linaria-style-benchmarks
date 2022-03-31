import React from 'react';
import { makeStyles } from 'tss-react/mui';

const useStyles = makeStyles()((_theme, params) => ({ root: { ...params.combinedStyles } }));

const Dot = React.forwardRef(function Dot({ size, x, y, color }, ref) {
  const { classes } = useStyles({
    combinedStyles: {
      ...styles.root,
      borderBottomColor: color,
      borderRightWidth: `${size / 2}px`,
      borderBottomWidth: `${size / 2}px`,
      borderLeftWidth: `${size / 2}px`,
      marginLeft: `${x}px`,
      marginTop: `${y}px`
    }
  });
  return <div ref={ref} className={classes.root} />;
});

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
