(()=>{"use strict";var t,e,n,r,o={564:(t,e,n)=>{n.a(t,(async(t,e)=>{try{var r=n(44),o=t([r]);r=(o.then?(await o)():o)[0],e()}catch(t){e(t)}}))},106:(t,e,n)=>{n.d(e,{A:()=>d});var r=n(601),o=n.n(r),a=n(314),i=n.n(a),c=n(417),s=n.n(c),p=new URL(n(92),n.b),u=i()(o()),l=s()(p);u.push([t.id,`* {\n  padding: 0px;\n  margin: 0px;\n  box-sizing: border-box;\n}\nbody {\n  width: 100%;\n  height: 100%;\n  margin: 0 auto;\n  background-image: url(${l});\n  background-size: cover;\n  background-repeat: no-repeat;\n  background-position: top center;\n}\n.content-wrap {\n  margin: 0 auto;\n  padding: 50px;\n  max-width: 100%;\n  backdrop-filter: blur(5px);\n  display: grid;\n  grid-template-areas:\n    "header header"\n    "data data"\n    "footer footer";\n}\n.content__header {\n  margin: 0 auto;\n  width: 1220px;\n  padding: 0 10px;\n  grid-area: header;\n  display: flex;\n}\n.content__header > p {\n  font-family: "Raleway", sans-serif;\n  font-weight: 700;\n  font-size: 30px;\n}\n.content__header > p > span {\n  color: white;\n}\n.content__request {\n  margin-left: auto;\n  width: 305px;\n  padding: 12px 5px 12px 16px;\n  border-radius: 8px;\n  background-color: rgba(245, 244, 244, 0.4);\n}\n.content__request > input {\n  width: 200px;\n  height: 24px;\n  background-color: rgba(245, 244, 244, 0.4);\n  border: none;\n  border-radius: 3px;\n}\n.content__request > input:focus {\n  outline: 2px solid rgb(13, 44, 43);\n}\n.content__request > input::placeholder {\n  font-family: "Raleway";\n  font-size: 15px;\n  line-height: 24px;\n  color: rgba(112, 112, 112, 1);\n}\n.content__request > input::-webkit-search-cancel-button {\n  cursor: pointer;\n}\n.content__request > button {\n  border: none;\n  background-color: rgba(28, 28, 28, 0);\n  cursor: pointer;\n}\n.content__data {\n  margin: 0 auto;\n\n  padding-top: 20px;\n  grid-area: data;\n  text-align: center;\n  color: white;\n  font-size: 30px;\n  display: flex;\n  gap: 100px;\n}\n.content__data-city {\n  align-self: center;\n  text-transform: capitalize;\n  width: 350px;\n}\n#map {\n  width: 600px;\n  height: 400px;\n  margin: 0 auto;\n  border: 2px solid #1cbcec;\n  border-radius: 50%;\n  overflow: hidden;\n  box-shadow: 0px 0px 10px 0px #000;\n}\n.content-container__list {\n  margin: 0 auto;\n  grid-area: footer;\n}\n.content__list {\n  margin: 0 auto;\n  text-transform: capitalize;\n  padding-top: 50px;\n  display: flex;\n  gap: 30px;\n  justify-content: space-around;\n}\n.content__list > li {\n  list-style-type: none;\n  font-family: "Raleway", sans-serif;\n  font-weight: 700;\n  font-size: 20px;\n  color: white;\n  cursor: pointer;\n}\n.content__list > li:hover {\n  color: #4de0d4; /* Меняем цвет текста */\n  -webkit-text-shadow: 2px 2px 2px #000;\n  -moz-text-shadow: 2px 2px 2px #000;\n  text-shadow: 2px 2px 2px #000;\n}\n`,""]);const d=u},314:t=>{t.exports=function(t){var e=[];return e.toString=function(){return this.map((function(e){var n="",r=void 0!==e[5];return e[4]&&(n+="@supports (".concat(e[4],") {")),e[2]&&(n+="@media ".concat(e[2]," {")),r&&(n+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),n+=t(e),r&&(n+="}"),e[2]&&(n+="}"),e[4]&&(n+="}"),n})).join("")},e.i=function(t,n,r,o,a){"string"==typeof t&&(t=[[null,t,void 0]]);var i={};if(r)for(var c=0;c<this.length;c++){var s=this[c][0];null!=s&&(i[s]=!0)}for(var p=0;p<t.length;p++){var u=[].concat(t[p]);r&&i[u[0]]||(void 0!==a&&(void 0===u[5]||(u[1]="@layer".concat(u[5].length>0?" ".concat(u[5]):""," {").concat(u[1],"}")),u[5]=a),n&&(u[2]?(u[1]="@media ".concat(u[2]," {").concat(u[1],"}"),u[2]=n):u[2]=n),o&&(u[4]?(u[1]="@supports (".concat(u[4],") {").concat(u[1],"}"),u[4]=o):u[4]="".concat(o)),e.push(u))}},e}},417:t=>{t.exports=function(t,e){return e||(e={}),t?(t=String(t.__esModule?t.default:t),/^['"].*['"]$/.test(t)&&(t=t.slice(1,-1)),e.hash&&(t+=e.hash),/["'() \t\n]|(%20)/.test(t)||e.needQuotes?'"'.concat(t.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):t):t}},601:t=>{t.exports=function(t){return t[1]}},777:(t,e,n)=>{var r=n(72),o=n.n(r),a=n(825),i=n.n(a),c=n(659),s=n.n(c),p=n(56),u=n.n(p),l=n(540),d=n.n(l),f=n(113),h=n.n(f),m=n(106),g={};g.styleTagTransform=h(),g.setAttributes=u(),g.insert=s().bind(null,"head"),g.domAPI=i(),g.insertStyleElement=d(),o()(m.A,g),m.A&&m.A.locals&&m.A.locals},72:t=>{var e=[];function n(t){for(var n=-1,r=0;r<e.length;r++)if(e[r].identifier===t){n=r;break}return n}function r(t,r){for(var a={},i=[],c=0;c<t.length;c++){var s=t[c],p=r.base?s[0]+r.base:s[0],u=a[p]||0,l="".concat(p," ").concat(u);a[p]=u+1;var d=n(l),f={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==d)e[d].references++,e[d].updater(f);else{var h=o(f,r);r.byIndex=c,e.splice(c,0,{identifier:l,updater:h,references:1})}i.push(l)}return i}function o(t,e){var n=e.domAPI(e);return n.update(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap&&e.supports===t.supports&&e.layer===t.layer)return;n.update(t=e)}else n.remove()}}t.exports=function(t,o){var a=r(t=t||[],o=o||{});return function(t){t=t||[];for(var i=0;i<a.length;i++){var c=n(a[i]);e[c].references--}for(var s=r(t,o),p=0;p<a.length;p++){var u=n(a[p]);0===e[u].references&&(e[u].updater(),e.splice(u,1))}a=s}}},659:t=>{var e={};t.exports=function(t,n){var r=function(t){if(void 0===e[t]){var n=document.querySelector(t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(t){n=null}e[t]=n}return e[t]}(t);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(n)}},540:t=>{t.exports=function(t){var e=document.createElement("style");return t.setAttributes(e,t.attributes),t.insert(e,t.options),e}},56:(t,e,n)=>{t.exports=function(t){var e=n.nc;e&&t.setAttribute("nonce",e)}},825:t=>{t.exports=function(t){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var e=t.insertStyleElement(t);return{update:function(n){!function(t,e,n){var r="";n.supports&&(r+="@supports (".concat(n.supports,") {")),n.media&&(r+="@media ".concat(n.media," {"));var o=void 0!==n.layer;o&&(r+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),r+=n.css,o&&(r+="}"),n.media&&(r+="}"),n.supports&&(r+="}");var a=n.sourceMap;a&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),e.styleTagTransform(r,t,e.options)}(e,t,n)},remove:function(){!function(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t)}(e)}}}},113:t=>{t.exports=function(t,e){if(e.styleSheet)e.styleSheet.cssText=t;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(t))}}},638:(t,e,n)=>{n.a(t,(async(t,r)=>{try{n.d(e,{E:()=>c});var o=n(44),a=n(254),i=t([o]);function c(t,e){for(let t=0;t<e.length;t++)11===e.length&&e.splice(0,1);t.innerHTML=e.map((t=>`<li>${t}</li>`)).join("");for(let e=0;e<t.children.length;e++)t.children[e].addEventListener("click",(n=>{n.preventDefault(),(0,o.M)(t.children[e].textContent),(0,a.v)(t.children[e].textContent)}))}o=(i.then?(await i)():i)[0],r()}catch(s){r(s)}}))},44:(t,e,n)=>{n.a(t,(async(t,r)=>{try{n.d(e,{M:()=>h});var o=n(863),a=n(724),i=n(638),c=n(438),s=n(254),p=(n(777),t([i]));i=(p.then?(await p)():p)[0];const u=document.querySelector(".city"),l=document.querySelector(".temperature"),d=document.querySelector("img");let f=await(0,o.T)();async function h(t){try{t="object"==typeof t?t.city:t;const e=await(0,a.p)(t);if(null==e)return"error";u.textContent=t,l.textContent=`${e[0]}°C `,d.src=`http://openweathermap.org/img/wn/${e[1]}@2x.png`}catch(t){return null}}h(f),(0,s.v)(f);const m=document.querySelector(".content__list"),g=await(0,c.L)();(0,i.E)(m,g);const y=document.querySelector(".input");document.querySelector(".btn").addEventListener("click",(async t=>{t.preventDefault();let e=y.value.trim().toLowerCase();if(""===e)alert("Проверьте, что Вы ввели город");else{if("error"===await h(e))return y.value="",alert(`Проверьте, что Вы корректно ли  указали город: ${e}`);1==g.includes(e)?(h(e),(0,s.v)(e),y.value=""):(h(e),y.value="",g.push(e),(0,i.E)(m,g),(0,c.A)(g),(0,s.v)(e))}})),r()}catch(v){r(v)}}),1)},863:(t,e,n)=>{async function r(){try{const t=await fetch("https://get.geojs.io/v1/ip/geo.json");return await t.json()}catch(t){alert("Данные не пришли,попробуйте еще раз")}}n.d(e,{T:()=>r})},438:(t,e,n)=>{function r(t){localStorage.setItem("list",JSON.stringify(t))}async function o(){const t=localStorage.getItem("list");return null===t?[]:JSON.parse(t)}n.d(e,{A:()=>r,L:()=>o})},254:(t,e,n)=>{n.d(e,{v:()=>a});var r=n(724);let o;async function a(t){let e=await(0,r.p)(t);if(void 0===e)return;await ymaps3.ready;const{YMap:n,YMapDefaultSchemeLayer:a}=ymaps3;o?o.setLocation({center:[e[2].lon,e[2].lat],zoom:10}):(o=new n(document.getElementById("map"),{location:{center:[e[2].lon,e[2].lat],zoom:10}}),o.addChild(new a))}},724:(t,e,n)=>{n.d(e,{p:()=>o});const r="fd185eec875c277bc16bccdb3629b6af";async function o(t){t="object"==typeof t?t.city:t;try{const e=`https://api.openweathermap.org/data/2.5/weather?units=metric&q=${t}&appid=${r}&lang=ru}`,n=await fetch(e),o=await n.json();return[Math.round(o.main.temp),o.weather[0].icon,o.coord]}catch(t){return}}},92:(t,e,n)=>{t.exports=n.p+"assets/main.9bec26efce82214386a7.jpg"}},a={};function i(t){var e=a[t];if(void 0!==e)return e.exports;var n=a[t]={id:t,exports:{}};return o[t](n,n.exports,i),n.exports}i.m=o,t="function"==typeof Symbol?Symbol("webpack queues"):"__webpack_queues__",e="function"==typeof Symbol?Symbol("webpack exports"):"__webpack_exports__",n="function"==typeof Symbol?Symbol("webpack error"):"__webpack_error__",r=t=>{t&&t.d<1&&(t.d=1,t.forEach((t=>t.r--)),t.forEach((t=>t.r--?t.r++:t())))},i.a=(o,a,i)=>{var c;i&&((c=[]).d=-1);var s,p,u,l=new Set,d=o.exports,f=new Promise(((t,e)=>{u=e,p=t}));f[e]=d,f[t]=t=>(c&&t(c),l.forEach(t),f.catch((t=>{}))),o.exports=f,a((o=>{var a;s=(o=>o.map((o=>{if(null!==o&&"object"==typeof o){if(o[t])return o;if(o.then){var a=[];a.d=0,o.then((t=>{i[e]=t,r(a)}),(t=>{i[n]=t,r(a)}));var i={};return i[t]=t=>t(a),i}}var c={};return c[t]=t=>{},c[e]=o,c})))(o);var i=()=>s.map((t=>{if(t[n])throw t[n];return t[e]})),p=new Promise((e=>{(a=()=>e(i)).r=0;var n=t=>t!==c&&!l.has(t)&&(l.add(t),t&&!t.d&&(a.r++,t.push(a)));s.map((e=>e[t](n)))}));return a.r?p:i()}),(t=>(t?u(f[n]=t):p(d),r(c)))),c&&c.d<0&&(c.d=0)},i.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return i.d(e,{a:e}),e},i.d=(t,e)=>{for(var n in e)i.o(e,n)&&!i.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:e[n]})},i.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"==typeof window)return window}}(),i.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),(()=>{var t;i.g.importScripts&&(t=i.g.location+"");var e=i.g.document;if(!t&&e&&(e.currentScript&&(t=e.currentScript.src),!t)){var n=e.getElementsByTagName("script");if(n.length)for(var r=n.length-1;r>-1&&(!t||!/^http(s?):/.test(t));)t=n[r--].src}if(!t)throw new Error("Automatic publicPath is not supported in this browser");t=t.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),i.p=t})(),i.b=document.baseURI||self.location.href,i.nc=void 0,i(564)})();