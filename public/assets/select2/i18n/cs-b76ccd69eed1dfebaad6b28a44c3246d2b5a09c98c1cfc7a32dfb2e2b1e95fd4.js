!function(){if(jQuery&&jQuery.fn&&jQuery.fn.select2&&jQuery.fn.select2.amd)var e=jQuery.fn.select2.amd;e.define("select2/i18n/cs",[],function(){function e(e,n){switch(e){case 2:return n?"dva":"dv\u011b";case 3:return"t\u0159i";case 4:return"\u010dty\u0159i"}return""}return{errorLoading:function(){return"V\xfdsledky nemohly b\xfdt na\u010dteny."},inputTooLong:function(n){var t=n.input.length-n.maximum;return 1==t?"Pros\xedm, zadejte o jeden znak m\xe9n\u011b.":t<=4?"Pros\xedm, zadejte o "+e(t,!0)+" znaky m\xe9n\u011b.":"Pros\xedm, zadejte o "+t+" znak\u016f m\xe9n\u011b."},inputTooShort:function(n){var t=n.minimum-n.input.length;return 1==t?"Pros\xedm, zadejte je\u0161t\u011b jeden znak.":t<=4?"Pros\xedm, zadejte je\u0161t\u011b dal\u0161\xed "+e(t,!0)+" znaky.":"Pros\xedm, zadejte je\u0161t\u011b dal\u0161\xedch "+t+" znak\u016f."},loadingMore:function(){return"Na\u010d\xedtaj\xed se dal\u0161\xed v\xfdsledky\u2026"},maximumSelected:function(n){var t=n.maximum;return 1==t?"M\u016f\u017eete zvolit jen jednu polo\u017eku.":t<=4?"M\u016f\u017eete zvolit maxim\xe1ln\u011b "+e(t,!1)+" polo\u017eky.":"M\u016f\u017eete zvolit maxim\xe1ln\u011b "+t+" polo\u017eek."},noResults:function(){return"Nenalezeny \u017e\xe1dn\xe9 polo\u017eky."},searching:function(){return"Vyhled\xe1v\xe1n\xed\u2026"}}}),e.define,e.require}();