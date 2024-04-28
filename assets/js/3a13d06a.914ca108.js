"use strict";(self.webpackChunkdoc=self.webpackChunkdoc||[]).push([[408],{5680:(e,t,n)=>{n.d(t,{xA:()=>s,yg:()=>y});var a=n(6540);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function g(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=a.createContext({}),p=function(e){var t=a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=p(e.components);return a.createElement(i.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,i=e.parentName,s=g(e,["components","mdxType","originalType","parentName"]),u=p(n),c=r,y=u["".concat(i,".").concat(c)]||u[c]||d[c]||l;return n?a.createElement(y,o(o({ref:t},s),{},{components:n})):a.createElement(y,o({ref:t},s))}));function y(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,o=new Array(l);o[0]=c;var g={};for(var i in t)hasOwnProperty.call(t,i)&&(g[i]=t[i]);g.originalType=e,g[u]="string"==typeof e?e:r,o[1]=g;for(var p=2;p<l;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},5531:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>o,default:()=>d,frontMatter:()=>l,metadata:()=>g,toc:()=>p});var a=n(8168),r=(n(6540),n(5680));const l={sidebar_position:1},o="Default Config",g={unversionedId:"config/default-config",id:"config/default-config",title:"Default Config",description:"The code included in this project sends control changes (CC's) to the Helix adding functionality such as Snapshot selection, Tuner ON/OFF and Tap Tempo. The code also sends MIDI notes that can be passed through the Helix to an upstream device such as a laptop.",source:"@site/docs/config/default-config.md",sourceDirName:"config",slug:"/config/default-config",permalink:"/midi-stomptroller/docs/config/default-config",draft:!1,editUrl:"https://github.com/NoahCallaway/midi-stomptroller/docs/config/default-config.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Flashing the Arduino",permalink:"/midi-stomptroller/docs/arduino-flashing/flashing"},next:{title:"Editing the Config",permalink:"/midi-stomptroller/docs/config/edit-config"}},i={},p=[{value:"Usage",id:"usage",level:2},{value:"Switching Pages",id:"switching-pages",level:3},{value:"Button Presses",id:"button-presses",level:3},{value:"Tap Tempo",id:"tap-tempo",level:3},{value:"Config",id:"config",level:2},{value:"Page 0",id:"page-0",level:3},{value:"Page 1",id:"page-1",level:3}],s={toc:p},u="wrapper";function d(e){let{components:t,...l}=e;return(0,r.yg)(u,(0,a.A)({},s,l,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("h1",{id:"default-config"},"Default Config"),(0,r.yg)("p",null,"The code included in this project sends control changes (CC's) to the Helix adding functionality such as Snapshot selection, Tuner ON/OFF and Tap Tempo. The code also sends MIDI notes that can be passed through the Helix to an upstream device such as a laptop."),(0,r.yg)("hr",null),(0,r.yg)("h2",{id:"usage"},"Usage"),(0,r.yg)("h3",{id:"switching-pages"},"Switching Pages"),(0,r.yg)("p",null,"The default config has two pages. To switch between pages long press Button 1. The LED for Button 1 will blink twice and all LED colours will change."),(0,r.yg)("h3",{id:"button-presses"},"Button Presses"),(0,r.yg)("p",null,"The buttons LED will flash once for a short press and twice for a long press (push and hold)."),(0,r.yg)("h3",{id:"tap-tempo"},"Tap Tempo"),(0,r.yg)("p",null,"On page 0, button 4 is used for tap tempo. The LED will flash in time to the tapped tempo."),(0,r.yg)("hr",null),(0,r.yg)("h2",{id:"config"},"Config"),(0,r.yg)("h3",{id:"page-0"},"Page 0"),(0,r.yg)("blockquote",null,(0,r.yg)("p",{parentName:"blockquote"},"LED Colour = Magenta")),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},(0,r.yg)("strong",{parentName:"th"},"Button\xa0No.")),(0,r.yg)("th",{parentName:"tr",align:null},(0,r.yg)("strong",{parentName:"th"},"Short Press\xa0")),(0,r.yg)("th",{parentName:"tr",align:null},(0,r.yg)("strong",{parentName:"th"},"Long Press")))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("strong",{parentName:"td"},"1")),(0,r.yg)("td",{parentName:"tr",align:null},"Recall Snapshot 1"),(0,r.yg)("td",{parentName:"tr",align:null},"Go to Page 1")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("strong",{parentName:"td"},"2")),(0,r.yg)("td",{parentName:"tr",align:null},"Recall Snapshot 2"),(0,r.yg)("td",{parentName:"tr",align:null},"FS5")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("strong",{parentName:"td"},"3")),(0,r.yg)("td",{parentName:"tr",align:null},"Recall Snapshot 3"),(0,r.yg)("td",{parentName:"tr",align:null},"Change Footswitch Mode")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("strong",{parentName:"td"},"4")),(0,r.yg)("td",{parentName:"tr",align:null},"Tap Tempo BPM"),(0,r.yg)("td",{parentName:"tr",align:null},"Tuner")))),(0,r.yg)("h3",{id:"page-1"},"Page 1"),(0,r.yg)("blockquote",null,(0,r.yg)("p",{parentName:"blockquote"},"LED Colour = Cyan")),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},(0,r.yg)("strong",{parentName:"th"},"Button No.")),(0,r.yg)("th",{parentName:"tr",align:null},(0,r.yg)("strong",{parentName:"th"},"Short Press\xa0")),(0,r.yg)("th",{parentName:"tr",align:null},(0,r.yg)("strong",{parentName:"th"},"Long Press")))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("strong",{parentName:"td"},"1")),(0,r.yg)("td",{parentName:"tr",align:null},"MIDI Note D2"),(0,r.yg)("td",{parentName:"tr",align:null},"Go to Page 0")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("strong",{parentName:"td"},"2")),(0,r.yg)("td",{parentName:"tr",align:null},"MIDI Note D#2"),(0,r.yg)("td",{parentName:"tr",align:null},"FS5")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("strong",{parentName:"td"},"3")),(0,r.yg)("td",{parentName:"tr",align:null},"MIDI Note E2"),(0,r.yg)("td",{parentName:"tr",align:null},"MIDI Note C3")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("strong",{parentName:"td"},"4")),(0,r.yg)("td",{parentName:"tr",align:null},"MIDI Note C#3"),(0,r.yg)("td",{parentName:"tr",align:null},"Tuner")))),(0,r.yg)("p",null,(0,r.yg)("img",{alt:"Button Numbers",src:n(9425).A,width:"1080",height:"1355"})))}d.isMDXComponent=!0},9425:(e,t,n)=>{n.d(t,{A:()=>a});const a=n.p+"assets/images/button_numbers-1b46722f3f252a4ee200b174851a4c4d.png"}}]);