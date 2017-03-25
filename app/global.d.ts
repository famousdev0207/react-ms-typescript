// for style loader
declare module '*.css' {
  const styles: any;
  export = styles;
}

// for redux devtools extension
/* tslint:disable:interface-name */
declare interface Window {
  devToolsExtension?(): (args?: any) => any;
}
