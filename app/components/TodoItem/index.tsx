import * as classNames from 'classnames';
import * as React from 'react';
import { applyMiddleware } from 'redux';
import TodoTextInput from '../TodoTextInput';
import * as style from './style.css';

interface ITodoItemProps {
  todo: ITodoItemData;
  editTodo: (todo: ITodoItemData) => any;
  deleteTodo: (id: number) => any;
  completeTodo: (id: number) => any;
};

interface ITodoItemState {
  editing: boolean;
};

class TodoItem extends React.Component<ITodoItemProps, ITodoItemState> {

  constructor(props?: ITodoItemProps, context?: any) {
    super(props, context);
    this.state = {
      editing: false,
    };
    this.handleSave = this.handleSave.bind(this);
    this.handleDoubleClick = this.handleDoubleClick.bind(this);
  }

  public handleDoubleClick() {
    this.setState({ editing: true });
  }

  public handleSave(id: number, text: string) {
    if (text.length === 0) {
      this.props.deleteTodo(id);
    } else {
      this.props.editTodo({ id, text });
    }
    this.setState({ editing: false });
  }

  public render() {
    const { todo, completeTodo, deleteTodo } = this.props;

    let element;
    if (this.state.editing) {
      element = (
        <TodoTextInput
          text={todo.text}
          editing={this.state.editing}
          onSave={(text) => this.handleSave(todo.id, text)}
        />
      );
    } else {
      element = (
        <div className={style.view}>
          <input
            className={style.toggle}
            type="checkbox"
            checked={todo.completed}
            onChange={() => completeTodo(todo.id)}
          />

          <label onDoubleClick={this.handleDoubleClick}>
            {todo.text}
          </label>

          <button className={style.destroy} onClick={() => deleteTodo(todo.id)} />
        </div>
      );
    }

    // TODO: compose
    const classes = classNames({
      [style.completed]: todo.completed,
      [style.editing]: this.state.editing,
      [style.normal]: !this.state.editing,
    });

    return (
      <li className={classes}>
        {element}
      </li>
    );
  }
}

export default TodoItem;
