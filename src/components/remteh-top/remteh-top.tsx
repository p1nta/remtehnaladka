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
        <prog-img
          src="./assets/img/top-1920.png"
          placeHolder="./assets/img/top-1920-loading.png"
          class="top_desctop_img"
        />
        <prog-img
          src="./assets/img/top-375.png"
          placeHolder="./assets/img/top-375-loading.png"
          class="top_mobile_img"
        />
        <nice-anim>
          <h2 class="top_part_title">
            Строительство
            объектов промышленного
            и гражданского
            назначения в Украине
          </h2>
          <div class="top_wrapper_links">
            <stencil-route-link anchorClass="top_wrapper_link" url="/projects">Проекты</stencil-route-link>
            <a class="top_wrapper_link" href="/#contacts">Контакты</a>
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
