"use strict";$(document).ready(function(){$("body").on("click",".button_team",function(o){var t=$(o.target).closest(".button_team");console.log(t);var e=t.data("team-id");console.log(e);var n="#modal_"+e,c=$(n);console.log(n),console.log(c);document.getElementById("button_".concat(e));var l=document.getElementsByClassName("close")[0];console.log("Success!"),c.show(),l.onclick=function(){c.hide()},window.onclick=function(o){o.target==c&&c.hide()}})});