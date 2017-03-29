import * as React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import MainSection from '../../components/MainSection';
import { IRootState } from '../../reducers';
import * as style from './style.css';

interface IAppProps {
};

interface IAppState {
  /* empty */
}

class App extends React.Component<IAppProps, IAppState> {
  public render() {
    return (
      <div className={style.normal}>
        <Header />
        <MainSection />
        <Footer />
      </div>
    );
  }
}

function mapStateToProps(state: IRootState) {
  return {};
}

function mapDispatchToProps(dispatch) {
  return {};
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);
