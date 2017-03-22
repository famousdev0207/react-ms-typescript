import * as React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as TodoActions from "../../actions/todos";
import Header from "../../components/Header";
import MainSection from "../../components/MainSection";
import { IRootState } from "../../reducers";
import * as style from "./style.css";

interface IAppProps {
  todos: ITodoItemData[];
  actions: typeof TodoActions;
};

interface IAppState {
  /* empty */
}

class App extends React.Component<IAppProps, IAppState> {
  public render() {
    const { todos, actions, children } = this.props;
    return (
      <div className={style.normal}>
        <Header addTodo={actions.addTodo} />
        <MainSection todos={todos} actions={actions} />
        {children}
      </div>
    );
  }
}

function mapStateToProps(state: IRootState) {
  return {
    todos: state.todos,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(TodoActions as any, dispatch),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);
