import { Component, h } from '@stencil/core';

import svgArrow from '../../assets/svg/arrow.svg';

@Component({
  tag: 'remteh-contacts',
  styleUrl: 'remteh-contacts.css',
  // shadow: true
})
export class RemtehContacts {
  constructor() {
    document.querySelector('lang-method').getText().then((method) => {
      this.getText = method;
    });
  }

  getText: (key: string) => void;

  render() {
    return (
      <div class="contacts_wrapper" id="contacts">
        <div class="contacts_container">
          <img src={svgArrow} class="arrow" />
          <p class="title">
            {this.getText('contactsTitle')}
          </p>
          <p class="description">
            {this.getText('contactsContactUs')}
          </p>
          <a
            class="email"
            href="mailto:info@rtn.com.ua"
          >
            info@rtn.com.ua
          </a>
          <p class="phones">
            <a href="tel:++380999709482">+38 (099) 970-94-82</a>
            <a href="tel:++380954930687">+38 (095) 493-06-87</a>
          </p>
          <p class="adress">
            {this.getText('contactsAddres')}
          </p>
        </div>
      </div>
    );
  }

}
