import { Component, Method } from '@stencil/core';
import * as langRu from './lang-ru.json';
import * as caseLangRu from './case-lang-ru.json';

@Component({
  tag: 'lang-method',
  shadow: true
})

export class LangMethod {

langMethod(key: string) {
  return langRu[key] || '';
}

caseLangMethod(key: string) {
  const keys = key.split('.');
  let value: any = caseLangRu;

  keys.forEach(el => {
    value = value[el];
  })

  return value  || [''];
}

@Method() async getText() {
    return this.langMethod;
  };

@Method() async getCaseText() {
  return this.caseLangMethod;
};
}
