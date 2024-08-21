(()=>{"use strict";var e,t,n,r,a={564:(e,t,n)=>{n.a(e,(async(e,t)=>{try{var r=n(44),a=e([r]);r=(a.then?(await a)():a)[0],t()}catch(e){t(e)}}))},106:(e,t,n)=>{n.d(t,{A:()=>d});var r=n(601),a=n.n(r),o=n(314),i=n.n(o),c=n(417),s=n.n(c),p=new URL(n(92),n.b),u=i()(a()),l=s()(p);u.push([e.id,`* {\n  padding: 0px;\n  margin: 0px;\n  box-sizing: border-box;\n}\nbody {\n  width: 100%;\n  height: 100%;\n  margin: 0 auto;\n  background-image: url(${l});\n  background-size: cover;\n  background-repeat: no-repeat;\n  background-position: top center;\n}\n.content-wrap {\n  margin: 0 auto;\n  padding: 50px;\n  max-width: 100%;\n  backdrop-filter: blur(5px);\n  display: grid;\n  grid-template-areas:\n    "header header"\n    "data data"\n    "footer footer";\n}\n.content__header {\n  margin: 0 auto;\n  width: 1220px;\n  padding: 0 10px;\n  grid-area: header;\n  display: flex;\n}\n.content__header > p {\n  font-family: "Raleway", sans-serif;\n  font-weight: 700;\n  font-size: 30px;\n}\n.content__header > p > span {\n  color: white;\n}\n.content__request {\n  margin-left: auto;\n  width: 305px;\n  padding: 12px 5px 12px 16px;\n  border-radius: 8px;\n  background-color: rgba(245, 244, 244, 0.4);\n}\n.content__request > input {\n  width: 200px;\n  height: 24px;\n  background-color: rgba(245, 244, 244, 0.4);\n  border: none;\n  border-radius: 3px;\n}\n.content__request > input:focus {\n  outline: 2px solid rgb(13, 44, 43);\n}\n.content__request > input::placeholder {\n  font-family: "Raleway";\n  font-size: 15px;\n  line-height: 24px;\n  color: rgba(112, 112, 112, 1);\n}\n.content__request > input::-webkit-search-cancel-button {\n  cursor: pointer;\n}\n.content__request > button {\n  border: none;\n  background-color: rgba(28, 28, 28, 0);\n  cursor: pointer;\n}\n.content__data {\n  margin: 0 auto;\n\n  padding-top: 20px;\n  grid-area: data;\n  text-align: center;\n  color: white;\n  font-size: 30px;\n  display: flex;\n  gap: 100px;\n}\n.content__data-city {\n  align-self: center;\n  text-transform: capitalize;\n  width: 350px;\n}\n#map {\n  width: 600px;\n  height: 400px;\n  margin: 0 auto;\n  border: 2px solid #1cbcec;\n  border-radius: 50%;\n  overflow: hidden;\n  box-shadow: 0px 0px 10px 0px #000;\n}\n.content-container__list {\n  margin: 0 auto;\n  grid-area: footer;\n}\n.content__list {\n  margin: 0 auto;\n  text-transform: capitalize;\n  padding-top: 50px;\n  display: flex;\n  gap: 30px;\n  justify-content: space-around;\n}\n.content__list > li {\n  list-style-type: none;\n  font-family: "Raleway", sans-serif;\n  font-weight: 700;\n  font-size: 20px;\n  color: white;\n  cursor: pointer;\n}\n.content__list > li:hover {\n  color: #4de0d4; /* Меняем цвет текста */\n  -webkit-text-shadow: 2px 2px 2px #000;\n  -moz-text-shadow: 2px 2px 2px #000;\n  text-shadow: 2px 2px 2px #000;\n}\n`,""]);const d=u},314:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",r=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),r&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),r&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,r,a,o){"string"==typeof e&&(e=[[null,e,void 0]]);var i={};if(r)for(var c=0;c<this.length;c++){var s=this[c][0];null!=s&&(i[s]=!0)}for(var p=0;p<e.length;p++){var u=[].concat(e[p]);r&&i[u[0]]||(void 0!==o&&(void 0===u[5]||(u[1]="@layer".concat(u[5].length>0?" ".concat(u[5]):""," {").concat(u[1],"}")),u[5]=o),n&&(u[2]?(u[1]="@media ".concat(u[2]," {").concat(u[1],"}"),u[2]=n):u[2]=n),a&&(u[4]?(u[1]="@supports (".concat(u[4],") {").concat(u[1],"}"),u[4]=a):u[4]="".concat(a)),t.push(u))}},t}},417:e=>{e.exports=function(e,t){return t||(t={}),e?(e=String(e.__esModule?e.default:e),/^['"].*['"]$/.test(e)&&(e=e.slice(1,-1)),t.hash&&(e+=t.hash),/["'() \t\n]|(%20)/.test(e)||t.needQuotes?'"'.concat(e.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):e):e}},601:e=>{e.exports=function(e){return e[1]}},777:(e,t,n)=>{var r=n(72),a=n.n(r),o=n(825),i=n.n(o),c=n(659),s=n.n(c),p=n(56),u=n.n(p),l=n(540),d=n.n(l),f=n(113),h=n.n(f),m=n(106),g={};g.styleTagTransform=h(),g.setAttributes=u(),g.insert=s().bind(null,"head"),g.domAPI=i(),g.insertStyleElement=d(),a()(m.A,g),m.A&&m.A.locals&&m.A.locals},72:e=>{var t=[];function n(e){for(var n=-1,r=0;r<t.length;r++)if(t[r].identifier===e){n=r;break}return n}function r(e,r){for(var o={},i=[],c=0;c<e.length;c++){var s=e[c],p=r.base?s[0]+r.base:s[0],u=o[p]||0,l="".concat(p," ").concat(u);o[p]=u+1;var d=n(l),f={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==d)t[d].references++,t[d].updater(f);else{var h=a(f,r);r.byIndex=c,t.splice(c,0,{identifier:l,updater:h,references:1})}i.push(l)}return i}function a(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,a){var o=r(e=e||[],a=a||{});return function(e){e=e||[];for(var i=0;i<o.length;i++){var c=n(o[i]);t[c].references--}for(var s=r(e,a),p=0;p<o.length;p++){var u=n(o[p]);0===t[u].references&&(t[u].updater(),t.splice(u,1))}o=s}}},659:e=>{var t={};e.exports=function(e,n){var r=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(n)}},540:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},56:(e,t,n)=>{e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},825:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var r="";n.supports&&(r+="@supports (".concat(n.supports,") {")),n.media&&(r+="@media ".concat(n.media," {"));var a=void 0!==n.layer;a&&(r+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),r+=n.css,a&&(r+="}"),n.media&&(r+="}"),n.supports&&(r+="}");var o=n.sourceMap;o&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),t.styleTagTransform(r,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},113:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}},638:(e,t,n)=>{n.a(e,(async(e,r)=>{try{n.d(t,{E:()=>c});var a=n(44),o=n(254),i=e([a]);function c(e,t){for(let e=0;e<t.length;e++)11===t.length&&t.splice(0,1);e.innerHTML=t.map((e=>`<li>${e}</li>`)).join("");for(let t=0;t<e.children.length;t++)e.children[t].addEventListener("click",(n=>{n.preventDefault(),(0,a.M)(e.children[t].textContent),(0,o.v)(e.children[t].textContent)}))}a=(i.then?(await i)():i)[0],r()}catch(s){r(s)}}))},44:(e,t,n)=>{n.a(e,(async(e,r)=>{try{n.d(t,{M:()=>h});var a=n(863),o=n(724),i=n(638),c=n(438),s=n(254),p=(n(777),e([i]));i=(p.then?(await p)():p)[0];const u=document.querySelector(".city"),l=document.querySelector(".temperature"),d=document.querySelector("img");let f=await(0,a.T)();async function h(e){try{e="object"==typeof e?e.city:e;const t=await(0,o.p)(e);if(null==t)return"error";u.innerHTML=e,l.textContent=`${t[0]}°C `,d.src=`http://openweathermap.org/img/wn/${t[1]}@2x.png`}catch(e){return null}}h(f),(0,s.v)(f);const m=document.querySelector(".content__list"),g=await(0,c.L)();(0,i.E)(m,g);const y=document.querySelector(".input");document.querySelector(".btn").addEventListener("click",(async e=>{e.preventDefault();let t=y.value.trim().toLowerCase();if(""===t)alert("Проверьте, что Вы ввели город");else{if("error"===await h(t))return y.value="",alert(`Проверьте, что Вы корректно ли  указали город: ${t}`);1==g.includes(t)?(h(t),(0,s.v)(t),y.value=""):(h(t),y.value="",g.push(t),(0,i.E)(m,g),(0,c.A)(g),(0,s.v)(t))}})),r()}catch(v){r(v)}}),1)},863:(e,t,n)=>{async function r(){try{const e=await fetch("https://get.geojs.io/v1/ip/geo.json");return await e.json()}catch(e){alert("Данные не пришли,попробуйте еще раз")}}n.d(t,{T:()=>r})},438:(e,t,n)=>{function r(e){localStorage.setItem("list",JSON.stringify(e))}async function a(){const e=localStorage.getItem("list");return null===e?[]:JSON.parse(e)}n.d(t,{A:()=>r,L:()=>a})},254:(e,t,n)=>{n.d(t,{v:()=>o});var r=n(724);let a;async function o(e){let t=await(0,r.p)(e);if(void 0===t)return;await ymaps3.ready;const{YMap:n,YMapDefaultSchemeLayer:o}=ymaps3;a?a.setLocation({center:[t[2].lon,t[2].lat],zoom:10}):(a=new n(document.getElementById("map"),{location:{center:[t[2].lon,t[2].lat],zoom:10}}),a.addChild(new o))}},724:(e,t,n)=>{n.d(t,{p:()=>a});const r="fd185eec875c277bc16bccdb3629b6af";async function a(e){e="object"==typeof e?e.city:e;try{const t=`https://api.openweathermap.org/geo/1.0/direct?q=${e}&appid=${r}`,n=await fetch(t),a=`https://api.openweathermap.org/data/2.5/weather?lat=${n.latitude}&lon=${n.longitude}&appid=${r}&units=metric`,o=await fetch(a),i=await o.json();return[Math.round(i.main.temp),i.weather[0].icon,i.coord]}catch(e){return}}},92:(e,t,n)=>{e.exports=n.p+"assets/main.9bec26efce82214386a7.jpg"}},o={};function i(e){var t=o[e];if(void 0!==t)return t.exports;var n=o[e]={id:e,exports:{}};return a[e](n,n.exports,i),n.exports}i.m=a,e="function"==typeof Symbol?Symbol("webpack queues"):"__webpack_queues__",t="function"==typeof Symbol?Symbol("webpack exports"):"__webpack_exports__",n="function"==typeof Symbol?Symbol("webpack error"):"__webpack_error__",r=e=>{e&&e.d<1&&(e.d=1,e.forEach((e=>e.r--)),e.forEach((e=>e.r--?e.r++:e())))},i.a=(a,o,i)=>{var c;i&&((c=[]).d=-1);var s,p,u,l=new Set,d=a.exports,f=new Promise(((e,t)=>{u=t,p=e}));f[t]=d,f[e]=e=>(c&&e(c),l.forEach(e),f.catch((e=>{}))),a.exports=f,o((a=>{var o;s=(a=>a.map((a=>{if(null!==a&&"object"==typeof a){if(a[e])return a;if(a.then){var o=[];o.d=0,a.then((e=>{i[t]=e,r(o)}),(e=>{i[n]=e,r(o)}));var i={};return i[e]=e=>e(o),i}}var c={};return c[e]=e=>{},c[t]=a,c})))(a);var i=()=>s.map((e=>{if(e[n])throw e[n];return e[t]})),p=new Promise((t=>{(o=()=>t(i)).r=0;var n=e=>e!==c&&!l.has(e)&&(l.add(e),e&&!e.d&&(o.r++,e.push(o)));s.map((t=>t[e](n)))}));return o.r?p:i()}),(e=>(e?u(f[n]=e):p(d),r(c)))),c&&c.d<0&&(c.d=0)},i.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return i.d(t,{a:t}),t},i.d=(e,t)=>{for(var n in t)i.o(t,n)&&!i.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},i.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),i.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e;i.g.importScripts&&(e=i.g.location+"");var t=i.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var n=t.getElementsByTagName("script");if(n.length)for(var r=n.length-1;r>-1&&(!e||!/^http(s?):/.test(e));)e=n[r--].src}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),i.p=e})(),i.b=document.baseURI||self.location.href,i.nc=void 0,i(564)})();