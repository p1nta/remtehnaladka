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
    if ('IntersectionObserver' in window) {
      this.io = new IntersectionObserver((data: any) => {
      
        if (data[0].isIntersecting) {
          this.el.querySelector('.nice-anim').classList.add('anim');
          this.removeIntersectionObserver();
        }
      });
      this.io.observe(this.el.querySelector('.nice-anim'));
    } else {
      const elements = document.querySelectorAll('div.nice-anim');
      const arr = Array.from(elements);

      arr.forEach((el: any) => {
        el.dataset.anim = true;
      })
    }
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