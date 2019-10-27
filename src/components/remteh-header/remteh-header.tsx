import { Component, Prop, h, State } from '@stencil/core';

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
  @State() toContacts = window.location.search === '?contacts'

  onClickContacts() {
    const contactsCoordinates = document.getElementsByTagName('remteh-bottom')[0].offsetTop;

    window.scroll({
      top: contactsCoordinates, 
      left: 0, 
      behavior: 'smooth'
    });
  }

  componentWillLoad() {
    this.toContacts && window.scrollTo(0, 0);
  }

  componentDidLoad() {
    if (this.toContacts) {
      this.onClickContacts();
      window.history.replaceState(null, null, window.location.pathname);
      this.toContacts = false;
    };
  }

  render() {
    const headerStyle = {
      'header_container': true,
      'home_header': this.mode === 'Home',
      'projects_header': this.mode === 'Projects',
      'case_header': this.mode === 'Case',
    }
    const notCaseLocation = window.location.pathname === '/' || window.location.pathname === '/projects';
    const buttonContact = notCaseLocation ?
      (
        <button class="header_button" onClick={this.onClickContacts}>{this.getText('headerContacts')}</button>
      ) : (
        <stencil-route-link url="/?contacts" class="header_button" exact={true}>{this.getText('headerContacts')}</stencil-route-link>
      )



    return (
      <header class={headerStyle}>
        <div class="left_group">
          <img src={logo} class="logo_header"/>
          <p class="logo_text_header">REMTEHNALADKA</p>
        </div>
        <div class="right_group">
          <stencil-route-link url="/projects" class="header_button" exact={true}>{this.getText('headerProjects')}</stencil-route-link>
          {buttonContact}
        </div>
      </header>
    );
  }

}
