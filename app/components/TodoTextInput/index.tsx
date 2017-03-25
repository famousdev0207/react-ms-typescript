import * as classNames from 'classnames';
import * as React from 'react';
import * as style from './style.css';

interface ITodoTextInputProps {
  text?: string;
  placeholder?: string;
  newTodo?: boolean;
  editing?: boolean;
  onSave: (text: string) => any;
};

interface ITodoTextInputState {
  text: string;
};

class TodoTextInput extends React.Component<ITodoTextInputProps, ITodoTextInputState> {

  constructor(props?: ITodoTextInputProps, context?: any) {
    super(props, context);
    this.state = {
      text: this.props.text || '',
    };
    this.handleBlur = this.handleBlur.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  public handleSubmit(e) {
    const text = e.target.value.trim();
    if (e.which === 13) {
      this.props.onSave(text);
      if (this.props.newTodo) {
        this.setState({ text: '' });
      }
    }
  }

  public handleChange(e) {
    this.setState({ text: e.target.value });
  }

  public handleBlur(e) {
    const text = e.target.value.trim();
    if (!this.props.newTodo) {
      this.props.onSave(text);
    }
  }

  public render() {
    const classes = classNames({
      [style.edit]: this.props.editing,
      [style.new]: this.props.newTodo,
    }, style.normal);

    const autoFocus = true;
    return (
      <input
        className={classes}
        type="text"
        autoFocus={autoFocus}
        placeholder={this.props.placeholder}
        value={this.state.text}
        onBlur={this.handleBlur}
        onChange={this.handleChange}
        onKeyDown={this.handleSubmit}
      />
    );
  }
}

export default TodoTextInput;
