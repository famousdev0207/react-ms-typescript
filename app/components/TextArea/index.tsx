import * as classNames from 'classnames';
import * as React from 'react';
import * as style from './style.css';

interface ITextAreaProps {
  className?: string;
  text?: string;
  placeholder?: string;
  newTranslation?: boolean;
  editing?: boolean;
};

interface ITextAreaState {
  text: string;
};

class TextArea extends React.Component<ITextAreaProps, ITextAreaState> {

  constructor(props?: ITextAreaProps, context?: any) {
    super(props, context);
    this.state = {
      text: this.props.text || '',
    };
    this.onBlur = this.onBlur.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  public onSubmit(e) {
    const text = e.target.value.trim();
  }

  public onChange(e) {
    this.setState({ text: e.target.value });
  }

  public onBlur(e) {
    const text = e.target.value.trim();
  }

  public render() {
    const classes = classNames(style.editor, {
      [style.edit]: this.props.editing,
      [style.new]: this.props.newTranslation,
    }, this.props.className);

    return (
      <div className={classes}>
        <textarea
          autoFocus={true}
          placeholder={this.props.placeholder}
          value={this.state.text}
          onBlur={this.onBlur}
          onChange={this.onChange}
          onKeyDown={this.onSubmit}
        />
      </div>
    );
  }
}

export default TextArea;
