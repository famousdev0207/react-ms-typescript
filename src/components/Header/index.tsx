import * as React from "react";
import TodoTextInput from "../TodoTextInput";

interface IHeaderProps {
  addTodo: (todo: TodoItemData) => any;
}

interface IHeaderState {
  /* empty */
}

class Header extends React.Component<IHeaderProps, IHeaderState> {

  constructor(props?: IHeaderProps, context?: any) {
    super(props, context);
    this.handleSave = this.handleSave.bind(this);
  }

  public handleSave(text: string) {
    if (text.length) {
      this.props.addTodo({ text });
    }
  }

  public render() {
    const newTodo = true;
    return (
      <header>
        <h1>Todos</h1>
        <TodoTextInput
          newTodo={newTodo}
          onSave={this.handleSave}
          placeholder="What needs to be done?" />
      </header>
    );
  }
}

export default Header;
