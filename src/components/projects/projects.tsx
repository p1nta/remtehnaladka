import { Component, Prop, h } from '@stencil/core';
import { MatchResults } from '@stencil/router';

import * as Constants from '../../constants';

import * as slides from './slides.json';

@Component({
  tag: 'remteh-projects',
  styleUrl: 'projects.css',
})

export class Projects {
  constructor() {
    document.querySelector('lang-method').getText().then((method) => {
      this.getText = method;
    });
  }

  @Prop() match: MatchResults;

  getText: (key: string) => void;

  render() {
    return (
      <div class="progects">
        <remteh-header mode="Projects" />
        <div class="b_title">
          <img
            srcset={`${Constants.projectsHeaderImg} 1x, ${Constants.projectsHeaderX2Img} 2x`}
            src={Constants.projectsHeaderImg}
            class="title_img"
          />
          <img
            srcset={`${Constants.projectsHeadeMobile} 1x, ${Constants.projectsHeadeMobileX2} 2x`}
            src={Constants.projectsHeadeMobile}
            class="title_img title_img_mobile"
          />
          <p class="title_text">{this.getText('projectsTitle')}</p>
        </div>
        <div class="content">
          <tab-slider
            class="l_tab_slider"
            tabs={['Industrial', 'Civil', 'Foreign']}
            slides={slides}
          />
        </div>
        <remteh-contacts />
        <remteh-bottom />
      </div>
    );
  }
}
