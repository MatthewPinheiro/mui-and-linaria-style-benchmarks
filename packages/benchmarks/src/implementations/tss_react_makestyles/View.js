import React from 'react';
import { makeStyles } from 'tss-react/mui';

const useStyles = makeStyles()((_theme, params) => ({ root: { ...params.styles } }));

const View = React.forwardRef(function View(props, ref) {
  const { style, ...other } = props;
  const { classes } = useStyles({ styles: { ...viewStyle, ...style } });
  return <div ref={ref} {...other} className={classes.root} />;
});

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
