import { styled } from '@linaria/react';
// import { css } from '@linaria/core';

const Dot = styled.div`
  position: absolute;
  cursor: pointer;
  width: 0;
  height: 0;
  border-color: transparent;
  border-style: solid;
  border-top-width: 0;
  transform: translate(50%, 50%);
  border-bottom-color: red;
  /* border-bottom-color: ${props => props.color}; */
  border-right-width: ${props => `${props.size / 2}px`};
  border-bottom-width: ${props => `${props.size / 2}px`};
  border-left-width: ${props => `${props.size / 2}px`};
  margin-left: ${props => `${props.x}px`};
  margin-top: ${props => `${props.y}px`};
`;

export default Dot;










// const Dot = ({ size, x, y, children, color }) => (
//   <div
//     className={[
//       classNames.root,
//       // ...{
//       //   borderBottomColor: color,
//       //   borderRightWidth: `${size / 2}px`,
//       //   borderBottomWidth: `${size / 2}px`,
//       //   borderLeftWidth: `${size / 2}px`,
//       //   marginLeft: `${x}px`,
//       //   marginTop: `${y}px`
//       // }
//     ].join(' ')}
//   >
//     {children}
//   </div>
// );



// const classNames = {
//   root: css`
//     position: absolute;
//     cursor: pointer;
//     width: 0;
//     height: 0;
//     border-color: transparent;
//     border-style: solid;
//     border-top-width: 0;
//     transform: translate(50%, 50%);
//   `
// }

