(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{291:function(t,e,n){var content=n(305);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(51).default)("3b8c6356",content,!0,{sourceMap:!1})},304:function(t,e,n){"use strict";n(291)},305:function(t,e,n){(e=n(50)(!1)).push([t.i,".delete-icon[data-v-cd760b84]{top:50%;transform:translateY(-50%);right:8px}",""]),t.exports=e},310:function(t,e,n){"use strict";n(22),n(23),n(15),n(67);var r=n(11),c=n(24),o=n(34),l=n(35),f=n(20),d=n(5),y=n(44);function v(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=Object(f.a)(t);if(e){var c=Object(f.a)(this).constructor;n=Reflect.construct(r,arguments,c)}else n=r.apply(this,arguments);return Object(l.a)(this,n)}}var m=function(t,e,n,desc){var r,c=arguments.length,o=c<3?e:null===desc?desc=Object.getOwnPropertyDescriptor(e,n):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(d.a)(Reflect))&&"function"==typeof Reflect.decorate)o=Reflect.decorate(t,e,n,desc);else for(var i=t.length-1;i>=0;i--)(r=t[i])&&(o=(c<3?r(o):c>3?r(e,n,o):r(e,n))||o);return c>3&&o&&Object.defineProperty(e,n,o),o},h=function(t,e){if("object"===("undefined"==typeof Reflect?"undefined":Object(d.a)(Reflect))&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)},_=function(t){Object(o.a)(n,t);var e=v(n);function n(){var t;return Object(r.a)(this,n),(t=e.apply(this,arguments)).searchTerm="",t}return Object(c.a)(n,[{key:"getFilterPredicate",value:function(t){throw new Error("Not implemented")}},{key:"displayableItems",get:function(){return this.items.filter(this.getFilterPredicate(this.searchTerm))}}]),n}(y.e);m([Object(y.c)({default:[]}),h("design:type",Array)],_.prototype,"items",void 0),m([Object(y.d)(),h("design:type",Object)],_.prototype,"searchTerm",void 0);var j=_,O=(n(304),n(25)),component=Object(O.a)(j,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"flex-0"},[n("label",{staticClass:"mb-2",attrs:{for:"search"}},[n("span",{staticClass:"font-bold"},[t._v(t._s(t.$t("search.title")))]),t._v(" "),n("span",{staticClass:"text-xs"},[t._v("("+t._s(t.$t("search.hint"))+")")])]),t._v(" "),n("div",{staticClass:"relative mb-2"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.searchTerm,expression:"searchTerm"}],staticClass:"p-2 bg-transparent focus:bg-yellow-200 border-b-2 border-black outline-none w-full",attrs:{id:"search",type:"text"},domProps:{value:t.searchTerm},on:{input:function(e){e.target.composing||(t.searchTerm=e.target.value)}}}),t._v(" "),t.searchTerm&&t.searchTerm.length>0?n("font-awesome-icon",{staticClass:"right-0 top-0.5 absolute cursor-pointer delete-icon",attrs:{icon:["fas","times"]},on:{click:function(e){t.searchTerm=""}}}):t._e()],1),t._v(" "),n("p",{staticClass:"text-xs mb-2"},[t._v("\n      "+t._s(t.$t("search.showingXofY",{x:t.displayableItems?t.displayableItems.length:0,y:t.items.length}))+"\n    ")])]),t._v(" "),t._t("default",null,{items:t.displayableItems})],2)}),[],!1,null,"cd760b84",null);e.a=component.exports},326:function(t,e,n){"use strict";n(22),n(23),n(15),n(67);var r=n(11),c=n(24),o=n(34),l=n(35),f=n(20),d=n(5),y=n(44),v=n(68),m=n(93),h=n(137);n(109);function _(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=Object(f.a)(t);if(e){var c=Object(f.a)(this).constructor;n=Reflect.construct(r,arguments,c)}else n=r.apply(this,arguments);return Object(l.a)(this,n)}}var j=function(t,e,n,desc){var r,c=arguments.length,o=c<3?e:null===desc?desc=Object.getOwnPropertyDescriptor(e,n):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(d.a)(Reflect))&&"function"==typeof Reflect.decorate)o=Reflect.decorate(t,e,n,desc);else for(var i=t.length-1;i>=0;i--)(r=t[i])&&(o=(c<3?r(o):c>3?r(e,n,o):r(e,n))||o);return c>3&&o&&Object.defineProperty(e,n,o),o},O=function(t,e){if("object"===("undefined"==typeof Reflect?"undefined":Object(d.a)(Reflect))&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)},R=function(t){Object(o.a)(n,t);var e=_(n);function n(){var t;return Object(r.a)(this,n),(t=e.apply(this,arguments)).editingEntity=null,t}return Object(c.a)(n,[{key:"createNew",value:function(){var t=this;this.createNewEntityFunction(),this.$nextTick((function(){t.editingEntity=t.items[t.items.length-1],t.$nextTick((function(){t.$refs.editModal.show()}))}))}},{key:"edit",value:function(t){var e=this;this.editingEntity=t,this.$nextTick((function(){e.$refs.editModal.show()}))}},{key:"deleteEntity",value:function(t){this.$refs.editModal.hide(),this.deleteEntityFunction(t)}}]),n}(y.e);j([Object(y.c)(),O("design:type",Function)],R.prototype,"createNewEntityFunction",void 0),j([Object(y.c)(),O("design:type",Function)],R.prototype,"deleteEntityFunction",void 0),j([Object(y.c)(),O("design:type",Array)],R.prototype,"items",void 0),j([Object(y.c)(),O("design:type",String)],R.prototype,"translationKey",void 0),j([Object(y.d)(),O("design:type",Object)],R.prototype,"editingEntity",void 0);var w=R=j([Object(y.a)({components:{FButton:m.a,FModal:h.a,FontAwesomeIcon:v.a}})],R),x=n(25),component=Object(x.a)(w,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("h1",{staticClass:"text-3xl"},[t._v("\n    "+t._s(t.$t(t.translationKey+".title"))+"\n  ")]),t._v(" "),n("p",{staticClass:"mb-4"},[t._v("\n    "+t._s(t.$t(t.translationKey+".introduction"))+"\n  ")]),t._v(" "),n("f-button",{staticClass:"mb-4 create-new-button",on:{click:t.createNew}},[n("font-awesome-icon",{staticClass:"mr-4",attrs:{icon:["fas","plus"]}}),t._v("\n    "+t._s(t.$t(t.translationKey+".edit.new"))+"\n  ")],1),t._v(" "),t._t("searchableList",null,{editFunction:t.edit}),t._v(" "),t.editingEntity?n("f-modal",{ref:"editModal"},[n("div",{staticClass:"flex my-4"},[n("h2",{staticClass:"text-xl flex-1"},[t._v("\n        "+t._s(t.$t(t.translationKey+".edit.modalTitle"))+"\n      ")]),t._v(" "),n("div",[n("f-button",{staticClass:"flex-0",on:{click:function(e){return t.deleteEntity(t.editingEntity)}}},[n("font-awesome-icon",{staticClass:"mr-4",attrs:{icon:["fas","trash"]}}),t._v("\n          "+t._s(t.$t(t.translationKey+".edit.delete"))+"\n        ")],1)],1)]),t._v(" "),t._t("editModalForm",null,{editingEntity:t.editingEntity}),t._v(" "),n("f-button",{staticClass:"w-full mb-2",on:{click:function(e){return t.$refs.editModal.hide()}}},[n("font-awesome-icon",{staticClass:"mr-4",attrs:{icon:["fas","check"]}}),t._v("\n      "+t._s(t.$t(t.translationKey+".edit.save"))+"\n    ")],1)],2):t._e()],2)}),[],!1,null,null,null);e.a=component.exports},693:function(t,e,n){"use strict";n.r(e);n(22),n(23),n(15),n(67);var r=n(11),c=n(24),o=n(34),l=n(35),f=n(20),d=n(5),y=n(44),v=(n(29),n(60),n(61),n(72),n(310)),m=n(7);function h(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=Object(f.a)(t);if(e){var c=Object(f.a)(this).constructor;n=Reflect.construct(r,arguments,c)}else n=r.apply(this,arguments);return Object(l.a)(this,n)}}var _=function(t,e,n,desc){var r,c=arguments.length,o=c<3?e:null===desc?desc=Object.getOwnPropertyDescriptor(e,n):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(d.a)(Reflect))&&"function"==typeof Reflect.decorate)o=Reflect.decorate(t,e,n,desc);else for(var i=t.length-1;i>=0;i--)(r=t[i])&&(o=(c<3?r(o):c>3?r(e,n,o):r(e,n))||o);return c>3&&o&&Object.defineProperty(e,n,o),o},j=function(t){Object(o.a)(n,t);var e=h(n);function n(){return Object(r.a)(this,n),e.apply(this,arguments)}return Object(c.a)(n,[{key:"getFilterPredicate",value:function(t){var e=t.split(",").map((function(s){return s.trim()}));return function(i){return e.some((function(t){return t.split("&").map((function(s){return s.trim()})).every((function(t){return i.name.toLowerCase().includes(t.toLowerCase())}))}))}}}]),n}(v.a),O=j=_([y.a],j),R=n(8),w=n(326);function x(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=Object(f.a)(t);if(e){var c=Object(f.a)(this).constructor;n=Reflect.construct(r,arguments,c)}else n=r.apply(this,arguments);return Object(l.a)(this,n)}}var C=function(t,e,n,desc){var r,c=arguments.length,o=c<3?e:null===desc?desc=Object.getOwnPropertyDescriptor(e,n):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(d.a)(Reflect))&&"function"==typeof Reflect.decorate)o=Reflect.decorate(t,e,n,desc);else for(var i=t.length-1;i>=0;i--)(r=t[i])&&(o=(c<3?r(o):c>3?r(e,n,o):r(e,n))||o);return c>3&&o&&Object.defineProperty(e,n,o),o},E=function(t,e){if("object"===("undefined"==typeof Reflect?"undefined":Object(d.a)(Reflect))&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)},k=function(t){Object(o.a)(n,t);var e=x(n);function n(){var t;return Object(r.a)(this,n),(t=e.apply(this,arguments)).ingredientCategories=R.a,t}return Object(c.a)(n,[{key:"createNew",value:function(){var t=new m.a("","",R.a.uncategorized);this.$store.commit("SET_INGREDIENT",{index:this.items.length,ingredient:t})}},{key:"deleteItem",value:function(t){this.$store.commit("DELETE_INGREDIENT",{ingredient:t})}},{key:"items",get:function(){var t=this,e={get:function(e,n){return"object"!==Object(d.a)(e[n])||null===e[n]?e[n]:new Proxy(e[n],{get:function(t,e){return t[e]},set:function(e,r,c){return t.$store.commit("UPDATE_INGREDIENT_PROPERTY",{ingredient:e,index:n,key:r,value:c}),!0}})}};return new Proxy(this.$store.state.ingredients,e)}}]),n}(y.e);C([Object(y.d)(),E("design:type",Object)],k.prototype,"ingredientCategories",void 0);var $=k=C([Object(y.a)({components:{SearchableIngredientList:O,EditPage:w.a},head:function(){return{title:this.$t("ingredients.title")}}})],k),P=n(25),component=Object(P.a)($,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("edit-page",{attrs:{"create-new-entity-function":t.createNew,"delete-entity-function":t.deleteItem,items:t.items,"translation-key":"ingredients"},scopedSlots:t._u([{key:"searchableList",fn:function(e){var r=e.editFunction;return[n("searchable-ingredient-list",{attrs:{items:t.items},scopedSlots:t._u([{key:"default",fn:function(e){var c=e.items;return[n("ul",t._l(c,(function(e,c){return n("li",{key:c,staticClass:"transition-all duration-150 ease-in-out mb-4 p-3 bg-white hover:bg-yellow-100 shadow-lg hover:shadow-xl cursor-pointer",on:{click:function(t){return r(e)}}},[n("span",{staticClass:"font-bold mr-4"},[t._v(t._s(e.name))]),t._v(" ("+t._s(e.unit)+")\n        ")])})),0)]}}],null,!0)})]}},{key:"editModalForm",fn:function(e){var r=e.editingEntity;return[r?n("div",[n("div",{staticClass:"mb-8"},[n("label",{staticClass:"mb-2 font-bold",attrs:{for:"editTitle"}},[t._v("\n          "+t._s(t.$t("ingredients.edit.name"))+"\n        ")]),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:r.name,expression:"editingEntity.name"}],staticClass:"p-2 bg-transparent focus:bg-yellow-200 border-b-2 border-black outline-none w-full",attrs:{id:"editTitle",type:"text"},domProps:{value:r.name},on:{input:function(e){e.target.composing||t.$set(r,"name",e.target.value)}}})]),t._v(" "),n("div",{staticClass:"mb-8"},[n("label",{staticClass:"mb-2 font-bold",attrs:{for:"editUrl"}},[t._v("\n          "+t._s(t.$t("ingredients.edit.unit"))+"\n        ")]),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:r.unit,expression:"editingEntity.unit"}],staticClass:"p-2 bg-transparent focus:bg-yellow-200 border-b-2 border-black outline-none w-full",attrs:{id:"editUrl",type:"text"},domProps:{value:r.unit},on:{input:function(e){e.target.composing||t.$set(r,"unit",e.target.value)}}})]),t._v(" "),n("div",{staticClass:"mb-8"},[n("label",{staticClass:"mb-2 font-bold",attrs:{for:"editCategory"}},[t._v("\n          "+t._s(t.$t("ingredients.edit.category"))+"\n        ")]),t._v(" "),n("select",{directives:[{name:"model",rawName:"v-model",value:r.category,expression:"editingEntity.category"}],staticClass:"border-b-2 border-black bg-transparent focus:bg-yellow-200 p-2 outline-none mr-4 flex-1 w-full",attrs:{id:"editCategory"},on:{change:function(e){var n=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){return"_value"in t?t._value:t.value}));t.$set(r,"category",e.target.multiple?n:n[0])}}},t._l(t.ingredientCategories,(function(e,r){return n("option",{key:e+"_select_"+r,domProps:{value:e}},[t._v("\n            "+t._s(t.$t("categories."+e))+"\n          ")])})),0)])]):t._e()]}}])})}),[],!1,null,null,null);e.default=component.exports}}]);