import * as React from 'react';
import { connect } from 'react-redux';
import * as style from './style.css';

interface IMainSectionProps {
};

interface IMainSectionState {
};

class MainSection extends React.Component<IMainSectionProps, IMainSectionState> {

  constructor(props?: IMainSectionProps, context?: any) {
    super(props, context);
  }

  public render() {
    return (
      <section className={style.main} />
    );
  }
}

export default MainSection;
