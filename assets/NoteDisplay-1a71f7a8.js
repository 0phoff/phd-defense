import{d,i as c,a as u,f as o,E as s,g as r,t as a,o as l,_ as m}from"./index-254cbcae.js";const f=["innerHTML"],v=["textContent"],k=["textContent"],y=d({__name:"NoteDisplay",props:{class:{type:String,required:!1},noteHtml:{type:String,required:!1},note:{type:String,required:!1},placeholder:{type:String,required:!1}},emits:["click"],setup(p){const n=p;return c(u),(e,t)=>e.noteHtml?(l(),o("div",{key:0,class:s(["prose overflow-auto outline-none",n.class]),onClick:t[0]||(t[0]=i=>e.$emit("click")),innerHTML:e.noteHtml},null,10,f)):e.note?(l(),o("div",{key:1,class:s(["prose overflow-auto outline-none",n.class]),onClick:t[1]||(t[1]=i=>e.$emit("click"))},[r("p",{textContent:a(e.note)},null,8,v)],2)):(l(),o("div",{key:2,class:s(["prose overflow-auto outline-none opacity-50 italic",n.class]),onClick:t[2]||(t[2]=i=>e.$emit("click"))},[r("p",{textContent:a(n.placeholder||"No notes.")},null,8,k)],2))}}),_=m(y,[["__file","/home/runner/work/phd-defense/phd-defense/node_modules/.pnpm/@slidev+client@0.42.5_postcss@8.4.24_vite@4.3.9/node_modules/@slidev/client/internals/NoteDisplay.vue"]]);export{_ as N};
