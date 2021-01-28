import{r as i,h as e}from"./p-58f1e2d9.js";const t=class{constructor(e){i(this,e),this.Elements=[{image:"./assets/img/roshen.png",title:"Строительство промышленных объектов",descriptions:["Объекты энергетики","Нефтеперерабатывающие заводы","Крупные производства","Инженерные комплексы","Аграрные сооружения"],route:"/projects"},{image:"./assets/img/geliar_direct.png",title:"Гражданское строительство",descriptions:["Торговые центры","Автосалоны","Жилые и офисные комплексы","Спортивные объекты","Гостинницы и рестораны"],route:"/projects"},{image:"./assets/img/leoni.png",title:"Строительство для иностранного заказчика",descriptions:["Промышленные объекты","Гражданские объекты"],route:"/projects"}]}renderItem(i){return e("div",{class:"directions_item"},e("img",{src:i.image,alt:i.title,class:"directions_item_image"}),e("div",{class:"directions_item_text"},e("h3",{class:"directions_item_title"},i.title),e("p",{class:"directions_item_description"},i.descriptions.map(i=>e("p",null,i))),e("stencil-route-link",{anchorClass:"directions_item_link m_clicable",url:i.route},"Посмотреть проекты")))}render(){return e("div",{class:"directions_wrapper"},e("nice-anim",null,e("h2",{class:"directions_title"},"Наши направления"),e("div",{class:"directions_items_wrapper"},this.Elements.map(this.renderItem))))}static get style(){return".directions_wrapper{padding:130px 100px;position:relative;z-index:6}.directions_title{font-family:\'Charter-Roman\';font-size:40px;color:#041543;letter-spacing:1.29px;text-align:center;line-height:40px}.directions_items_wrapper{padding:95px 0 60px;font-size:0;display:-ms-flexbox;display:flex;-ms-flex-wrap:wrap;flex-wrap:wrap;-ms-flex-pack:distribute;justify-content:space-around}.directions_item{text-align:center;width:calc((100% - 80px) / 3);max-width:360px;-webkit-box-shadow:0 0 20px 0 rgba(105,136,204,0.25);box-shadow:0 0 20px 0 rgba(105,136,204,0.25);border-radius:12px;display:inline-block}.directions_item:nth-child(2){-webkit-transform:translateY(60px);transform:translateY(60px)}.directions_item_image{width:100%}.directions_item_text{padding:60px 50px}.directions_item_title{font-family:\'Charter-Roman\';font-size:22px;color:#041543;letter-spacing:0.76px;text-align:center;line-height:30px;margin:0 auto 33px;max-width:200px}.directions_item_description{opacity:0.6;font-family:\'Rubik\';font-weight:100;font-size:14px;color:#041543;letter-spacing:0.41px;text-align:center;line-height:30px;min-height:150px;margin-bottom:43px}.directions_item:nth-child(2) .directions_item_description{margin-bottom:73px}.directions_item_link{font-family:\'Rubik\';font-weight:400;font-size:14px;color:#F6B93A;letter-spacing:0.41px;text-align:center;line-height:30px;text-decoration:underline}\@media only screen and (max-width: 1360px){.directions_wrapper{padding:70px 100px}.directions_item_text{padding:45px}}\@media only screen and (max-width: 1024px){.directions_wrapper{padding:50px}.directions_items_wrapper{padding-bottom:0}.directions_item{max-width:100%;width:calc((100% - 80px) / 2)}.directions_item:nth-child(2){-webkit-transform:translateY(0) !important;transform:translateY(0) !important}.directions_item:last-child{margin-top:40px}}\@media only screen and (max-width: 736px){.directions_wrapper{padding:85px 20px 35px}.directions_items_wrapper{padding-top:75px}.directions_item{max-width:100%;width:100%;margin:0 0 40px}.directions_item:last-child{margin:0}.directions_item_text{padding:30px 20px 60px}.directions_title{font-size:35px;max-width:280px;margin:0 auto;font-family:\'Charter-Roman\';letter-spacing:1.13px;line-height:40px}.directions_item_title{max-width:280px;margin:0 auto 33px;font-size:25px;font-family:\'Charter-Roman\';letter-spacing:0.86px;line-height:30px}.directions_item_description{margin-bottom:40px;min-height:auto;font-size:16px;opacity:0.6;letter-spacing:0.47px;line-height:30px}.directions_item_link{font-size:16px;font-family:\'Rubik\';letter-spacing:0.47px;line-height:30px}}"}};export{t as remteh_directions};