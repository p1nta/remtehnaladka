import { Component, Prop, h } from '@stencil/core';

import * as Constants from '../../constants';

@Component({
  tag: 'remteh-case',
  styleUrl: 'remteh-case.css',
})

export class RemtehCase {
  constructor() {
    const tag = document.querySelector('lang-method');

    tag.getText().then((method) => {
      this.getText = method;
    });
    tag.getCaseText().then((method) => {
      this.getCaseText = method;
    });
  }

  getCaseText: (key: string) => string[];
  getText: (key: string) => string;

  @Prop() case: string;

  renderTitle = () => (
    <p class="case_title">
      {this.getCaseText(`${this.case}.title`)}
    </p>
  );

  renderSlides = () => {
    const images = Constants.caseImg[this.case];
    const imagesRetina = Constants.caseImg[`${this.case}Retina`] || images;
    debugger;

    return (
      <div class="case_slides">
        {images.map((path: string, index: number) =>
          (
            <img
              key={index}
              srcset={`${path} 1x, ${imagesRetina[index]} 2x`}
              src={path}
              class="case_slide_img"
            />
          ))
        }
      </div>
    )
  }

  renderDescription = () => {
    const text = this.getCaseText(`${this.case}.description`);
    debugger;
    return (
      <div class="case_description">
        {text.map(paragraph => <p class="case_paragraph">{paragraph}</p>)}
      </div>
    );
  }

  render() {
    return (
      <div class="case_wrapper">
        <remteh-header mode="Case" />
        <div class="case_m_width">
          <nice-anim>
            {this.renderTitle()}
            {this.renderDescription()}
          </nice-anim>
          <nice-anim>
            {this.renderSlides()}
          </nice-anim>
          <stencil-route-link
            url="/projects"
            class="case_link"
            exact={true}
          >
            {this.getText('caseShowAllButton')}
          </stencil-route-link>
        </div>
        <remteh-bottom />
      </div>
    );
  }

}
