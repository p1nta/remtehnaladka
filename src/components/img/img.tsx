import { Component, State, Prop, h } from '@stencil/core';

@Component({
  tag: 'prog-img',
  styleUrl: 'img.css',
})
export class Img {
  private imageTag: HTMLImageElement;
  @Prop() src: string;
  @Prop() placeHolder: string;
  @Prop() class?: string;

  @State() image: string = this.placeHolder;
  @State() loading: boolean = true;


  componentDidLoad() {
    this._loadImage(this.src)
  }

  /**
   * On load handler
   */
  _onLoad = () => {
    this.image = this.src;
    this.loading = false;

    document.removeChild(this.imageTag);
  };

  /**
   * Load image handler
   * @param {string} src
   */
  _loadImage = (src) => {
    if (this.imageTag) {
      this.imageTag.onload = null;
      this.imageTag.onerror = null;
    }

    const imageTag = new Image();

    // document.p

    this.imageTag = imageTag;
    this.imageTag.onload = this._onLoad;
    this.imageTag.src = src;

    document.appendChild(this.imageTag);
  };

  render() {
    const loaded = (
      <img
        src={this.src}
        class={this.class}
        alt={this.src}
      />
    );

    const preloading = (
      <img
        src={this.placeHolder}
        class={this.class}
        alt={this.src}
        style={{
          filter: this.loading ? 'blur(10px)' : 'none',
        }}
        onLoad={this._onLoad}
      />
    );

    if (this.loading) {
      return preloading;
    }

    return loaded;
    
  }

}
