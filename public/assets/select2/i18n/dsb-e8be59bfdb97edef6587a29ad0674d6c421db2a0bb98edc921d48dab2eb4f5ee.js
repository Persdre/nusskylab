!function(){if(jQuery&&jQuery.fn&&jQuery.fn.select2&&jQuery.fn.select2.amd)var n=jQuery.fn.select2.amd;n.define("select2/i18n/dsb",[],function(){var n=["znamu\u0161ko","znamu\u0161ce","znamu\u0161ka","znamu\u0161kow"],e=["zapisk","zapiska","zapiski","zapiskow"],u=function(n,e){return 1===n?e[0]:2===n?e[1]:n>2&&n<=4?e[2]:n>=5?e[3]:void 0};return{errorLoading:function(){return"Wusl\u011bdki njejsu se dali zacyta\u015b."},inputTooLong:function(e){var a=e.input.length-e.maximum;return"P\u0161osym la\u0161uj "+a+" "+u(a,n)},inputTooShort:function(e){var a=e.minimum-e.input.length;return"P\u0161osym zap\xf3daj nanejmjenjej "+a+" "+u(a,n)},loadingMore:function(){return"Dal\u0161ne wusl\u011bdki se zacytaju\u2026"},maximumSelected:function(n){return"M\xf3\u017eo\u0161 jano "+n.maximum+" "+u(n.maximum,e)+"wubra\u015b."},noResults:function(){return"\u017dedne wusl\u011bdki namakane"},searching:function(){return"Pyta se\u2026"}}}),n.define,n.require}();