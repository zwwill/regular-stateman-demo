/*! This file is created by NetEase URS */
!function(e){function t(n){if(r[n])return r[n].exports;var a=r[n]={exports:{},id:n,loaded:!1};return e[n].call(a.exports,a,a.exports,t),a.loaded=!0,a.exports}var n=window.webpackJsonp;window.webpackJsonp=function(r,i){for(var o,c,u=0,p=[];u<r.length;u++)c=r[u],a[c]&&p.push.apply(p,a[c]),a[c]=0;for(o in i)e[o]=i[o];for(n&&n(r,i);p.length;)p.shift().call(null,t)};var r={},a={1:0};return t.e=function(e,n){if(0===a[e])return n.call(null,t);if(void 0!==a[e])a[e].push(n);else{a[e]=[n];var r=document.getElementsByTagName("head")[0],i=document.createElement("script");i.type="text/javascript",i.charset="utf-8",i.async=!0,i.src=t.p+"index.89a45997."+e+".js",r.appendChild(i)}},t.m=e,t.c=r,t.p="/",t(0)}([function(e,t,n){"use strict";n.e(0,function(e){var t=[e(6),e(1),e(7),e(8),e(12),e(18),e(9),e(10),e(11),e(13),e(15)];(function(e,t,n,r,a,i,o,c,u,p,s){var l=function(){function e(e){return e=""+(e||""),e.length<=1?"0"+e:e}var t={yyyy:function(e){return e.getFullYear()},MM:function(t){return e(t.getMonth()+1)},dd:function(t){return e(t.getDate())},HH:function(t){return e(t.getHours())},mm:function(t){return e(t.getMinutes())}},n=new RegExp(Object.keys(t).join("|"),"g");return function(e,r){return r=r||"yyyy-MM-dd HH:mm",e=e?new Date(e):new Date,r.replace(n,function(n){return t[n]?t[n](e):""})}}();t.filter("format",l);var f=e({view:document.getElementById("#app"),Component:t});f.state("app",n,"").state("app.index",i,{url:""}).state("app.user",a).state("app.service",r).state("app.service.service1",o,"").state("app.service.service2",c,"service2").state("app.service.service3",u,"service3").on("notfound",function(){this.go("app.index",{replace:!0})}).on("begin",function(e){console.log("change"+e.current.name)}).start({html5:!1,prefix:"!"}),window.Regular=t}).apply(null,t)})}]);