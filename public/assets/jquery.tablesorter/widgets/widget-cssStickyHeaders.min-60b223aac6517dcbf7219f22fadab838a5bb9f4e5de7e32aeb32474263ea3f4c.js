!function(c,d){"use strict";var r=c.tablesorter;r.addWidget({id:"cssStickyHeaders",priority:10,options:{cssStickyHeaders_offset:0,cssStickyHeaders_addCaption:!1,cssStickyHeaders_attachTo:null,cssStickyHeaders_filteredToTop:!0},init:function(e,t,n,l){var s,i,p,h=n.$table,f=c(l.cssStickyHeaders_attachTo),k="ActiveXObject"in d,a=n.namespace+"cssstickyheader ",y=h.children("thead"),g=h.children("caption"),H=f.length?f:c(d),S=h.parent().closest("table."+r.css.table),b=S.length&&r.hasWidget(S[0],"cssStickyHeaders")?S.children("thead"):[],_=parseInt(h.css("border-top-width"),10)||0,u=l.cssStickyHeaders_addCaption,m=!1,C=!1,T=function(e,t){var s=0===t?"":"translate(0px,"+t+"px)";e.css({transform:s,"-ms-transform":s,"-webkit-transform":s})};g.length&&(s=h.height(),g.hide(),C=h.height()===s,g.show(),i=h.offset().top,T(g,20),m=h.offset().top!==i,T(g,0)),H.unbind("scroll resize ".split(" ").join(a).replace(/\s+/g," ")).bind("scroll resize ".split(" ").join(a),function(){l=n.widgetOptions,m&&(T(g,0),p=h.offset().top);var e=f.length?f.offset().top:H.scrollTop(),t=(g.outerHeight(!0)||0)+(parseInt(h.css("padding-top"),10)||0)+(parseInt(h.css("border-spacing"),10)||0),s=h.height()+(C&&l.cssStickyHeaders_addCaption?t:0)-y.height()-(h.children("tfoot").height()||0)-(l.cssStickyHeaders_addCaption?t:C?0:t),i=b.length?b.height():0,a=b.length?k?S.data("cssStickyHeaderBottom")+i:b.offset().top+i-H.scrollTop():0,c=m?p:h.offset().top,d=e-(C?c-(l.cssStickyHeaders_addCaption?t:0):c)+a+_+(l.cssStickyHeaders_offset||0)-(l.cssStickyHeaders_addCaption?C?t:0:t),r=0<d&&d<=s?d:0,o=k?y.children().children():y;k&&n.$table.data("cssStickyHeaderBottom",(b.length?i:0)-(l.cssStickyHeaders_addCaption?t:0)),l.cssStickyHeaders_addCaption&&(o=o.add(g)),u!==l.cssStickyHeaders_addCaption&&((u=l.cssStickyHeaders_addCaption)||T(g,0)),T(o,r)}),h.unbind(("filterEnd"+a).replace(/\s+/g," ")).bind("filterEnd"+a,function(){l.cssStickyHeaders_filteredToTop&&d.scrollTo(0,h.position().top)})},remove:function(e,t,s,i){if(!i){var a=t.namespace+"cssstickyheader ";c(d).unbind("scroll resize ".split(" ").join(a).replace(/\s+/g," ")),t.$table.unbind("filterEnd scroll resize ".split(" ").join(a).replace(/\s+/g," ")).add(t.$table.children("thead").children().children()).children("thead, caption").css({transform:"","-ms-transform":"","-webkit-transform":""})}}})}(jQuery,window);