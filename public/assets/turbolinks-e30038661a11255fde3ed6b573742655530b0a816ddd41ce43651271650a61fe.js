(function(){var t,e,n,r,o,i,u,s,a,l,c,h,p,d,f,m,y,v,g,E,w,b,k,_,T,S,H,A,x,C,L,N,R,O,q,F,X,D,I,M,P,j,G,U,B,K,$,Q,V,Y,z,J,W,Z,tt,et,nt=[].indexOf||function(t){for(var e=0,n=this.length;e<n;e++)if(e in this&&this[e]===t)return e;return-1},rt=function(t,e){function n(){this.constructor=t}for(var r in e)ot.call(e,r)&&(t[r]=e[r]);return n.prototype=e.prototype,t.prototype=new n,t.__super__=e.prototype,t},ot={}.hasOwnProperty,it=[].slice,ut=function(t,e){return function(){return t.apply(e,arguments)}};O={},p=10,J=!1,I=null,g=null,N=null,j=null,et=null,r={BEFORE_CHANGE:"page:before-change",FETCH:"page:fetch",RECEIVE:"page:receive",CHANGE:"page:change",UPDATE:"page:update",LOAD:"page:load",RESTORE:"page:restore",BEFORE_UNLOAD:"page:before-unload",EXPIRE:"page:expire"},_=function(t){var e;return t=new n(t),$(),h(),null!=I&&I.start(),J&&(e=W(t.absolute))?(T(e),S(t,null,!1)):S(t,Y)},W=function(t){var e;if((e=O[t])&&!e.transitionCacheDisabled)return e},w=function(t){return null==t&&(t=!0),J=t},E=function(t){if(null==t&&(t=!0),l)return t?null!=I?I:I=new i("html"):(null!=I&&I.uninstall(),I=null)},S=function(t,e,n){return null==n&&(n=!0),Z(r.FETCH,{url:t.absolute}),null!=et&&et.abort(),et=new XMLHttpRequest,et.open("GET",t.withoutHashForIE10compatibility(),!0),et.setRequestHeader("Accept","text/html, application/xhtml+xml, application/xml"),et.setRequestHeader("X-XHR-Referer",j),et.onload=function(){var n;return Z(r.RECEIVE,{url:t.absolute}),(n=D())?(G(t),U(),d.apply(null,k(n)),R(),"function"==typeof e&&e(),Z(r.LOAD)):document.location.href=v()||t.absolute},I&&n&&(et.onprogress=function(){return function(t){var e;return e=t.lengthComputable?t.loaded/t.total*100:I.value+(100-I.value)/10,I.advanceTo(e)}}()),et.onloadend=function(){return et=null},et.onerror=function(){return document.location.href=t.absolute},et.send()},T=function(t){return null!=et&&et.abort(),d(t.title,t.body),M(t),Z(r.RESTORE)},h=function(){var t;return t=new n(g.url),O[t.absolute]={url:t.relative,body:document.body,title:document.title,positionY:window.pageYOffset,positionX:window.pageXOffset,cachedAt:(new Date).getTime(),transitionCacheDisabled:null!=document.querySelector("[data-no-transition-cache]")},m(p)},F=function(t){if(null==t&&(t=p),/^[\d]+$/.test(t))return p=parseInt(t)},m=function(t){var e,n,o,i,u,s;for(u=Object.keys(O),e=u.map(function(t){return O[t].cachedAt}).sort(function(t,e){return e-t}),s=[],n=0,i=u.length;n<i;n++)o=u[n],O[o].cachedAt<=e[t]&&(Z(r.EXPIRE,O[o]),s.push(delete O[o]));return s},d=function(e,n,o,i){return Z(r.BEFORE_UNLOAD),document.title=e,document.documentElement.replaceChild(n,document.body),null!=o&&t.update(o),z(),i&&b(),g=window.history.state,null!=I&&I.done(),Z(r.CHANGE),Z(r.UPDATE)},b=function(){var t,e,n,r,o,i,u,s,a,l,c,h;for(h=Array.prototype.slice.call(document.body.querySelectorAll('script:not([data-turbolinks-eval="false"])')),n=0,o=h.length;n<o;n++)if(c=h[n],""===(a=c.type)||"text/javascript"===a){for(e=document.createElement("script"),l=c.attributes,r=0,i=l.length;r<i;r++)t=l[r],e.setAttribute(t.name,t.value);c.hasAttribute("async")||(e.async=!1),e.appendChild(document.createTextNode(c.innerHTML)),s=c.parentNode,u=c.nextSibling,s.removeChild(c),s.insertBefore(e,u)}},Q=function(t){return t.innerHTML=t.innerHTML.replace(/<noscript[\S\s]*?<\/noscript>/gi,""),t},z=function(){var t,e;if((t=(e=document.querySelectorAll("input[autofocus], textarea[autofocus]"))[e.length-1])&&document.activeElement!==t)return t.focus()},G=function(t){if((t=new n(t)).absolute!==j)return window.history.pushState({turbolinks:!0,url:t.absolute},"",t.absolute)},U=function(){var t,e;if(t=et.getResponseHeader("X-XHR-Redirected-To"))return t=new n(t),e=t.hasNoHash()?document.location.hash:"",window.history.replaceState(window.history.state,"",t.href+e)},v=function(){var t;if(null!=(t=et.getResponseHeader("Location"))&&new n(t).crossOrigin())return t},$=function(){return j=document.location.href},K=function(){return window.history.replaceState({turbolinks:!0,url:document.location.href},"",document.location.href)},B=function(){return g=window.history.state},R=function(){var t;if(navigator.userAgent.match(/Firefox/)&&!(t=new n).hasNoHash())return window.history.replaceState(g,"",t.withoutHash()),document.location.hash=t.hash},M=function(t){return window.scrollTo(t.positionX,t.positionY)},Y=function(){return document.location.hash?document.location.href=document.location.href:window.scrollTo(0,0)},f=function(t){var e,n,r;if(null==t||"object"!=typeof t)return t;e=new t.constructor;for(n in t)r=t[n],e[n]=f(r);return e},X=function(t){var e,n;return n=(null!=(e=document.cookie.match(new RegExp(t+"=(\\w+)")))?e[1].toUpperCase():void 0)||"",document.cookie=t+"=; expires=Thu, 01-Jan-70 00:00:01 GMT; path=/",n},Z=function(t,e){var n;return"undefined"!=typeof Prototype&&Event.fire(document,t,e,!0),n=document.createEvent("Events"),e&&(n.data=e),n.initEvent(t,!0,!0),document.dispatchEvent(n)},q=function(t){return!Z(r.BEFORE_CHANGE,{url:t})},D=function(){var t,e,n,r,o,i;if(e=function(){var t;return 400<=(t=et.status)&&t<600},i=function(){var t;return null!=(t=et.getResponseHeader("Content-Type"))&&t.match(/^(?:text\/html|application\/xhtml\+xml|application\/xml)(?:;|$)/)},r=function(t){var e,n,r,o,i;for(o=t.querySelector("head").childNodes,i=[],e=0,n=o.length;e<n;e++)r=o[e],null!=("function"==typeof r.getAttribute?r.getAttribute("data-turbolinks-track"):void 0)&&i.push(r.getAttribute("src")||r.getAttribute("href"));return i},t=function(t){var e;return N||(N=r(document)),e=r(t),e.length!==N.length||o(e,N).length!==N.length},o=function(t,e){var n,r,o,i,u;for(t.length>e.length&&(o=[e,t],t=o[0],e=o[1]),i=[],n=0,r=t.length;n<r;n++)u=t[n],nt.call(e,u)>=0&&i.push(u);return i},!e()&&i()&&(n=y(et.responseText))&&!t(n))return n},k=function(e){var n;return n=e.querySelector("title"),[null!=n?n.textContent:void 0,Q(e.querySelector("body")),t.get(e).token,"runScripts"]},t={get:function(t){var e;return null==t&&(t=document),{node:e=t.querySelector('meta[name="csrf-token"]'),token:null!=e&&"function"==typeof e.getAttribute?e.getAttribute("content"):void 0}},update:function(t){var e;if(e=this.get(),null!=e.token&&null!=t&&e.token!==t)return e.node.setAttribute("content",t)}},y=function(t){var e;return e=document.documentElement.cloneNode(),e.innerHTML=t,e.head=e.querySelector("head"),e.body=e.querySelector("body"),e},n=function(){function t(e){if(this.original=null!=e?e:document.location.href,this.original.constructor===t)return this.original;this._parse()}return t.prototype.withoutHash=function(){return this.href.replace(this.hash,"").replace("#","")},t.prototype.withoutHashForIE10compatibility=function(){return this.withoutHash()},t.prototype.hasNoHash=function(){return 0===this.hash.length},t.prototype.crossOrigin=function(){return this.origin!==(new t).origin},t.prototype._parse=function(){var t;return(null!=this.link?this.link:this.link=document.createElement("a")).href=this.original,t=this.link,this.href=t.href,this.protocol=t.protocol,this.host=t.host,this.hostname=t.hostname,this.port=t.port,this.pathname=t.pathname,this.search=t.search,this.hash=t.hash,this.origin=[this.protocol,"//",this.hostname].join(""),0!==this.port.length&&(this.origin+=":"+this.port),this.relative=[this.pathname,this.search,this.hash].join(""),this.absolute=this.href},t}(),o=function(t){function e(t){if(this.link=t,this.link.constructor===e)return this.link;this.original=this.link.href,this.originalElement=this.link,this.link=this.link.cloneNode(!1),e.__super__.constructor.apply(this,arguments)}return rt(e,t),e.HTML_EXTENSIONS=["html"],e.allowExtensions=function(){var t,n,r,o;for(n=1<=arguments.length?it.call(arguments,0):[],r=0,o=n.length;r<o;r++)t=n[r],e.HTML_EXTENSIONS.push(t);return e.HTML_EXTENSIONS},e.prototype.shouldIgnore=function(){return this.crossOrigin()||this._anchored()||this._nonHtml()||this._optOut()||this._target()},e.prototype._anchored=function(){return(this.hash.length>0||"#"===this.href.charAt(this.href.length-1))&&this.withoutHash()===(new n).withoutHash()},e.prototype._nonHtml=function(){return this.pathname.match(/\.[a-z]+$/g)&&!this.pathname.match(new RegExp("\\.(?:"+e.HTML_EXTENSIONS.join("|")+")?$","g"))},e.prototype._optOut=function(){var t,e;for(e=this.originalElement;!t&&e!==document;)t=null!=e.getAttribute("data-no-turbolink"),e=e.parentNode;return t},e.prototype._target=function(){return 0!==this.link.target.length},e}(n),e=function(){function t(t){this.event=t,this.event.defaultPrevented||(this._extractLink(),this._validForTurbolinks()&&(q(this.link.absolute)||tt(this.link.href),this.event.preventDefault()))}return t.installHandlerLast=function(e){if(!e.defaultPrevented)return document.removeEventListener("click",t.handle,!1),document.addEventListener("click",t.handle,!1)},t.handle=function(e){return new t(e)},t.prototype._extractLink=function(){var t;for(t=this.event.target;t.parentNode&&"A"!==t.nodeName;)t=t.parentNode;if("A"===t.nodeName&&0!==t.href.length)return this.link=new o(t)},t.prototype._validForTurbolinks=function(){return null!=this.link&&!(this.link.shouldIgnore()||this._nonStandardClick())},t.prototype._nonStandardClick=function(){return this.event.which>1||this.event.metaKey||this.event.ctrlKey||this.event.shiftKey||this.event.altKey},t}(),i=function(){function t(t){this.elementSelector=t,this._trickle=ut(this._trickle,this),this.value=0,this.content="",this.speed=300,this.opacity=.99,this.install()}var e;return e="turbolinks-progress-bar",t.prototype.install=function(){return this.element=document.querySelector(this.elementSelector),this.element.classList.add(e),this.styleElement=document.createElement("style"),document.head.appendChild(this.styleElement),this._updateStyle()},t.prototype.uninstall=function(){return this.element.classList.remove(e),document.head.removeChild(this.styleElement)},t.prototype.start=function(){return this.advanceTo(5)},t.prototype.advanceTo=function(t){var e;if(t>(e=this.value)&&e<=100){if(this.value=t,this._updateStyle(),100===this.value)return this._stopTrickle();if(this.value>0)return this._startTrickle()}},t.prototype.done=function(){if(this.value>0)return this.advanceTo(100),this._reset()},t.prototype._reset=function(){var t;return t=this.opacity,setTimeout(function(t){return function(){return t.opacity=0,t._updateStyle()}}(this),this.speed/2),setTimeout(function(e){return function(){return e.value=0,e.opacity=t,e._withSpeed(0,function(){return e._updateStyle(!0)})}}(this),this.speed)},t.prototype._startTrickle=function(){if(!this.trickling)return this.trickling=!0,setTimeout(this._trickle,this.speed)},t.prototype._stopTrickle=function(){return delete this.trickling},t.prototype._trickle=function(){if(this.trickling)return this.advanceTo(this.value+Math.random()/2),setTimeout(this._trickle,this.speed)},t.prototype._withSpeed=function(t,e){var n,r;return n=this.speed,this.speed=t,r=e(),this.speed=n,r},t.prototype._updateStyle=function(t){return null==t&&(t=!1),t&&this._changeContentToForceRepaint(),this.styleElement.textContent=this._createCSSRule()},t.prototype._changeContentToForceRepaint=function(){return this.content=""===this.content?" ":""},t.prototype._createCSSRule=function(){return this.elementSelector+"."+e+"::before {\n  content: '"+this.content+"';\n  position: fixed;\n  top: 0;\n  left: 0;\n  z-index: 2000;\n  background-color: #0076ff;\n  height: 3px;\n  opacity: "+this.opacity+";\n  width: "+this.value+"%;\n  transition: width "+this.speed+"ms ease-out, opacity "+this.speed/2+"ms ease-in;\n  transform: translate3d(0,0,0);\n}"},t}(),c=function(t){return setTimeout(t,500)},x=function(){return document.addEventListener("DOMContentLoaded",function(){return Z(r.CHANGE),Z(r.UPDATE)},!0)},L=function(){if("undefined"!=typeof jQuery)return jQuery(document).on("ajaxSuccess",function(t,e){if(jQuery.trim(e.responseText))return Z(r.UPDATE)})},C=function(t){var e,r;if(null!=(r=t.state)?r.turbolinks:void 0)return(e=O[new n(t.state.url).absolute])?(h(),T(e)):tt(t.target.location.href)},A=function(){return K(),B(),document.addEventListener("click",e.installHandlerLast,!0),window.addEventListener("hashchange",function(){return K(),B()},!1),c(function(){return window.addEventListener("popstate",C,!1)})},H=void 0!==window.history.state||navigator.userAgent.match(/Firefox\/2[6|7]/),a=window.history&&window.history.pushState&&window.history.replaceState&&H,u=!navigator.userAgent.match(/CriOS\//),V="GET"===(P=X("request_method"))||""===P,l=a&&u&&V,s=document.addEventListener&&document.createEvent,s&&(x(),L()),l?(tt=_,A()):tt=function(t){return document.location.href=t},this.Turbolinks={visit:tt,pagesCached:F,enableTransitionCache:w,enableProgressBar:E,allowLinkExtensions:o.allowExtensions,supported:l,EVENTS:f(r)}}).call(this);