import{r as t,h as i,g as s}from"./p-0aaecdff.js";import{m as e,q as h}from"./p-aa67fb06.js";import{A as r}from"./p-29c38358.js";const a=class{constructor(i){t(this,i)}componentDidLoad(){this.addIntersectionObserver()}addIntersectionObserver(){this.io=new IntersectionObserver(t=>{t[0].isIntersecting&&(this.el.querySelector(".nice-anim").classList.add("anim"),this.removeIntersectionObserver())}),this.io.observe(this.el.querySelector(".nice-anim"))}removeIntersectionObserver(){this.io&&(this.io.disconnect(),this.io=null)}render(){return i("div",{class:"nice-anim"},i("slot",null))}get el(){return s(this)}static get style(){return"\@-webkit-keyframes slide-up{0%{-webkit-transform:translateY(50%);transform:translateY(50%)}to{opacity:1}}\@keyframes slide-up{0%{-webkit-transform:translateY(50%);transform:translateY(50%)}to{opacity:1}}.nice-anim{opacity:0;-webkit-animation-fill-mode:forwards;animation-fill-mode:forwards;-webkit-animation-timing-function:ease;animation-timing-function:ease;-webkit-animation-duration:1s;animation-duration:1s}.anim{-webkit-animation-name:slide-up;animation-name:slide-up}"}},n=class{constructor(i){t(this,i),this.unsubscribe=()=>{},this.activeClass="link-active",this.exact=!1,this.strict=!0,this.custom="a",this.match=null}componentWillLoad(){this.computeMatch()}computeMatch(){this.location&&(this.match=e(this.location.pathname,{path:this.urlMatch||this.url,exact:this.exact,strict:this.strict}))}handleClick(t){var i,s;if(!h(t)&&this.history&&this.url&&this.root)return t.preventDefault(),this.history.push((s=this.root,"/"==(i=this.url).charAt(0)&&"/"==s.charAt(s.length-1)?s.slice(0,s.length-1)+i:s+i))}render(){let t={class:{[this.activeClass]:null!==this.match},onClick:this.handleClick.bind(this)};return this.anchorClass&&(t.class[this.anchorClass]=!0),"a"===this.custom&&(t=Object.assign({},t,{href:this.url,title:this.anchorTitle,role:this.anchorRole,tabindex:this.anchorTabIndex,"aria-haspopup":this.ariaHaspopup,id:this.anchorId,"aria-posinset":this.ariaPosinset,"aria-setsize":this.ariaSetsize,"aria-label":this.ariaLabel})),i(this.custom,Object.assign({},t),i("slot",null))}get el(){return s(this)}static get watchers(){return{location:["computeMatch"]}}};r.injectProps(n,["history","location","root"]);export{a as nice_anim,n as stencil_route_link};