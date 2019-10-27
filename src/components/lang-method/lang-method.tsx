import { Component, Method } from '@stencil/core';
import * as langRu from './lang-ru.json';

@Component({
  tag: 'lang-method',
  shadow: true
})

export class LangMethod {

method(key: string) {
  return langRu[key] || '';
}

@Method() async getText() {
    return this.method;
  };
}
