System.register(["./p-d935a480.system.js"],(function(e){"use strict";var t,n;return{setters:[function(e){t=e.r;n=e.h}],execute:function(){var r="data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMTYgMTYiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiAgPHBhdGggb3BhY2l0eT0iMC4yOTc3MTIiIGQ9Ik0xMy42NTcyIDhMOC4wMDAzNyAyLjM0MzE1TDIuMzQzNTIgOCIgc3Ryb2tlPSIjMEQyNDYwIiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZS1saW5lY2FwPSJzcXVhcmUiLz4KPC9zdmc+";var i=e("remteh_select",function(){function e(e){var n=this;t(this,e);this.opened=false;this.focused=false;this.onBlur=function(){setTimeout((function(){n.focused=false;n.opened=false}),200)};this.onClick=function(e){var t=e.currentTarget.getAttribute("data-value");if(t&&n.opened){n.onSelect(t);n.opened=false}else if(!n.opened&&!t){n.refInput.focus();n.opened=true}};document.querySelector("lang-method").getText().then((function(e){n.getText=e}))}e.prototype.prepareDropdown=function(){var e=this;var t=[];this.options.forEach((function(n){n!==e.selectedOption&&t.push(n)}));return t.map((function(t){return n("div",{"data-value":t,class:"select_option",onClick:e.onClick},e.getText("filter"+t))}))};e.prototype.render=function(){var e=this;var t={bracket_icon:true,m_rotate:this.opened};return n("div",{onClick:this.opened?null:this.onClick,class:{select_container:true,select_focused:this.focused,select_opened:this.opened}},n("input",{onBlur:this.onBlur,type:"button",class:"select_input",ref:function(t){return e.refInput=t}}),n("div",{onClick:this.onClick,"data-value":this.selectedOption,class:"select_window"},n("img",{src:r,class:t}),this.getText("filter"+this.selectedOption)),n("div",{class:"select_dropdown"},this.prepareDropdown()))};Object.defineProperty(e,"style",{get:function(){return":host{display:block}.select_container{display:none}\@media (max-width: 500px){.select_container{display:block;font-size:0px;max-height:50px;height:100%;-webkit-transition:max-height 0.3s;transition:max-height 0.3s;background:#E4E9F3;width:100%;border-radius:25px;overflow:hidden;cursor:pointer;text-align:left}.bracket_icon{position:absolute;top:17px;right:28px;-webkit-transform:rotate(180deg);transform:rotate(180deg);width:16px}.m_rotate{top:20px;-webkit-transform:rotate(0);transform:rotate(0)}.select_input{pointer-events:none;outline:none !important;opacity:0;width:0px;height:0px}.select_opened{max-height:200px}.select_option{padding:0 25px;height:45px;line-height:45px;font-size:16px;color:#041543;letter-spacing:0.47px;width:100%}.select_option:last-child{height:60px}.select_window{position:relative;padding:0 25px;opacity:0.6;height:50px;width:100%;pointer-events:none;font-size:16px;color:#041543;letter-spacing:0.47px;line-height:50px}}"},enumerable:true,configurable:true});return e}());var s=e("tab_bar",function(){function e(e){var n=this;t(this,e);this.filterTexts={All:"Все объекты",Industrial:"Промышленные объекты",Civil:"Гражданские объекты",Foreign:"Иностранный заказчик"};this.onClick=function(e){n.onChangeTab(e.target["name"])}}e.prototype.renderDesctopFiltres=function(){var e=this;return this.tabs.map((function(t){return n("button",{class:{tab:true,selected:t===e.selectedTab},name:t,onClick:e.onClick},n("p",{class:"tab_text"},e.filterTexts[t]))}))};e.prototype.renderMobileSelect=function(){return n("remteh-select",{selectedOption:this.selectedTab,options:this.tabs,onSelect:this.onChangeTab})};e.prototype.render=function(){return n("div",{class:"filtres_container"},this.renderDesctopFiltres(),this.renderMobileSelect())};Object.defineProperty(e,"style",{get:function(){return":host{display:block}\@-webkit-keyframes fideIn{0%{opacity:0}100%{opacity:1}}\@keyframes fideIn{0%{opacity:0}100%{opacity:1}}.slider{text-align:center;width:100%;max-width:1200px;margin:0 auto;-webkit-transition:min-height 0.2s;transition:min-height 0.2s;font-size:0}.tab{width:240px;background:#FFFFFF;-webkit-box-shadow:0px 1px 7px rgba(105, 136, 204, 0.25);box-shadow:0px 1px 7px rgba(105, 136, 204, 0.25);height:40px;border-radius:18px;margin:0 10px;border-color:transparent;-webkit-transition:opacity 0.3s;transition:opacity 0.3s;cursor:pointer;padding:0}.tab_text{margin:0;font-size:14px;line-height:16px;letter-spacing:0.41125px;font-weight:300;color:#041543;pointer-events:none}.selected .tab_text{opacity:0.6}.selected{background:#E4E9F3;-webkit-box-shadow:inset 0px 1px 4px rgba(13, 36, 96, 0.0995845);box-shadow:inset 0px 1px 4px rgba(13, 36, 96, 0.0995845)}.filtres_container{display:inline-block}.tab:hover{opacity:0.7}.tab:first-child{margin:0 10px 20px}.slide_container{-webkit-animation:fideIn 0.2s;animation:fideIn 0.2s;-webkit-animation-direction:normal;animation-direction:normal;width:100%;-webkit-transition:opacity 0.2s;transition:opacity 0.2s;min-height:520px;margin-top:80px}.slide{display:inline-block;width:360px;margin:0 20px 65px;cursor:pointer;text-decoration:none;-webkit-transition:opacity 0.3s;transition:opacity 0.3s;text-align:center}.slide:last-child{margin:0 20px 180px}.slide_text{color:#041543;font-size:22px;line-height:30px;font-family:\'Charter-Roman\';padding:0 10px;letter-spacing:0.5104px}.slide:hover{opacity:0.7}.slide_img{-webkit-box-shadow:0 0 10px 0 rgba(105, 136, 204, 0.5);box-shadow:0 0 10px 0 rgba(105, 136, 204, 0.5);border-radius:12px;width:100%;height:280px;margin-bottom:38px;-o-object-fit:cover;object-fit:cover}.select_component{display:none}\@media (max-width: 580px){.tab{width:200px}}\@media (max-width: 500px){.tab{display:none}.select_component{display:block;background:#E4E9F3;border-radius:25px;height:50px}.slide_img{height:260px;margin-bottom:26px}.slide{width:100%;max-width:360px;margin:0 auto 73px}.select_component{width:100%}.select_option{background:#E4E9F3;border-radius:25px;height:50px;width:100%}.filtres_container{width:100%}.slide_container{margin:80px 0 154px}.slide:last-child{margin:0 auto}.contacts_wrapper{padding:34px 20px 0}.contacts_container{padding:53px 0 120px}.slide_text{letter-spacing:2.1px}}"},enumerable:true,configurable:true});return e}())}}}));