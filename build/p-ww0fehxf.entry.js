import{r as t,h as e}from"./p-2c603473.js";import{p as s,a as i,b as a,d as r}from"./p-bf109ef5.js";var l=[{path:"../../assets/img/Budfarfor_slide.jpg",pathRetina:"../../assets/img/Budfarfor_slide.jpg",link:"/budfarfor",textCode:"slideBudfarfor"},{path:"../../assets/img/roshen_1.jpg",pathRetina:"../../assets/img/roshen_1.jpg",link:"/roshen",textCode:"slideRoshen"}],o=[{path:"../../assets/img/ekvator_1.jpg",pathRetina:"../../assets/img/ekvator_1.jpg",link:"/ekvator",textCode:"slideEkvator"},{path:"../../assets/img/geliar_1.jpg",pathRetina:"../../assets/img/geliar_1.jpg",link:"/geliar",textCode:"slideGeliar"}],n=[{path:"../../assets/img/leoni_1.jpg",pathRetina:"../../assets/img/leoni_1.jpg",link:"/leoni",textCode:"slideLeoni"}];const g=Object.freeze({__proto__:null,Industrial:l,Civil:o,Foreign:n,default:{Industrial:l,Civil:o,Foreign:n}}),d=class{constructor(e){t(this,e),document.querySelector("lang-method").getText().then(t=>{this.getText=t})}render(){return e("div",{class:"progects"},e("remteh-header",{mode:"Projects"}),e("div",{class:"b_title"},e("img",{srcset:`${a} 1x, ${r} 2x`,src:a,class:"title_img"}),e("img",{srcset:`${s} 1x, ${i} 2x`,src:s,class:"title_img title_img_mobile"}),e("p",{class:"title_text"},this.getText("projectsTitle"))),e("div",{class:"content"},e("tab-slider",{class:"l_tab_slider",tabs:["Industrial","Civil","Foreign"],slides:g})),e("remteh-contacts",null),e("remteh-bottom",null))}static get style(){return".b_title{position:relative;display:-ms-flexbox;display:flex;min-height:266px;-ms-flex-align:top;align-items:top;-ms-flex-pack:center;justify-content:center;margin-bottom:94px;overflow:hidden}.title_text{position:absolute;top:50%;font-size:50px;line-height:50px;-webkit-transform:translateY(-70%);transform:translateY(-70%);color:#fff;font-family:Charter-Roman;margin:0}.progects{background:#f7f9fd}.content{padding:0 20px;width:100%;border:solid #e4e9f3;border-width:0 0 1px;-webkit-box-sizing:border-box;box-sizing:border-box}.title_img{min-height:100%;-o-object-fit:cover;object-fit:cover;min-width:100%}.title_img_mobile{display:none}\@media (max-width:500px){.title_text{font-size:35px;margin-top:44px;letter-spacing:.7px}.b_title{margin-bottom:50px;min-height:260px}.title_img_mobile{display:block}.title_img:not(.title_img_mobile){display:none}}"}};export{d as remteh_projects};