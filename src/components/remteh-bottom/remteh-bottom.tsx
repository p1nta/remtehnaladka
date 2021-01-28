import { Component, h } from '@stencil/core';

import logo from '../../assets/svg/logo_dark.svg';

@Component({
  tag: 'remteh-bottom',
  styleUrl: 'remteh-bottom.css',
  // shadow: true
})
export class RemtehBottom {
  render() {
    return (
      <div class="bottom">
        <img src={logo} class="logo" />
        <p class="company_name">
          OOO «РЕМТЕХНАЛАДКА». 2021  
        </p>
      </div>
    );
  }
}
