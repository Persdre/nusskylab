!function(r){function t(r){return e(n(a(r)))}function n(r){return u(i(o(r),8*r.length))}function e(r){for(var t,n=C?"0123456789ABCDEF":"0123456789abcdef",e="",a=0;a<r.length;a++)t=r.charCodeAt(a),e+=n.charAt(t>>>4&15)+n.charAt(15&t);return e}function a(r){for(var t,n,e="",a=-1;++a<r.length;)t=r.charCodeAt(a),n=a+1<r.length?r.charCodeAt(a+1):0,55296<=t&&t<=56319&&56320<=n&&n<=57343&&(t=65536+((1023&t)<<10)+(1023&n),a++),t<=127?e+=String.fromCharCode(t):t<=2047?e+=String.fromCharCode(192|t>>>6&31,128|63&t):t<=65535?e+=String.fromCharCode(224|t>>>12&15,128|t>>>6&63,128|63&t):t<=2097151&&(e+=String.fromCharCode(240|t>>>18&7,128|t>>>12&63,128|t>>>6&63,128|63&t));return e}function o(r){for(var t=Array(r.length>>2),n=0;n<t.length;n++)t[n]=0;for(var n=0;n<8*r.length;n+=8)t[n>>5]|=(255&r.charCodeAt(n/8))<<n%32;return t}function u(r){for(var t="",n=0;n<32*r.length;n+=8)t+=String.fromCharCode(r[n>>5]>>>n%32&255);return t}function i(r,t){r[t>>5]|=128<<t%32,r[14+(t+64>>>9<<4)]=t;for(var n=1732584193,e=-271733879,a=-1732584194,o=271733878,u=0;u<r.length;u+=16){var i=n,f=e,d=a,C=o;n=c(n,e,a,o,r[u+0],7,-680876936),o=c(o,n,e,a,r[u+1],12,-389564586),a=c(a,o,n,e,r[u+2],17,606105819),e=c(e,a,o,n,r[u+3],22,-1044525330),n=c(n,e,a,o,r[u+4],7,-176418897),o=c(o,n,e,a,r[u+5],12,1200080426),a=c(a,o,n,e,r[u+6],17,-1473231341),e=c(e,a,o,n,r[u+7],22,-45705983),n=c(n,e,a,o,r[u+8],7,1770035416),o=c(o,n,e,a,r[u+9],12,-1958414417),a=c(a,o,n,e,r[u+10],17,-42063),e=c(e,a,o,n,r[u+11],22,-1990404162),n=c(n,e,a,o,r[u+12],7,1804603682),o=c(o,n,e,a,r[u+13],12,-40341101),a=c(a,o,n,e,r[u+14],17,-1502002290),e=c(e,a,o,n,r[u+15],22,1236535329),n=h(n,e,a,o,r[u+1],5,-165796510),o=h(o,n,e,a,r[u+6],9,-1069501632),a=h(a,o,n,e,r[u+11],14,643717713),e=h(e,a,o,n,r[u+0],20,-373897302),n=h(n,e,a,o,r[u+5],5,-701558691),o=h(o,n,e,a,r[u+10],9,38016083),a=h(a,o,n,e,r[u+15],14,-660478335),e=h(e,a,o,n,r[u+4],20,-405537848),n=h(n,e,a,o,r[u+9],5,568446438),o=h(o,n,e,a,r[u+14],9,-1019803690),a=h(a,o,n,e,r[u+3],14,-187363961),e=h(e,a,o,n,r[u+8],20,1163531501),n=h(n,e,a,o,r[u+13],5,-1444681467),o=h(o,n,e,a,r[u+2],9,-51403784),a=h(a,o,n,e,r[u+7],14,1735328473),e=h(e,a,o,n,r[u+12],20,-1926607734),n=g(n,e,a,o,r[u+5],4,-378558),o=g(o,n,e,a,r[u+8],11,-2022574463),a=g(a,o,n,e,r[u+11],16,1839030562),e=g(e,a,o,n,r[u+14],23,-35309556),n=g(n,e,a,o,r[u+1],4,-1530992060),o=g(o,n,e,a,r[u+4],11,1272893353),a=g(a,o,n,e,r[u+7],16,-155497632),e=g(e,a,o,n,r[u+10],23,-1094730640),n=g(n,e,a,o,r[u+13],4,681279174),o=g(o,n,e,a,r[u+0],11,-358537222),a=g(a,o,n,e,r[u+3],16,-722521979),e=g(e,a,o,n,r[u+6],23,76029189),n=g(n,e,a,o,r[u+9],4,-640364487),o=g(o,n,e,a,r[u+12],11,-421815835),a=g(a,o,n,e,r[u+15],16,530742520),e=g(e,a,o,n,r[u+2],23,-995338651),n=l(n,e,a,o,r[u+0],6,-198630844),o=l(o,n,e,a,r[u+7],10,1126891415),a=l(a,o,n,e,r[u+14],15,-1416354905),e=l(e,a,o,n,r[u+5],21,-57434055),n=l(n,e,a,o,r[u+12],6,1700485571),o=l(o,n,e,a,r[u+3],10,-1894986606),a=l(a,o,n,e,r[u+10],15,-1051523),e=l(e,a,o,n,r[u+1],21,-2054922799),n=l(n,e,a,o,r[u+8],6,1873313359),o=l(o,n,e,a,r[u+15],10,-30611744),a=l(a,o,n,e,r[u+6],15,-1560198380),e=l(e,a,o,n,r[u+13],21,1309151649),n=l(n,e,a,o,r[u+4],6,-145523070),o=l(o,n,e,a,r[u+11],10,-1120210379),a=l(a,o,n,e,r[u+2],15,718787259),e=l(e,a,o,n,r[u+9],21,-343485551),n=v(n,i),e=v(e,f),a=v(a,d),o=v(o,C)}return Array(n,e,a,o)}function f(r,t,n,e,a,o){return v(d(v(v(t,r),v(e,o)),a),n)}function c(r,t,n,e,a,o,u){return f(t&n|~t&e,r,t,a,o,u)}function h(r,t,n,e,a,o,u){return f(t&e|n&~e,r,t,a,o,u)}function g(r,t,n,e,a,o,u){return f(t^n^e,r,t,a,o,u)}function l(r,t,n,e,a,o,u){return f(n^(t|~e),r,t,a,o,u)}function v(r,t){var n=(65535&r)+(65535&t);return(r>>16)+(t>>16)+(n>>16)<<16|65535&n}function d(r,t){return r<<t|r>>>32-t}var C=0;r.MD5=t}(window),function(){var r;r={size:"s","default":"d",rating:"r"},window.Gravtastic=function(t,n){var e,a,o,u,i,f,c,h;null==n&&(n={}),a=MD5(t.toString().toLowerCase()),u={},c=Gravtastic.defaults;for(o in c)h=c[o],u[o]=h;for(o in n)h=n[o],u[o]=h;return e=u.secure?"https://secure.gravatar.com/avatar":"http://gravatar.com/avatar",f="/"+a+"."+(u.filetype||"png"),i="?"+function(){var t;t=[];for(o in u)h=u[o],"secure"!==o&&"filetype"!==o&&t.push((r[o]||o)+"="+h);return t}().join("&"),e+f+i},window.Gravtastic.defaults={rating:"PG",secure:!0,filetype:"png"}}.call(this);