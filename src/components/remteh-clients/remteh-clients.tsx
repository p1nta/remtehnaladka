import { Component, h } from '@stencil/core';

@Component({
  tag: 'remteh-clients',
  styleUrl: 'remteh-clients.css',
})
export class RemtehClients {

  render() {
    return (
      <div class="clients_wrapper">
        <h3 class="clients_title">
          Клиенты
        </h3>
        <div class="clients_logos_wrapper">
          <div class="clients_img_container">
            <img
              class="clients_img leoni"
              src="../../assets/img/leoni_x2.png"
              alt=""
            />
          </div>
          <div class="clients_img_container">
            <img
              class="clients_img PGphase"
              src="../../assets/img/PGphase_x2.png"
              alt=""
            />
          </div>
          <div class="clients_img_container">
            <img
              class="clients_img geberit"
              src="../../assets/img/geberit_x2.png"
              alt=""
            />
          </div>
          <div class="clients_img_container">
            <img
              class="clients_img kesz"
              src="../../assets/img/kesz_x2.png"
              alt=""
            />
          </div>
          <div class="clients_img_container">
            <img
              class="clients_img kraft"
              src="../../assets/img/kraft_x2.png"
              alt=""
            />
          </div>
          <div class="clients_img_container">
            <img
              class="clients_img roshen"
              src="../../assets/img/roshen_logo_x2.png"
              alt=""
            />
          </div>
        </div>        
      </div>
    );
  }
}
