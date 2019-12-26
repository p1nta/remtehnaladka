import { Component, Element, h } from '@stencil/core';

@Component({
  tag: 'nice-anim',
  styleUrl: 'anim.css',
})
export class NiceAnim {
  @Element() el: HTMLElement;

  io: IntersectionObserver;

  componentDidLoad() {
    this.addIntersectionObserver();
  }

  addIntersectionObserver() {
    this.io = new IntersectionObserver((data: any) => {
      
      if (data[0].isIntersecting) {
        this.el.querySelector('.nice-anim').classList.add('anim');
        this.removeIntersectionObserver();
      }
    });
    this.io.observe(this.el.querySelector('.nice-anim'));
  }

  removeIntersectionObserver() {
    if (this.io) {
      this.io.disconnect();
      this.io = null;
    }
  }

  render() {
    return (
      <div class="nice-anim">
        <slot/>
      </div>
    );
  }
}