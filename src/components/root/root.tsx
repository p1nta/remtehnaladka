import { Component, h } from '@stencil/core';


@Component({
  tag: 'app-root',
  styleUrl: 'root.css',
  shadow: true
})
export class AppRoot {

  render() {
    return (
      <div>
        <header>
          <h1>REMTEHNALADKA</h1>
        </header>

        <main>
          <stencil-router>
            <stencil-route-switch scrollTopOffset={0}>
              <stencil-route url='/' component='app-home' exact={true} />
              <stencil-route url='/projects' component='app-projects' />
            </stencil-route-switch>
          </stencil-router>
        </main>
      </div>
    );
  }
}
