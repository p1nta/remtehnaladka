import { Component, h } from '@stencil/core';

import logo from '../../assets/svg/logo_with_name.svg';

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
          OOO «РЕМТЕХНАЛАДКА». 2020  
        </p>
      </div>
    );
  }

}
