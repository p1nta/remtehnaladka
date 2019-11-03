import { Component, h } from '@stencil/core';

@Component({
  tag: 'remteh-why-trust',
  styleUrl: 'remteh-why-trust.css',
})
export class RemtehWhyTrust {

  render() {
    return (
      <div class="why_trust_wrapper">
        <h3 class="why_trust_title">
          Почему нам доверяют
        </h3>
        <div class="why_trust_first">
          <div class="why_trust_image_block">
            <img
              src="../../assets/img/build_process_x2.png"
              alt=""
              class="why_trust_first_img"
            />
          </div>
          <div class="why_trust_first_text">
            <h4 class="why_trust_item_title">
              Компетентная команда
            </h4>
            <p class="why_trust_item_descr">
              Управляющий состав компании состоит из профессионалов, заслуженных строителей, 
              инженеров, менеджеров проектов, ранее зарекомендовавших себя на ключевых 
              строительных проектах страны. У нас есть собственная проектная мастерская и 
              отдельные департаменты разделенные по видам работ. Мы сотрудничаем со специалистами из 
              Германии, Израиля, Объединённых Арабских Эмиратов, которые уже много лет помогают нам 
              сопровождать наши проекты.
            </p>
          </div>
        </div>
        <div class="why_trust_second">
          <div class="why_trust_second_text">
            <h4 class="why_trust_item_title">
              Разрешительная документация
            </h4>
            <p class="why_trust_item_descr">
              Ремтехналадка имеет необходимые лицензии (СС3 класса последствий) на осуществление 
              видов деятельности: выполнение строительно-монтажных работ; выполнение функций 
              генерального подрядчика; выполнение проектных работ; выполнение функций заказчика-застройщика.
            </p>
          </div>
          <div class="why_trust_image_block">
            <img
              src="../../assets/img/documentation_x2.png"
              alt=""
              class="why_trust_second_img"
            />
          </div>
        </div>
      </div>
    );
  }

}
