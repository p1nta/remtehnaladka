System.register(["./p-5a192edf.system.js","./p-221f95d6.system.js"],(function(e){"use strict";var t,r,s;return{setters:[function(e){t=e.r;r=e.h},function(e){s=e.c}],execute:function(){var n=e("remteh_case",function(){function e(e){var n=this;t(this,e);this.renderTitle=function(){return r("p",{class:"case_title"},n.getCaseText(n.case+".title"))};this.renderSlides=function(){var e=s[n.case];var t=s[n.case+"Retina"]||e;return r("div",{class:"case_slides"},e.map((function(e,s){return r("img",{key:s,srcset:e+" 1x, "+t[s]+" 2x",src:e,class:"case_slide_img"})})))};this.renderDescription=function(){var e=n.getCaseText(n.case+".description");return r("div",{class:"case_description"},e.map((function(e){return r("p",{class:"case_paragraph"},e)})))};var i=document.querySelector("lang-method");i.getText().then((function(e){n.getText=e}));i.getCaseText().then((function(e){n.getCaseText=e}))}e.prototype.render=function(){return r("div",{class:"case_wrapper"},r("remteh-header",{mode:"Case"}),r("div",{class:"case_m_width"},r("nice-anim",null,this.renderTitle(),this.renderDescription()),r("nice-anim",null,this.renderSlides()),r("stencil-route-link",{url:"/remtehnaladka/projects",class:"case_link",exact:true},this.getText("caseShowAllButton"))),r("remteh-bottom",null))};Object.defineProperty(e,"style",{get:function(){return":host{display:block}.case_wrapper{padding:192px 0 0;background:#f7f9fd}.case_title{font-size:48px;color:#041543;letter-spacing:2.16px;line-height:60px;font-family:Charter-Roman;margin-bottom:69px}.case_slides{font-size:0;padding:0 0 134px}.case_m_width{max-width:800px;width:100%;margin:0 auto;padding:0 20px}.case_description{margin-bottom:78px}.case_paragraph{opacity:.6;font-size:16px;color:#041543;letter-spacing:.47px;line-height:30px;margin-bottom:30px;font-family:Charter-Roman}.case_paragraph:last-child{margin-bottom:0}.case_slide_img{width:100%;margin-bottom:18px;-o-object-fit:cover;object-fit:cover}.case_slide_img:last-child{margin-bottom:0}.case_link a{font-size:18px;color:#f6b93a!important;letter-spacing:.53px;line-height:30px;-webkit-text-decoration-line:underline;text-decoration-line:underline;-webkit-transition:opacity .3s;transition:opacity .3s}.case_link a:hover{opacity:.7}.case_link{display:block;margin:0 auto 151px;text-align:center}\@media (max-width:500px){.case_wrapper{padding:144px 0 0}.case_title{font-size:35px;color:#041543;letter-spacing:1.13px;line-height:45px;margin-bottom:43px;font-family:Charter-Roman;padding:0 20px}.case_description{opacity:.6;padding:0 20px;font-size:17px;color:#041543;line-height:30px;margin-bottom:30px;font-family:Rubik-Light;letter-spacing:.67px}.case_slide_img{margin-bottom:20px}.case_slides{padding:0 0 89px}.case_link{margin:0 auto 96px}.case_m_width{padding:0 20px}.case_paragraph{font-family:Rubik-Light}}"},enumerable:true,configurable:true});return e}())}}}));