declare type LanguageFilterType = 'ko' | 'en' | 'ja' | 'zh-CN';

declare type LanguageStoreState = ILanguage;

declare type TranslationID = number;

declare interface ILanguage {
  completed?: boolean;
  source?: string;
  target?: string;
  text?: string;
  translatedText?: string;
}
