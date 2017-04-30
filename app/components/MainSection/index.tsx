import * as React from 'react';
import { connect } from 'react-redux';
import * as TranslationActions from '../../actions/translation';
import Button from '../Button';
import ButtonGroup from '../ButtonGroup';
import ButtonToolbar from '../ButtonToolbar';
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
    this.handleTranslate = this.handleTranslate.bind(this);
  }

  public handleTranslate() {
    return null;
  }

  public render() {
    return (
      <section className={style.main}>
        <div className={style.editor}>
          <ButtonToolbar>
            <ButtonGroup>
              <Button>한국어</Button>
              <Button>영어</Button>
            </ButtonGroup>
          </ButtonToolbar>
          <TextArea
            newTranslation={true}
            placeholder="번역할 내용을 입력하세요."
          />
        </div>
        <div className={style.result}>
          <ButtonToolbar>
            <ButtonGroup>
              <Button>영어</Button>
              <Button>한국어</Button>
            </ButtonGroup>
            <ButtonGroup>
              <Button onClick={this.handleTranslate}>
                번역하기
              </Button>
            </ButtonGroup>
          </ButtonToolbar>
          <div>
            Test
          </div>
        </div>
      </section>
    );
  }
}

export default MainSection;

