import { styled } from '@linaria/react';
import { css } from '@linaria/core';

const classNames = {
  root: css`
    position: absolute;
    cursor: pointer;
    width: 0;
    height: 0;
    border-color: transparent;
    border-style: solid;
    border-top-width: 0;
    transform: translate(50%, 50%);
  `
};

const PartialDot = ({ className, style, ...rest }) => {
  return (
    <div 
      className={[classNames.root, className].join(' ').trim()} 
      style={style} 
      {...rest}
    />
  );
}

const Dot = styled(PartialDot)`
  border-bottom-color: ${props => props.color};
  border-right-width: ${props => `${props.size / 2}px`};
  border-bottom-width: ${props => `${props.size / 2}px`};
  border-left-width: ${props => `${props.size / 2}px`};
  margin-left: ${props => `${props.x}px`};
  margin-top: ${props => `${props.y}px`};
`;


export default Dot;