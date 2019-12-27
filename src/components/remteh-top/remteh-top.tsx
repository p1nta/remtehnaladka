import { Component, h, Prop } from '@stencil/core';

@Component({
  tag: 'remteh-top',
  styleUrl: 'remteh-top.css',
})
export class RemtehTop {
  @Prop() class: string

  render() {
    return (
      <div class={`top_part_wrapper ${this.class}`}>
        <nice-anim>
          <h2 class="top_part_title">
            Строительство<br/>
            объектов промышленного<br/>
            и гражданского<br/>
            назначения в Украине
          </h2>
          <div class="top_wrapper_links">
            <a class="top_wrapper_link" href="/projects">Проекты</a>
            <a class="top_wrapper_link" href="#contacts">Контакты</a>
          </div>
          <p class="top_part_description">
            Работая на рынке строительных услуг с 2006 года, мы заслужили
            высокую репутацию и безупречный авторитет, благодаря глубоким
            знаниям строительного бизнеса, современным технологиям и качеству
            выполняемых работ.
          </p>
        </nice-anim>
      </div>
    );
  }

}
