import { Component, h, State, Prop } from '@stencil/core';

import bracketIcon from '../../assets/svg/bracket.svg';
import { IFilters } from '../tab-slider/tab-slider';
import langs from '../langs/lang-ru.json';

@Component({
  tag: 'remteh-select',
  styleUrl: 'remteh-select.css',
})
export class RemtehSelect {
  refInput: HTMLInputElement;

  @Prop() options: IFilters[];
  @Prop() selectedOption: IFilters;
  @Prop() onSelect: (value: IFilters) => void;
  @State() opened = false;

  onClick = (e: any) => {
    const value = e.currentTarget.getAttribute('data-value');
    console.log(e);
    
    if (value && this.opened) {
      this.onSelect(value);
      this.opened = false
    } else if(!this.opened){
      this.opened = true;
    }
  }

  prepareDropdown() {
    const filters = [];

    this.options.forEach((el: string) => {
      el !== this.selectedOption && filters.push(el);
    });

    return filters.map(el => (
      <div data-value={el} class="select_option" onClick={this.onClick}>
        {langs[el]}
      </div>
    ));
  }

  render() {
    const iconStyles = { 'bracket_icon': true, 'm_rotate': this.opened };

    return (
      <div class={{"select_container": true, "select_opened": this.opened }}>
        <div
          onClick={this.onClick}
          data-value={this.selectedOption}
          class="select_window"
        >
          <img src={bracketIcon} class={iconStyles} />
          {langs[this.selectedOption]}
        </div>
        <div class="select_dropdown">
          {this.prepareDropdown()}
        </div>
      </div>
    );
  }

}
