import { Component, Prop, h } from '@stencil/core';

import * as Constants from '../../constants';

import texts from './case-lang-ru.json';

@Component({
  tag: 'remteh-case',
  styleUrl: 'remteh-case.css',
})

export class RemtehCase {
  @Prop() case: string;

  renderTitle = () => {
    return (
      <p class="case_title">
        {texts[this.case].title}
      </p>
    );
  }

  renderSlides = () => {
    const images = Constants.caseImg[this.case];
    const imagesRetina = Constants.caseImg[`${this.case}Retina`] || images;

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
    return (
      <div class="case_description">
        {texts[this.case].description.map(el => <p class="case_paragraph">{el}</p>)}
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
            Посмотреть все проекты
          </stencil-route-link>
        </div>
        <remteh-bottom />
      </div>
    );
  }

}
