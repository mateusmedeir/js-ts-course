(()=>{"use strict";var r={122:(r,n,e)=>{e.d(n,{Z:()=>c});var t=e(537),o=e.n(t),i=e(645),a=e.n(i)()(o());a.push([r.id,"@import url(https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;700&display=swap);"]),a.push([r.id,":root {\r\n    --primary-color: darkcyan;\r\n    --primary-color-darker: rgb(0, 92, 92);\r\n}\r\n\r\n* {\r\n    box-sizing: border-box;\r\n    outline: 0;\r\n}\r\n\r\nbody {\r\n    margin: 0;\r\n    padding: 0;\r\n    background-color: var(--primary-color);\r\n    font-family:'Open Sans', sans-serif;\r\n}\r\n\r\n.container {\r\n    background-color: white;\r\n    max-width: 640px;\r\n    margin: 50px auto;\r\n    padding: 25px;\r\n    border-radius: 10px;\r\n}\r\n\r\nform input, form label, form button {\r\n    display: block;\r\n    width: 100%;\r\n    margin-bottom: 10px;\r\n}\r\n\r\nform input {\r\n    font-size: 24px;\r\n    height: 50px;\r\n    padding: 0 20px;\r\n}\r\n\r\nform input:focus {\r\n    outline: 1px solid var(--primary-color);\r\n}\r\n\r\nform button {\r\n    border: none;\r\n    background-color: var(--primary-color);\r\n    color: white;\r\n    font-size: 18px;\r\n    font-weight: 700;\r\n    height: 50px;\r\n    cursor:pointer;\r\n    margin-top: 30px;\r\n}\r\n\r\nform button:hover {\r\n    background-color: var(--primary-color-darker);\r\n}\r\n\r\n.container h1 {\r\n    text-align: center;\r\n    margin-bottom: 40px;\r\n}\r\n\r\n.generated-cpf {\r\n    font-size: 2em;\r\n    color: var(--primary-color);\r\n    text-align: center;\r\n    font-weight: bold;\r\n    margin-bottom: 40px;\r\n    letter-spacing: 3px;\r\n}","",{version:3,sources:["webpack://./src/assets/css/style.css"],names:[],mappings:"AACA;IACI,yBAAyB;IACzB,sCAAsC;AAC1C;;AAEA;IACI,sBAAsB;IACtB,UAAU;AACd;;AAEA;IACI,SAAS;IACT,UAAU;IACV,sCAAsC;IACtC,mCAAmC;AACvC;;AAEA;IACI,uBAAuB;IACvB,gBAAgB;IAChB,iBAAiB;IACjB,aAAa;IACb,mBAAmB;AACvB;;AAEA;IACI,cAAc;IACd,WAAW;IACX,mBAAmB;AACvB;;AAEA;IACI,eAAe;IACf,YAAY;IACZ,eAAe;AACnB;;AAEA;IACI,uCAAuC;AAC3C;;AAEA;IACI,YAAY;IACZ,sCAAsC;IACtC,YAAY;IACZ,eAAe;IACf,gBAAgB;IAChB,YAAY;IACZ,cAAc;IACd,gBAAgB;AACpB;;AAEA;IACI,6CAA6C;AACjD;;AAEA;IACI,kBAAkB;IAClB,mBAAmB;AACvB;;AAEA;IACI,cAAc;IACd,2BAA2B;IAC3B,kBAAkB;IAClB,iBAAiB;IACjB,mBAAmB;IACnB,mBAAmB;AACvB",sourcesContent:["@import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;700&display=swap');\r\n:root {\r\n    --primary-color: darkcyan;\r\n    --primary-color-darker: rgb(0, 92, 92);\r\n}\r\n\r\n* {\r\n    box-sizing: border-box;\r\n    outline: 0;\r\n}\r\n\r\nbody {\r\n    margin: 0;\r\n    padding: 0;\r\n    background-color: var(--primary-color);\r\n    font-family:'Open Sans', sans-serif;\r\n}\r\n\r\n.container {\r\n    background-color: white;\r\n    max-width: 640px;\r\n    margin: 50px auto;\r\n    padding: 25px;\r\n    border-radius: 10px;\r\n}\r\n\r\nform input, form label, form button {\r\n    display: block;\r\n    width: 100%;\r\n    margin-bottom: 10px;\r\n}\r\n\r\nform input {\r\n    font-size: 24px;\r\n    height: 50px;\r\n    padding: 0 20px;\r\n}\r\n\r\nform input:focus {\r\n    outline: 1px solid var(--primary-color);\r\n}\r\n\r\nform button {\r\n    border: none;\r\n    background-color: var(--primary-color);\r\n    color: white;\r\n    font-size: 18px;\r\n    font-weight: 700;\r\n    height: 50px;\r\n    cursor:pointer;\r\n    margin-top: 30px;\r\n}\r\n\r\nform button:hover {\r\n    background-color: var(--primary-color-darker);\r\n}\r\n\r\n.container h1 {\r\n    text-align: center;\r\n    margin-bottom: 40px;\r\n}\r\n\r\n.generated-cpf {\r\n    font-size: 2em;\r\n    color: var(--primary-color);\r\n    text-align: center;\r\n    font-weight: bold;\r\n    margin-bottom: 40px;\r\n    letter-spacing: 3px;\r\n}"],sourceRoot:""}]);const c=a},645:r=>{r.exports=function(r){var n=[];return n.toString=function(){return this.map((function(n){var e="",t=void 0!==n[5];return n[4]&&(e+="@supports (".concat(n[4],") {")),n[2]&&(e+="@media ".concat(n[2]," {")),t&&(e+="@layer".concat(n[5].length>0?" ".concat(n[5]):""," {")),e+=r(n),t&&(e+="}"),n[2]&&(e+="}"),n[4]&&(e+="}"),e})).join("")},n.i=function(r,e,t,o,i){"string"==typeof r&&(r=[[null,r,void 0]]);var a={};if(t)for(var c=0;c<this.length;c++){var u=this[c][0];null!=u&&(a[u]=!0)}for(var s=0;s<r.length;s++){var p=[].concat(r[s]);t&&a[p[0]]||(void 0!==i&&(void 0===p[5]||(p[1]="@layer".concat(p[5].length>0?" ".concat(p[5]):""," {").concat(p[1],"}")),p[5]=i),e&&(p[2]?(p[1]="@media ".concat(p[2]," {").concat(p[1],"}"),p[2]=e):p[2]=e),o&&(p[4]?(p[1]="@supports (".concat(p[4],") {").concat(p[1],"}"),p[4]=o):p[4]="".concat(o)),n.push(p))}},n}},537:r=>{r.exports=function(r){var n=r[1],e=r[3];if(!e)return n;if("function"==typeof btoa){var t=btoa(unescape(encodeURIComponent(JSON.stringify(e)))),o="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(t),i="/*# ".concat(o," */");return[n].concat([i]).join("\n")}return[n].join("\n")}},379:r=>{var n=[];function e(r){for(var e=-1,t=0;t<n.length;t++)if(n[t].identifier===r){e=t;break}return e}function t(r,t){for(var i={},a=[],c=0;c<r.length;c++){var u=r[c],s=t.base?u[0]+t.base:u[0],p=i[s]||0,l="".concat(s," ").concat(p);i[s]=p+1;var f=e(l),A={css:u[1],media:u[2],sourceMap:u[3],supports:u[4],layer:u[5]};if(-1!==f)n[f].references++,n[f].updater(A);else{var m=o(A,t);t.byIndex=c,n.splice(c,0,{identifier:l,updater:m,references:1})}a.push(l)}return a}function o(r,n){var e=n.domAPI(n);return e.update(r),function(n){if(n){if(n.css===r.css&&n.media===r.media&&n.sourceMap===r.sourceMap&&n.supports===r.supports&&n.layer===r.layer)return;e.update(r=n)}else e.remove()}}r.exports=function(r,o){var i=t(r=r||[],o=o||{});return function(r){r=r||[];for(var a=0;a<i.length;a++){var c=e(i[a]);n[c].references--}for(var u=t(r,o),s=0;s<i.length;s++){var p=e(i[s]);0===n[p].references&&(n[p].updater(),n.splice(p,1))}i=u}}},569:r=>{var n={};r.exports=function(r,e){var t=function(r){if(void 0===n[r]){var e=document.querySelector(r);if(window.HTMLIFrameElement&&e instanceof window.HTMLIFrameElement)try{e=e.contentDocument.head}catch(r){e=null}n[r]=e}return n[r]}(r);if(!t)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");t.appendChild(e)}},216:r=>{r.exports=function(r){var n=document.createElement("style");return r.setAttributes(n,r.attributes),r.insert(n,r.options),n}},565:(r,n,e)=>{r.exports=function(r){var n=e.nc;n&&r.setAttribute("nonce",n)}},795:r=>{r.exports=function(r){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var n=r.insertStyleElement(r);return{update:function(e){!function(r,n,e){var t="";e.supports&&(t+="@supports (".concat(e.supports,") {")),e.media&&(t+="@media ".concat(e.media," {"));var o=void 0!==e.layer;o&&(t+="@layer".concat(e.layer.length>0?" ".concat(e.layer):""," {")),t+=e.css,o&&(t+="}"),e.media&&(t+="}"),e.supports&&(t+="}");var i=e.sourceMap;i&&"undefined"!=typeof btoa&&(t+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),n.styleTagTransform(t,r,n.options)}(n,r,e)},remove:function(){!function(r){if(null===r.parentNode)return!1;r.parentNode.removeChild(r)}(n)}}}},589:r=>{r.exports=function(r,n){if(n.styleSheet)n.styleSheet.cssText=r;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(r))}}}},n={};function e(t){var o=n[t];if(void 0!==o)return o.exports;var i=n[t]={id:t,exports:{}};return r[t](i,i.exports,e),i.exports}e.n=r=>{var n=r&&r.__esModule?()=>r.default:()=>r;return e.d(n,{a:n}),n},e.d=(r,n)=>{for(var t in n)e.o(n,t)&&!e.o(r,t)&&Object.defineProperty(r,t,{enumerable:!0,get:n[t]})},e.o=(r,n)=>Object.prototype.hasOwnProperty.call(r,n),e.nc=void 0,(()=>{function r(n){return r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(r){return typeof r}:function(r){return r&&"function"==typeof Symbol&&r.constructor===Symbol&&r!==Symbol.prototype?"symbol":typeof r},r(n)}function n(n,e){for(var t=0;t<e.length;t++){var o=e[t];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(n,(void 0,i=function(n,e){if("object"!==r(n)||null===n)return n;var t=n[Symbol.toPrimitive];if(void 0!==t){var o=t.call(n,"string");if("object"!==r(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(n)}(o.key),"symbol"===r(i)?i:String(i)),o)}var i}var t=function(){function r(n){!function(r,n){if(!(r instanceof n))throw new TypeError("Cannot call a class as a function")}(this,r),this.cpf=n,this.cleanCpf=this.cpf.replace(/\D+/g,"")}var e,t,o;return e=r,o=[{key:"createDigit",value:function(r){var n=r.length+1;return 11-r.reduce((function(r,e,t){return r+Number(e)*(n-t)}),0)%11}},{key:"pushOnCpf",value:function(n){for(var e=0;e<2;e++){var t=r.createDigit(n);n.push(t>9?"0":String(t))}}}],(t=[{key:"isSequence",value:function(){return this.cleanCpf[0].repeat(11)===this.cleanCpf}},{key:"generateFinalCpf",value:function(){return this.cpfArray=Array.from(this.cleanCpf.slice(0,-2)),r.pushOnCpf(this.cpfArray),this.cpfArray.join("")}},{key:"validate",value:function(){return void 0!==this.cleanCpf&&11===this.cleanCpf.length&&!this.isSequence()&&this.generateFinalCpf()===this.cleanCpf}}])&&n(e.prototype,t),o&&n(e,o),Object.defineProperty(e,"prototype",{writable:!1}),r}();function o(r){return o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(r){return typeof r}:function(r){return r&&"function"==typeof Symbol&&r.constructor===Symbol&&r!==Symbol.prototype?"symbol":typeof r},o(r)}function i(r,n){for(var e=0;e<n.length;e++){var t=n[e];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(r,(void 0,i=function(r,n){if("object"!==o(r)||null===r)return r;var e=r[Symbol.toPrimitive];if(void 0!==e){var t=e.call(r,"string");if("object"!==o(t))return t;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(r)}(t.key),"symbol"===o(i)?i:String(i)),t)}var i}var a,c=function(){function r(){!function(r,n){if(!(r instanceof n))throw new TypeError("Cannot call a class as a function")}(this,r)}var n,e;return n=r,e=[{key:"rand",value:function(){var r=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1e8,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:999999999;return String(Math.round(Math.random()*(n-r)+r))}},{key:"formatCpf",value:function(r){return r.slice(0,3)+"."+r.slice(3,6)+"."+r.slice(6,9)+"-"+r.slice(9,11)}},{key:"generateNewCpf",value:function(){var r=Array.from(this.rand());return t.pushOnCpf(r),this.formatCpf(r.join(""))}}],e&&i(n.prototype,e),Object.defineProperty(n,"prototype",{writable:!1}),r}(),u=e(379),s=e.n(u),p=e(795),l=e.n(p),f=e(569),A=e.n(f),m=e(565),d=e.n(m),y=e(216),v=e.n(y),g=e(589),b=e.n(g),h=e(122),C={};C.styleTagTransform=b(),C.setAttributes=d(),C.insert=A().bind(null,"head"),C.domAPI=l(),C.insertStyleElement=v(),s()(h.Z,C),h.Z&&h.Z.locals&&h.Z.locals,a=new c,document.querySelector(".generated-cpf").innerHTML=a.generateNewCpf()})()})();
//# sourceMappingURL=bundle.js.map