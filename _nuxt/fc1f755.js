(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{303:function(t,e,n){var content=n(316);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(50).default)("e510ae4e",content,!0,{sourceMap:!1})},314:function(t,e,n){"use strict";n(22),n(23),n(15),n(67);var o=n(11),r=n(24),c=n(34),l=n(35),f=n(20),d=n(5),y=n(44),v=n(13);function m(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,o=Object(f.a)(t);if(e){var r=Object(f.a)(this).constructor;n=Reflect.construct(o,arguments,r)}else n=o.apply(this,arguments);return Object(l.a)(this,n)}}var h,_=function(t,e,n,desc){var o,r=arguments.length,c=r<3?e:null===desc?desc=Object.getOwnPropertyDescriptor(e,n):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(d.a)(Reflect))&&"function"==typeof Reflect.decorate)c=Reflect.decorate(t,e,n,desc);else for(var i=t.length-1;i>=0;i--)(o=t[i])&&(c=(r<3?o(c):r>3?o(e,n,c):o(e,n))||c);return r>3&&c&&Object.defineProperty(e,n,c),c},k=function(t,e){if("object"===("undefined"==typeof Reflect?"undefined":Object(d.a)(Reflect))&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)},j=function(t){Object(c.a)(n,t);var e=m(n);function n(){return Object(o.a)(this,n),e.apply(this,arguments)}return Object(r.a)(n,[{key:"style",get:function(){return"background-color: ".concat(this.tag.color.rgb,";")}}]),n}(y.e);_([Object(y.c)(),k("design:type","function"==typeof(h=void 0!==v.a&&v.a)?h:Object)],j.prototype,"tag",void 0),_([Object(y.c)(),k("design:type",Boolean)],j.prototype,"showName",void 0);var w=j=_([y.a],j),O=(n(315),n(25)),component=Object(O.a)(w,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"px-3 py-1 rounded-full inline-block",style:t.style},[n("span",{staticClass:"tag-icon"},[t._v("\n    "+t._s(t.tag.icon)+"\n  ")]),t._v(" "),t.showName?[n("span",{staticClass:"text-xs"},[t._v("\n      "+t._s(t.tag.name)+"\n    ")])]:t._e()],2)}),[],!1,null,"7f20f38e",null);e.a=component.exports},315:function(t,e,n){"use strict";n(303)},316:function(t,e,n){(e=n(49)(!1)).push([t.i,".tag-icon[data-v-7f20f38e]{text-shadow:1px 1px 2px #000}",""]),t.exports=e},373:function(t,e,n){"use strict";n(22),n(23),n(15),n(67);var o=n(11),r=n(24),c=n(34),l=n(35),f=n(20),d=n(5),y=n(44);n(73),n(6);function v(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,o=Object(f.a)(t);if(e){var r=Object(f.a)(this).constructor;n=Reflect.construct(o,arguments,r)}else n=o.apply(this,arguments);return Object(l.a)(this,n)}}var m=function(t,e,n,desc){var o,r=arguments.length,c=r<3?e:null===desc?desc=Object.getOwnPropertyDescriptor(e,n):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(d.a)(Reflect))&&"function"==typeof Reflect.decorate)c=Reflect.decorate(t,e,n,desc);else for(var i=t.length-1;i>=0;i--)(o=t[i])&&(c=(r<3?o(c):r>3?o(e,n,c):o(e,n))||c);return r>3&&c&&Object.defineProperty(e,n,c),c},h=function(t,e){if("object"===("undefined"==typeof Reflect?"undefined":Object(d.a)(Reflect))&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)},_=function(t){Object(c.a)(n,t);var e=v(n);function n(){var t;return Object(o.a)(this,n),(t=e.apply(this,arguments)).days=["mon","tue","wed","thu","fri","sat","sun"],t.dayTimes=["breakfast","lunch","dinner"],t}return Object(r.a)(n,[{key:"currentWeekday",get:function(){return["sun","mon","tue","wed","thu","fri","sat"][(new Date).getDay()]}}]),n}(y.e);m([Object(y.c)({default:!0}),h("design:type",Boolean)],_.prototype,"showCurrentDay",void 0),m([Object(y.d)(),h("design:type",Array)],_.prototype,"days",void 0),m([Object(y.d)(),h("design:type",Array)],_.prototype,"dayTimes",void 0);var k=_=m([y.a],_),j=n(25),component=Object(j.a)(k,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("table",{staticClass:"bg-white shadow-md border-white border-8 select-none"},[n("thead",[n("tr",{staticClass:"border-b-2 border-gray-400"},[n("th",{staticClass:"w-1/7"},[t._t("corner")],2),t._v(" "),t._l(t.dayTimes,(function(e,o){return n("th",{key:o,staticClass:"w-2/7 border-l-2 border-gray-400 p-4"},[n("span",{domProps:{innerHTML:t._s(t.$t("daytimes."+e))}}),t._v(" "),t._t(e)],2)}))],2)]),t._v(" "),n("tbody",t._l(t.days,(function(e){return n("tr",{key:e,staticClass:"border-b-2 border-gray-400",class:{"bg-green-100":e===t.currentWeekday&&t.showCurrentDay}},[n("td",{staticClass:"text-center font-bold py-8"},[t._v("\n        "+t._s(t.$t("weekdays."+e))+"\n        "),t._t(e,null,{dayKey:e})],2),t._v(" "),t._l(t.dayTimes,(function(o){return n("td",{key:e+"/"+o,staticClass:"border-l-2 border-gray-400",attrs:{"data-day":e,"data-time":o}},[t._t(e+"/"+o,null,{dayKey:e,timeKey:o})],2)}))],2)})),0)])}),[],!1,null,null,null);e.a=component.exports},379:function(t,e,n){var content=n(447);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(50).default)("707eaf2b",content,!0,{sourceMap:!1})},446:function(t,e,n){"use strict";n(379)},447:function(t,e,n){(e=n(49)(!1)).push([t.i,".ghost-class{background:transparent}",""]),t.exports=e},708:function(t,e,n){"use strict";n.r(e);n(22),n(23),n(15),n(67);var o=n(11),r=n(24),c=n(34),l=n(35),f=n(20),d=n(5),y=n(3),v=n(44),m=n(68),h=n(140),_=n.n(h),k=n(93),j=n(373),w=n(314),O=(n(13),n(42),n(6),n(73),n(40));n(12);function C(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,o=Object(f.a)(t);if(e){var r=Object(f.a)(this).constructor;n=Reflect.construct(o,arguments,r)}else n=o.apply(this,arguments);return Object(l.a)(this,n)}}var R=function(t,e,n,desc){var o,r=arguments.length,c=r<3?e:null===desc?desc=Object.getOwnPropertyDescriptor(e,n):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(d.a)(Reflect))&&"function"==typeof Reflect.decorate)c=Reflect.decorate(t,e,n,desc);else for(var i=t.length-1;i>=0;i--)(o=t[i])&&(c=(r<3?o(c):r>3?o(e,n,c):o(e,n))||c);return r>3&&c&&Object.defineProperty(e,n,c),c},x=function(t,e){if("object"===("undefined"==typeof Reflect?"undefined":Object(d.a)(Reflect))&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)},$=function(t){Object(c.a)(n,t);var e=C(n);function n(){var t;return Object(o.a)(this,n),(t=e.apply(this,arguments)).meals=t.$store.state.meals,t.ingredients=t.$store.state.ingredients,t.days=["mon","tue","wed","thu","fri","sat","sun"],t.dayTimes=["breakfast","lunch","dinner"],t.hasAcceptedCookies="yes"===localStorage.getItem("cookiesAccepted"),t}return Object(r.a)(n,[{key:"download",value:function(){var data=encodeURIComponent(JSON.stringify(this.$store.getters.serializable)),t=this.$refs.downloadLink;t.setAttribute("href","data:text/json;charset=utf-8,".concat(data)),t.click()}},{key:"restoreFromFile",value:function(t){var e=this,n=t.target.files;if(0!==n.length){var o=new FileReader;o.onload=function(t){var n,data=null==t||null===(n=t.target)||void 0===n?void 0:n.result;if(data){var o=JSON.parse(data),r=Object(y.deserialize)(o,O.a);e.$store.commit("SET_MEALPLANSETTINGS",r),e.$refs.fileupload.value=""}},o.readAsText(n[0])}}},{key:"deleteAllData",value:function(){localStorage.getItem("state")&&localStorage.setItem("state","")}},{key:"acceptCookies",value:function(){localStorage.setItem("cookiesAccepted","yes"),this.hasAcceptedCookies=!0}},{key:"revokeCookies",value:function(){localStorage.setItem("cookiesAccepted","no"),this.hasAcceptedCookies=!1,this.deleteAllData()}},{key:"tags",get:function(){return this.$store.state.tags},set:function(t){}},{key:"allowedTagsInRandom",get:function(){var t=this,e=this.$store.state.allowedTagsInRandom,n={get:function(e,n){return"object"!==Object(d.a)(e[n])||null===e[n]?e[n]:new Proxy(e[n],{set:function(e,time,o){return t.$store.commit("SET_TAGS",{day:n,time:time,tags:o}),!0}})}};return new Proxy(e,n)}},{key:"dayTimeKeys",get:function(){var t=this,e=[];return this.dayTimes.forEach((function(n){return t.days.forEach((function(t){e.push("".concat(t,"/").concat(n))}))})),e}}]),n}(v.e);R([Object(v.d)(),x("design:type",Object)],$.prototype,"meals",void 0),R([Object(v.d)(),x("design:type",Object)],$.prototype,"ingredients",void 0),R([Object(v.d)(),x("design:type",Array)],$.prototype,"days",void 0),R([Object(v.d)(),x("design:type",Array)],$.prototype,"dayTimes",void 0),R([Object(v.d)(),x("design:type",Object)],$.prototype,"hasAcceptedCookies",void 0);var T=$=R([Object(v.a)({components:{TagPill:w.a,WeekplanTable:j.a,FButton:k.a,Draggable:_.a,FontAwesomeIcon:m.a},head:function(){return{title:this.$t("settings.title")}}})],$),A=(n(446),n(25)),component=Object(A.a)(T,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("h1",{staticClass:"text-3xl mb-4"},[t._v("\n    "+t._s(t.$t("settings.title"))+"\n  ")]),t._v(" "),n("h2",{staticClass:"text-2xl mb-4"},[t._v("\n    "+t._s(t.$t("settings.backupAndRestore"))+"\n  ")]),t._v(" "),n("p",{staticClass:"mb-4"},[t._v("\n    "+t._s(t.$t("settings.backupAndRestoreText"))+"\n  ")]),t._v(" "),n("div",{staticClass:"flex flex-wrap"},[n("f-button",{staticClass:"mr-4 mb-4",on:{click:t.download}},[n("font-awesome-icon",{staticClass:"mr-4",attrs:{icon:["fas","save"]}}),t._v("\n      "+t._s(t.$t("settings.downloadData"))+"\n    ")],1),t._v(" "),n("f-button",{staticClass:"mb-4",on:{click:function(e){return t.$refs.fileupload.click()}}},[n("font-awesome-icon",{staticClass:"mr-4",attrs:{icon:["fas","file-upload"]}}),t._v("\n      "+t._s(t.$t("settings.restoreData"))+"\n    ")],1),t._v(" "),n("input",{ref:"fileupload",staticClass:"hidden",attrs:{type:"file"},on:{input:t.restoreFromFile}})],1),t._v(" "),n("a",{ref:"downloadLink",staticClass:"hidden",attrs:{id:"download-link",href:"#",download:"yummyplan.txt"}}),t._v(" "),n("h2",{staticClass:"text-2xl mb-4"},[t._v("\n    "+t._s(t.$t("settings.randomize"))+"\n  ")]),t._v(" "),n("p",{staticClass:"mb-4"},[t._v("\n    "+t._s(t.$t("settings.randomizeText"))+"\n  ")]),t._v(" "),n("div",{staticClass:"flex flex-wrap mb-4"},[n("weekplan-table",{staticClass:"w-full md:w-2/3",scopedSlots:t._u([t._l(t.dayTimeKeys,(function(e){return{key:e,fn:function(o){var r=o.dayKey,c=o.timeKey;return[n("draggable",{key:e,staticClass:"pt-2 pl-2",attrs:{group:{name:e,put:!0},"ghost-class":"ghost",sort:!0,animation:120},model:{value:t.allowedTagsInRandom[r][c],callback:function(e){t.$set(t.allowedTagsInRandom[r],c,e)},expression:"allowedTagsInRandom[dayKey][timeKey]"}},t._l(t.allowedTagsInRandom[r][c],(function(t){return n("tag-pill",{key:t.name,staticClass:"mr-2 mb-2",attrs:{tag:t,"show-name":!0}})})),1)]}}}))],null,!0)}),t._v(" "),n("div",{staticClass:"w-full md:w-1/3 px-4"},[n("p",{staticClass:"mb-4"},[t._v("\n        ("+t._s(t.$t("settings.randomizeHint"))+")\n      ")]),t._v(" "),n("draggable",{attrs:{group:{name:"tag",pull:"clone",put:!0},"ghost-class":"ghost"},model:{value:t.tags,callback:function(e){t.tags=e},expression:"tags"}},[n("transition-group",t._l(t.tags,(function(t){return n("tag-pill",{key:t.name,staticClass:"mr-2 mb-2",attrs:{tag:t,"show-name":!0}})})),1)],1)],1)],1),t._v(" "),n("h2",{staticClass:"text-2xl mb-4"},[t._v("\n    "+t._s(t.$t("settings.dangerZone"))+"\n  ")]),t._v(" "),n("p",{staticClass:"mb-4"},[t._v("\n    "+t._s(t.$t("settings.dangerZoneText"))+"\n  ")]),t._v(" "),n("div",{staticClass:"flex flex-wrap"},[t.hasAcceptedCookies?n("f-button",{staticClass:"mr-4 mb-4",on:{click:t.revokeCookies}},[n("font-awesome-icon",{staticClass:"mr-4",attrs:{icon:["fas","times"]}}),t._v("\n      "+t._s(t.$t("settings.revokeCookies"))+"\n    ")],1):n("f-button",{staticClass:"mr-4 mb-4",on:{click:t.acceptCookies}},[n("font-awesome-icon",{staticClass:"mr-4",attrs:{icon:["fas","check"]}}),t._v("\n      "+t._s(t.$t("settings.acceptCookies"))+"\n    ")],1),t._v(" "),n("f-button",{staticClass:"mb-4",on:{click:t.deleteAllData}},[n("font-awesome-icon",{staticClass:"mr-4",attrs:{icon:["fas","trash"]}}),t._v("\n      "+t._s(t.$t("settings.deleteAllData"))+"\n    ")],1)],1)])}),[],!1,null,null,null);e.default=component.exports}}]);