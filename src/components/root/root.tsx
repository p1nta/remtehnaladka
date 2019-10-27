import { Component, h } from '@stencil/core';
import OutlineController from '../outline';

@Component({
  tag: 'remteh-root',
  styleUrl: 'root.css',
  // shadow: true
})
export class AppRoot {
  componentWillLoad() {
    new OutlineController();
  }

  render() {
    return (
      <div id="wrapper">
        {/* <header>
          <h1>REMTEHNALADKA</h1>
        </header> */}

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
