/*PLUGINS INCLUDED
 * 
 * Skeleton V1.1 Tabs Plugin: http://getskeleton.com
 * HoverIntent: http://cherne.net/brian/resources/jquery.hoverIntent.html
 * Numeric: http://www.texotela.co.uk/code/jquery/numeric/
 * ColorBox: jacklmoore.com/colorbox/
 * ScrollFollow: http://kitchen.net-perspective.com/
 * Jquery Timers: http://jquery.offput.ca/every/
 * ScrollTo: http://flesler.blogspot.com/2007/10/jqueryscrollto.html
 */


/*
* Skeleton V1.1
* Copyright 2011, Dave Gamache
* www.getskeleton.com
* Free to use under the MIT license.
* http://www.opensource.org/licenses/mit-license.php
* 8/17/2011
*/
;$(document).ready(function(){var a=$("ul.tabs");a.each(function(a){var b=$(this).find("> li > a");b.click(function(a){var c=$(this).attr("href");if(c.charAt(0)=="#"){a.preventDefault();b.removeClass("active");$(this).addClass("active");$(c).show().addClass("active").siblings().hide().removeClass("active")}})})})

/**
* hoverIntent r6 // 2011.02.26 // jQuery 1.5.1+
* <http://cherne.net/brian/resources/jquery.hoverIntent.html>
* 
* @param  f  onMouseOver function || An object with configuration options
* @param  g  onMouseOut function  || Nothing (use configuration options object)
* @author    Brian Cherne brian(at)cherne(dot)net
*/
;(function($){$.fn.hoverIntent=function(f,g){var cfg={sensitivity:7,interval:100,timeout:0};cfg=$.extend(cfg,g?{over:f,out:g}:f);var cX,cY,pX,pY;var track=function(ev){cX=ev.pageX;cY=ev.pageY};var compare=function(ev,ob){ob.hoverIntent_t=clearTimeout(ob.hoverIntent_t);if((Math.abs(pX-cX)+Math.abs(pY-cY))<cfg.sensitivity){$(ob).unbind("mousemove",track);ob.hoverIntent_s=1;return cfg.over.apply(ob,[ev])}else{pX=cX;pY=cY;ob.hoverIntent_t=setTimeout(function(){compare(ev,ob)},cfg.interval)}};var delay=function(ev,ob){ob.hoverIntent_t=clearTimeout(ob.hoverIntent_t);ob.hoverIntent_s=0;return cfg.out.apply(ob,[ev])};var handleHover=function(e){var ev=jQuery.extend({},e);var ob=this;if(ob.hoverIntent_t){ob.hoverIntent_t=clearTimeout(ob.hoverIntent_t)}if(e.type=="mouseenter"){pX=ev.pageX;pY=ev.pageY;$(ob).bind("mousemove",track);if(ob.hoverIntent_s!=1){ob.hoverIntent_t=setTimeout(function(){compare(ev,ob)},cfg.interval)}}else{$(ob).unbind("mousemove",track);if(ob.hoverIntent_s==1){ob.hoverIntent_t=setTimeout(function(){delay(ev,ob)},cfg.timeout)}}};return this.bind('mouseenter',handleHover).bind('mouseleave',handleHover)}})(jQuery);

/*
 *
 * Copyright (c) 2006-2011 Sam Collett (http://www.texotela.co.uk)
 * Dual licensed under the MIT (http://www.opensource.org/licenses/mit-license.php)
 * and GPL (http://www.opensource.org/licenses/gpl-license.php) licenses.
 * 
 * Version 1.3
 * Demo: http://www.texotela.co.uk/code/jquery/numeric/
 *
 */
;(function(a){a.fn.numeric=function(b,c){if(typeof b==="boolean"){b={decimal:b}}b=b||{};if(typeof b.negative=="undefined")b.negative=true;var d=b.decimal===false?"":b.decimal||".";var e=b.negative===true?true:false;var c=typeof c=="function"?c:function(){};return this.data("numeric.decimal",d).data("numeric.negative",e).data("numeric.callback",c).keypress(a.fn.numeric.keypress).keyup(a.fn.numeric.keyup).blur(a.fn.numeric.blur)};a.fn.numeric.keypress=function(b){var c=a.data(this,"numeric.decimal");var d=a.data(this,"numeric.negative");var e=b.charCode?b.charCode:b.keyCode?b.keyCode:0;if(e==13&&this.nodeName.toLowerCase()=="input"){return true}else if(e==13){return false}var f=false;if(b.ctrlKey&&e==97||b.ctrlKey&&e==65)return true;if(b.ctrlKey&&e==120||b.ctrlKey&&e==88)return true;if(b.ctrlKey&&e==99||b.ctrlKey&&e==67)return true;if(b.ctrlKey&&e==122||b.ctrlKey&&e==90)return true;if(b.ctrlKey&&e==118||b.ctrlKey&&e==86||b.shiftKey&&e==45)return true;if(e<48||e>57){if(this.value.indexOf("-")!=0&&d&&e==45&&(this.value.length==0||a.fn.getSelectionStart(this)==0))return true;if(c&&e==c.charCodeAt(0)&&this.value.indexOf(c)!=-1){f=false}if(e!=8&&e!=9&&e!=13&&e!=35&&e!=36&&e!=37&&e!=39&&e!=46){f=false}else{if(typeof b.charCode!="undefined"){if(b.keyCode==b.which&&b.which!=0){f=true;if(b.which==46)f=false}else if(b.keyCode!=0&&b.charCode==0&&b.which==0){f=true}}}if(c&&e==c.charCodeAt(0)){if(this.value.indexOf(c)==-1){f=true}else{f=false}}}else{f=true}return f};a.fn.numeric.keyup=function(b){var c=this.value;if(c.length>0){var d=a.fn.getSelectionStart(this);var e=a.data(this,"numeric.decimal");var f=a.data(this,"numeric.negative");if(e!=""){var g=c.indexOf(e);if(g==0){this.value="0"+c}if(g==1&&c.charAt(0)=="-"){this.value="-0"+c.substring(1)}c=this.value}var h=[0,1,2,3,4,5,6,7,8,9,"-",e];var i=c.length;for(var j=i-1;j>=0;j--){var k=c.charAt(j);if(j!=0&&k=="-"){c=c.substring(0,j)+c.substring(j+1)}else if(j==0&&!f&&k=="-"){c=c.substring(1)}var l=false;for(var m=0;m<h.length;m++){if(k==h[m]){l=true;break}}if(!l||k==" "){c=c.substring(0,j)+c.substring(j+1)}}var n=c.indexOf(e);if(n>0){for(var j=i-1;j>n;j--){var k=c.charAt(j);if(k==e){c=c.substring(0,j)+c.substring(j+1)}}}this.value=c;a.fn.setSelection(this,d)}};a.fn.numeric.blur=function(){var b=a.data(this,"numeric.decimal");var c=a.data(this,"numeric.callback");var d=this.value;if(d!=""){var e=new RegExp("^\\d+$|\\d*"+b+"\\d+");if(!e.exec(d)){c.apply(this)}}};a.fn.removeNumeric=function(){return this.data("numeric.decimal",null).data("numeric.negative",null).data("numeric.callback",null).unbind("keypress",a.fn.numeric.keypress).unbind("blur",a.fn.numeric.blur)};a.fn.getSelectionStart=function(a){if(a.createTextRange){var b=document.selection.createRange().duplicate();b.moveEnd("character",a.value.length);if(b.text=="")return a.value.length;return a.value.lastIndexOf(b.text)}else return a.selectionStart};a.fn.setSelection=function(a,b){if(typeof b=="number")b=[b,b];if(b&&b.constructor==Array&&b.length==2){if(a.createTextRange){var c=a.createTextRange();c.collapse(true);c.moveStart("character",b[0]);c.moveEnd("character",b[1]);c.select()}else if(a.setSelectionRange){a.focus();a.setSelectionRange(b[0],b[1])}}}})(jQuery)

// ColorBox v1.3.19.3 - jQuery lightbox plugin
// (c) 2011 Jack Moore - jacklmoore.com
// License: http://www.opensource.org/licenses/mit-license.php
;(function(a,b,c){function Z(c,d,e){var g=b.createElement(c);return d&&(g.id=f+d),e&&(g.style.cssText=e),a(g)}function $(a){var b=y.length,c=(Q+a)%b;return c<0?b+c:c}function _(a,b){return Math.round((/%/.test(a)?(b==="x"?z.width():z.height())/100:1)*parseInt(a,10))}function ab(a){return K.photo||/\.(gif|png|jpe?g|bmp|ico)((#|\?).*)?$/i.test(a)}function bb(){var b,c=a.data(P,e);c==null?(K=a.extend({},d),console&&console.log&&console.log("Error: cboxElement missing settings object")):K=a.extend({},c);for(b in K)a.isFunction(K[b])&&b.slice(0,2)!=="on"&&(K[b]=K[b].call(P));K.rel=K.rel||P.rel||"nofollow",K.href=K.href||a(P).attr("href"),K.title=K.title||P.title,typeof K.href=="string"&&(K.href=a.trim(K.href))}function cb(b,c){a.event.trigger(b),c&&c.call(P)}function db(){var a,b=f+"Slideshow_",c="click."+f,d,e,g;K.slideshow&&y[1]?(d=function(){F.text(K.slideshowStop).unbind(c).bind(j,function(){if(K.loop||y[Q+1])a=setTimeout(W.next,K.slideshowSpeed)}).bind(i,function(){clearTimeout(a)}).one(c+" "+k,e),r.removeClass(b+"off").addClass(b+"on"),a=setTimeout(W.next,K.slideshowSpeed)},e=function(){clearTimeout(a),F.text(K.slideshowStart).unbind([j,i,k,c].join(" ")).one(c,function(){W.next(),d()}),r.removeClass(b+"on").addClass(b+"off")},K.slideshowAuto?d():e()):r.removeClass(b+"off "+b+"on")}function eb(b){U||(P=b,bb(),y=a(P),Q=0,K.rel!=="nofollow"&&(y=a("."+g).filter(function(){var b=a.data(this,e),c;return b&&(c=b.rel||this.rel),c===K.rel}),Q=y.index(P),Q===-1&&(y=y.add(P),Q=y.length-1)),S||(S=T=!0,r.show(),K.returnFocus&&a(P).blur().one(l,function(){a(this).focus()}),q.css({opacity:+K.opacity,cursor:K.overlayClose?"pointer":"auto"}).show(),K.w=_(K.initialWidth,"x"),K.h=_(K.initialHeight,"y"),W.position(),o&&z.bind("resize."+p+" scroll."+p,function(){q.css({width:z.width(),height:z.height(),top:z.scrollTop(),left:z.scrollLeft()})}).trigger("resize."+p),cb(h,K.onOpen),J.add(D).hide(),I.html(K.close).show()),W.load(!0))}function fb(){!r&&b.body&&(Y=!1,z=a(c),r=Z(X).attr({id:e,"class":n?f+(o?"IE6":"IE"):""}).hide(),q=Z(X,"Overlay",o?"position:absolute":"").hide(),s=Z(X,"Wrapper"),t=Z(X,"Content").append(A=Z(X,"LoadedContent","width:0; height:0; overflow:hidden"),C=Z(X,"LoadingOverlay").add(Z(X,"LoadingGraphic")),D=Z(X,"Title"),E=Z(X,"Current"),G=Z(X,"Next"),H=Z(X,"Previous"),F=Z(X,"Slideshow").bind(h,db),I=Z(X,"Close")),s.append(Z(X).append(Z(X,"TopLeft"),u=Z(X,"TopCenter"),Z(X,"TopRight")),Z(X,!1,"clear:left").append(v=Z(X,"MiddleLeft"),t,w=Z(X,"MiddleRight")),Z(X,!1,"clear:left").append(Z(X,"BottomLeft"),x=Z(X,"BottomCenter"),Z(X,"BottomRight"))).find("div div").css({"float":"left"}),B=Z(X,!1,"position:absolute; width:9999px; visibility:hidden; display:none"),J=G.add(H).add(E).add(F),a(b.body).append(q,r.append(s,B)))}function gb(){return r?(Y||(Y=!0,L=u.height()+x.height()+t.outerHeight(!0)-t.height(),M=v.width()+w.width()+t.outerWidth(!0)-t.width(),N=A.outerHeight(!0),O=A.outerWidth(!0),r.css({"padding-bottom":L,"padding-right":M}),G.click(function(){W.next()}),H.click(function(){W.prev()}),I.click(function(){W.close()}),q.click(function(){K.overlayClose&&W.close()}),a(b).bind("keydown."+f,function(a){var b=a.keyCode;S&&K.escKey&&b===27&&(a.preventDefault(),W.close()),S&&K.arrowKey&&y[1]&&(b===37?(a.preventDefault(),H.click()):b===39&&(a.preventDefault(),G.click()))}),a("."+g,b).live("click",function(a){a.which>1||a.shiftKey||a.altKey||a.metaKey||(a.preventDefault(),eb(this))})),!0):!1}var d={transition:"elastic",speed:300,width:!1,initialWidth:"600",innerWidth:!1,maxWidth:!1,height:!1,initialHeight:"450",innerHeight:!1,maxHeight:!1,scalePhotos:!0,scrolling:!0,inline:!1,html:!1,iframe:!1,fastIframe:!0,photo:!1,href:!1,title:!1,rel:!1,opacity:.9,preloading:!0,current:"image {current} of {total}",previous:"previous",next:"next",close:"close",xhrError:"This content failed to load.",imgError:"This image failed to load.",open:!1,returnFocus:!0,reposition:!0,loop:!0,slideshow:!1,slideshowAuto:!0,slideshowSpeed:2500,slideshowStart:"start slideshow",slideshowStop:"stop slideshow",onOpen:!1,onLoad:!1,onComplete:!1,onCleanup:!1,onClosed:!1,overlayClose:!0,escKey:!0,arrowKey:!0,top:!1,bottom:!1,left:!1,right:!1,fixed:!1,data:undefined},e="colorbox",f="cbox",g=f+"Element",h=f+"_open",i=f+"_load",j=f+"_complete",k=f+"_cleanup",l=f+"_closed",m=f+"_purge",n=!a.support.opacity&&!a.support.style,o=n&&!c.XMLHttpRequest,p=f+"_IE6",q,r,s,t,u,v,w,x,y,z,A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X="div",Y;if(a.colorbox)return;a(fb),W=a.fn[e]=a[e]=function(b,c){var f=this;b=b||{},fb();if(gb()){if(!f[0]){if(f.selector)return f;f=a("<a/>"),b.open=!0}c&&(b.onComplete=c),f.each(function(){a.data(this,e,a.extend({},a.data(this,e)||d,b))}).addClass(g),(a.isFunction(b.open)&&b.open.call(f)||b.open)&&eb(f[0])}return f},W.position=function(a,b){function i(a){u[0].style.width=x[0].style.width=t[0].style.width=a.style.width,t[0].style.height=v[0].style.height=w[0].style.height=a.style.height}var c=0,d=0,e=r.offset(),g,h;z.unbind("resize."+f),r.css({top:-9e4,left:-9e4}),g=z.scrollTop(),h=z.scrollLeft(),K.fixed&&!o?(e.top-=g,e.left-=h,r.css({position:"fixed"})):(c=g,d=h,r.css({position:"absolute"})),K.right!==!1?d+=Math.max(z.width()-K.w-O-M-_(K.right,"x"),0):K.left!==!1?d+=_(K.left,"x"):d+=Math.round(Math.max(z.width()-K.w-O-M,0)/2),K.bottom!==!1?c+=Math.max(z.height()-K.h-N-L-_(K.bottom,"y"),0):K.top!==!1?c+=_(K.top,"y"):c+=Math.round(Math.max(z.height()-K.h-N-L,0)/2),r.css({top:e.top,left:e.left}),a=r.width()===K.w+O&&r.height()===K.h+N?0:a||0,s[0].style.width=s[0].style.height="9999px",r.dequeue().animate({width:K.w+O,height:K.h+N,top:c,left:d},{duration:a,complete:function(){i(this),T=!1,s[0].style.width=K.w+O+M+"px",s[0].style.height=K.h+N+L+"px",K.reposition&&setTimeout(function(){z.bind("resize."+f,W.position)},1),b&&b()},step:function(){i(this)}})},W.resize=function(a){S&&(a=a||{},a.width&&(K.w=_(a.width,"x")-O-M),a.innerWidth&&(K.w=_(a.innerWidth,"x")),A.css({width:K.w}),a.height&&(K.h=_(a.height,"y")-N-L),a.innerHeight&&(K.h=_(a.innerHeight,"y")),!a.innerHeight&&!a.height&&(A.css({height:"auto"}),K.h=A.height()),A.css({height:K.h}),W.position(K.transition==="none"?0:K.speed))},W.prep=function(b){function g(){return K.w=K.w||A.width(),K.w=K.mw&&K.mw<K.w?K.mw:K.w,K.w}function h(){return K.h=K.h||A.height(),K.h=K.mh&&K.mh<K.h?K.mh:K.h,K.h}if(!S)return;var c,d=K.transition==="none"?0:K.speed;A.remove(),A=Z(X,"LoadedContent").append(b),A.hide().appendTo(B.show()).css({width:g(),overflow:K.scrolling?"auto":"hidden"}).css({height:h()}).prependTo(t),B.hide(),a(R).css({"float":"none"}),o&&a("select").not(r.find("select")).filter(function(){return this.style.visibility!=="hidden"}).css({visibility:"hidden"}).one(k,function(){this.style.visibility="inherit"}),c=function(){function s(){n&&r[0].style.removeAttribute("filter")}var b,c,g=y.length,h,i="frameBorder",k="allowTransparency",l,o,p,q;if(!S)return;l=function(){clearTimeout(V),C.hide(),cb(j,K.onComplete)},n&&R&&A.fadeIn(100),D.html(K.title).add(A).show();if(g>1){typeof K.current=="string"&&E.html(K.current.replace("{current}",Q+1).replace("{total}",g)).show(),G[K.loop||Q<g-1?"show":"hide"]().html(K.next),H[K.loop||Q?"show":"hide"]().html(K.previous),K.slideshow&&F.show();if(K.preloading){b=[$(-1),$(1)];while(c=y[b.pop()])q=a.data(c,e),q&&q.href?(o=q.href,a.isFunction(o)&&(o=o.call(c))):o=c.href,ab(o)&&(p=new Image,p.src=o)}}else J.hide();K.iframe?(h=Z("iframe")[0],i in h&&(h[i]=0),k in h&&(h[k]="true"),h.name=f+ +(new Date),K.fastIframe?l():a(h).one("load",l),h.src=K.href,K.scrolling||(h.scrolling="no"),a(h).addClass(f+"Iframe").appendTo(A).one(m,function(){h.src="//about:blank"})):l(),K.transition==="fade"?r.fadeTo(d,1,s):s()},K.transition==="fade"?r.fadeTo(d,0,function(){W.position(0,c)}):W.position(d,c)},W.load=function(b){var c,d,e=W.prep;T=!0,R=!1,P=y[Q],b||bb(),cb(m),cb(i,K.onLoad),K.h=K.height?_(K.height,"y")-N-L:K.innerHeight&&_(K.innerHeight,"y"),K.w=K.width?_(K.width,"x")-O-M:K.innerWidth&&_(K.innerWidth,"x"),K.mw=K.w,K.mh=K.h,K.maxWidth&&(K.mw=_(K.maxWidth,"x")-O-M,K.mw=K.w&&K.w<K.mw?K.w:K.mw),K.maxHeight&&(K.mh=_(K.maxHeight,"y")-N-L,K.mh=K.h&&K.h<K.mh?K.h:K.mh),c=K.href,V=setTimeout(function(){C.show()},100),K.inline?(Z(X).hide().insertBefore(a(c)[0]).one(m,function(){a(this).replaceWith(A.children())}),e(a(c))):K.iframe?e(" "):K.html?e(K.html):ab(c)?(a(R=new Image).addClass(f+"Photo").error(function(){K.title=!1,e(Z(X,"Error").html(K.imgError))}).load(function(){var a;R.onload=null,K.scalePhotos&&(d=function(){R.height-=R.height*a,R.width-=R.width*a},K.mw&&R.width>K.mw&&(a=(R.width-K.mw)/R.width,d()),K.mh&&R.height>K.mh&&(a=(R.height-K.mh)/R.height,d())),K.h&&(R.style.marginTop=Math.max(K.h-R.height,0)/2+"px"),y[1]&&(K.loop||y[Q+1])&&(R.style.cursor="pointer",R.onclick=function(){W.next()}),n&&(R.style.msInterpolationMode="bicubic"),setTimeout(function(){e(R)},1)}),setTimeout(function(){R.src=c},1)):c&&B.load(c,K.data,function(b,c,d){e(c==="error"?Z(X,"Error").html(K.xhrError):a(this).contents())})},W.next=function(){!T&&y[1]&&(K.loop||y[Q+1])&&(Q=$(1),W.load())},W.prev=function(){!T&&y[1]&&(K.loop||Q)&&(Q=$(-1),W.load())},W.close=function(){S&&!U&&(U=!0,S=!1,cb(k,K.onCleanup),z.unbind("."+f+" ."+p),q.fadeTo(200,0),r.stop().fadeTo(300,0,function(){r.add(q).css({opacity:1,cursor:"auto"}).hide(),cb(m),A.remove(),setTimeout(function(){U=!1,cb(l,K.onClosed)},1)}))},W.remove=function(){a([]).add(r).add(q).remove(),r=null,a("."+g).removeData(e).removeClass(g).die()},W.element=function(){return a(P)},W.settings=d})(jQuery,document,this);


/**
 * jquery.scrollFollow.js
 * Copyright (c) 2008 Net Perspective (http://kitchen.net-perspective.com/)
 * Licensed under the MIT License (http://www.opensource.org/licenses/mit-license.php)
 * 
 * @author R.A. Ray
 *
 * @projectDescription	jQuery plugin for allowing an element to animate down as the user scrolls the page.
 * 
 * @version 0.4.0
 * 
 * @requires jquery.js (tested with 1.2.6)
 * @requires ui.core.js (tested with 1.5.2)
 * 
 * @optional jquery.cookie.js (http://www.stilbuero.de/2006/09/17/cookie-plugin-for-jquery/)
 * @optional jquery.easing.js (http://gsgd.co.uk/sandbox/jquery/easing/ - tested with 1.3)
 * 
 * @param speed		int - Duration of animation (in milliseconds)
 * 								default: 500
 * @param offset			int - Number of pixels box should remain from top of viewport
 * 								default: 0
 * @param easing		string - Any one of the easing options from the easing plugin - Requires jQuery Easing Plugin < http://gsgd.co.uk/sandbox/jquery/easing/ >
 * 								default: 'linear'
 * @param container	string - ID of the containing div
 * 								default: box's immediate parent
 * @param killSwitch	string - ID of the On/Off toggle element
 * 								default: 'killSwitch'
 * @param onText		string - killSwitch text to be displayed if sliding is enabled
 * 								default: 'Turn Slide Off'
 * @param offText		string - killSwitch text to be displayed if sliding is disabled
 * 								default: 'Turn Slide On'
 * @param relativeTo	string - Scroll animation can be relative to either the 'top' or 'bottom' of the viewport
 * 								default: 'top'
 * @param delay			int - Time between the end of the scroll and the beginning of the animation in milliseconds
 * 								default: 0
 */
;(function(a){a.scrollFollow=function(b,c){function e(){b.queue([]);var d=parseInt(a(window).height());var e=parseInt(a(document).scrollTop());var g=parseInt(b.cont.offset().top);var h=parseInt(b.cont.attr("offsetHeight"));var i=parseInt(b.attr("offsetHeight")+(parseInt(b.css("marginTop"))||0)+(parseInt(b.css("marginBottom"))||0));var j;if(f){if(c.relativeTo=="top"){if(b.initialOffsetTop>=e+c.offset){j=b.initialTop}else{j=Math.min(Math.max(-g,e-b.initialOffsetTop+b.initialTop)+c.offset,h-i-b.paddingAdjustment)}}else if(c.relativeTo=="bottom"){if(b.initialOffsetTop+i>=e+c.offset+d){j=b.initialTop}else{j=Math.min(e+d-i-c.offset,h-i)}}if((new Date).getTime()-b.lastScroll>=c.delay-20){b.animate({top:j},c.speed,c.easing)}}}b=a(b);var d=b.css("position");var f=true;if(a.cookie!=undefined){if(a.cookie("scrollFollowSetting"+b.attr("id"))=="false"){var f=false;a("#"+c.killSwitch).text(c.offText).toggle(function(){f=true;a(this).text(c.onText);a.cookie("scrollFollowSetting"+b.attr("id"),true,{expires:365,path:"/"});e()},function(){f=false;a(this).text(c.offText);b.animate({top:b.initialTop},c.speed,c.easing);a.cookie("scrollFollowSetting"+b.attr("id"),false,{expires:365,path:"/"})})}else{a("#"+c.killSwitch).text(c.onText).toggle(function(){f=false;a(this).text(c.offText);b.animate({top:b.initialTop},0);a.cookie("scrollFollowSetting"+b.attr("id"),false,{expires:365,path:"/"})},function(){f=true;a(this).text(c.onText);a.cookie("scrollFollowSetting"+b.attr("id"),true,{expires:365,path:"/"});e()})}}if(c.container==""){b.cont=b.parent()}else{b.cont=a("#"+c.container)}b.initialOffsetTop=parseInt(b.offset().top);b.initialTop=parseInt(b.css("top"))||0;if(b.css("position")=="relative"){b.paddingAdjustment=parseInt(b.cont.css("paddingTop"))+parseInt(b.cont.css("paddingBottom"))}else{b.paddingAdjustment=0}a(window).scroll(function(){a.fn.scrollFollow.interval=setTimeout(function(){e()},c.delay);b.lastScroll=(new Date).getTime()});a(window).resize(function(){a.fn.scrollFollow.interval=setTimeout(function(){e()},c.delay);b.lastScroll=(new Date).getTime()});b.lastScroll=0;e()};a.fn.scrollFollow=function(b){b=b||{};b.relativeTo=b.relativeTo||"top";b.speed=b.speed||500;b.offset=b.offset||0;b.easing=b.easing||"swing";b.container=b.container||this.parent().attr("id");b.killSwitch=b.killSwitch||"killSwitch";b.onText=b.onText||"Turn Slide Off";b.offText=b.offText||"Turn Slide On";b.delay=b.delay||0;this.each(function(){new a.scrollFollow(this,b)});return this}})(jQuery)

/**
 * jQuery.timers - Timer abstractions for jQuery
 * Written by Blair Mitchelmore (blair DOT mitchelmore AT gmail DOT com)
 * Licensed under the WTFPL (http://sam.zoy.org/wtfpl/).
 * Date: 2009/10/16
 *
 * @author Blair Mitchelmore
 * @version 1.2
 *
 **/

;jQuery.fn.extend({everyTime:function(a,b,c,d){return this.each(function(){jQuery.timer.add(this,a,b,c,d)})},oneTime:function(a,b,c){return this.each(function(){jQuery.timer.add(this,a,b,c,1)})},stopTime:function(a,b){return this.each(function(){jQuery.timer.remove(this,a,b)})}});jQuery.extend({timer:{global:[],guid:1,dataKey:"jQuery.timer",regex:/^([0-9]+(?:\.[0-9]*)?)\s*(.*s)?$/,powers:{ms:1,cs:10,ds:100,s:1e3,das:1e4,hs:1e5,ks:1e6},timeParse:function(a){if(a==undefined||a==null)return null;var b=this.regex.exec(jQuery.trim(a.toString()));if(b[2]){var c=parseFloat(b[1]);var d=this.powers[b[2]]||1;return c*d}else{return a}},add:function(a,b,c,d,e){var f=0;if(jQuery.isFunction(c)){if(!e)e=d;d=c;c=b}b=jQuery.timer.timeParse(b);if(typeof b!="number"||isNaN(b)||b<0)return;if(typeof e!="number"||isNaN(e)||e<0)e=0;e=e||0;var g=jQuery.data(a,this.dataKey)||jQuery.data(a,this.dataKey,{});if(!g[c])g[c]={};d.timerID=d.timerID||this.guid++;var h=function(){if(++f>e&&e!==0||d.call(a,f)===false)jQuery.timer.remove(a,c,d)};h.timerID=d.timerID;if(!g[c][d.timerID])g[c][d.timerID]=window.setInterval(h,b);this.global.push(a)},remove:function(a,b,c){var d=jQuery.data(a,this.dataKey),e;if(d){if(!b){for(b in d)this.remove(a,b,c)}else if(d[b]){if(c){if(c.timerID){window.clearInterval(d[b][c.timerID]);delete d[b][c.timerID]}}else{for(var c in d[b]){window.clearInterval(d[b][c]);delete d[b][c]}}for(e in d[b])break;if(!e){e=null;delete d[b]}}for(e in d)break;if(!e)jQuery.removeData(a,this.dataKey)}}}});jQuery(window).bind("unload",function(){jQuery.each(jQuery.timer.global,function(a,b){jQuery.timer.remove(b)})})

/**
 * jQuery.ScrollTo - Easy element scrolling using jQuery.
 * Copyright (c) 2007-2009 Ariel Flesler - aflesler(at)gmail(dot)com | http://flesler.blogspot.com
 * Dual licensed under MIT and GPL.
 * Date: 5/25/2009
 * @author Ariel Flesler
 * @version 1.4.2
 *
 * http://flesler.blogspot.com/2007/10/jqueryscrollto.html
 */
;(function(d){var k=d.scrollTo=function(a,i,e){d(window).scrollTo(a,i,e)};k.defaults={axis:'xy',duration:parseFloat(d.fn.jquery)>=1.3?0:1};k.window=function(a){return d(window)._scrollable()};d.fn._scrollable=function(){return this.map(function(){var a=this,i=!a.nodeName||d.inArray(a.nodeName.toLowerCase(),['iframe','#document','html','body'])!=-1;if(!i)return a;var e=(a.contentWindow||a).document||a.ownerDocument||a;return d.browser.safari||e.compatMode=='BackCompat'?e.body:e.documentElement})};d.fn.scrollTo=function(n,j,b){if(typeof j=='object'){b=j;j=0}if(typeof b=='function')b={onAfter:b};if(n=='max')n=9e9;b=d.extend({},k.defaults,b);j=j||b.speed||b.duration;b.queue=b.queue&&b.axis.length>1;if(b.queue)j/=2;b.offset=p(b.offset);b.over=p(b.over);return this._scrollable().each(function(){var q=this,r=d(q),f=n,s,g={},u=r.is('html,body');switch(typeof f){case'number':case'string':if(/^([+-]=)?\d+(\.\d+)?(px|%)?$/.test(f)){f=p(f);break}f=d(f,this);case'object':if(f.is||f.style)s=(f=d(f)).offset()}d.each(b.axis.split(''),function(a,i){var e=i=='x'?'Left':'Top',h=e.toLowerCase(),c='scroll'+e,l=q[c],m=k.max(q,i);if(s){g[c]=s[h]+(u?0:l-r.offset()[h]);if(b.margin){g[c]-=parseInt(f.css('margin'+e))||0;g[c]-=parseInt(f.css('border'+e+'Width'))||0}g[c]+=b.offset[h]||0;if(b.over[h])g[c]+=f[i=='x'?'width':'height']()*b.over[h]}else{var o=f[h];g[c]=o.slice&&o.slice(-1)=='%'?parseFloat(o)/100*m:o}if(/^\d+$/.test(g[c]))g[c]=g[c]<=0?0:Math.min(g[c],m);if(!a&&b.queue){if(l!=g[c])t(b.onAfterFirst);delete g[c]}});t(b.onAfter);function t(a){r.animate(g,j,b.easing,a&&function(){a.call(this,n,b)})}}).end()};k.max=function(a,i){var e=i=='x'?'Width':'Height',h='scroll'+e;if(!d(a).is('html,body'))return a[h]-d(a)[e.toLowerCase()]();var c='client'+e,l=a.ownerDocument.documentElement,m=a.ownerDocument.body;return Math.max(l[h],m[h])-Math.min(l[c],m[c])};function p(a){return typeof a=='object'?a:{top:a,left:a}}})(jQuery);