!function(e){"use strict";var t=e.tablesorter,l={init:function(t,o,r){var a,s=r.reflow_dataAttrib,i=r.reflow_headerAttrib,n=[];o.$table.addClass(r.reflow_className).off("refresh.tsreflow updateComplete.tsreflow2").on("refresh.tsreflow updateComplete.tsreflow2",function(){l.init(t,o,r)}),o.$headers.each(function(){a=e(this),n.push(e.trim(a.attr(i)||a.text()))}),o.$tbodies.children().each(function(){e(this).children().each(function(t){e(this).attr(s,n[t])})})},init2:function(o,r,a){var s,i,n,f,c,d,u=r.columns,h=a.reflow2_headerAttrib,w=[];for(r.$table.addClass(a.reflow2_className).off("refresh.tsreflow2 updateComplete.tsreflow2").on("refresh.tsreflow2 updateComplete.tsreflow2",function(){l.init2(o,r,a)}),n=0;u>n;n++)f=r.$headers.filter('[data-column="'+n+'"]'),f.length>1?(c=[],f.each(function(){s=e(this),s.hasClass(a.reflow2_classIgnore)||c.push(s.attr(h)||s.text())})):c=[f.attr(h)||f.text()],w.push(c);c='<b class="'+r.selectorRemove.slice(1)+" "+a.reflow2_labelClass,r.$tbodies.children().each(function(){i=t.processTbody(o,e(this),!0),i.children().each(function(t){for(s=e(this),d=w[t].length,n=d-1;n>=0;)s.prepend(c+(0===n&&d>1?" "+a.reflow2_labelTop:"")+'">'+w[t][n]+"</b>"),n--}),t.processTbody(o,i,!1)})},remove:function(e,t,l){t.$table.removeClass(l.reflow_className)},remove2:function(e,t,l){t.$table.removeClass(l.reflow2_className)}};t.addWidget({id:"reflow",options:{reflow_className:"ui-table-reflow",reflow_headerAttrib:"data-name",reflow_dataAttrib:"data-title"},init:function(e,t,o,r){l.init(e,o,r)},remove:function(e,t,o){l.remove(e,t,o)}}),t.addWidget({id:"reflow2",options:{reflow2_className:"ui-table-reflow",reflow2_classIgnore:"ui-table-reflow-ignore",reflow2_headerAttrib:"data-name",reflow2_labelClass:"ui-table-cell-label",reflow2_labelTop:"ui-table-cell-label-top"},init:function(e,t,o,r){l.init2(e,o,r)},remove:function(e,t,o){l.remove2(e,t,o)}})}(jQuery);