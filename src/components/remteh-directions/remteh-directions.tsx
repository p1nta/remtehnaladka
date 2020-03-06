import { Component, h } from '@stencil/core';

interface IElements {
  image: string;
  title:  string;
  descriptions: string[];
  route:  string;
}

@Component({
  tag: 'remteh-directions',
  styleUrl: 'remteh-directions.css',
})

export class Remtehdirections {
  private Elements = [
    {
      image: '../../assets/img/roshen.png',
      title: 'Строительство промышленных объектов',
      descriptions: [
        'Объекты энергетики',
        'Нефтеперерабатывающие заводы',
        'Крупные производства',
        'Инженерные комплексы',
        'Аграрные сооружения',
      ],
      route: '/projects',
    },
    {
      image: '../../assets/img/geliar_direct.png',
      title: 'Гражданское строительство',
      descriptions: [
        'Торговые центры',
        'Автосалоны',
        'Жилые и офисные комплексы',
        'Спортивные объекты',
        'Гостинницы и рестораны',
      ],
      route: '/projects',
    },
    {
      image: '../../assets/img/leoni.png',
      title: 'Строительство для иностранного заказчика',
      descriptions: [
        'Промышленные объекты',
        'Гражданские объекты',
      ],
      route: '/projects',
    },
  ];

  renderItem(element: IElements) {
    return (
      <div class="directions_item">
        <img
          src={element.image}
          alt={element.title}
          class="directions_item_image"
        />
        <div class="directions_item_text">
          <h3 class="directions_item_title">
            {element.title}
          </h3>
          <p class="directions_item_description">
            {element.descriptions.map((descr: string) => (<p>{descr}</p>))}
          </p>
          <a
            class="directions_item_link m_clicable"
            href={element.route}
          >
            Посмотреть проекты
          </a>
        </div>
      </div>
    );
  }

  render() {
    return (
      <div class="directions_wrapper">
        <nice-anim>
          <h2 class="directions_title">
            Наши направления
          </h2>
          <div class="directions_items_wrapper">
            {this.Elements.map(this.renderItem)}
          </div>
        </nice-anim>
      </div>
    );
  }

}
