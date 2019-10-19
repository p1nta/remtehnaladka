import { Component, h } from '@stencil/core';


@Component({
  tag: 'remteh-root',
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
              <stencil-route url='/' component='remteh-home' exact={true} />
              <stencil-route url='/projects' component='remteh-projects' />
            </stencil-route-switch>
          </stencil-router>
        </main>
      </div>
    );
  }
}
