import { Component, h } from '@stencil/core';

interface IElement {
  image?: string;
  count?: number;
  title:  string;
}

@Component({
  tag: 'remteh-main-projects',
  styleUrl: 'remteh-main-projects.css',
})
export class RemtehMainProjects {
  private exampleElements: IElement[] = [
    {
      image: './assets/img/roshen_1.jpg',
      title: 'Строительство фабрики Roshen в Виннице',
    },
    {
      image: './assets/img/geliar_1.jpg',
      title: 'Строительство фитнесс-клуба Гелиар в Киеве',
    },
    {
      image: './assets/img/leoni_1.jpg',
      title: 'Строительство завода Leoni в Коломые',
    },
  ];

  private achievementElements: IElement[] = [
    {
      count: 12,
      title: 'Лет на строительном рынке Украины',
    },
    {
      count: 148,
      title: 'Завершенных проектов',
    },
    {
      count: 64,
      title: 'Квалифицированных специалиста',
    },
  ];

  renderAchievementsItem(element: IElement) {
    return (
      <div class="projects_main_achievement_item">
        <img
          src="./assets/img/prize_x2.png"
          class="projects_main_achievement_image"
        />
        <p class="projects_main_achievement_item_count">
          {element.count}
        </p>
        <p class="projects_main_achievement_description">
          {element.title}
        </p>
      </div>
    );
  }

  renderExampleItem(element: IElement) {
    return (
      <div class="projects_main_example_item">
        <div class="projects_main_example_item_image_wrap">
          <img
            src={element.image}
            alt={element.title}
            class="projects_main_example_item_image"
          />
        </div>
        <p class="projects_main_example_item_description">
          {element.title}
        </p>
      </div>
    );
  }

  render() {
    return (
      <div class="projects_main_wrapper">
        <div class="projects_main_top_part">
          <nice-anim>
            <h3 class="projects_main_title">
              Проекты
            </h3>
            <div class="projects_main_achievements">
              {this.achievementElements.map(this.renderAchievementsItem)}
            </div>
          </nice-anim>
        </div>
        <div class="projects_main_bottom_part">
          <nice-anim>
            <div class="projects_main_examples">
              {this.exampleElements.map(this.renderExampleItem)}
            </div>
            <stencil-route-link
              url="/remtehnaladka/projects"
              anchorClass="projects_main_all_link m_clicable"
            >
              Посмотреть все проекты
            </stencil-route-link>
          </nice-anim>
        </div>
      </div>
    );
  }

}
