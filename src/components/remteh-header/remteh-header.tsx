import { Component, Prop, h, State } from '@stencil/core';

import logo from '../../assets/svg/logo.svg';

@Component({
  tag: 'remteh-header',
  styleUrl: 'remteh-header.css',
})
export class RemtehHeader {
  constructor() {
    window.addEventListener('scroll', this.onScroll);
  }

  headerRef: any;

  @Prop() mode: 'Home' | 'Projects' | 'Case';
  @State() toContacts = window.location.hash.includes('contacts')
  @State() isScrolled = window.location.hash.includes('contacts')

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
    if ('history' in window && 'pushState' in history) {
      history.pushState(null, null, '#contacts');
    }

    const contactsCoordinates = document.getElementsByTagName('remteh-bottom')[0].offsetTop;

    window.scroll({
      top: contactsCoordinates, 
      left: 0, 
      behavior: 'smooth'
    });
  }

  onLogoClick = () => {
    if (this.mode === 'Home') {
      window.scroll({
        top: 0, 
        left: 0, 
        behavior: 'smooth'
      });
    }
  }

  onProjectsClick = () => {
    if (this.mode === 'Projects') {
      window.scroll({
        top: 0, 
        left: 0, 
        behavior: 'smooth'
      });
    }
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
        <button class="header_button" onClick={this.onClickContacts}>
          Контакты
        </button>
      ) : (
        <a href="/#contacts" class="header_button">
          Контакты
        </a>
      )

    return (
      <header ref={el => this.headerRef = el} class={headerStyle}>
        <stencil-route-link
          anchorClass="left_group"
          url="/"
          onClick={this.onLogoClick}
        >
          <img src={logo} class="logo_header"/>
          <p class="logo_text_header">REMTEHNALADKA</p>
        </stencil-route-link>
        <div class="right_group">
          <stencil-route-link
            url="/projects"
            anchorClass="header_button"
            onClick={this.onProjectsClick}
            exact={true}>
              Проекты
            </stencil-route-link>
          {buttonContact}
        </div>
      </header>
    );
  }

}
