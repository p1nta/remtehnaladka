import { Component, Prop, h, State } from '@stencil/core';

import logo from '../../assets/svg/logo.svg';

@Component({
  tag: 'remteh-header',
  styleUrl: 'remteh-header.css',
})
export class RemtehHeader {
  constructor() {
    document.querySelector('lang-method').getText().then((method) => {
      this.getText = method;
    });

    window.addEventListener('scroll', this.onScroll);
  }

  getText: (key: string) => void;
  headerRef: any;

  @Prop() mode: 'Home' | 'Projects' | 'Case';
  @State() toContacts = window.location.search === '?contacts'
  @State() isScrolled = window.location.search === '?contacts'

  onScroll = () => {
    if(this.mode === 'Case') {
      return;
    }
    if (window.scrollY > 20 && !this.isScrolled) {
      this.isScrolled = true;
      this.headerRef.classList.add('show_header');
    }
    if (window.scrollY < 20 && this.isScrolled) {
      this.isScrolled = false;
      this.headerRef.classList.remove('show_header');
    }
  }

  onClickContacts() {
    const contactsCoordinates = document.getElementsByTagName('remteh-bottom')[0].offsetTop;

    window.scroll({
      top: contactsCoordinates, 
      left: 0, 
      behavior: 'smooth'
    });
  }

  componentDidUnload() {
    window.scrollTo(0, 0);
  }

  componentDidLoad() {
    if (this.toContacts && this.mode !== 'Home') {
      this.onClickContacts();
      this.toContacts = false;
    };
  }

  render() {
    const headerStyle = {
      'header_container': true,
      'home_header': this.mode === 'Home' && !this.isScrolled,
      'projects_header': this.mode === 'Projects' && !this.isScrolled,
      'case_header': this.mode === 'Case' || this.isScrolled,
    }
    const notCaseLocation = window.location.pathname === '/' || window.location.pathname === '/projects';
    const buttonContact = notCaseLocation ?
      (
        <button class="header_button" onClick={this.onClickContacts}>{this.getText('headerContacts')}</button>
      ) : (
        <a href="/remtehnaladka/#contacts" class="header_button">{this.getText('headerContacts')}</a>
      )

    return (
      <header ref={el => this.headerRef = el} class={headerStyle}>
        <a
          class="left_group"
          href="/remtehnaladka"
        >
          <img src={logo} class="logo_header"/>
          <p class="logo_text_header">REMTEHNALADKA</p>
        </a>
        <div class="right_group">
          <stencil-route-link url="/remtehnaladka/projects" class="header_button" exact={true}>{this.getText('headerProjects')}</stencil-route-link>
          {buttonContact}
        </div>
      </header>
    );
  }

}
