!function(){if(jQuery&&jQuery.fn&&jQuery.fn.select2&&jQuery.fn.select2.amd)var e=jQuery.fn.select2.amd;e.define("select2/i18n/sl",[],function(){return{errorLoading:function(){return"Zadetkov iskanja ni bilo mogo\u010de nalo\u017eiti."},inputTooLong:function(e){var n=e.input.length-e.maximum,i="Prosim zbri\u0161ite "+n+" znak";return 2==n?i+="a":1!=n&&(i+="e"),i},inputTooShort:function(e){var n=e.minimum-e.input.length,i="Prosim vpi\u0161ite \u0161e "+n+" znak";return 2==n?i+="a":1!=n&&(i+="e"),i},loadingMore:function(){return"Nalagam ve\u010d zadetkov\u2026"},maximumSelected:function(e){var n="Ozna\u010dite lahko najve\u010d "+e.maximum+" predmet";return 2==e.maximum?n+="a":1!=e.maximum&&(n+="e"),n},noResults:function(){return"Ni zadetkov."},searching:function(){return"I\u0161\u010dem\u2026"}}}),e.define,e.require}();