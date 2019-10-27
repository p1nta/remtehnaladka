import { Component, Prop, h } from '@stencil/core';

import logo from '../../assets/svg/logo.svg';

@Component({
  tag: 'remteh-header',
  styleUrl: 'remteh-header.css',
  // shadow: true
})
export class RemtehHeader {
  constructor() {
    document.querySelector('lang-method').getText().then((method) => {
      this.getText = method;
    });
  }

  getText: (key: string) => void;

  @Prop() mode: 'Home' | 'Projects' | 'Case';

  onClickContacts() {
    const contactsCoordinates = document.getElementsByTagName('remteh-bottom')[0].offsetTop;

    window.scroll({
      top: contactsCoordinates, 
      left: 0, 
      behavior: 'smooth'
    });
  }

  render() {
    const headerStyle = {
      'header_container': true,
      'home_header': this.mode === 'Home',
      'projects_header': this.mode === 'Projects',
      'case_header': this.mode === 'Case',
    }

    return (
      <header class={headerStyle}>
        <a
          class="left_group"
          href="/"
        >
          <img src={logo} class="logo_header"/>
          <p class="logo_text_header">REMTEHNALADKA</p>
        </a>
        <div class="right_group">
          <stencil-route-link url="/projects" class="header_button" exact={true}>{this.getText('headerProjects')}</stencil-route-link>
          <button class="header_button" onClick={this.onClickContacts}>{this.getText('headerContacts')}</button>
        </div>
      </header>
    );
  }

}
