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

        <remteh-contacts></remteh-contacts>
      </div>
    );
  }
}
