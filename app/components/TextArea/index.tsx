import * as classNames from 'classnames';
import * as React from 'react';
import * as style from './style.css';

interface ITextAreaProps {
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
    this.handleBlur = this.handleBlur.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  public handleSubmit(e) {
    const text = e.target.value.trim();
  }

  public handleChange(e) {
    this.setState({ text: e.target.value });
  }

  public handleBlur(e) {
    const text = e.target.value.trim();
  }

  public render() {
    const classes = classNames({
      [style.edit]: this.props.editing,
      [style.new]: this.props.newTranslation,
    }, style.normal);

    return (
      <div className={style.classes}>
        <textarea
          autoFocus={true}
          placeholder={this.props.placeholder}
          value={this.state.text}
          onBlur={this.handleBlur}
          onChange={this.handleChange}
          onKeyDown={this.handleSubmit}
        />
      </div>
    );
  }
}

export default TextArea;
