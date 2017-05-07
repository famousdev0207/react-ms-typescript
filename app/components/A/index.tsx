import * as classNames from 'classnames';
import * as React from 'react';

interface IAProps extends React.Props<any> {
  className?: string;
  href?: string;
  onClick?: () => void;
};

export default function A({
  className = '',
  href = '#',
  onClick = null,
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
