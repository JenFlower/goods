(function(e){function t(t){for(var n,l,a=t[0],i=t[1],s=t[2],u=0,f=[];u<a.length;u++)l=a[u],Object.prototype.hasOwnProperty.call(o,l)&&o[l]&&f.push(o[l][0]),o[l]=0;for(n in i)Object.prototype.hasOwnProperty.call(i,n)&&(e[n]=i[n]);d&&d(t);while(f.length)f.shift()();return c.push.apply(c,s||[]),r()}function r(){for(var e,t=0;t<c.length;t++){for(var r=c[t],n=!0,a=1;a<r.length;a++){var i=r[a];0!==o[i]&&(n=!1)}n&&(c.splice(t--,1),e=l(l.s=r[0]))}return e}var n={},o={app:0},c=[];function l(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,l),r.l=!0,r.exports}l.m=e,l.c=n,l.d=function(e,t,r){l.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},l.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.t=function(e,t){if(1&t&&(e=l(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(l.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)l.d(r,n,function(t){return e[t]}.bind(null,n));return r},l.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return l.d(t,"a",t),t},l.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},l.p="/goods/";var a=window["webpackJsonp"]=window["webpackJsonp"]||[],i=a.push.bind(a);a.push=t,a=a.slice();for(var s=0;s<a.length;s++)t(a[s]);var d=i;c.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("56d7")},"0418":function(e,t,r){"use strict";var n=r("864a"),o=r("61e4");o["default"].render=n["a"],t["default"]=o["default"]},"0d50":function(e,t,r){},"56d7":function(e,t,r){"use strict";r.r(t);r("e260"),r("e6cf"),r("cca6"),r("a79d");var n=r("7a23");function o(e,t,r,o,c,l){var a=Object(n["h"])("Header"),i=Object(n["h"])("Main");return Object(n["g"])(),Object(n["c"])(n["a"],null,[Object(n["f"])(a),Object(n["f"])(i)],64)}r("a41b");var c=r("0418"),l={class:"main"};function a(e,t,r,o,c,a){var i=Object(n["h"])("Form"),s=Object(n["h"])("List");return Object(n["g"])(),Object(n["c"])("main",l,[Object(n["f"])(i),Object(n["f"])(s,{onScroll:t[0]||(t[0]=function(e){return a.scrollToElement()})})])}var i={class:"goods-list"};function s(e,t,r,o,c,l){var a=Object(n["h"])("Good");return Object(n["g"])(),Object(n["c"])("section",i,[Object(n["f"])(a),Object(n["f"])(a),Object(n["f"])(a),Object(n["f"])(a),Object(n["f"])(a),Object(n["f"])(a),Object(n["f"])(a),Object(n["f"])(a),Object(n["f"])(a)])}var d=r("d4f7"),u=r.n(d),f={class:"good"},b=Object(n["d"])("img",{class:"good__image",src:u.a,alt:"Изображение товара"},null,-1),p=Object(n["d"])("div",{class:"good__content"},[Object(n["d"])("h2",{class:"good__title"},"Наименование товара"),Object(n["d"])("p",{class:"good__info"},"Довольно-таки интересное описание товара в несколько строк. Довольно-таки интересное описание товара в несколько строк"),Object(n["d"])("span",{class:"good__price"},"10 000 руб.")],-1),_=Object(n["d"])("div",{class:"good__delete good__delete_active"},null,-1),v=[b,p,_];function m(e,t){return Object(n["g"])(),Object(n["c"])("div",f,v)}const O={};O.render=m;var j=O,h={name:"List",components:{Good:j}};h.render=s;var g=h,y={class:"form"},w=Object(n["e"])('<div class="form__block"><label class="form__label" for="name">Наименование товара</label><div class="form__marker form__marker_active"></div></div><input class="form__input" id="name" type="text" placeholder="Введите наименование товара"><div class="form__block"><label class="form__label" for="description">Описание товара</label></div><textarea class="form__input form__area" id="description" type="text" placeholder="Введите описание товара"></textarea><div class="form__block"><label class="form__label" for="url">Ссылка на изображение товара</label><div class="form__marker form__marker_active"></div></div><input class="form__input" id="url" type="url" placeholder="Введите ссылку" required><div class="form__block"><label class="form__label" for="price">Цена товара</label><div class="form__marker form__marker_active"></div></div><input class="form__input" id="price" type="number" placeholder="Введите цену" required><input class="form__submit" type="submit" value="Добавить товар">',9),k=[w];function x(e,t){return Object(n["g"])(),Object(n["c"])("form",y,k)}const S={};S.render=x;var E=S,L={name:"Main",components:{Form:E,List:g},methods:{scrollToElement:function(){var e=document.querySelector("#app");e.scrollIntoView()&&console.log("scroll")}}};L.render=a;var M=L,P={directives:{scroll:{inserted:function(e,t){var r=function r(n){t.value(n,e)&&window.removeEventListener("scroll",r)};window.addEventListener("scroll",r)}}},name:"App",components:{Header:c["default"],Main:M},methods:{scrollToElement:function(){window.addEventListener("scroll",(function(){console.log("calling handleScroll")}))},handleScroll:function(e,t){return window.scrollY>50&&t.setAttribute("style","color: red;"),window.scrollY>100},created:function(){window.addEventListener("scroll",this.handleScroll)},destroyed:function(){window.removeEventListener("scroll",this.handleScroll)}}};r("7737");P.render=o;var T=P;Object(n["b"])(T).mount("#app");var q=document.querySelector(".form");window.addEventListener("scroll",(function(){pageYOffset>90?q.style.top="16px":q.style.top="initial"}))},"61e4":function(e,t,r){"use strict";var n=r("ac3c"),o=r.n(n);r.d(t,"default",(function(){return o.a}))},7737:function(e,t,r){"use strict";r("0d50")},"864a":function(e,t,r){"use strict";r.d(t,"a",(function(){return a}));var n=r("7a23"),o={class:"header"},c=Object(n["e"])('<h1 class="header__title">Добавление товара</h1><button class="header__sort">По умолчанию</button><div class="header__menu"><ul class="header__list"><li class="header__sorting-item"> По наименованию </li><li class="header__sorting-item"> По стоимости </li></ul></div>',3),l=[c];function a(e,t,r,c,a,i){return Object(n["g"])(),Object(n["c"])("header",o,l)}},a41b:function(e,t,r){},ac3c:function(e,t){},d4f7:function(e,t,r){e.exports=r.p+"img/good.922e0c1b.png"}});
//# sourceMappingURL=app.e8776472.js.map