import{u as g}from"./DocsAsideTree.0d9b9617.js";import{f as h,ae as m,h as c,j as p,g as y}from"./runtime-core.esm-bundler.f2bbce76.js";import"./index.01d2c927.js";import"./cookie.aff7eb70.js";import"./Container.567da8a7.js";const _=h({name:"ContentSlot",functional:!0,props:{use:{type:Function,default:void 0},unwrap:{type:[Boolean,String],default:!1}},setup(e){const{parent:l}=y(),{between:s,default:i}=m(),u=c(()=>typeof e.unwrap=="string"?e.unwrap.split(" "):["*"]);return{fallbackSlot:i,tags:u,between:s,parent:l}},render({use:e,unwrap:l,fallbackSlot:s,between:i,tags:u,parent:n}){var f;try{let o=e;if(typeof e=="string"&&(o=(n==null?void 0:n.slots[e])||((f=n==null?void 0:n.parent)==null?void 0:f.slots[e]),console.warn(`Please set :use="$slots.${e}" in <ContentSlot> component to enable reactivity`)),!o)return s?s():p("div");if(!l)return[o()];const{flatUnwrap:d}=g(),a=d(o(),u);return i?a.flatMap((t,r)=>r===0?[t]:[i(),t]):a.reduce((t,r)=>(typeof r.children=="string"?typeof t[t.length-1]=="string"?t[t.length-1]+=r.children:t.push(r.children):t.push(r),t),[])}catch{return p("div")}}});export{_ as default};
