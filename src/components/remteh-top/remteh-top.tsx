import { Component, h } from '@stencil/core';

@Component({
  tag: 'remteh-top',
  styleUrl: 'remteh-top.css',
})
export class RemtehTop {

  render() {
    return (
      <div class="top_part_wrapper">
        <div class="top_part_text">
          <h2 class="top_part_title">
            Строительство<br/>
            объектов промышленного<br/>
            и гражданского<br/>
            назначения в Украине
          </h2>
          <p class="top_part_description">
            Работая на рынке строительных услуг с 2006 года, мы заслужили
            высокую репутацию и безупречный авторитет, благодаря глубоким
            знаниям строительного бизнеса, современным технологиям и качеству
            выполняемых работ.
          </p>
        </div>
      </div>
    );
  }

}
