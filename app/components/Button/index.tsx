import * as classNames from 'classnames';
import * as React from 'react';

interface IButtonProps extends React.Props<any> {
  onClick?: () => void;
  type?: string;
  className?: string;
  id?: string;
};

export default function Button({
  onClick = null,
  type = 'button',
  className = '',
  id = '',
  children = null,
}: IButtonProps) {
  const classes = classNames('btn', className);

  return (
    <button
      id={id}
      type={type}
      className={classes}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
