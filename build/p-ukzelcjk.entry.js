import{r as i,h as e}from"./p-0aaecdff.js";const s=class{constructor(e){i(this,e),this.Elements=[{image:"./assets/img/roshen.png",title:"Строительство промышленных объектов",descriptions:["Объекты энергетики","Нефтеперерабатывающие заводы","Крупные производства","Инженерные комплексы","Аграрные сооружения"],route:"/projects"},{image:"./assets/img/geliar_direct.png",title:"Гражданское строительство",descriptions:["Торговые центры","Автосалоны","Жилые и офисные комплексы","Спортивные объекты","Гостинницы и рестораны"],route:"/projects"},{image:"./assets/img/leoni.png",title:"Строительство для иностранного заказчика",descriptions:["Промышленные объекты","Гражданские объекты"],route:"/projects"}]}renderItem(i){return e("div",{class:"directions_item"},e("img",{src:i.image,alt:i.title,class:"directions_item_image"}),e("div",{class:"directions_item_text"},e("h3",{class:"directions_item_title"},i.title),e("p",{class:"directions_item_description"},i.descriptions.map(i=>e("p",null,i))),e("a",{class:"directions_item_link m_clicable",href:i.route},"Посмотреть проекты")))}render(){return e("div",{class:"directions_wrapper"},e("nice-anim",null,e("h2",{class:"directions_title"},"Наши направления"),e("div",{class:"directions_items_wrapper"},this.Elements.map(this.renderItem))))}static get style(){return".directions_wrapper{padding:70px 100px;position:relative;z-index:6}.directions_title{font-family:Charter-Roman;font-size:40px;color:#041543;letter-spacing:1.29px;text-align:center;line-height:40px}.directions_items_wrapper{margin-top:20px;padding:75px 0;font-size:0;text-align:center}.directions_item{text-align:center;width:calc((100% - 80px) / 3);-webkit-box-shadow:0 0 20px 0 rgba(105,136,204,.4);box-shadow:0 0 20px 0 rgba(105,136,204,.4);border-radius:12px;display:inline-block;margin-right:40px}.directions_item:nth-child(2){-webkit-transform:translateY(60px);transform:translateY(60px)}.directions_item:last-child{margin-right:0}.directions_item_image{width:100%}.directions_item_text{padding:50px}.directions_item_title{font-family:Charter-Roman;font-size:22px;color:#041543;letter-spacing:.76px;text-align:center;line-height:30px;margin-bottom:33px}.directions_item_description{opacity:.6;font-family:Rubik-Light;font-size:14px;color:#041543;letter-spacing:.41px;text-align:center;line-height:30px;height:150px;margin-bottom:43px}.directions_item:nth-child(2) .directions_item_description{margin-bottom:73px}.directions_item_link{font-family:Rubik-Regular;font-size:14px;color:#f6b93a;letter-spacing:.41px;text-align:center;line-height:30px;text-decoration:underline}\@media only screen and (max-width:1360px){.directions_item_text{padding:25px}}\@media only screen and (max-width:1024px){.directions_wrapper{padding:70px 50px}.directions_items_wrapper{padding-bottom:0}.directions_item{width:calc((100% - 80px) / 2)}.directions_item:nth-child(2){-webkit-transform:translateY(0)!important;transform:translateY(0)!important;margin:0 0 40px}}\@media only screen and (max-width:736px){.directions_wrapper{padding:50px 20px}.directions_item{width:100%;margin:0 0 40px}.directions_item:last-child{margin-bottom:0}.directions_item_text{padding-bottom:60px}.directions_title{font-size:35px;max-width:280px;margin:0 auto}.directions_item_title{max-width:280px;margin:0 auto;font-size:25px}.directions_item_description{margin-bottom:40px;height:auto;font-size:16px}.directions_item_link{font-size:16px}}"}};export{s as remteh_directions};