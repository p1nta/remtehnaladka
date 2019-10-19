import { Component, h } from '@stencil/core';

@Component({
  tag: 'remteh-contacts',
  styleUrl: 'remteh-contacts.css',
  shadow: true
})
export class RemtehContacts {

  render() {
    return (
      <div>
        <div>
          <h3 class="title">
            Контакты
          </h3>
          <p class="description">
            Связаться с нами:
          </p>
          <a
            class="email"
            href=""
          >
            info@rtn.com.ua
          </a>
          <p class="phones">
            +38 (050) 278-35-89
            <br/>
            +38 (097) 535-12-83
          </p>
          <p class="adress">
            г. Полтава, Украина
            <br/>
            Первомайский п-кт, 19
          </p>
        </div>
      </div>
    );
  }

}
