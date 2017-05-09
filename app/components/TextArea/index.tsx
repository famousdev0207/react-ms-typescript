import * as classNames from 'classnames';
import * as React from 'react';
import * as style from './style.css';

interface ITextAreaProps<T> {
  className?: string;
  editing?: boolean;
  placeholder?: string;
  onBlur?: React.FocusEventHandler<T>;
  onChange?: React.FormEventHandler<T>;
  onKeyDown?: React.KeyboardEventHandler<T>;
  text?: string;
}

interface ITextAreaState {
  text: string;
}

class TextArea extends React.Component<ITextAreaProps<any>, ITextAreaState> {

  constructor(props?: ITextAreaProps<any>, context?: any) {
    super(props, context);
    this.state = {
      text: this.props.text || '',
    };
    this.onBlur = this.onBlur.bind(this);
    this.onChange = this.onChange.bind(this);
    this.onKeyDown = this.onKeyDown.bind(this);
  }

  public onBlur(e) {
    const text = e.target.value.trim();
    if (this.props.onBlur) {
      this.props.onBlur(e);
    }
  }

  public onChange(e) {
    this.setState({ text: e.target.value });
    if (this.props.onChange) {
      this.props.onChange(e);
    }
  }

  public onKeyDown(e) {
    const text = e.target.value.trim();
    if (this.props.onKeyDown) {
      this.props.onKeyDown(e);
    }
  }

  public render() {
    const classes = classNames(style.editor, {
      [style.edit]: this.props.editing,
    }, this.props.className);

    return (
      <div className={classes}>
        <textarea
          autoFocus={true}
          placeholder={this.props.placeholder}
          value={this.state.text}
          onBlur={this.onBlur}
          onChange={this.onChange}
          onKeyDown={this.onKeyDown}
        />
      </div>
    );
  }
}

export default TextArea;
