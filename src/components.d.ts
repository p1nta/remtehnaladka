/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */


import { HTMLStencilElement, JSXBase } from '@stencil/core/internal';
import {
  MatchResults,
} from '@stencil/router';

export namespace Components {
  interface RemtehDirections {}
  interface RemtehHome {}
  interface RemtehProjects {
    'match': MatchResults;
  }
  interface RemtehRoot {}
  interface RemtehTop {}
}

declare global {


  interface HTMLRemtehDirectionsElement extends Components.RemtehDirections, HTMLStencilElement {}
  const HTMLRemtehDirectionsElement: {
    prototype: HTMLRemtehDirectionsElement;
    new (): HTMLRemtehDirectionsElement;
  };

  interface HTMLRemtehHomeElement extends Components.RemtehHome, HTMLStencilElement {}
  const HTMLRemtehHomeElement: {
    prototype: HTMLRemtehHomeElement;
    new (): HTMLRemtehHomeElement;
  };

  interface HTMLRemtehProjectsElement extends Components.RemtehProjects, HTMLStencilElement {}
  const HTMLRemtehProjectsElement: {
    prototype: HTMLRemtehProjectsElement;
    new (): HTMLRemtehProjectsElement;
  };

  interface HTMLRemtehRootElement extends Components.RemtehRoot, HTMLStencilElement {}
  const HTMLRemtehRootElement: {
    prototype: HTMLRemtehRootElement;
    new (): HTMLRemtehRootElement;
  };

  interface HTMLRemtehTopElement extends Components.RemtehTop, HTMLStencilElement {}
  const HTMLRemtehTopElement: {
    prototype: HTMLRemtehTopElement;
    new (): HTMLRemtehTopElement;
  };
  interface HTMLElementTagNameMap {
    'remteh-directions': HTMLRemtehDirectionsElement;
    'remteh-home': HTMLRemtehHomeElement;
    'remteh-projects': HTMLRemtehProjectsElement;
    'remteh-root': HTMLRemtehRootElement;
    'remteh-top': HTMLRemtehTopElement;
  }
}

declare namespace LocalJSX {
  interface RemtehDirections {}
  interface RemtehHome {}
  interface RemtehProjects {
    'match'?: MatchResults;
  }
  interface RemtehRoot {}
  interface RemtehTop {}

  interface IntrinsicElements {
    'remteh-directions': RemtehDirections;
    'remteh-home': RemtehHome;
    'remteh-projects': RemtehProjects;
    'remteh-root': RemtehRoot;
    'remteh-top': RemtehTop;
  }
}

export { LocalJSX as JSX };


declare module "@stencil/core" {
  export namespace JSX {
    interface IntrinsicElements {
      'remteh-directions': LocalJSX.RemtehDirections & JSXBase.HTMLAttributes<HTMLRemtehDirectionsElement>;
      'remteh-home': LocalJSX.RemtehHome & JSXBase.HTMLAttributes<HTMLRemtehHomeElement>;
      'remteh-projects': LocalJSX.RemtehProjects & JSXBase.HTMLAttributes<HTMLRemtehProjectsElement>;
      'remteh-root': LocalJSX.RemtehRoot & JSXBase.HTMLAttributes<HTMLRemtehRootElement>;
      'remteh-top': LocalJSX.RemtehTop & JSXBase.HTMLAttributes<HTMLRemtehTopElement>;
    }
  }
}


