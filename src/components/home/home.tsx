import { Component, h } from '@stencil/core';

@Component({
  tag: 'app-home',
  styleUrl: 'home.css',
  shadow: true
})
export class Home {
  render() {
    return (
      <div class='app-home'>
        <p>
        Строительство объектов промышленного и гражданского назначения в Украине
        </p>

        <stencil-route-link url='/projects'>
          <button>
            Проекты
          </button>
        </stencil-route-link>
      </div>
    );
  }
}
