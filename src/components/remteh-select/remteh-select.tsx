import { Component, h, State } from '@stencil/core';

@Component({
  tag: 'remteh-select',
  styleUrl: 'remteh-select.css',
  shadow: true
})
export class RemtehSelect {
  constructor() {
    document.querySelector('lang-method').getText().then((method) => {
      this.getText = method;
    });
  }

  getText: (key: string) => void;

  @State() options = [ 'All' , 'Industrial' , 'Civil' , 'Foreign' ];
  @State() selectedOption = 'All';
  @State() opened = false;


  prepareDropdown() {
    const filtres = [];

    this.options.forEach((el: string) => {
      el !== this.selectedOption && filtres.push(el);
    });

    return filtres.map(el => {
      return <div>{this.getText(`filter${el}`)}</div>
    })
  }

  render() {
    return (
      <div class="select_container">
        <input type="button" class="select_input" />
        <div class="select_window"></div>
        <div class="select_dropdown">
          {this.prepareDropdown()}
        </div>
      </div>
    );
  }

}
