import * as React from 'react';
import { connect } from 'react-redux';
import * as TranslationActions from '../../actions/translation';
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
  }

  public render() {
    return (
      <section className={style.main}>
        <TextArea
          newTranslation={true}
          placeholder="번역할 내용을 입력하세요"
        />
      </section>
    );
  }
}

export default MainSection;
