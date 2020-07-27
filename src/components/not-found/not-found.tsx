import { Component, h } from '@stencil/core';

import logo from '../../assets/svg/logo.svg';

@Component({
  tag: 'remteh-not-found',
  styleUrl: 'not-found.css',
})
export class NotFound {
  render() {
    return (
      <div class="not_found_wrapper">
        <div class="not_found_logo_link">
          <stencil-route-link
          anchorClass="m_clicable"
            url="/"
          >
            <img src={logo} class="not_found_logo"/>
          </stencil-route-link>
        </div>
        <div class="not_found_inner_content">
          <p class="not_found_heading">
            404
          </p>
          <p class="not_found_description">
            Мы не можем найти страницу, которую Вы запрашиваете.
          </p>
        </div>
        <div class="not_found_button_link">
          <stencil-route-link
            anchorClass="not_found_bottom_button m_clicable"
            url="/"
          >
            На главную
          </stencil-route-link>
        </div>
      </div>
    );
  }

}
