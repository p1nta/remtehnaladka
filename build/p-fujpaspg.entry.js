import{r as s,h as r}from"./p-58e16f45.js";const t=class{constructor(r){s(this,r)}normalize(s){return s?s.substr(0,1).toUpperCase()+s.substr(1).toLowerCase():""}render(){if(this.match&&this.match.params.name)return r("div",{class:"app-profile"},r("p",null,"Hello! My name is ",this.normalize(this.match.params.name),". My name was passed in through a route param!"))}static get style(){return".app-profile{padding:10px}"}};export{t as app_projects};