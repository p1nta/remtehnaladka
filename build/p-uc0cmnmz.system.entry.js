System.register(["./p-5a192edf.system.js","./p-168ec2c4.system.js","./p-7a754468.system.js"],(function(t){"use strict";var e,i,n,r,s,o;return{setters:[function(t){e=t.r;i=t.h;n=t.g},function(t){r=t.m;s=t.q},function(t){o=t.A}],execute:function(){var c=t("nice_anim",function(){function t(t){e(this,t)}t.prototype.componentDidLoad=function(){this.addIntersectionObserver()};t.prototype.addIntersectionObserver=function(){var t=this;if(IntersectionObserver){this.io=new IntersectionObserver((function(e){if(e[0].isIntersecting){t.el.querySelector(".nice-anim").classList.add("anim");t.removeIntersectionObserver()}}));this.io.observe(this.el.querySelector(".nice-anim"))}else{this.el.querySelector(".nice-anim").classList.add("anim")}};t.prototype.removeIntersectionObserver=function(){if(this.io){this.io.disconnect();this.io=null}};t.prototype.render=function(){return i("div",{class:"nice-anim"},i("slot",null))};Object.defineProperty(t.prototype,"el",{get:function(){return n(this)},enumerable:true,configurable:true});Object.defineProperty(t,"style",{get:function(){return"\@-webkit-keyframes slideUp{0%{-webkit-transform:translateY(50%);transform:translateY(50%)}to{opacity:1}}\@keyframes slideUp{0%{-webkit-transform:translateY(50%);transform:translateY(50%)}to{opacity:1}}.nice-anim{opacity:0;-webkit-animation-fill-mode:forwards;animation-fill-mode:forwards;-webkit-animation-timing-function:ease;animation-timing-function:ease;-webkit-animation-duration:1s;animation-duration:1s}.anim{-webkit-animation-name:slideUp;animation-name:slideUp}"},enumerable:true,configurable:true});return t}());var a=function(t,e){if(t.charAt(0)=="/"&&e.charAt(e.length-1)=="/"){return e.slice(0,e.length-1)+t}return e+t};var u=t("stencil_route_link",function(){function t(t){e(this,t);this.unsubscribe=function(){return};this.activeClass="link-active";this.exact=false;this.strict=true;this.custom="a";this.match=null}t.prototype.componentWillLoad=function(){this.computeMatch()};t.prototype.computeMatch=function(){if(this.location){this.match=r(this.location.pathname,{path:this.urlMatch||this.url,exact:this.exact,strict:this.strict})}};t.prototype.handleClick=function(t){if(s(t)||!this.history||!this.url||!this.root){return}t.preventDefault();return this.history.push(a(this.url,this.root))};t.prototype.render=function(){var t;var e={class:(t={},t[this.activeClass]=this.match!==null,t),onClick:this.handleClick.bind(this)};if(this.anchorClass){e.class[this.anchorClass]=true}if(this.custom==="a"){e=Object.assign({},e,{href:this.url,title:this.anchorTitle,role:this.anchorRole,tabindex:this.anchorTabIndex,"aria-haspopup":this.ariaHaspopup,id:this.anchorId,"aria-posinset":this.ariaPosinset,"aria-setsize":this.ariaSetsize,"aria-label":this.ariaLabel})}return i(this.custom,Object.assign({},e),i("slot",null))};Object.defineProperty(t.prototype,"el",{get:function(){return n(this)},enumerable:true,configurable:true});Object.defineProperty(t,"watchers",{get:function(){return{location:["computeMatch"]}},enumerable:true,configurable:true});return t}());o.injectProps(u,["history","location","root"])}}}));