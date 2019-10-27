import { Component, h, Prop, State } from '@stencil/core';

export interface ISlide {
  path: string;
  pathRetina: string;
  textCode: string;
  link: string;
}
export interface ISlideFilter {
  Industrial: ISlide[];
  Civil: ISlide[];
  Foreign: ISlide[];
}

export type IFilters = 'All' | 'Industrial' | 'Civil' | 'Foreign';

@Component({
  tag: 'tab-slider',
  styleUrl: 'tab-slider.css',
})

export class TabSlider {
  constructor() {
    document.querySelector('lang-method').getText().then((method) => {
      this.getText = method;
    });
  }

  getText: (key: string) => void;

  @Prop() tabs: IFilters[];
  @Prop() slides: ISlideFilter;

  @State() selectedTab: IFilters = 'All';

  onSelectTab = (value: IFilters) => {
    this.selectedTab = value;
  }

  slide = (slide: ISlide, key: number) => {

    return(
      <stencil-route-link key={key} class="slide" url={slide.link}>
        <img
          class="slide_img"
          srcset={`${slide.path} 1x, ${slide.pathRetina} 2x`}
          src={slide.path}
        />
        <p class="slide_text">{this.getText(slide.textCode)}</p>
      </stencil-route-link>
    )
  }

  renderSlidesContainer(array: ISlide[]) {
    return (
      <div class="slide_container">
        {array.map((item, index) => this.slide(item, index))}
      </div>
    );
  }

  renderSlides = () => {
    const slides = this.slides;

    if (this.selectedTab === 'All') {
      return this.renderSlidesContainer(
        [].concat(slides.Civil, slides.Foreign, slides.Industrial),
      );
    } 
    return this.renderSlidesContainer(slides[this.selectedTab]);
  }

  render() {

    return (
      <div class="slider">
        <tab-bar
          tabs={['All', ...this.tabs]}
          onChangeTab={this.onSelectTab}
          selectedTab={this.selectedTab}
        />
        {this.renderSlides()}
      </div>
    );
  }

}
