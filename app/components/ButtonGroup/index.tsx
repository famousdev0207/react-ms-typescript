import * as classNames from 'classnames';
import * as React from 'react';

interface IButtonGroupProps extends React.Props<any> {
  className?: string;
};

export default function ButtonGroup({
  className = '',
  children = null,
}: IButtonGroupProps) {
  const classes = classNames('btn-group', className);

  return (
    <div className={classes}>
      {children}
    </div>
  );
}
