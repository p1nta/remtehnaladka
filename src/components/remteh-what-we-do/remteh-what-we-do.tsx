import { Component, h } from '@stencil/core';

interface IElement {
  image: string;
  title:  string;
  description: string;
}

@Component({
  tag: 'remteh-what-we-do',
  styleUrl: 'remteh-what-we-do.css',
})
export class RemtehWhatWeDo {
  private Elements: IElement[] = [
    {
      image: '../../assets/img/design_x2.png',
      title: 'Проектирование',
      description: 'Мы учитываем все параметры и назначение будущего объекта при построении комплекса инженерных систем. Это позволяет нам создать эффективную, удобную в управлении единую интегрированную инфраструктуру.',
    },
    {
      image: '../../assets/img/engineering_systems_x2.png',
      title: 'Инженерные системы',
      description: 'Проектирование, поставка и монтаж автоматических инженерных систем, систем безопасности, электроснабжения, систем передачи данных и климатических систем. При проектировании мы учитываем все особенности объекта, что позволяет избежать несостыковок и лишнего дублирования в системе.',
    },
    {
      image: '../../assets/img/construction_and_reconstruction_x2.png',
      title: 'Строительство и реконструкция',
      description: 'Обмен опытом с ведущими организациями Украины и специалистами из Америки и Европы и использование в процессе строительства программ управления строительством в режиме реального времени, позволяет нам соблюдать сроки и надлежащее качество.',
    },
    {
      image: '../../assets/img/beautification_x2.png',
      title: 'Благоустройство',
      description: 'Наши специалисты проектируют благоустройство территорий для промышленных и гражданских объектов, чтобы сделать их эстетически привлекательными и удобными как для работы так и для жизни. ',
    },
  ];

  renderItem(element: IElement) {
    return (
      <div class="what_we_do_item">
        <img
          src={element.image}
          alt={element.title}
          class="what_we_do_item_image"
        />
        <h3 class="what_we_do_item_title">
          {element.title}
        </h3>
        <p class="what_we_do_item_description">
          {element.description}
        </p>
      </div>
    );
  }

  render() {
    return (
      <div class="what_we_do_wrapper">
        <h2 class="what_we_do_title">
          Что мы делаем
        </h2>
        <div class="what_we_do_items_wrapper">
          {this.Elements.map(this.renderItem)}
        </div>
      </div>
    );
  }

}
