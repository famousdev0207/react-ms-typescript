import * as React from 'react';
import { connect } from 'react-redux';
import * as TranslationActions from '../../actions/translation';
import Button from '../Button';
import ButtonGroup from '../ButtonGroup';
import ButtonToolbar from '../ButtonToolbar';
import TextArea from '../TextArea';
import * as style from './style.css';

import { logger } from '../../../common/utils/logging';

interface IMainSectionProps {
  actions: typeof TranslationActions;
  translation: ITranslation;
};

interface IMainSectionState {
  translatedText: string;
};

class MainSection extends React.Component<IMainSectionProps, IMainSectionState> {

  constructor(props?: IMainSectionProps, context?: any) {
    super(props, context);
    this.state = { translatedText: '' };
    this.handleTranslate = this.handleTranslate.bind(this);
  }

public handleTranslate() {
    const source = 'kr';
    const target = 'en';
    const text = '안녕';
    this.props.actions.translate({
      source,
      target,
      text,
    });
  }

  public render() {
    const { translatedText } = this.props.translation;
    return (
      <section className={style.main}>
        <div className={style.content}>
          <div className={style['box-editor']}>
            <ButtonToolbar>
              <ButtonGroup>
                <Button>한국어</Button>
                <Button>영어</Button>
              </ButtonGroup>
            </ButtonToolbar>
            <TextArea
              className={style.editor}
              newTranslation={true}
              placeholder="번역할 내용을 입력하세요."
            />
          </div>
          <div className={style['box-result']}>
            <ButtonToolbar>
              <ButtonGroup>
                <Button>영어</Button>
                <Button>한국어</Button>
              </ButtonGroup>
              <ButtonGroup>
                <Button className="btn-primary" onClick={this.handleTranslate}>
                  번역하기
                </Button>
              </ButtonGroup>
            </ButtonToolbar>
            <div className={style.result}>
              <div>{translatedText}</div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default MainSection;
