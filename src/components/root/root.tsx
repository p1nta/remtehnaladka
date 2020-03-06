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
            <stencil-route url='/remtehnaladka' component='remteh-home' exact={true} />
            <stencil-route url='/projects' component='remteh-projects' />
            <stencil-route url='/remtehnaladka/projects' component='remteh-projects' />
            <stencil-route url='/roshen' component='remteh-case' componentProps={{ case: 'Roshen' }} exact={true} />
            <stencil-route url='/remtehnaladka/roshen' component='remteh-case' componentProps={{ case: 'Roshen' }} exact={true} />
            <stencil-route url='/ekvator' component='remteh-case' componentProps={{ case: 'Ekvator' }}  exact={true} />
            <stencil-route url='/remtehnaladka/ekvator' component='remteh-case' componentProps={{ case: 'Ekvator' }}  exact={true} />
            <stencil-route url='/geliar' component='remteh-case' componentProps={{ case: 'Geliar' }}  exact={true} />
            <stencil-route url='/remtehnaladka/geliar' component='remteh-case' componentProps={{ case: 'Geliar' }}  exact={true} />
            <stencil-route url='/leoni' component='remteh-case' componentProps={{ case: 'Leoni' }}  exact={true} />
            <stencil-route url='/remtehnaladka/leoni' component='remteh-case' componentProps={{ case: 'Leoni' }}  exact={true} />
            <stencil-route url='/budfarfor' component='remteh-case' componentProps={{ case: 'Budfarfor' }}  exact={true} />
            <stencil-route url='/remtehnaladka/budfarfor' component='remteh-case' componentProps={{ case: 'Budfarfor' }}  exact={true} />
            <stencil-route component='remteh-home' />
          </stencil-route-switch>
        </stencil-router>
      </div>
    );
  }
}
