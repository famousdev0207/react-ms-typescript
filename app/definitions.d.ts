declare interface ITodoItemData {
  id?: TodoItemId;
  text?: string;
  completed?: boolean;
}

declare type TodoItemId = number;

declare type TodoFilterType = 'SHOW_ALL' | 'SHOW_ACTIVE' | 'SHOW_COMPLETED';

declare type TodoStoreState = ITodoItemData[];

declare type LanguageStoreState = ILanguage;

declare type TranslationID = number;

declare interface ILanguage {
  completed?: boolean;
  source?: string;
  target?: string;
  text?: string;
  translatedText?: string;
}
