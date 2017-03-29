import * as classNames from 'classnames';
import * as React from 'react';
import * as style from './style.css';

interface IFooterProps {
}

interface IFooterState {
  /* empty */
}

class Footer extends React.Component<IFooterProps, IFooterState> {

  public render() {
    return (
      <footer className={style.normal} />
    );
  }
}

export default Footer;
