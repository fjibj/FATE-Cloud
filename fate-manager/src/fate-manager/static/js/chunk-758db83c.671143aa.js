(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-758db83c"],{"1af6":function(t,n,e){var r=e("63b6");r(r.S,"Array",{isArray:e("9003")})},"20fd":function(t,n,e){"use strict";var r=e("d9f6"),a=e("aebd");t.exports=function(t,n,e){n in t?r.f(t,n,a(0,e)):t[n]=e}},"29e5":function(t,n,e){},"549b":function(t,n,e){"use strict";var r=e("d864"),a=e("63b6"),o=e("241e"),i=e("b0dc"),c=e("3702"),u=e("b447"),d=e("20fd"),s=e("7cd6");a(a.S+a.F*!e("4ee1")(function(t){Array.from(t)}),"Array",{from:function(t){var n,e,a,f,l=o(t),p="function"==typeof this?this:Array,b=arguments.length,m=b>1?arguments[1]:void 0,y=void 0!==m,v=0,h=s(l);if(y&&(m=r(m,b>2?arguments[2]:void 0,2)),void 0==h||p==Array&&c(h))for(n=u(l.length),e=new p(n);n>v;v++)d(e,v,y?m(l[v],v):l[v]);else for(f=h.call(l),e=new p;!(a=f.next()).done;v++)d(e,v,y?i(f,m,[a.value,v],!0):a.value);return e.length=v,e}})},"54a1":function(t,n,e){e("6c1c"),e("1654"),t.exports=e("95d5")},"75fc":function(t,n,e){"use strict";var r=e("a745"),a=e.n(r);function o(t){if(a()(t)){for(var n=0,e=new Array(t.length);n<t.length;n++)e[n]=t[n];return e}}var i=e("774e"),c=e.n(i),u=e("c8bb"),d=e.n(u);function s(t){if(d()(Object(t))||"[object Arguments]"===Object.prototype.toString.call(t))return c()(t)}function f(){throw new TypeError("Invalid attempt to spread non-iterable instance")}function l(t){return o(t)||s(t)||f()}e.d(n,"a",function(){return l})},"774e":function(t,n,e){t.exports=e("d2d5")},8823:function(t,n,e){"use strict";e.r(n);var r=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"prepare"},[e("div",{staticClass:"prepare-box"},[e("div",{staticClass:"middle-title"},[t._v("\n          Before your begin\n      ")]),e("div",{staticClass:"middle-text"},[t._v("\n          To follow this guide, you need:\n      ")]),e("div",{staticClass:"middle-box"},[e("div",{staticClass:"left"},t._l(t.itmeList,function(n,r){return e("span",{key:r},[e("div",[t._v(t._s(n.procName))])])}),0),e("div",{staticClass:"right"},t._l(t.itmeList,function(n,r){return e("span",{key:r},[e("div",[t._v(t._s(n.procDesc)),e("span",{staticStyle:{color:"#848C99"}},[t._v(" and above")])])])}),0)]),e("div",{staticClass:"foot-text"},[t._v("\n          Make sure all the above requirements are met and go ahead with the installation.\n      ")]),e("div",{staticClass:"foot-btn"},[e("el-button",{attrs:{type:"primary"},on:{click:t.toDeploy}},[t._v("Start")])],1)])])},a=[],o=e("75fc"),i=e("de61"),c={name:"prepare",props:{formInline:{type:Object,default:function(){return{}}},currentSteps:{type:Object,default:function(){return{}}}},data:function(){return{itmeList:[]}},watch:{},computed:{},created:function(){this.initi()},methods:{initi:function(){var t=this;Object(i["c"])().then(function(n){t.itmeList=Object(o["a"])(n.data)})},toDeploy:function(){var t=this,n={federatedId:this.formInline.federatedId,partyId:this.formInline.partyId,productType:1,clickType:2};Object(i["h"])(n).then(function(n){t.$parent.page=2,t.$router.push({name:"deploying",query:{federatedId:t.formInline.federatedId,partyId:t.formInline.partyId,siteName:t.formInline.siteName}})})}}},u=c,d=(e("e75d"),e("2877")),s=Object(d["a"])(u,r,a,!1,null,null,null);n["default"]=s.exports},9003:function(t,n,e){t.exports=e("0b93")(176)},"95d5":function(t,n,e){var r=e("40c3"),a=e("5168")("iterator"),o=e("481b");t.exports=e("584a").isIterable=function(t){var n=Object(t);return void 0!==n[a]||"@@iterator"in n||o.hasOwnProperty(r(n))}},a745:function(t,n,e){t.exports=e("f410")},aebd:function(t,n,e){t.exports=e("0b93")(26)},c8bb:function(t,n,e){t.exports=e("54a1")},d2d5:function(t,n,e){e("1654"),e("549b"),t.exports=e("584a").Array.from},de61:function(t,n,e){"use strict";e.d(n,"c",function(){return o}),e.d(n,"g",function(){return i}),e.d(n,"d",function(){return c}),e.d(n,"b",function(){return u}),e.d(n,"e",function(){return d}),e.d(n,"j",function(){return s}),e.d(n,"f",function(){return f}),e.d(n,"a",function(){return l}),e.d(n,"l",function(){return p}),e.d(n,"k",function(){return b}),e.d(n,"h",function(){return m}),e.d(n,"i",function(){return y});var r=e("b775"),a="fate-manager";function o(t){return Object(r["a"])({url:"/".concat(a,"/api/deploy/prepare"),method:"get",params:t})}function i(t){return Object(r["a"])({url:"/".concat(a,"/api/deploy/pull"),method:"post",data:t})}function c(t){return Object(r["a"])({url:"/".concat(a,"/api/deploy/pulllist"),method:"post",data:t})}function u(t){return Object(r["a"])({url:"/".concat(a,"/api/deploy/installlist"),method:"post",data:t})}function d(t){return Object(r["a"])({url:"/".concat(a,"/api/deploy/testlist"),method:"post",data:t})}function s(t){return Object(r["a"])({url:"/".concat(a,"/api/deploy/commit"),method:"post",data:t})}function f(t){return Object(r["a"])({url:"/".concat(a,"/api/deploy/install"),method:"post",data:t})}function l(t){return Object(r["a"])({url:"/".concat(a,"/api/deploy/autotest"),method:"post",data:t})}function p(t){return Object(r["a"])({url:"/".concat(a,"/api/deploy/update"),method:"post",data:t})}function b(t){return Object(r["a"])({url:"/".concat(a,"/api/deploy/upgrade"),method:"post",data:t})}function m(t){return Object(r["a"])({url:"/".concat(a,"/api/deploy/click"),method:"post",data:t})}function y(t){return Object(r["a"])({url:"/".concat(a,"/api/deploy/fateboard"),method:"post",data:t})}},e75d:function(t,n,e){"use strict";var r=e("29e5"),a=e.n(r);a.a},f410:function(t,n,e){e("1af6"),t.exports=e("584a").Array.isArray}}]);