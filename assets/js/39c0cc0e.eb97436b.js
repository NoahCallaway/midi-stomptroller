"use strict";(self.webpackChunkdoc=self.webpackChunkdoc||[]).push([[493],{5680:(e,n,t)=>{t.d(n,{xA:()=>p,yg:()=>m});var r=t(6540);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=r.createContext({}),c=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},p=function(e){var n=c(e.components);return r.createElement(s.Provider,{value:n},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},f=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=c(t),f=o,m=u["".concat(s,".").concat(f)]||u[f]||d[f]||i;return t?r.createElement(m,a(a({ref:n},p),{},{components:t})):r.createElement(m,a({ref:n},p))}));function m(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=t.length,a=new Array(i);a[0]=f;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l[u]="string"==typeof e?e:o,a[1]=l;for(var c=2;c<i;c++)a[c]=t[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}f.displayName="MDXCreateElement"},3334:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>a,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var r=t(8168),o=(t(6540),t(5680));const i={sidebar_position:2},a="Flashing the Arduino",l={unversionedId:"arduino-flashing/flashing",id:"arduino-flashing/flashing",title:"Flashing the Arduino",description:"1. Connect the arduino using the USB port",source:"@site/docs/arduino-flashing/flashing.md",sourceDirName:"arduino-flashing",slug:"/arduino-flashing/flashing",permalink:"/midi-stomptroller/docs/arduino-flashing/flashing",draft:!1,editUrl:"https://github.com/NoahCallaway/midi-stomptroller/docs/arduino-flashing/flashing.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Requirements",permalink:"/midi-stomptroller/docs/arduino-flashing/requirements"},next:{title:"Default Config",permalink:"/midi-stomptroller/docs/config/default-config"}},s={},c=[],p={toc:c},u="wrapper";function d(e){let{components:n,...t}=e;return(0,o.yg)(u,(0,r.A)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,o.yg)("h1",{id:"flashing-the-arduino"},"Flashing the Arduino"),(0,o.yg)("ol",null,(0,o.yg)("li",{parentName:"ol"},"Connect the arduino using the USB port",(0,o.yg)("blockquote",{parentName:"li"},(0,o.yg)("p",{parentName:"blockquote"},"\u26a0\ufe0f Never use the USB port whilst the DC power jack connected"))),(0,o.yg)("li",{parentName:"ol"},"In the Arduino IDE select ",(0,o.yg)("inlineCode",{parentName:"li"},"Tools > Board > Arduino Leonardo")),(0,o.yg)("li",{parentName:"ol"},"Then from ",(0,o.yg)("inlineCode",{parentName:"li"},"Tools > Port")," select the ",(0,o.yg)("inlineCode",{parentName:"li"},"(Arduino Leonardo)")," option"),(0,o.yg)("li",{parentName:"ol"},"Open the ",(0,o.yg)("inlineCode",{parentName:"li"},"midi-stomptroller.ino")," sketch and make changes if necessary"),(0,o.yg)("li",{parentName:"ol"},"Press the ",(0,o.yg)("inlineCode",{parentName:"li"},"Upload")," arrow in the top left")))}d.isMDXComponent=!0}}]);