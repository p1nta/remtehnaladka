var __spreadArrays=this&&this.__spreadArrays||function(){for(var e=0,t=0,r=arguments.length;t<r;t++)e+=arguments[t].length;for(var n=Array(e),s=0,t=0;t<r;t++)for(var i=arguments[t],a=0,l=i.length;a<l;a++,s++)n[s]=i[a];return n};System.register(["./p-5a192edf.system.js"],(function(e){"use strict";var t,r;return{setters:[function(e){t=e.r;r=e.h}],execute:function(){var n=e("tab_slider",function(){function e(e){var n=this;t(this,e);this.selectedTab="All";this.onSelectTab=function(e){if(n.selectedTab===e)return;var t=200;var r=document.querySelector('[data-slides="'+n.selectedTab+'"]');r.style.opacity="0";setTimeout((function(){n.selectedTab=e}),t)};this.slide=function(e,t){return r("stencil-route-link",{key:t,class:"slide",url:e.link},r("img",{class:"slide_img",srcset:e.path+" 1x, "+e.pathRetina+" 2x",src:e.path}),r("p",{class:"slide_text"},n.getText(e.textCode)))};this.renderSlidesContainer=function(e){return r("div",{class:"slide_container",key:n.selectedTab,"data-slides":n.selectedTab},e.map((function(e,t){return n.slide(e,t)})))};this.renderSlides=function(){var e=n.slides;if(n.selectedTab==="All"){return n.renderSlidesContainer([].concat(e.Civil,e.Foreign,e.Industrial))}return n.renderSlidesContainer(e[n.selectedTab])};document.querySelector("lang-method").getText().then((function(e){n.getText=e}))}e.prototype.render=function(){var e=this;return r("div",{ref:function(t){return e.refElement=t},class:"slider"},r("nice-anim",null,r("tab-bar",{tabs:__spreadArrays(["All"],this.tabs),onChangeTab:this.onSelectTab,selectedTab:this.selectedTab})),r("nice-anim",null,this.renderSlides()))};Object.defineProperty(e,"style",{get:function(){return":host{display:block}\@-webkit-keyframes fideIn{0%{opacity:0}to{opacity:1}}\@keyframes fideIn{0%{opacity:0}to{opacity:1}}.slider{text-align:center;width:100%;max-width:1200px;margin:0 auto;-webkit-transition:min-height .2s;transition:min-height .2s;font-size:0}.tab{width:240px;background:#fff;-webkit-box-shadow:0 1px 7px rgba(105,136,204,.15726);box-shadow:0 1px 7px rgba(105,136,204,.15726);height:40px;border-radius:18px;margin:0 10px;border-color:transparent;-webkit-transition:opacity .3s;transition:opacity .3s;cursor:pointer;padding:0}.tab_text{margin:0;font-size:14px;line-height:16px;letter-spacing:.41125px;font-weight:300;color:#041543;pointer-events:none}.selected .tab_text{opacity:.6}.selected{background:#e4e9f3;-webkit-box-shadow:inset 0 1px 4px rgba(13,36,96,.0995845);box-shadow:inset 0 1px 4px rgba(13,36,96,.0995845)}.filtres_container{display:inline-block}.tab:hover{opacity:.7}.tab:first-child{margin:0 10px 20px}.slide_container{-webkit-animation:fideIn .2s;animation:fideIn .2s;-webkit-animation-direction:normal;animation-direction:normal;width:100%;-webkit-transition:opacity .2s;transition:opacity .2s;min-height:520px;margin-top:80px}.slide{display:inline-block;width:360px;margin:0 20px 65px;cursor:pointer;text-decoration:none;-webkit-transition:opacity .3s;transition:opacity .3s;text-align:center}.slide:last-child{margin:0 20px 180px}.slide_text{color:#041543;font-size:22px;line-height:30px;font-family:Charter-Roman;padding:0 10px;letter-spacing:.5104px}.slide:hover{opacity:.7}.slide_img{-webkit-box-shadow:0 0 10px 0 rgba(105,136,204,.5);box-shadow:0 0 10px 0 rgba(105,136,204,.5);border-radius:12px;width:100%;height:280px;margin-bottom:38px;-o-object-fit:cover;object-fit:cover}.select_component{display:none}\@media (max-width:580px){.tab{width:200px}}\@media (max-width:500px){.tab{display:none}.select_component{display:block;background:#e4e9f3;border-radius:25px;height:50px}.slide_img{height:260px;margin-bottom:26px}.slide{max-width:360px;margin:0 auto 73px}.select_component,.slide{width:100%}.select_option{background:#e4e9f3;border-radius:25px;height:50px;width:100%}.filtres_container{width:100%}.slide_container{margin:80px 0 154px}.slide:last-child{margin:0 auto}.contacts_wrapper{padding:34px 20px 0}.contacts_container{padding:53px 0 120px}.slide_text{letter-spacing:2.1px}}"},enumerable:true,configurable:true});return e}())}}}));