import { Component, h } from '@stencil/core';

interface IAdvantagesItem {
  icon: string;
  title: string;
  iconWidth: number;
}

@Component({
  tag: 'remteh-advantages',
  styleUrl: 'remteh-advantages.css',
  shadow: true
})
export class RemtehAdvantages {
  private advantagesItems: IAdvantagesItem[] = [
    {
      title: 'Квалифицированные специалисты',
      icon: '../../assets/img/personal_x2.png',
      iconWidth: 52,
    },
    {
      title: 'Более десяти лет на строительном рынке',
      icon: '../../assets/img/ten_years_exp_x2.png',
      iconWidth: 62,
    },
    {
      title: 'Налаженная система управления',
      icon: '../../assets/img/settings_x2.png',
      iconWidth: 62,
    },
    {
      title: 'Система контроля качества',
      icon: '../../assets/img/quality_control_x2.png',
      iconWidth: 68,
    },
    {
      title: 'Работа на большей части Украины',
      icon: '../../assets/img/flag_x2.png',
      iconWidth: 57,
    },
    {
      title: 'Участие в ключевых программах строительства',
      icon: '../../assets/img/key_parts_x2.png',
      iconWidth: 62,
    },
    {
      title: 'Современный программный комплекс',
      icon: '../../assets/img/software_x2.png',
      iconWidth: 62,
    },
    {
      title: 'Комплексный подход',
      icon: '../../assets/img/complex_work_x2.png',
      iconWidth: 62,
    },
  ];

  renderAdvantageItem(item: IAdvantagesItem) {
    return(
      <div class="advantages_item">
        <div class="advantages_item_img_wrapper">
          <img
            src={item.icon}
            alt={item.title}
            class="advantages_item_img"
            width={item.iconWidth}
          />
        </div>
        <div class="advantages_item_text">
          {item.title}
        </div>
      </div>
    );
  }

  render() {
    return (
      <div class="advantages_wrapper">
        <h3 class="advantages_title">
          Наши преимущества
        </h3>
        <div class="advantages_items_wrapper">
          {this.advantagesItems.map(this.renderAdvantageItem)}
        </div>
      </div>
    );
  }

}
