import { Component, h } from '@stencil/core';


@Component({
  tag: 'remteh-root',
  styleUrl: 'root.css',
})
export class AppRoot {

  render() {
    return (
      <div class="root">
        <stencil-router>
          <stencil-route-switch scrollTopOffset={0}>
            <stencil-route url='/' component='remteh-home' exact={true} />
            <stencil-route url='/projects' component='remteh-projects' />
          </stencil-route-switch>
        </stencil-router>
      </div>
    );
  }
}
