import * as React from 'react';
import { connect } from 'react-redux';
import * as TranslationActions from '../../actions/translation';
import Button from '../Button';
import TextArea from '../TextArea';
import * as style from './style.css';

interface IMainSectionProps {
  actions: typeof TranslationActions;
  translation: ITranslation;
};

interface IMainSectionState {
};

class MainSection extends React.Component<IMainSectionProps, IMainSectionState> {

  constructor(props?: IMainSectionProps, context?: any) {
    super(props, context);
    this.handleClick = this.handleClick.bind(this);
  }

  public handleClick() {
    return null;
  }

  public render() {
    return (
      <section className={style.main}>
        <Button onClick={this.handleClick}>
          Test
        </Button>
        <TextArea
          newTranslation={true}
          placeholder="Test"
        />
      </section>
    );
  }
}

export default MainSection;
