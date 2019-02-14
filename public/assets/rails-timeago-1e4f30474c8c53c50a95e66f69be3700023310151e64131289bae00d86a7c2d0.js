/**
 * Timeago is a jQuery plugin that makes it easy to support automatically
 * updating fuzzy timestamps (e.g. "4 minutes ago" or "about 1 day ago").
 *
 * @name timeago
 * @version 1.5.3
 * @requires jQuery v1.2.3+
 * @author Ryan McGeary
 * @license MIT License - http://www.opensource.org/licenses/mit-license.php
 *
 * For usage and examples, visit:
 * http://timeago.yarp.com/
 *
 * Copyright (c) 2008-2015, Ryan McGeary (ryan -[at]- mcgeary [*dot*] org)
 */
!function(t){"function"==typeof define&&define.amd?define(["jquery"],t):t("object"==typeof module&&"object"==typeof module.exports?require("jquery"):jQuery)}(function(t){function e(){var e=o.settings;if(e.autoDispose&&!t.contains(document.documentElement,this))return t(this).timeago("dispose"),this;var r=a(this);return isNaN(r.datetime)||(0===e.cutoff||Math.abs(n(r.datetime))<e.cutoff?t(this).text(i(r.datetime,t(this).attr("lang")?t(this).attr("lang"):o.settings.lang)):t(this).attr("title").length>0&&t(this).text(t(this).attr("title"))),this}function a(e){if(e=t(e),!e.data("timeago")){e.data("timeago",{datetime:o.datetime(e)});var a=t.trim(e.text());o.settings.localeTitle?e.attr("title",e.data("timeago").datetime.toLocaleString()):!(a.length>0)||o.isTime(e)&&e.attr("title")||e.attr("title",a)}return e.data("timeago")}function i(t,e){return o.inWords(n(t),e)}function n(t){return(new Date).getTime()-t.getTime()}t.timeago=function(e){return i(e instanceof Date?e:"string"==typeof e?t.timeago.parse(e):"number"==typeof e?new Date(e):t.timeago.datetime(e))};var o=t.timeago;t.extend(t.timeago,{settings:{refreshMillis:6e4,allowPast:!0,allowFuture:!1,localeTitle:!1,cutoff:0,autoDispose:!0,lang:"en",strings:{en:{prefixAgo:null,prefixFromNow:null,suffixAgo:"ago",suffixFromNow:"from now",inPast:"any moment now",seconds:"less than a minute",minute:"about a minute",minutes:"%d minutes",hour:"about an hour",hours:"about %d hours",day:"a day",days:"%d days",month:"about a month",months:"%d months",year:"about a year",years:"%d years",wordSeparator:" ",numbers:[]}}},inWords:function(e,a){function i(a,i){var o=t.isFunction(a)?a(i,e):a,r=n.numbers&&n.numbers[i]||i;return o.replace(/%d/i,r)}if(!this.settings.allowPast&&!this.settings.allowFuture)throw"timeago allowPast and allowFuture settings can not both be set to false.";var n=this.settings.strings[a]||this.settings.strings[this.settings.lang]||this.settings.strings.en,o=n.prefixAgo,r=n.suffixAgo;if(this.settings.allowFuture&&0>e&&(o=n.prefixFromNow,r=n.suffixFromNow),!this.settings.allowPast&&e>=0)return n.inPast;var s=Math.abs(e)/1e3,u=s/60,l=u/60,m=l/24,d=m/365,h=45>s&&i(n.seconds,Math.round(s))||90>s&&i(n.minute,1)||45>u&&i(n.minutes,Math.round(u))||90>u&&i(n.hour,1)||24>l&&i(n.hours,Math.round(l))||42>l&&i(n.day,1)||30>m&&i(n.days,Math.round(m))||45>m&&i(n.month,1)||365>m&&i(n.months,Math.round(m/30))||1.5>d&&i(n.year,1)||i(n.years,Math.round(d)),f=n.wordSeparator||"";return void 0===n.wordSeparator&&(f=" "),t.trim([o,h,r].join(f))},parse:function(e){var a=t.trim(e);return a=a.replace(/\.\d+/,""),a=a.replace(/-/,"/").replace(/-/,"/"),a=a.replace(/T/," ").replace(/Z/," UTC"),a=a.replace(/([\+\-]\d\d)\:?(\d\d)/," $1$2"),a=a.replace(/([\+\-]\d\d)$/," $100"),new Date(a)},datetime:function(e){var a=o.isTime(e)?t(e).attr("datetime"):t(e).attr("title");return o.parse(a)},isTime:function(e){return"time"===t(e).get(0).tagName.toLowerCase()}});var r={init:function(){var a=t.proxy(e,this);a();var i=o.settings;i.refreshMillis>0&&(this._timeagoInterval=setInterval(a,i.refreshMillis))},update:function(a){var i=a instanceof Date?a:o.parse(a);t(this).data("timeago",{datetime:i}),o.settings.localeTitle&&t(this).attr("title",i.toLocaleString()),e.apply(this)},updateFromDOM:function(){t(this).data("timeago",{datetime:o.parse(o.isTime(this)?t(this).attr("datetime"):t(this).attr("title"))}),e.apply(this)},dispose:function(){this._timeagoInterval&&(window.clearInterval(this._timeagoInterval),this._timeagoInterval=null)}};t.fn.timeago=function(t,e){var a=t?r[t]:r.init;if(!a)throw new Error("Unknown function name '"+t+"' for timeago");return this.each(function(){a.call(this,e)}),this},document.createElement("abbr"),document.createElement("time")}),function(t){var e=function(){t("time[data-time-ago]").timeago()};t(e),t(document).on("turbolinks:load page:load ajax:success",e)}(jQuery);