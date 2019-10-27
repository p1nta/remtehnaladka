import { Component, h } from '@stencil/core';

@Component({
  tag: 'remteh-home',
  styleUrl: 'home.css',
})
export class Home {
  render() {
    return (
      <div class='remteh-home'>
        <remteh-top></remteh-top>
        <remteh-directions></remteh-directions>
        <remteh-what-we-do></remteh-what-we-do>
        <remteh-main-projects></remteh-main-projects>
        <remteh-why-trust></remteh-why-trust>
        <remteh-advantages></remteh-advantages>
        <remteh-clients></remteh-clients>
        <remteh-contacts></remteh-contacts>
      </div>
    );
  }
}
