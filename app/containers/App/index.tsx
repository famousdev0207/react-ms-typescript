import * as React from 'react';
import { connect } from 'react-redux';
import { RouteComponentProps } from 'react-router';
import { bindActionCreators } from 'redux';
import * as LanguageActions from '../../actions/language';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import MainSection from '../../components/MainSection';
import { IRootState } from '../../reducers';
import * as style from './style.css';

interface IAppProps extends RouteComponentProps<void, void> {
  language: ILanguage;
  actions: typeof LanguageActions;
};
interface IAppState {
  /* empty */
}

class App extends React.Component<IAppProps, IAppState> {
  public render() {
    const { language, actions } = this.props;
    return (
      <div className={style.normal}>
        <Header />
        <MainSection language={language} actions={actions} />
        <Footer />
      </div>
    );
  }
}

function mapStateToProps(state: IRootState) {
  return {
    language: state.language,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(LanguageActions as any, dispatch),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);
