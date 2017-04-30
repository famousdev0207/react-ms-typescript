import * as classNames from 'classnames';
import * as React from 'react';

interface IButtonToolbarProps extends React.Props<any> {
  className?: string;
};

export default function ButtonToolbar({
  className = '',
  children = null,
}: IButtonToolbarProps) {
  const classes = classNames('btn-toolbar justify', className);

  return (
    <div className={classes}>
      {children}
    </div>
  );
}
