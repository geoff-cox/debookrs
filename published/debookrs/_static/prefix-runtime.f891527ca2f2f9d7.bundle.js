(()=>{"use strict";var e,r,t,a,c,d={},n={};function f(e){var r=n[e];if(void 0!==r)return r.exports;var t=n[e]={id:e,loaded:!1,exports:{}};return d[e].call(t.exports,t,t.exports,f),t.loaded=!0,t.exports}f.m=d,e=[],f.O=(r,t,a,c)=>{if(!t){var d=1/0;for(i=0;i<e.length;i++){for(var[t,a,c]=e[i],n=!0,o=0;o<t.length;o++)(!1&c||d>=c)&&Object.keys(f.O).every((e=>f.O[e](t[o])))?t.splice(o--,1):(n=!1,c<d&&(d=c));if(n){e.splice(i--,1);var b=a();void 0!==b&&(r=b)}}return r}c=c||0;for(var i=e.length;i>0&&e[i-1][2]>c;i--)e[i]=e[i-1];e[i]=[t,a,c]},f.n=e=>{var r=e&&e.__esModule?()=>e.default:()=>e;return f.d(r,{a:r}),r},f.d=(e,r)=>{for(var t in r)f.o(r,t)&&!f.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:r[t]})},f.f={},f.e=e=>Promise.all(Object.keys(f.f).reduce(((r,t)=>(f.f[t](e,r),r)),[])),f.u=e=>"prefix-"+e+"."+{13:"88fbb65140eb775b",142:"4e302a292c7ef098",146:"16cd3cfc4af8a2cf",152:"4c4e7c665d63e47c",206:"31487b56db6c8538",207:"e47c89be497a200d",224:"67368e24f0cc5438",254:"a69b5c44ffe62a58",266:"df231291350fe7ea",280:"0e06671fc92faac6",298:"34884331dc58df40",338:"457dc0d17fa61851",344:"29758417a153d189",350:"349dfb4e35977742",366:"dbf2dfcd9bfb2197",382:"189d1ac9092a39b0",405:"390f60b86bc9bc11",414:"86d832aec2e540bf",435:"3bc1999e6890cac7",444:"b012b83b9f63313e",500:"552effd0ebf9c0a4",536:"0ecbd13f756dfc78",556:"695f2e6b7fe566e2",593:"d7b415e2c11f5bfa",611:"c3581f4eb8a54d09",632:"43cec723c434d107",657:"ec0d0f6038e41cbc",730:"fa96b6190b591abe",778:"9ff0f323daa40461",780:"65731c266bfe5b8f",789:"274f41311641cfd1",791:"32fd7ae829805c8e",818:"ae944bf0bd9d4b85",866:"865908bf557d17b0",882:"152ac289bd79d266",887:"737d174229e86a14",921:"79713e8f94eed9db",931:"ad6fabba7b6a4957",940:"403e3a38a2b440d6",951:"fbdd07eb11b11978",957:"50327584afabf57d",990:"48f5194aa8b4923f"}[e]+".bundle.js",f.miniCssF=e=>"prefix-"+e+"."+{13:"29b3857e332ba871",146:"a65cb3c7b6958cd7",152:"651cab62b9a14ee3",206:"06a219add8580926",224:"65df4d291449b017",254:"9f81ba33f8d7b337",266:"d2c9bd6577579e52",280:"9a63b68d2c60c31d",350:"c52af56403bbfdf7",366:"9eeaa7319ab1207a",382:"dff58e9f68502cae",444:"16ebfb84a839e8b6",500:"158081dc8cbe363f",536:"b5def9f8048e80cf",611:"ceb648da7475de62",632:"d557057338b2a6b7",657:"e852c0ae646f65fd",789:"e9d4cb3a9fd094c9",882:"88fa84ac477a2c21",887:"60474435d3646bf3",957:"6c4edcf6bf3efeed",990:"68dc4167d2b3cb5b"}[e]+".css",f.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),f.o=(e,r)=>Object.prototype.hasOwnProperty.call(e,r),r={},t="WebComponents:",f.l=(e,a,c,d)=>{if(r[e])r[e].push(a);else{var n,o;if(void 0!==c)for(var b=document.getElementsByTagName("script"),i=0;i<b.length;i++){var l=b[i];if(l.getAttribute("src")==e||l.getAttribute("data-webpack")==t+c){n=l;break}}n||(o=!0,(n=document.createElement("script")).charset="utf-8",n.timeout=120,f.nc&&n.setAttribute("nonce",f.nc),n.setAttribute("data-webpack",t+c),n.src=e),r[e]=[a];var s=(t,a)=>{n.onerror=n.onload=null,clearTimeout(u);var c=r[e];if(delete r[e],n.parentNode&&n.parentNode.removeChild(n),c&&c.forEach((e=>e(a))),t)return t(a)},u=setTimeout(s.bind(null,void 0,{type:"timeout",target:n}),12e4);n.onerror=s.bind(null,n.onerror),n.onload=s.bind(null,n.onload),o&&document.head.appendChild(n)}},f.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},f.nmd=e=>(e.paths=[],e.children||(e.children=[]),e),(()=>{var e;f.g.importScripts&&(e=f.g.location+"");var r=f.g.document;if(!e&&r&&(r.currentScript&&(e=r.currentScript.src),!e)){var t=r.getElementsByTagName("script");if(t.length)for(var a=t.length-1;a>-1&&!e;)e=t[a--].src}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),f.p=e})(),a=e=>new Promise(((r,t)=>{var a=f.miniCssF(e),c=f.p+a;if(((e,r)=>{for(var t=document.getElementsByTagName("link"),a=0;a<t.length;a++){var c=(n=t[a]).getAttribute("data-href")||n.getAttribute("href");if("stylesheet"===n.rel&&(c===e||c===r))return n}var d=document.getElementsByTagName("style");for(a=0;a<d.length;a++){var n;if((c=(n=d[a]).getAttribute("data-href"))===e||c===r)return n}})(a,c))return r();((e,r,t,a)=>{var c=document.createElement("link");c.rel="stylesheet",c.type="text/css",c.onerror=c.onload=d=>{if(c.onerror=c.onload=null,"load"===d.type)t();else{var n=d&&("load"===d.type?"missing":d.type),f=d&&d.target&&d.target.href||r,o=new Error("Loading CSS chunk "+e+" failed.\n("+f+")");o.code="CSS_CHUNK_LOAD_FAILED",o.type=n,o.request=f,c.parentNode.removeChild(c),a(o)}},c.href=r,document.head.appendChild(c)})(e,c,r,t)})),c={666:0},f.f.miniCss=(e,r)=>{c[e]?r.push(c[e]):0!==c[e]&&{13:1,146:1,152:1,206:1,224:1,254:1,266:1,280:1,350:1,366:1,382:1,444:1,500:1,536:1,611:1,632:1,657:1,789:1,882:1,887:1,957:1,990:1}[e]&&r.push(c[e]=a(e).then((()=>{c[e]=0}),(r=>{throw delete c[e],r})))},(()=>{var e={666:0};f.f.j=(r,t)=>{var a=f.o(e,r)?e[r]:void 0;if(0!==a)if(a)t.push(a[2]);else if(/^((14|20|53|66)6|152|254|444|990)$/.test(r))e[r]=0;else{var c=new Promise(((t,c)=>a=e[r]=[t,c]));t.push(a[2]=c);var d=f.p+f.u(r),n=new Error;f.l(d,(t=>{if(f.o(e,r)&&(0!==(a=e[r])&&(e[r]=void 0),a)){var c=t&&("load"===t.type?"missing":t.type),d=t&&t.target&&t.target.src;n.message="Loading chunk "+r+" failed.\n("+c+": "+d+")",n.name="ChunkLoadError",n.type=c,n.request=d,a[1](n)}}),"chunk-"+r,r)}},f.O.j=r=>0===e[r];var r=(r,t)=>{var a,c,[d,n,o]=t,b=0;if(d.some((r=>0!==e[r]))){for(a in n)f.o(n,a)&&(f.m[a]=n[a]);if(o)var i=o(f)}for(r&&r(t);b<d.length;b++)c=d[b],f.o(e,c)&&e[c]&&e[c][0](),e[c]=0;return f.O(i)},t=self.webpackChunkWebComponents=self.webpackChunkWebComponents||[];t.forEach(r.bind(null,0)),t.push=r.bind(null,t.push.bind(t))})()})();
//# sourceMappingURL=prefix-runtime.f891527ca2f2f9d7.bundle.js.map