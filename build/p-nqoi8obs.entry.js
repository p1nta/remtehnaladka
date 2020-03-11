import{r as e,h as i}from"./p-0aaecdff.js";const t=class{constructor(i){e(this,i),this.Elements=[{image:"./assets/img/roshen.png",title:"Строительство промышленных объектов",descriptions:["Объекты энергетики","Нефтеперерабатывающие заводы","Крупные производства","Инженерные комплексы","Аграрные сооружения"],route:"/remtehnaladka/projects"},{image:"./assets/img/geliar_direct.png",title:"Гражданское строительство",descriptions:["Торговые центры","Автосалоны","Жилые и офисные комплексы","Спортивные объекты","Гостинницы и рестораны"],route:"/remtehnaladka/projects"},{image:"./assets/img/leoni.png",title:"Строительство для иностранного заказчика",descriptions:["Промышленные объекты","Гражданские объекты"],route:"/remtehnaladka/projects"}]}renderItem(e){return i("div",{class:"directions_item"},i("img",{src:e.image,alt:e.title,class:"directions_item_image"}),i("div",{class:"directions_item_text"},i("h3",{class:"directions_item_title"},e.title),i("p",{class:"directions_item_description"},e.descriptions.map(e=>i("p",null,e))),i("stencil-route-link",{anchorClass:"directions_item_link m_clicable",url:e.route},"Посмотреть проекты")))}render(){return i("div",{class:"directions_wrapper"},i("nice-anim",null,i("h2",{class:"directions_title"},"Наши направления"),i("div",{class:"directions_items_wrapper"},this.Elements.map(this.renderItem))))}static get style(){return".directions_wrapper{padding:70px 100px;position:relative;z-index:6}.directions_title{font-family:Charter-Roman;font-size:40px;color:#041543;letter-spacing:1.29px;text-align:center;line-height:40px}.directions_items_wrapper{margin-top:20px;padding:75px 0;font-size:0;text-align:center}.directions_item{text-align:center;width:calc((100% - 80px) / 3);-webkit-box-shadow:0 0 20px 0 rgba(105,136,204,.4);box-shadow:0 0 20px 0 rgba(105,136,204,.4);border-radius:12px;display:inline-block;margin-right:40px}.directions_item:nth-child(2){-webkit-transform:translateY(60px);transform:translateY(60px)}.directions_item:last-child{margin-right:0}.directions_item_image{width:100%}.directions_item_text{padding:50px}.directions_item_title{font-family:Charter-Roman;font-size:22px;color:#041543;letter-spacing:.76px;text-align:center;line-height:30px;margin-bottom:33px}.directions_item_description{opacity:.6;font-family:Rubik-Light;font-size:14px;color:#041543;letter-spacing:.41px;text-align:center;line-height:30px;height:150px;margin-bottom:43px}.directions_item:nth-child(2) .directions_item_description{margin-bottom:73px}.directions_item_link{font-family:Rubik-Regular;font-size:14px;color:#f6b93a;letter-spacing:.41px;text-align:center;line-height:30px;text-decoration:underline}\@media only screen and (max-width:1360px){.directions_item_text{padding:25px}}\@media only screen and (max-width:1024px){.directions_wrapper{padding:70px 50px}.directions_items_wrapper{padding-bottom:0}.directions_item{width:calc((100% - 80px) / 2)}.directions_item:nth-child(2){-webkit-transform:translateY(0)!important;transform:translateY(0)!important;margin:0 0 40px}}\@media only screen and (max-width:736px){.directions_wrapper{padding:50px 20px}.directions_item{width:100%;margin:0 0 40px}.directions_item:last-child{margin-bottom:0}.directions_item_text{padding-bottom:60px}.directions_title{font-size:35px;margin:0 auto;letter-spacing:1.13px;line-height:40px}.directions_item_title,.directions_title{max-width:280px;font-family:Charter-Roman}.directions_item_title{margin:0 auto 33px;font-size:25px;letter-spacing:.86px;line-height:30px}.directions_item_description{margin-bottom:40px;height:auto;opacity:.6}.directions_item_description,.directions_item_link{font-size:16px;letter-spacing:.47px;line-height:30px}.directions_item_link{font-family:Rubik-Regular}}"}};export{t as remteh_directions};