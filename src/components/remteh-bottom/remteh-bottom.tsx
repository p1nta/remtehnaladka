import { Component, h } from '@stencil/core';

import logo from '../../assets/svg/logo_with_name.svg';

@Component({
  tag: 'remteh-bottom',
  styleUrl: 'remteh-bottom.css',
  // shadow: true
})
export class RemtehBottom {
  constructor() {
    document.querySelector('lang-method').getText().then((method) => {
      this.getText = method;
    });
  }

  getText: (key: string) => void;

  render() {
    return (
      <div class="bottom">
        <img src={logo} class="logo" />
        <p class="company_name">{this.getText('bottomCompanyName')}</p>
      </div>
    );
  }

}
