import * as classNames from 'classnames';
import * as React from 'react';

interface IButtonProps extends React.Props<any> {
  id?: string;
  onClick?: () => void;
  className?: string;
}

export default function Button({
  id = '',
  onClick = null,
  className = '',
  children = null,
}: IButtonProps) {
  const classes = classNames('btn', className);

  return (
    <button
      id={id}
      className={classes}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
