import { Component, h, Prop } from '@stencil/core';

import { IFilters } from './tab-slider';

@Component({
  tag: 'tab-bar',
  styleUrl: 'tab-slider.css',
})
export class TabBar {
  @Prop() tabs: IFilters[];
  @Prop() onChangeTab: (value: IFilters) => void;
  @Prop() selectedTab: IFilters;

  filterTexts = {
    All: 'Все объекты',
    Industrial: 'Промышленные объекты',
    Civil: 'Гражданские объекты',
    Foreign: 'Иностранный заказчик',
  }

  renderDesctopFiltres() {
    return this.tabs.map(tab => (
      <button
        class={{'tab': true, 'selected': tab === this.selectedTab}}
        name={tab}
        onClick={this.onClick}
      >
        <p class="tab_text">{this.filterTexts[tab]}</p>
      </button>
    ));
  }

  onClick = (e: MouseEvent) => {
    this.onChangeTab(e.target['name'])
  }

  renderMobileSelect() {
    return <remteh-select selectedOption={this.selectedTab} options={this.tabs} onSelect={this.onChangeTab} />;
  }

  render() {
    return (
      <div class="filtres_container">
        {this.renderDesctopFiltres()}
        {this.renderMobileSelect()}
      </div>
    );
  }
}