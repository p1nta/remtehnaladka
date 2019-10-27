import { Component, h, Prop } from '@stencil/core';

@Component({
  tag: 'tab-bar',
  styleUrl: 'tab-slider.css',
  // shadow: true
})
export class TabBar {
  @Prop() tabs: string[];
  @Prop() onClick: (event: MouseEvent) => void;
  @Prop() selectedTab: string;

  renderDesctopFiltres() {
    return this.tabs.map(tab => (
      <button
        class={{'tab': true, 'selected': tab === this.selectedTab}}
        name={tab}
        onClick={this.onClick}
      >
        <p class="tab_text">{tab}</p>
      </button>
    ));
  }

  renderMobileSelect() {
    return <remteh-select />;
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