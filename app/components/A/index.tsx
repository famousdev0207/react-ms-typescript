import * as classNames from 'classnames';
import * as React from 'react';

interface IAProps extends React.Props<any> {
  onClick?: () => void;
  type?: string;
  className?: string;
  id?: string;
};

export default function A({
  onClick = null,
  className = '',
  children = null,
}: IAProps) {
  const classes = classNames(className);

  return (
    <a
      className={classes}
      onClick={onClick}
    >
      {children}
    </a>
  );
}
