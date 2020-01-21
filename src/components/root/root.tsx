import { Component, h } from '@stencil/core';
import OutlineController from '../outline';

@Component({
  tag: 'remteh-root',
  styleUrl: 'root.css',
})
export class AppRoot {
  componentWillLoad() {
    new OutlineController();
  }

  render() {
    return (
      <div id="wrapper" class="root">
        <stencil-router>
          <stencil-route-switch scrollTopOffset={0}>
            <stencil-route url='/' component='remteh-home' exact={true} />
            <stencil-route url='/projects' component='remteh-projects' />
            <stencil-route url='/roshen' component='remteh-case' componentProps={{ case: 'Roshen' }} />
            <stencil-route url='/ekvator' component='remteh-case' componentProps={{ case: 'Ekvator' }} />
            <stencil-route url='/geliar' component='remteh-case' componentProps={{ case: 'Geliar' }} />
            <stencil-route url='/leoni' component='remteh-case' componentProps={{ case: 'Leoni' }} />
            <stencil-route url='/budfarfor' component='remteh-case' componentProps={{ case: 'Budfarfor' }} />
          </stencil-route-switch>
        </stencil-router>
      </div>
    );
  }
}
