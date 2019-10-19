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
  interface RemtehContacts {}
  interface RemtehHome {}
  interface RemtehProjects {
    'match': MatchResults;
  }
  interface RemtehRoot {}
}

declare global {


  interface HTMLRemtehContactsElement extends Components.RemtehContacts, HTMLStencilElement {}
  const HTMLRemtehContactsElement: {
    prototype: HTMLRemtehContactsElement;
    new (): HTMLRemtehContactsElement;
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
  interface HTMLElementTagNameMap {
    'remteh-contacts': HTMLRemtehContactsElement;
    'remteh-home': HTMLRemtehHomeElement;
    'remteh-projects': HTMLRemtehProjectsElement;
    'remteh-root': HTMLRemtehRootElement;
  }
}

declare namespace LocalJSX {
  interface RemtehContacts {}
  interface RemtehHome {}
  interface RemtehProjects {
    'match'?: MatchResults;
  }
  interface RemtehRoot {}

  interface IntrinsicElements {
    'remteh-contacts': RemtehContacts;
    'remteh-home': RemtehHome;
    'remteh-projects': RemtehProjects;
    'remteh-root': RemtehRoot;
  }
}

export { LocalJSX as JSX };


declare module "@stencil/core" {
  export namespace JSX {
    interface IntrinsicElements {
      'remteh-contacts': LocalJSX.RemtehContacts & JSXBase.HTMLAttributes<HTMLRemtehContactsElement>;
      'remteh-home': LocalJSX.RemtehHome & JSXBase.HTMLAttributes<HTMLRemtehHomeElement>;
      'remteh-projects': LocalJSX.RemtehProjects & JSXBase.HTMLAttributes<HTMLRemtehProjectsElement>;
      'remteh-root': LocalJSX.RemtehRoot & JSXBase.HTMLAttributes<HTMLRemtehRootElement>;
    }
  }
}


