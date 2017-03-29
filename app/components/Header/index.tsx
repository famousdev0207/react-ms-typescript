import * as React from 'react';

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
      <header>
        <h1>react-ms</h1>
      </header>
    );
  }
}

export default Header;
