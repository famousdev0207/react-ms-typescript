import * as React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as TranslationActions from '../../actions/translation';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import MainSection from '../../components/MainSection';
import { IRootState } from '../../reducers';
import * as style from './style.css';

interface IAppProps {
  translation: ITranslation;
  actions: typeof TranslationActions;
};

interface IAppState {
  /* empty */
}

class App extends React.Component<IAppProps, IAppState> {
  public render() {
    const { translation, actions } = this.props;
    return (
      <div className={style.normal}>
        <Header />
        <MainSection translation={translation} actions={actions} />
        <Footer />
      </div>
    );
  }
}

function mapStateToProps(state: IRootState) {
  return {
    translation: state.translation,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(TranslationActions as any, dispatch),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);
