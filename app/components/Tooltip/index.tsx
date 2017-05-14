import * as classNames from 'classnames';
import * as React from 'react';
import { compose, withHandlers, withReducer } from 'recompose';

const withToggle = compose(
  withReducer('toggledOn', 'dispatch', (state, action) => {
    switch (action.type) {
      case 'SHOW':
        return true;
      case 'HIDE':
        return false;
      case 'TOGGLE':
        return !state;
      default:
        return state;
    }
  }, false),
  withHandlers({
    hide: ({ dispatch }) => (e) => dispatch({ type: 'SHOW' }),
    show: ({ dispatch }) => (e) => dispatch({ type: 'HIDE' }),
    toggle: ({ dispatch }) => (e) => dispatch({ type: 'TOGGLE' }),
  }),
);

interface ITooltipProps extends React.Props<any> {
  className?: string;
  text?: string;
  toggledOn: boolean;
  show: any;
  hide: any;
}

const StatusList = () => (
  <div className="StatusList">
    <div>pending</div>
    <div>inactive</div>
    <div>active</div>
  </div>
);

const Status = withToggle(({status, toggledOn, toggle}) => (
  <span onClick={toggle}>
    {status}
    {toggledOn && <StatusList />}
  </span>
));

export default withToggle(({className, children, text, toggledOn, show, hide}: ITooltipProps) => {
  const classes = classNames('tooltip', className);
  return (
    <span className={classes}>
      {toggledOn && <div className="Tooltip">{text}</div>}
      <span onMouseEnter={show} onMouseLeave={hide}>{children}</span>
    </span>
  );
});
