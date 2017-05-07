import * as classNames from 'classnames';
import * as React from 'react';

interface IButtonProps extends React.Props<any> {
  onClick?: () => void;
  className?: string;
};

export default function Button({
  onClick = null,
  className = '',
  children = null,
}: IButtonProps) {
  const classes = classNames('btn', className);

  return (
    <button
      className={classes}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
