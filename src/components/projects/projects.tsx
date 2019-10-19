import { Component, Prop, h } from '@stencil/core';
import { MatchResults } from '@stencil/router';

@Component({
  tag: 'remteh-projects',
  styleUrl: 'projects.css',
  shadow: true
})
export class Projects {
  @Prop() match: MatchResults;

  normalize(name: string): string {
    if (name) {
      return name.substr(0, 1).toUpperCase() + name.substr(1).toLowerCase();
    }
    return '';
  }

  render() {
    if (this.match && this.match.params.name) {
      return (
        <div class="remteh-profile">
          <p>
            Hello! My name is {this.normalize(this.match.params.name)}. My name was passed in
            through a route param!
          </p>
        </div>
      );
    }
  }
}
