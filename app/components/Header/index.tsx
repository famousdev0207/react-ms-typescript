import * as React from 'react';
import A from '../A';
import * as style from './style.css';

interface IHeaderProps {
}

interface IHeaderState {
  /* empty */
}

class Header extends React.Component<IHeaderProps, IHeaderState> {

  constructor(props?: IHeaderProps, context?: any) {
    super(props, context);
  }

  public render() {
    return (
      <header className={style.header}>
        <div className={style.inner}>
          <A className={style.logo}><span>Naver</span></A>
        </div>
      </header>
    );
  }
}

export default Header;
