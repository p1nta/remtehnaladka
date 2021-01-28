import{r as s,h as t}from"./p-58f1e2d9.js";const e=class{constructor(t){s(this,t),this.advantagesItems=[{title:"Квалифицированные специалисты",icon:"./assets/img/personal_x2.png",iconWidth:52},{title:"Более десяти лет на строительном рынке",icon:"./assets/img/ten_years_exp_x2.png",iconWidth:62},{title:"Налаженная система управления",icon:"./assets/img/settings_x2.png",iconWidth:62},{title:"Система контроля качества",icon:"./assets/img/quality_control_x2.png",iconWidth:68},{title:"Работа на большей части Украины",icon:"./assets/img/flag_x2.png",iconWidth:57},{title:"Участие в ключевых программах строительства",icon:"./assets/img/key_parts_x2.png",iconWidth:62},{title:"Современный программный комплекс",icon:"./assets/img/software_x2.png",iconWidth:62},{title:"Комплексный подход",icon:"./assets/img/complex_work_x2.png",iconWidth:62}]}renderAdvantageItem(s){return t("div",{class:"advantages_item"},t("div",{class:"advantages_item_img_wrapper"},t("img",{src:s.icon,alt:s.title,class:"advantages_item_img",width:s.iconWidth})),t("div",{class:"advantages_item_text"},s.title))}render(){return t("div",{class:"advantages_wrapper"},t("prog-img",{src:"./assets/img/advantages-1920.png",placeHolder:"./assets/img/advantages-1920-loading.png",class:"advantages_desctop_img"}),t("prog-img",{src:"./assets/img/advantages-375.png",placeHolder:"./assets/img/advantages-375-loading.png",class:"advantages_mobile_img"}),t("nice-anim",null,t("h3",{class:"advantages_title"},"Наши преимущества"),t("div",{class:"advantages_items_wrapper"},this.advantagesItems.map(this.renderAdvantageItem))))}static get style(){return".advantages_wrapper{margin-top:-230px;padding:330px 100px 300px;position:relative;z-index:2}.advantages_desctop_img{position:absolute;min-width:100%;min-height:100%;bottom:0;left:50%;-webkit-transform:translateX(-50%);transform:translateX(-50%);display:block}.advantages_mobile_img{position:absolute;min-width:100%;min-height:100%;bottom:0;left:50%;-webkit-transform:translateX(-50%);transform:translateX(-50%);display:none}.advantages_title{font-family:\'Charter-Roman\';font-size:40px;color:#041543;letter-spacing:1.29px;text-align:center;line-height:40px;margin-bottom:10px}.advantages_items_wrapper{max-width:1260px;margin:0 auto;padding:65px 0;font-size:0;vertical-align:top}.advantages_item{display:inline-block;width:calc((100% - 120px) / 4);background:#FFFFFF;-webkit-box-shadow:0 0 10px 0 rgba(105,136,204,0.25);box-shadow:0 0 10px 0 rgba(105,136,204,0.25);border-radius:12px;height:240px;padding:20px;-webkit-box-sizing:border-box;box-sizing:border-box;margin-left:40px;vertical-align:top}.advantages_item:first-child{margin-bottom:40px}.advantages_item:first-child,.advantages_item:nth-child(5){margin-left:0}.advantages_item:nth-child(2),.advantages_item:nth-child(3),.advantages_item:nth-child(6),.advantages_item:nth-child(7){-webkit-transform:translateY(60px);transform:translateY(60px)}.advantages_item_img_wrapper{height:50%;text-align:center;vertical-align:bottom;line-height:100%}.advantages_item_img_wrapper::before{display:inline-block;vertical-align:bottom;content:\'\';height:100%}.advantages_item_img{display:inline-block}.advantages_item_text{padding-top:25px;opacity:0.6;font-family:\'Rubik\';font-size:14px;color:#041543;letter-spacing:0.51px;text-align:center;line-height:25px;max-width:200px;margin:0 auto}\@media only screen and (max-width: 1024px){.advantages_wrapper{padding:330px 50px 300px}.advantages_item_img_wrapper{height:35%}}\@media only screen and (max-width: 736px){.advantages_wrapper{padding:330px 20px 200px}.advantages_desctop_img{display:none}.advantages_mobile_img{display:block}.advantages_title{font-size:35px;line-height:40px}.advantages_item{display:block;width:100%;margin:0 0 20px 0 !important;-webkit-transform:translateY(0) !important;transform:translateY(0) !important;padding:30px;height:auto}.advantages_item_img_wrapper{display:inline-block;width:30%;vertical-align:middle}.advantages_item_text{text-align:left;width:70%;vertical-align:middle;display:inline-block;padding:0;padding-left:30px}.advantages_item_text{font-size:16px}}"}},i=class{constructor(t){s(this,t)}render(){return t("div",{class:"clients_wrapper"},t("nice-anim",null,t("h3",{class:"clients_title"},"Клиенты"),t("div",{class:"clients_logos_wrapper"},t("div",{class:"clients_img_container"},t("img",{class:"clients_img leoni",src:"./assets/img/leoni_x2.png",alt:""})),t("div",{class:"clients_img_container"},t("img",{class:"clients_img PGphase",src:"./assets/img/PG_phase_x2.png",alt:""})),t("div",{class:"clients_img_container"},t("img",{class:"clients_img geberit",src:"./assets/img/geberit_x2.png",alt:""})),t("div",{class:"clients_img_container"},t("img",{class:"clients_img kesz",src:"./assets/img/kesz_x2.png",alt:""})),t("div",{class:"clients_img_container"},t("img",{class:"clients_img kraft",src:"./assets/img/kraft_x2.png",alt:""})),t("div",{class:"clients_img_container"},t("img",{class:"clients_img roshen",src:"./assets/img/roshen_logo_x2.png",alt:""})))))}static get style(){return".clients_wrapper{background-image:-webkit-gradient(linear, left bottom, left top, color-stop(8%, #021238), color-stop(76%, #6B749F));background-image:linear-gradient(0deg, #021238 8%, #6B749F 76%);border-radius:0 0 0 100px 0;margin-top:-640px;padding:730px 100px 150px}.clients_title{font-family:\'Charter-Roman\';font-size:40px;color:#FFFFFF;letter-spacing:1.29px;text-align:center;line-height:40px;margin-bottom:50px}.clients_logos_wrapper{font-size:0;max-width:760px;margin:0 auto}.clients_img_container{width:33%;display:inline-block;text-align:center;margin:45px 0}.clients_img_container::before{vertical-align:middle;content:\'\';height:100%;display:inline-block}.clients_img{vertical-align:middle}.clients_logos_wrapper .leoni{max-width:100%;width:120px}.clients_logos_wrapper .PGphase{max-width:100%;width:87px}.clients_logos_wrapper .geberit{max-width:100%;width:160px}.clients_logos_wrapper .kesz{max-width:100%;width:87px}.clients_logos_wrapper .kraft{max-width:100%;width:144px}.clients_logos_wrapper .roshen{max-width:100%;width:172px}\@media only screen and (max-width: 1024px){.clients_wrapper{padding:730px 50px 150px}}\@media only screen and (max-width: 736px){.clients_wrapper{padding:730px 20px 150px}.clients_title{font-size:35px;line-height:40px}.clients_img_container{width:50%;padding:0 10px}}"}},a=class{constructor(t){s(this,t),this.exampleElements=[{image:"./assets/img/roshen_1.jpg",title:"Строительство фабрики Roshen в Виннице"},{image:"./assets/img/geliar_1.jpg",title:"Строительство фитнесс-клуба Гелиар в Киеве"},{image:"./assets/img/leoni_1.jpg",title:"Строительство завода Leoni в Коломые"}],this.achievementElements=[{count:12,title:"Лет на строительном рынке Украины"},{count:148,title:"Завершенных проектов"},{count:64,title:"Квалифицированных специалиста"}]}renderAchievementsItem(s){return t("div",{class:"projects_main_achievement_item"},t("img",{src:"./assets/img/prize_x2.png",class:"projects_main_achievement_image"}),t("p",{class:"projects_main_achievement_item_count"},s.count),t("p",{class:"projects_main_achievement_description"},s.title))}renderExampleItem(s){return t("div",{class:"projects_main_example_item"},t("div",{class:"projects_main_example_item_image_wrap"},t("img",{src:s.image,alt:s.title,class:"projects_main_example_item_image"})),t("p",{class:"projects_main_example_item_description"},s.title))}render(){return t("div",{class:"projects_main_wrapper"},t("div",{class:"projects_main_top_part"},t("nice-anim",null,t("h3",{class:"projects_main_title"},"Проекты"),t("div",{class:"projects_main_achievements"},this.achievementElements.map(this.renderAchievementsItem)))),t("div",{class:"projects_main_bottom_part"},t("nice-anim",null,t("div",{class:"projects_main_examples"},this.exampleElements.map(this.renderExampleItem)),t("stencil-route-link",{url:"/projects",anchorClass:"projects_main_all_link m_clicable"},"Посмотреть все проекты"))))}static get style(){return".projects_main_wrapper{margin-top:-240px;position:relative;z-index:4}.projects_main_top_part{background-image:-webkit-gradient(linear, left top, left bottom, from(#6B749F), color-stop(91%, #021238));background-image:linear-gradient(180deg, #6B749F 0%, #021238 91%);padding:330px 180px 220px}.projects_main_title{font-family:\'Charter-Roman\';font-size:40px;color:#FFFFFF;letter-spacing:1.29px;text-align:center;line-height:40px;margin-bottom:77px}.projects_main_achievements{max-width:1060px;margin:0 auto;display:-ms-flexbox;display:flex;-ms-flex-pack:justify;justify-content:space-between}.projects_main_achievement_item{text-align:center;max-width:200px}.projects_main_achievement_image{width:85px;display:inline-block;margin-bottom:30px}.projects_main_achievement_item_count{font-family:\'Charter-Roman\';font-size:80px;color:#FAD390;letter-spacing:2.58px;text-align:center;line-height:80px;margin-bottom:30px}.projects_main_achievement_description{opacity:0.6;font-family:\'Rubik\';font-weight:100;font-size:14px;color:#FFFFFF;letter-spacing:0.6px;text-align:center;line-height:25px;width:165px;margin:0 auto}.projects_main_bottom_part{padding:0 100px 170px;text-align:center;background:#FFFFFF;background:url(\"./assets/img/projects_x2.png\");background-position:bottom;background-size:cover;position:relative;z-index:2}.projects_main_examples{display:-ms-flexbox;display:flex;-ms-flex-pack:justify;justify-content:space-between;max-width:1170px;margin:0 auto;-webkit-transform:translateY(-120px);transform:translateY(-120px)}.projects_main_example_item{text-align:center;max-width:360px;width:calc((100% - 90px) / 3)}.projects_main_example_item_image_wrap{background:#FFFFFF;-webkit-box-shadow:0 0 10px 0 rgba(105,136,204,0.25);box-shadow:0 0 10px 0 rgba(105,136,204,0.25);border-radius:12px;margin-bottom:38px;position:relative;padding-bottom:75%;overflow:hidden}.projects_main_example_item_image{position:absolute;top:0;left:0;width:100%;height:100%}.projects_main_example_item_description{font-family:\'Charter-Roman\';font-size:22px;color:#041543;letter-spacing:0.51px;text-align:center;line-height:30px}.projects_main_all_link{font-family:\'Rubik\';font-weight:400;font-size:18px;color:#F6B93A !important;letter-spacing:0.53px;text-align:center;line-height:30px;text-decoration:underline}\@media only screen and (max-width: 1024px){.projects_main_top_part{padding:330px 50px 220px}.projects_main_bottom_part{padding:0 50px 190px}}\@media only screen and (max-width: 736px){.projects_main_achievements{display:block}.projects_main_title{font-size:35px}.projects_main_achievement_description{font-size:16px;opacity:0.6;letter-spacing:0.68px;line-height:25px;width:auto}.projects_main_bottom_part{padding:0 20px 190px}.projects_main_achievement_item{margin:0 auto 64px}.projects_main_achievement_item:last-child{margin-bottom:0}.projects_main_achievement_item_count{font-family:\'Charter-Roman\';margin-bottom:10px}.projects_main_examples{display:block;-webkit-transform:translateY(-65px);transform:translateY(-65px)}.projects_main_example_item_description{font-size:25px;font-family:\'Charter-Roman\';letter-spacing:0.58px;line-height:30px}.projects_main_example_item{width:100%;margin:0 0 75px;max-width:100%}.projects_main_example_item:last-child{margin-bottom:0}.projects_main_example_item_image{margin-bottom:25px}}"}},_=class{constructor(t){s(this,t)}render(){return t("div",{class:`top_part_wrapper ${this.class}`},t("prog-img",{src:"./assets/img/top-1920.png",placeHolder:"./assets/img/top-1920-loading.png",class:"top_desctop_img"}),t("prog-img",{src:"./assets/img/top-375.png",placeHolder:"./assets/img/top-375-loading.png",class:"top_mobile_img"}),t("nice-anim",null,t("h2",{class:"top_part_title"},"Строительство объектов промышленного и гражданского назначения в Украине"),t("div",{class:"top_wrapper_links"},t("stencil-route-link",{anchorClass:"top_wrapper_link",url:"/projects"},"Проекты"),t("a",{class:"top_wrapper_link",href:"/#contacts"},"Контакты")),t("p",{class:"top_part_description"},"Работая на рынке строительных услуг с 2006 года, мы заслужили высокую репутацию и безупречный авторитет, благодаря глубоким знаниям строительного бизнеса, современным технологиям и качеству выполняемых работ.")))}static get style(){return".top_part_wrapper{position:relative;min-height:1260px;overflow:hidden;position:relative;padding:300px 260px 380px;z-index:7}.top_desctop_img{position:absolute;min-width:100%;min-height:100%;bottom:0;left:50%;-webkit-transform:translateX(-50%);transform:translateX(-50%);display:block}.top_mobile_img{position:absolute;width:100%;min-width:100%;top:0;left:50%;-webkit-transform:translateX(-50%);transform:translateX(-50%);display:none}.top_part_title{font-family:\'Charter-Roman\';font-size:60px;color:#FFFFFF;letter-spacing:1.93px;line-height:80px;max-width:1000px}.top_part_description{opacity:0.6;font-family:\'Rubik\';font-weight:100;font-size:20px;color:#FFFFFF;letter-spacing:0.59px;line-height:35px;max-width:720px;margin-top:40px}.top_wrapper_links{display:none}\@media only screen and (max-width: 1360px){.top_part_wrapper{min-height:860px;padding:160px 200px}.top_part_title{font-size:50px;color:#FFFFFF;letter-spacing:1.61px;line-height:60px;max-width:640px}}\@media only screen and (max-width: 1024px){.top_part_wrapper{padding:160px 45px}}\@media only screen and (max-width: 736px){.top_desctop_img{display:none}.top_mobile_img{display:block}.top_part_wrapper{padding:160px 10px 160px 40px}.top_part_title{font-size:35px;letter-spacing:1.13px;line-height:40px}.top_wrapper_links{display:block;margin:35px 0 100px}.top_wrapper_link{color:#f6b93a;font-family:sans-serif;font-size:18px;font-weight:400;letter-spacing:0.53px;line-height:30px;text-decoration:underline;margin-right:20px}.top_part_description{font-size:18px;letter-spacing:0.53px;line-height:35px}}"}},c=class{constructor(t){s(this,t),this.Elements=[{image:"./assets/img/engineering_systems_x2.png",title:"Инженерные системы",description:"Проектирование, поставка и монтаж автоматических инженерных систем, систем безопасности, электроснабжения, систем передачи данных и климатических систем. При проектировании мы учитываем все особенности объекта, что позволяет избежать несостыковок и лишнего дублирования в системе.",width:70},{image:"./assets/img/construction_and_reconstruction_x2.png",title:"Строительство и реконструкция",description:"Обмен опытом с ведущими организациями Украины и специалистами из Америки и Европы и использование в процессе строительства программ управления строительством в режиме реального времени, позволяет нам соблюдать сроки и надлежащее качество.",width:70},{image:"./assets/img/beautification_x2.png",title:"Благоустройство",description:"Наши специалисты проектируют благоустройство территорий для промышленных и гражданских объектов, чтобы сделать их эстетически привлекательными и удобными как для работы так и для жизни. ",width:70}]}renderProjects(){return t("div",{class:"what_we_do_item"},t("img",{src:"./assets/img/design_x2.png",alt:"Проектирование",class:"what_we_do_item_image",width:66}),t("h3",{class:"what_we_do_item_title"},"Проектирование"),t("ul",{class:"what_we_do_item_description"},t("li",null,"жилых, общественных и промышленных зданий;"),t("li",null,"инженерных систем;"),t("li",null,"территории и ландшафтная архитектура;"),t("li",null,"дизайн жилых и общественных интерьеров;"),t("li",null,"сбор данных для проектирования;"),t("li",null,"комплекс работ по проектно-сметной документации.")))}renderItem(s){return t("div",{class:"what_we_do_item"},t("img",{src:s.image,alt:s.title,class:"what_we_do_item_image",width:s.width}),t("h3",{class:"what_we_do_item_title"},s.title),t("p",{class:"what_we_do_item_description"},s.description))}render(){return t("div",{class:"what_we_do_background"},t("prog-img",{src:"./assets/img/directions-1920.png",placeHolder:"./assets/img/directions-1920-loading.png",class:"what_we_do_desctop_img"}),t("prog-img",{src:"./assets/img/directions-375.png",placeHolder:"./assets/img/directions-375-loading.png",class:"what_we_do_mobile_img"}),t("remteh-directions",null),t("div",{class:"what_we_do_wrapper"},t("nice-anim",null,t("h2",{class:"what_we_do_title"},"Что мы делаем"),t("div",{class:"what_we_do_items_wrapper"},t("div",{class:"what_we_do_items_column"},this.renderProjects(),this.renderItem(this.Elements[0])),t("div",{class:"what_we_do_items_column"},this.renderItem(this.Elements[1]),this.renderItem(this.Elements[2]))))))}static get style(){return".what_we_do_background{position:relative;z-index:5}.what_we_do_desctop_img{position:absolute;min-width:100%;bottom:0;left:50%;-webkit-transform:translateX(-50%);transform:translateX(-50%);display:block;z-index:-1}.what_we_do_mobile_img{position:absolute;min-width:100%;bottom:0;left:50%;-webkit-transform:translateX(-50%);transform:translateX(-50%);display:none;z-index:-1}.what_we_do_wrapper{padding:50px 100px 190px}.what_we_do_title{font-family:\'Charter-Roman\';font-size:40px;color:#041543;letter-spacing:1.29px;text-align:center;line-height:40px;margin:0}.what_we_do_items_wrapper{max-width:880px;margin:115px auto 0;font-size:0;display:-ms-flexbox;display:flex;-ms-flex-pack:distribute;justify-content:space-around}.what_we_do_items_column{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;-ms-flex-pack:justify;justify-content:space-between;width:calc((100% - 40px) / 2);max-width:400px}.what_we_do_item{background:#FFFFFF;-webkit-box-shadow:0 0 20px 0 rgba(105,136,204,0.25);box-shadow:0 0 20px 0 rgba(105,136,204,0.25);border-radius:12px;display:inline-block;padding:40px;margin-bottom:40px;min-height:calc(50% - 20px);-webkit-box-sizing:border-box;box-sizing:border-box}.what_we_do_item_image{width:70px;margin-bottom:25px;display:block}.what_we_do_item_title{font-family:\'Charter-Roman\';font-size:22px;color:#041543;letter-spacing:0.51px;line-height:30px;margin-bottom:20px}.what_we_do_item_description{opacity:0.6;font-family:\'Rubik\';font-size:14px;color:#041543;letter-spacing:0.6px;line-height:30px;margin:0}\@media only screen and (max-width: 1024px){.what_we_do_wrapper{padding:70px 50px 190px}}\@media only screen and (max-width: 736px){.what_we_do_desctop_img{display:none}.what_we_do_mobile_img{display:block}.what_we_do_title{font-size:35px}.what_we_do_wrapper{padding:50px 20px 250px}.what_we_do_items_wrapper{margin-top:75px;display:block;width:100%}.what_we_do_items_column{max-width:100%;width:100%;margin:0}.what_we_do_item:nth-child(odd){margin-bottom:40px}.what_we_do_item{max-width:100%}.what_we_do_item_title{font-size:25px}.what_we_do_item_description{font-size:16px}}"}},n=class{constructor(t){s(this,t)}render(){return t("div",{class:"why_trust_wrapper"},t("nice-anim",null,t("h3",{class:"why_trust_title"},"Почему нам доверяют"),t("div",{class:"why_trust_first"},t("div",{class:"why_trust_image_block"},t("img",{src:"./assets/img/build_process_x2.png",alt:"",class:"why_trust_first_img"})),t("div",{class:"why_trust_first_text"},t("h4",{class:"why_trust_item_title"},"Компетентная команда"),t("p",{class:"why_trust_item_descr"},"Управляющий состав компании состоит из профессионалов, заслуженных строителей, инженеров, менеджеров проектов, ранее зарекомендовавших себя на ключевых строительных проектах страны. У нас есть собственная проектная мастерская и отдельные департаменты разделенные по видам работ. Мы сотрудничаем со специалистами из Германии, Израиля, Объединённых Арабских Эмиратов, которые уже много лет помогают нам сопровождать наши проекты."))),t("div",{class:"why_trust_second"},t("div",{class:"why_trust_second_text"},t("h4",{class:"why_trust_item_title"},"Разрешительная документация"),t("p",{class:"why_trust_item_descr"},"Ремтехналадка имеет необходимые лицензии (СС3 класса последствий) на осуществление видов деятельности: выполнение строительно-монтажных работ; выполнение функций генерального подрядчика; выполнение проектных работ; выполнение функций заказчика-застройщика.")),t("div",{class:"why_trust_image_block"},t("img",{src:"./assets/img/documentation_x2.png",alt:"",class:"why_trust_second_img"})))))}static get style(){return".why_trust_wrapper{padding:310px 0 20px;font-size:0;overflow:hidden;background:url(\"./assets/img/why_trust_x2.png\");background-position:bottom;background-size:cover;margin-top:-230px;position:relative;z-index:3}.why_trust_title{font-family:\'Charter-Roman\';font-size:40px;color:#041543;letter-spacing:1.29px;text-align:center;line-height:40px;margin-bottom:15px}.why_trust_first,.why_trust_second{max-width:1360px;margin:0 auto}.why_trust_image_block{display:inline-block;vertical-align:middle;width:50%}.why_trust_first_img{width:100%;max-width:580px;margin-left:-60px}.why_trust_first_text{width:50%;max-width:460px;display:inline-block;vertical-align:middle;padding-right:30px}.why_trust_item_title{font-family:\'Charter-Roman\';font-size:22px;color:#041543;letter-spacing:0.76px;line-height:30px;margin-bottom:22px}.why_trust_item_descr{opacity:0.6;font-family:\'Rubik\';font-size:14px;color:#041543;letter-spacing:0.41px;line-height:30px}.why_trust_second{text-align:right;margin-top:-100px}.why_trust_second_text{width:50%;max-width:460px;padding-left:30px;text-align:left;display:inline-block;vertical-align:middle}.why_trust_second_img{width:100%;max-width:580px;margin-right:-50px}\@media only screen and (max-width: 1024px){.why_trust_second{margin-top:0px}}\@media only screen and (max-width: 736px){.why_trust_wrapper{padding:310px 0 160px}.why_trust_title{margin-bottom:70px;font-size:35px}.why_trust_image_block{width:100%;margin-bottom:35px}.why_trust_first_text,.why_trust_second_text{padding:0 40px;width:100%}.why_trust_first_text{margin-bottom:95px}.why_trust_second{display:-ms-flexbox;display:flex;-ms-flex-flow:column-reverse;flex-flow:column-reverse}.why_trust_second .why_trust_image_block{margin-left:-60px}.why_trust_second_img{margin-right:0}.why_trust_item_title{font-size:25px}.why_trust_item_descr{font-size:16px}}"}};export{e as remteh_advantages,i as remteh_clients,a as remteh_main_projects,_ as remteh_top,c as remteh_what_we_do,n as remteh_why_trust};