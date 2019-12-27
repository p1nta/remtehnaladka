import { Component, h, State, Prop } from '@stencil/core';

import bracketIcon from '../../assets/svg/bracket.svg';

import { IFilters } from '../tab-slider/tab-slider';

@Component({
  tag: 'remteh-select',
  styleUrl: 'remteh-select.css',
})
export class RemtehSelect {
  constructor() {
    document.querySelector('lang-method').getText().then((method) => {
      this.getText = method;
    });
  }

  refInput: HTMLInputElement;

  getText: (key: string) => void;

  @Prop() options: IFilters[];
  @Prop() selectedOption: IFilters;
  @Prop() onSelect: (value: IFilters) => void;
  @State() opened = false;
  @State() focused = false;

  onBlur = () => {
    setTimeout(() => {
      this.focused = false;
      this.opened = false;
    }, 200);
  }

  onClick = (e: any) => {
    const value = e.currentTarget.getAttribute('data-value');

    if (value && this.opened) {
      this.onSelect(value);
      this.opened = false
    } else if(!this.opened && !value){
      this.refInput.focus();
      this.opened = true;
    }
  }

  prepareDropdown() {
    const filtres = [];

    this.options.forEach((el: string) => {
      el !== this.selectedOption && filtres.push(el);
    });

    return filtres.map(el => {
      return <div data-value={el} class="select_option" onClick={this.onClick}>{this.getText(`filter${el}`)}</div>
    })
  }

  render() {
    const iconStyles = { 'bracket_icon': true, 'm_rotate': this.opened };

    return (
      <div onClick={this.opened ? null : this.onClick} class={{"select_container": true, "select_focused": this.focused, "select_opened": this.opened }}>
        <input
          onBlur={this.onBlur}
          type="button"
          class="select_input"
          ref={el => this.refInput = el}
        />
        <div onClick={this.onClick} data-value={this.selectedOption} class="select_window">
          <img src={bracketIcon} class={iconStyles} />
          {this.getText(`filter${this.selectedOption}`)}
        </div>
        <div class="select_dropdown">
          {this.prepareDropdown()}
        </div>
      </div>
    );
  }

}
