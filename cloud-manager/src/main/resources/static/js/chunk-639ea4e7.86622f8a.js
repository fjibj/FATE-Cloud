(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-639ea4e7"],{"0a42":function(t,n,i){},"1af6":function(t,n,i){var a=i("63b6");a(a.S,"Array",{isArray:i("9003")})},"20fd":function(t,n,i){"use strict";var a=i("d9f6"),e=i("aebd");t.exports=function(t,n,i){n in t?a.f(t,n,e(0,i)):t[n]=i}},"549b":function(t,n,i){"use strict";var a=i("d864"),e=i("63b6"),s=i("241e"),o=i("b0dc"),u=i("3702"),r=i("b447"),c=i("20fd"),l=i("7cd6");e(e.S+e.F*!i("4ee1")(function(t){Array.from(t)}),"Array",{from:function(t){var n,i,e,d,p=s(t),f="function"==typeof this?this:Array,h=arguments.length,v=h>1?arguments[1]:void 0,b=void 0!==v,g=0,m=l(p);if(b&&(v=a(v,h>2?arguments[2]:void 0,2)),void 0==m||f==Array&&u(m))for(n=r(p.length),i=new f(n);n>g;g++)c(i,g,b?v(p[g],g):p[g]);else for(d=m.call(p),i=new f;!(e=d.next()).done;g++)c(i,g,b?o(d,v,[e.value,g],!0):e.value);return i.length=g,i}})},"54a1":function(t,n,i){i("6c1c"),i("1654"),t.exports=i("95d5")},"5b35":function(t,n,i){"use strict";var a=i("d415"),e=i.n(a);e.a},"75fc":function(t,n,i){"use strict";var a=i("a745"),e=i.n(a);function s(t){if(e()(t)){for(var n=0,i=new Array(t.length);n<t.length;n++)i[n]=t[n];return i}}var o=i("774e"),u=i.n(o),r=i("c8bb"),c=i.n(r);function l(t){if(c()(Object(t))||"[object Arguments]"===Object.prototype.toString.call(t))return u()(t)}function d(){throw new TypeError("Invalid attempt to spread non-iterable instance")}function p(t){return s(t)||l(t)||d()}i.d(n,"a",function(){return p})},"774e":function(t,n,i){t.exports=i("d2d5")},9003:function(t,n,i){t.exports=i("0b93")(176)},"95d5":function(t,n,i){var a=i("40c3"),e=i("5168")("iterator"),s=i("481b");t.exports=i("584a").isIterable=function(t){var n=Object(t);return void 0!==n[e]||"@@iterator"in n||s.hasOwnProperty(a(n))}},a032:function(t,n,i){"use strict";var a=i("0a42"),e=i.n(a);e.a},a5b0:function(t,n,i){"use strict";var a=function(){var t=this,n=t.$createElement,i=t._self._c||n;return i("div",{staticClass:"tooltip",style:t.elmwidth},[t.tooltip?i("el-tooltip",{attrs:{effect:"dark",placement:t.placement}},[i("div",{attrs:{slot:"content"},slot:"content"},[t._v(t._s(t.content))]),i("span",{ref:"name"},[t._v("\n              "+t._s(t.content)+"\n          ")])]):i("span",{ref:"name"},[t._v("\n          "+t._s(t.content)+"\n      ")])],1)},e=[],s=(i("7f7f"),{name:"OverflowTooltip",props:{width:{type:String,default:""},content:{type:String,default:""},placement:{type:String,default:"top"}},data:function(){return{tooltip:!1,elmwidth:""}},created:function(){},updated:function(){this.updatawidth()},mounted:function(){this.elmwidth="width:".concat(this.width),this.updatawidth()},methods:{updatawidth:function(){var t=this.$refs.name.offsetWidth;t>parseInt(this.width)?this.tooltip=!0:this.tooltip=!1}}}),o=s,u=(i("5b35"),i("2877")),r=Object(u["a"])(o,a,e,!1,null,null,null);n["a"]=r.exports},a745:function(t,n,i){t.exports=i("f410")},aebd:function(t,n,i){t.exports=i("0b93")(26)},c6a8:function(t,n,i){"use strict";i.d(n,"C",function(){return e}),i.d(n,"m",function(){return s}),i.d(n,"f",function(){return o}),i.d(n,"A",function(){return u}),i.d(n,"D",function(){return r}),i.d(n,"B",function(){return c}),i.d(n,"o",function(){return l}),i.d(n,"F",function(){return d}),i.d(n,"x",function(){return p}),i.d(n,"h",function(){return f}),i.d(n,"g",function(){return h}),i.d(n,"p",function(){return v}),i.d(n,"E",function(){return b}),i.d(n,"y",function(){return g}),i.d(n,"u",function(){return m}),i.d(n,"e",function(){return _}),i.d(n,"q",function(){return y}),i.d(n,"w",function(){return w}),i.d(n,"t",function(){return C}),i.d(n,"v",function(){return j}),i.d(n,"a",function(){return S}),i.d(n,"d",function(){return x}),i.d(n,"s",function(){return I}),i.d(n,"l",function(){return O}),i.d(n,"b",function(){return F}),i.d(n,"k",function(){return T}),i.d(n,"i",function(){return k}),i.d(n,"z",function(){return J}),i.d(n,"c",function(){return N}),i.d(n,"G",function(){return L}),i.d(n,"j",function(){return D}),i.d(n,"n",function(){return G}),i.d(n,"r",function(){return A});var a=i("b775");function e(t){return Object(a["a"])({url:"/cloud-manager/api/site/page/cloudManager",method:"post",data:t})}function s(t){return Object(a["a"])({url:"/cloud-manager/api/group/findPagedRegionInfoNew",method:"post",data:t})}function o(t){return Object(a["a"])({url:"/cloud-manager/api/site/check",method:"post",data:t})}function u(t){return Object(a["a"])({url:"/cloud-manager/api/site/addNew",method:"post",data:t})}function r(t){return Object(a["a"])({url:"/cloud-manager/api/site/updateNew",method:"post",data:t})}function c(t){return Object(a["a"])({url:"/cloud-manager/api/site/delete",method:"post",data:t})}function l(t){return Object(a["a"])({url:"/cloud-manager/api/site/find",method:"post",data:t})}function d(t){return Object(a["a"])({url:"/cloud-manager/api/site/checkWeb",method:"post",data:t})}function p(t){return Object(a["a"])({url:"/cloud-manager/api/site/ip/list",method:"post",data:t})}function f(t){return Object(a["a"])({url:"/cloud-manager/api/site/ip/deal",method:"post",data:t})}function h(t){return Object(a["a"])({url:"/cloud-manager/api/site/checkSiteName",method:"post",data:t})}function v(t){return Object(a["a"])({url:"/cloud-manager/api/system/page",method:"post",data:t})}function b(t){return Object(a["a"])({url:"/cloud-manager/api/system/history",method:"post",data:t})}function g(t){return Object(a["a"])({url:"/cloud-manager/api/site/ip/query/history",method:"post",data:t})}function m(t){return Object(a["a"])({url:"/cloud-manager/api/site/institutions",method:"post",data:t})}function _(t){return Object(a["a"])({url:"/cloud-manager/api/authority/cancel",method:"post",data:t})}function y(t){return Object(a["a"])({url:"/cloud-manager/api/authority/history/fateManager",method:"post",data:t})}function w(t){return Object(a["a"])({url:"/cloud-manager/api/authority/status",method:"post",data:t})}function C(t){return Object(a["a"])({url:"/cloud-manager/api/authority/details",method:"post",data:t})}function j(t){return Object(a["a"])({url:"/cloud-manager/api/authority/review",method:"post",data:t})}function S(t){return Object(a["a"])({url:"/cloud-manager/api/fate/user/institutions",method:"post",data:t})}function x(t){return Object(a["a"])({url:"/cloud-manager/api/authority/currentAuthority",method:"post",data:t})}function I(t){return Object(a["a"])({url:"/cloud-manager/api/dropdown/version",method:"post",data:t})}function O(t){return Object(a["a"])({url:"/cloud-manager/api/exchange/page",method:"post",data:t})}function F(t){return Object(a["a"])({url:"/cloud-manager/api/exchange/add",method:"post",data:t})}function T(t){return Object(a["a"])({url:"/cloud-manager/api/exchange/update",method:"post",data:t})}function k(t){return Object(a["a"])({url:"/cloud-manager/api/exchange/delete",method:"post",data:t})}function J(t){return Object(a["a"])({url:"/cloud-manager/api/product/page",method:"post",data:t})}function N(t){return Object(a["a"])({url:"/cloud-manager/api/product/add",method:"post",data:t})}function L(t){return Object(a["a"])({url:"/cloud-manager/api/product/update",method:"post",data:t})}function D(t){return Object(a["a"])({url:"/cloud-manager/api/product/delete",method:"post",data:t})}function G(t){return Object(a["a"])({url:"/cloud-manager/api/product/version",method:"post",data:t})}function A(t){return Object(a["a"])({url:"/cloud-manager/api/product/name",method:"post",data:t})}},c8bb:function(t,n,i){t.exports=i("54a1")},d17f:function(t,n,i){"use strict";var a=i("e4c5"),e=i.n(a);e.a},d2d5:function(t,n,i){i("1654"),i("549b"),t.exports=i("584a").Array.from},d415:function(t,n,i){},e4c5:function(t,n,i){},ecbd:function(t,n,i){"use strict";i.r(n);var a=function(){var t=this,n=t.$createElement,i=t._self._c||n;return i("div",{staticClass:"monitor-box"},[i("div",{staticClass:"monitor"},[i("div",{staticClass:"monitor-header"},[i("el-radio-group",{staticClass:"radio",on:{change:t.handleChahe},model:{value:t.radio,callback:function(n){t.radio=n},expression:"radio"}},[i("el-radio-button",{attrs:{label:"Today’s active data"}}),i("el-radio-button",{attrs:{label:"Cumulative active data"}})],1)],1),i("div",{staticClass:"monitor-body"},[i("div",{staticClass:"content"},[i("monitortoday",{ref:"monitortoday"})],1)])])])},e=[],s=function(){var t=this,n=t.$createElement,i=t._self._c||n;return i("div",["Today’s active data"===t.type?i("div",{staticClass:"type-time"},[i("span",[t._v("Active institutions today: ")]),i("span",{staticStyle:{color:"#217AD9"}},[t._v(t._s(t.activejobs.active))])]):i("div",{staticClass:"time-picker"},[i("span",{staticClass:"date"},[t._v("Date")]),i("el-date-picker",{attrs:{clearable:!1,type:"daterange","range-separator":"~","value-format":"timestamp","start-placeholder":"start","end-placeholder":"end","picker-options":t.pickerOptions},on:{change:t.initi},model:{value:t.timevalue,callback:function(n){t.timevalue=n},expression:"timevalue"}})],1),i("div",{staticClass:"content-item"},[i("div",{staticClass:"jobs-complete"},[i("span",[t._v("Federated modeling jobs：")]),i("span",{staticClass:"span"},[t._v(t._s(t.activejobs.total))]),i("span",[t._v("waiting：")]),i("span",{staticClass:"span"},[t._v(t._s(t.activejobs.waiting)+" ("+t._s(t._f("toGetFixed")(t.activejobs.waiting/t.activejobs.total))+"%)   ")]),i("span",[t._v("running：")]),i("span",{staticClass:"span"},[t._v(t._s(t.activejobs.running)+" ("+t._s(t._f("toGetFixed")(t.activejobs.running/t.activejobs.total))+"%)   ")]),i("span",[t._v("success：")]),i("span",{staticClass:"span"},[t._v(t._s(t.activejobs.success)+" ("+t._s(t._f("toGetFixed")(t.activejobs.success/t.activejobs.total))+"%)   ")]),i("span",[t._v("failed：")]),i("span",{staticClass:"span"},[t._v(t._s(t.activejobs.failed)+" ("+t._s(t._f("toGetFixed")(1-t.activejobs.waiting/t.activejobs.total-t.activejobs.running/t.activejobs.total-t.activejobs.success/t.activejobs.total))+"%)")])]),i("div",{staticClass:"institutions-jobs"},[i("div",{staticClass:"institutions"},[t.institutionsList.length>0?i("div",{staticClass:"item-box"},t._l(t.institutionsList,function(n,a){return i("span",{key:a},[i("div",{class:{"item-institution":!0,"institution-activa":n.show},on:{click:function(i){return t.getsite(n,a)}}},[i("overflowtooltip",{staticClass:"item-text",attrs:{width:"100px",content:n.institutions,placement:"top"}}),i("span",{ref:"bar",refInFor:!0,staticClass:"bar",style:t.stylebar},[i("div",{staticClass:"item-bar",style:"width:"+n.total*t.institutionsitemWidth/n.max+"px"}),i("span",{ref:"text",refInFor:!0,staticClass:"text"},[t._v(t._s(n.total))])]),n.show?i("i",{staticClass:"el-icon-caret-right icon-right"}):t._e()],1)])}),0):i("div",{staticClass:"item-box no-date-box"},[t._v("\n                    No Data\n                ")]),i("div",{staticClass:"institutions-pagination"},[i("el-pagination",{attrs:{small:"",background:"",layout:"total, prev, pager, next","page-size":t.pageSizeInst,total:t.instTotal},on:{"current-change":t.handleCurrentChangeInst}})],1)]),i("div",{staticClass:"jobs"},["Today’s active data"===t.type?i("div",{staticClass:"jobs-site-title"},[t._v("Active sites today:"+t._s(t.activeSite.active))]):t._e(),i("div",{staticClass:"job-alone-complete"},[i("span",[t._v("Federated modeling jobs：")]),i("span",{staticClass:"span"},[t._v(t._s(t.activeSite.total))]),i("span",[t._v("waiting：")]),i("span",{staticClass:"span"},[t._v(t._s(t.activeSite.waiting)+" ("+t._s(t._f("toGetFixed")(t.activeSite.waiting/t.activeSite.total))+"%)")]),i("span",[t._v("running：")]),i("span",{staticClass:"span"},[t._v(t._s(t.activeSite.running)+" ("+t._s(t._f("toGetFixed")(t.activeSite.running/t.activeSite.total))+"%)")]),i("span",[t._v("success：")]),i("span",{staticClass:"span"},[t._v(t._s(t.activeSite.success)+"  ("+t._s(t._f("toGetFixed")(t.activeSite.success/t.activeSite.total))+"%)")]),i("span",[t._v("failed：")]),i("span",{staticClass:"span"},[t._v(t._s(t.activeSite.failed)+"  ("+t._s(t._f("toGetFixed")(1-t.activeSite.waiting/t.activeSite.total-t.activeSite.running/t.activeSite.total-t.activeSite.success/t.activeSite.total))+"%)")])]),t._m(0),t.siteList.length>0?i("div",{staticClass:"jobs-box"},t._l(t.siteList,function(n,a){return i("span",{key:a},[i("div",{ref:"jobs",refInFor:!0,staticClass:"jobs-institution"},[i("overflowtooltip",{staticClass:"jobs-text",attrs:{width:"50px",content:n.site,placement:"top"}}),i("overflowtooltip",{staticClass:"jobs-text",attrs:{width:"50px",content:n.partyId,placement:"top"}}),i("el-tooltip",{attrs:{placement:"top"}},[i("div",{attrs:{slot:"content"},slot:"content"},[i("div",[t._v("waiting:\n                                        "+t._s(n.waiting)+"\n                                        ("+t._s(t._f("toGetFixed")(n.waiting/n.total))+"%)\n                                    ")]),i("div",[t._v("running:\n                                        "+t._s(n.running)+"\n                                        ("+t._s(t._f("toGetFixed")(n.running/n.total))+"%)\n                                    ")]),i("div",[t._v("success:\n                                        "+t._s(n.success)+"\n                                        ("+t._s(t._f("toGetFixed")(n.success/n.total))+"%)\n                                    ")]),i("div",[t._v("failed:\n                                        "+t._s(n.failed)+"\n                                        ("+t._s(t._f("toGetFixed")(n.failed/n.total))+"%)\n                                    ")])]),i("span",{staticStyle:{height:"24px","vertical-align":"bottom"}},[i("div",{staticClass:"jobs-bar",style:"width:"+n.total*t.sitemWidth/n.max+"px"},[i("div",{staticClass:"jobs-bar-waiting",style:"width:"+n.waiting/n.total*100+"%"}),i("div",{staticClass:"jobs-bar-running",style:"width:"+n.running/n.total*100+"%"}),i("div",{staticClass:"jobs-bar-success",style:"width:"+n.success/n.total*100+"%"}),i("div",{staticClass:"jobs-bar-failed",style:"width:"+n.failed/n.total*100+"%"})])])]),i("span",{staticClass:"text"},[t._v(t._s(n.total))])],1)])}),0):i("div",{staticClass:"jobs-box no-date-box"},[t._v("\n                    No Data\n                ")]),"Today’s active data"!==t.type?i("div",{staticStyle:{height:"34px"}}):t._e()])])]),i("div",{staticClass:"content-item"},[i("div",{staticClass:"institution-based"},[i("div",{staticClass:"statistics"},[t._v("Institution based statistics")]),i("div",{staticClass:"cooperation"},[t._v("\n                Statistics of cooperation between institutions\n            ")]),i("div",{staticClass:"select"},[i("span",{staticClass:"select-text"},[t._v("Institution")]),i("el-select",{attrs:{placeholder:"请选择"},on:{change:t.toGetinstitutions},model:{value:t.institutionStat,callback:function(n){t.institutionStat=n},expression:"institutionStat"}},t._l(t.institutionsdownList,function(t){return i("el-option",{key:t.value,attrs:{label:t.label,value:t.value}})}),1)],1),i("div",{staticClass:"institution-table"},[i("el-table",{attrs:{data:t.tableIntSateData,"header-row-class-name":"tableHead","header-cell-class-name":"tableHeadCell","cell-class-name":"tableCell","header-cell-style":{background:"#FAFBFC"},"cell-style":{background:"#FAFBFC"},border:"","max-height":"250"}},[i("el-table-column",{attrs:{prop:"institutions",fixed:"",align:"center",label:""},scopedSlots:t._u([{key:"default",fn:function(n){return[i("span",{staticStyle:{color:"#4E5766","font-weight":"bold"}},[t._v(t._s(n.row.institutions))])]}}])}),i("el-table-column",{attrs:{prop:"name",label:"Jobs"},scopedSlots:t._u([{key:"default",fn:function(n){return[i("span",{staticStyle:{color:"#848C99"}},[t._v(t._s(n.row.total))])]}}])}),i("el-table-column",{attrs:{prop:"",label:"Waiting"},scopedSlots:t._u([{key:"default",fn:function(n){return[i("span",{staticStyle:{color:"#848C99"}},[t._v(t._s(n.row.waiting)+" ("+t._s(t._f("toGetFixed")(n.row.waiting/n.row.total))+"%)")])]}}])}),i("el-table-column",{attrs:{prop:"",label:"Running"},scopedSlots:t._u([{key:"default",fn:function(n){return[i("span",{staticStyle:{color:"#848C99"}},[t._v(t._s(n.row.running)+" ("+t._s(t._f("toGetFixed")(n.row.running/n.row.total))+"%)")])]}}])}),i("el-table-column",{attrs:{prop:"",label:"Success"},scopedSlots:t._u([{key:"default",fn:function(n){return[i("span",{staticStyle:{color:"#848C99"}},[t._v(t._s(n.row.success)+" ("+t._s(t._f("toGetFixed")(n.row.success/n.row.total))+"%)")])]}}])}),i("el-table-column",{attrs:{prop:"",label:"Failed"},scopedSlots:t._u([{key:"default",fn:function(n){return[i("span",{staticStyle:{color:"#848C99"}},[t._v(t._s(n.row.failed)+" ("+t._s(t._f("toGetFixed")(n.row.failed/n.row.total))+"%)")])]}}])})],1),i("div",{staticClass:"paginationInstitutionSize"},[i("el-pagination",{attrs:{background:"","current-page":t.currentInstitutionPage,"page-size":t.pageInstitutionSize,layout:"total, prev, pager, next, jumper",total:t.totalInstitution},on:{"current-change":t.handleInstitutionCurrentChange,"update:currentPage":function(n){t.currentInstitutionPage=n},"update:current-page":function(n){t.currentInstitutionPage=n}}})],1)],1)])]),i("div",{staticClass:"content-item"},[i("div",{staticClass:"institution-based"},[i("div",{staticClass:"statistics"},[t._v("Site based statistics")]),i("div",{staticClass:"cooperation"},[t._v("\n                Statistics of cooperation between sites\n            ")]),i("div",{staticClass:"select"},[i("span",{staticClass:"select-text"},[t._v("Institution")]),i("el-select",{attrs:{placeholder:"请选择"},on:{change:t.toGetIntSite},model:{value:t.institutionSite,callback:function(n){t.institutionSite=n},expression:"institutionSite"}},t._l(t.institutionsdownList,function(t){return i("el-option",{key:t.value,attrs:{label:t.label,value:t.value}})}),1)],1),i("div",{staticClass:"institution-table"},[i("el-table",{attrs:{"header-row-class-name":"tableHead","header-cell-class-name":"tableHeadCell","cell-class-name":"tableCell",data:t.tableIntSiteData,"span-method":t.objectSpanMethod,"header-cell-style":{background:"#FAFBFC"},"cell-style":{background:"#FAFBFC"},border:"","max-height":"250"}},[i("el-table-column",{attrs:{prop:"",align:"center",label:""},scopedSlots:t._u([{key:"default",fn:function(n){return[i("span",{staticStyle:{color:"#4E5766","font-weight":"bold"}},[t._v(t._s(n.row.institutionsName))])]}}])}),i("el-table-column",{attrs:{prop:"siteName",align:"center",label:"site","show-overflow-tooltip":""}}),t._l(t.tableIntLabeList,function(n,a){return i("el-table-column",{key:a,attrs:{align:"center",prop:n,label:n},scopedSlots:t._u([{key:"default",fn:function(a){return[i("el-tooltip",{attrs:{placement:"top"}},[i("div",{attrs:{slot:"content"},slot:"content"},[i("div",[i("span",{staticStyle:{"margin-right":"5px"}},[t._v("waiting："+t._s(a.row[n].waiting)+"  ")]),i("span",[t._v("("+t._s(t._f("toGetFixed")(a.row[n].waiting/a.row[n].total))+"%)")])]),i("div",[i("span",{staticStyle:{"margin-right":"5px"}},[t._v("running："+t._s(a.row[n].running)+"  ")]),i("span",[t._v("("+t._s(t._f("toGetFixed")(a.row[n].running/a.row[n].total))+"%)")])]),i("div",[i("span",{staticStyle:{"margin-right":"5px"}},[t._v("success："+t._s(a.row[n].success)+"  ")]),i("span",[t._v("("+t._s(t._f("toGetFixed")(a.row[n].success/a.row[n].total))+"%)")])]),i("div",[i("span",{staticStyle:{"margin-right":"5px"}},[t._v("failed："+t._s(a.row[n].failed)+"  ")]),i("span",[t._v("("+t._s(t._f("toGetFixed")(a.row[n].failed/a.row[n].total))+"%)")])])]),i("span",[t._v(t._s(a.row[n].total))])])]}}],null,!0)})})],2),i("div",{staticClass:"paginationInstitutionSize"},[i("el-pagination",{attrs:{background:"","current-page":t.currentSitePage,"page-size":t.pageInstitutionSize,layout:"total, prev, pager, next, jumper",total:t.totalSitetitution},on:{"current-change":t.handleSiteCurrentChange,"update:currentPage":function(n){t.currentSitePage=n},"update:current-page":function(n){t.currentSitePage=n}}})],1)],1)])])])},o=[function(){var t=this,n=t.$createElement,i=t._self._c||n;return i("div",{staticClass:"jobs-title"},[i("span",{staticClass:"waiting"}),i("span",[t._v("waiting")]),i("span",{staticClass:"running"}),i("span",[t._v("running")]),i("span",{staticClass:"complete"}),i("span",[t._v("success")]),i("span",{staticClass:"failed"}),i("span",[t._v("failed")])])}],u=i("75fc"),r=(i("96cf"),i("3b8d")),c=(i("ac6a"),i("cebc")),l=i("a5b0"),d=i("b775"),p="cloud-manager";function f(t){return Object(d["a"])({url:"/".concat(p,"/api/job/summary/institutions/each/today"),method:"post",data:t})}function h(t){return Object(d["a"])({url:"/".concat(p,"/api/job/summary/institutions/each/period"),method:"post",data:t})}function v(t){return Object(d["a"])({url:"/".concat(p,"/api/job/summary/site/each/today"),method:"post",data:t})}function b(t){return Object(d["a"])({url:"/".concat(p,"/api/job/summary/site/each/period"),method:"post",data:t})}function g(t){return Object(d["a"])({url:"/".concat(p,"/api/job/institutions/today"),method:"post",data:t})}function m(t){return Object(d["a"])({url:"/".concat(p,"/api/job/institutions/period"),method:"post",data:t})}function _(t){return Object(d["a"])({url:"/".concat(p,"/api/job/site/today"),method:"post",data:t})}function y(t){return Object(d["a"])({url:"/".concat(p,"/api/job/site/period"),method:"post",data:t})}function w(t){return Object(d["a"])({url:"/".concat(p,"/api/job/summary/institutions/all/period"),method:"post",data:t})}function C(t){return Object(d["a"])({url:"/".concat(p,"/api/job/summary/institutions/all/today"),method:"post",data:t})}function j(t){return Object(d["a"])({url:"/".concat(p,"/api/job/summary/site/all/today"),method:"post",data:t})}function S(t){return Object(d["a"])({url:"/".concat(p,"/api/job/summary/site/all/period"),method:"post",data:t})}var x=i("c6a8"),I={name:"monitor",components:{overflowtooltip:l["a"]},filters:{toGetFixed:function(t){var n=100*t;return n?n.toFixed(1):0}},data:function(){return{type:"Today’s active data",dateToday:(new Date).getTime(),timevalue:[new Date-864e5,(new Date).getTime()],instTotal:0,pageSizeInst:80,instpageNum:1,siteTotal:0,activejobs:{},activeSite:{},institutionsList:[],siteList:[],institutionsdownList:[],tableIntSateData:[],tableIntSiteData:[],tableIntLabeList:[],institutionsitemWidth:"",stylebar:"",sitemWidth:"",institutionStat:"",institutionSite:"",value:"",lengthList:[],pickerOptions:{disabledDate:function(t){return t.getTime()>Date.now()}},currentInstitutionPage:1,currentSitePage:1,pageInstitutionSize:10,totalInstitution:0,totalSitetitution:0,firstPageNum:1,secondPageNum:1,firstTempVal:"",secondTempVal:""}},watch:{institutionsList:{handler:function(t){var n=this;t.length>0&&this.$nextTick(function(){n.calcinstitution().then(function(t){n.institutionsitemWidth=n.$refs.bar[0].clientWidth-t-10})})},immediate:!0,deep:!0},siteList:{handler:function(t){var n=this;t.length>0&&this.$nextTick(function(){n.sitemWidth=n.$refs.jobs[0].clientWidth-130})}}},created:function(){},mounted:function(){this.getinstitutionsdownList(),this.initi()},methods:{initi:function(){this.getInstitutionsListToday(),this.institutionsAll(),this.toGetinstitutions(this.institutionStat),this.toGetIntSite(this.institutionSite,"type")},institutionsAll:function(){if("Today’s active data"===this.type){var t={dateToday:this.dateToday,pageNum:this.instpageNum,pageSize:80};C(t).then(function(t){a(t)})}else{var n={beginDate:this.timevalue[0],endDate:this.timevalue[1],pageNum:this.instpageNum,pageSize:80};w(n).then(function(t){a(t)})}var i=this,a=function(t){var n=t.data,a={};a.active=n.institutionsCount||0,a.waiting=n.waitingJobCount||0,a.running=n.runningJobCount||0,a.success=n.successJobCount||0,a.failed=n.failedJobCount||0,a.total=n.failedJobCount+n.successJobCount+n.runningJobCount+n.waitingJobCount,i.activejobs=Object(c["a"])({},a)}},getinstitutionsdownList:function(){var t=this;this.institutionsdownList=[],Object(x["a"])().then(function(n){n.data.forEach(function(n,i){var a={};a.value=n,a.label=n,t.institutionsdownList.push(a)}),t.institutionSite=t.institutionStat=t.institutionsdownList[0].value,t.toGetinstitutions(t.institutionStat),t.toGetIntSite(t.institutionSite,"type")})},calcinstitution:function(){var t=Object(r["a"])(regeneratorRuntime.mark(function t(){var n,i;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return n=this.$refs.text.map(function(t){return t.clientWidth}),t.next=3,Math.max.apply(Math,Object(u["a"])(n));case 3:return i=t.sent,this.stylebar="width:calc(100% - ".concat(i,"px - 110px)"),t.abrupt("return",i);case 6:case"end":return t.stop()}},t,this)}));function n(){return t.apply(this,arguments)}return n}(),handleCurrentChangeInst:function(t){this.instpageNum=t,this.institutionsAll()},handleInstitutionCurrentChange:function(t){this.firstPageNum=t,this.toGetinstitutions(this.institutionStat)},handleSiteCurrentChange:function(t){this.secondPageNum=t,this.toGetIntSite(this.institutionSite,"type")},getInstitutionsListToday:function(){if("Today’s active data"===this.type){var t={dateToday:this.dateToday,pageNum:1,pageSize:80};f(t).then(function(t){a(t)})}else{var n={beginDate:this.timevalue[0],endDate:this.timevalue[1],pageNum:1,pageSize:80};h(n).then(function(t){a(t)})}var i=this,a=function(t){i.instTotal=t.data.totalRecord;var n=[];t.data.list.forEach(function(t){n.push(t.runningJobCount+t.failedJobCount+t.successJobCount+t.waitingJobCount)});var a=Math.max.apply(Math,n);i.institutionsList=t.data.list.map(function(t){var n={};return n.institutions=t.institutions,n.waiting=t.waitingJobCount,n.running=t.runningJobCount,n.success=t.successJobCount,n.failed=t.failedJobCount,n.total=t.failedJobCount+t.successJobCount+t.runningJobCount+t.waitingJobCount,n.max=a,n.show=!1,n}),i.getsite(i.institutionsList[0],0)}},getsite:function(t,n){var i=[];if(this.institutionsList.forEach(function(t,a){t.show=a===n,i.push(t)}),this.institutionsList=[].concat(i),"Today’s active data"===this.type){var a={dateToday:this.dateToday,institutions:t?t.institutions:""};v(a).then(function(t){o(t)})}else{var e={beginDate:this.timevalue[0],endDate:this.timevalue[1],institutions:t?t.institutions:""};b(e).then(function(t){o(t)})}var s=this,o=function(n){s.siteTotal=n.data.totalRecord,s.getsiteAllToday(t?t.institutions:"");var i=[];n.data.list.forEach(function(t){i.push(t.failedJobCount+t.successJobCount+t.runningJobCount+t.waitingJobCount)});var a=Math.max.apply(Math,i);s.siteList=n.data.list.map(function(t){var n={};return n.partyId=t.partyId,n.site=t.site,n.waiting=t.waitingJobCount,n.running=t.runningJobCount,n.success=t.successJobCount,n.failed=t.failedJobCount,n.total=n.waiting+n.running+n.success+n.failed,n.max=a,n})}},getsiteAllToday:function(t){if("Today’s active data"===this.type){var n={dateToday:this.dateToday,institutions:t,pageNum:1,pageSize:100};j(n).then(function(t){e(t)})}else{var i={beginDate:this.timevalue[0],endDate:this.timevalue[1],institutions:t,pageNum:1,pageSize:100};S(i).then(function(t){e(t)})}var a=this,e=function(t){var n=t.data,i={};i.active=n.siteCount||0,i.waiting=n.waitingJobCount||0,i.running=n.runningJobCount||0,i.success=n.successJobCount||0,i.failed=n.failedJobCount||0,i.total=i.waiting+i.running+i.success+i.failed,a.activeSite=Object(c["a"])({},i)}},objectSpanMethod:function(t){t.row,t.column;var n=t.rowIndex,i=t.columnIndex;if(0===i){var a=this.lengthList[n],e=a>0?1:0;return{rowspan:a,colspan:e}}},toGetinstitutions:function(t){if("Today’s active data"===this.type){var n={dateToday:this.dateToday,institutions:t||this.institutionStat,pageNum:this.firstPageNum,pageSize:10};g(n).then(function(t){e(t)})}else{var i={beginDate:this.timevalue[0],endDate:this.timevalue[1],institutions:t||this.institutionStat};m(i).then(function(t){e(t)})}var a=this,e=function(t){a.totalInstitution=t.data.totalRecord,a.tableIntSateData=t.data.list.map(function(t){return t.waiting=parseInt(t.waitingJobCountForInstitutions)||0,t.running=parseInt(t.runningJobCountForInstitutions)||0,t.failed=parseInt(t.failedJobCountForInstitutions)||0,t.success=parseInt(t.successJobCountForInstitutions)||0,t.total=t.failed+t.success+t.running+t.waiting,t})}},toGetIntSite:function(t,n){var i=this;if(this.institutionSite=t,"Today’s active data"===this.type){var a={dateToday:this.dateToday,institutions:t||this.institutionSite,pageNum:this.secondPageNum,pageSize:10};_(a).then(function(t){i.getsiteSataData(t,n)})}else{var e={beginDate:this.timevalue[0],endDate:this.timevalue[1],institutions:t||this.institutionSite};y(e).then(function(t){i.getsiteSataData(t,n)})}},getsiteSataData:function(t,n){var i=this;this.lengthList=[],this.tableIntSiteData=[],this.tableIntLabeList=t.data.sites;var a=t.data.jobStatisticsOfSiteDimensions.list;this.totalSitetitution=t.data.jobStatisticsOfSiteDimensions.totalRecord;var e=t.data.institutionsWithSites,s=[];e.map(function(t){i.lengthList.push(t.sites.length);for(var n=0;n<t.sites.length-1;n++)i.lengthList.push(0);t.sites.map(function(n){var i={};i.institutionsName=t.institutions,i.siteName=n,s.push(i)})});var o=[];a.forEach(function(t){t.institutionsWithHostSites.forEach(function(n){n.jobStatisticsList.forEach(function(n){var i={};i.siteHostName=n.siteHostName,i.waiting=parseInt(n.jobWaitingCount),i.running=parseInt(n.jobRunningCount),i.success=parseInt(n.jobSuccessCount),i.failed=parseInt(n.jobFailedCount),i.total=parseInt(n.jobSuccessCount)+parseInt(n.jobFailedCount)+parseInt(n.jobRunningCount)+parseInt(n.jobWaitingCount),i.siteGuestName=t.siteGuestName,o.push(i)})})});var u=[];s.forEach(function(t){var n={};i.tableIntLabeList.forEach(function(i){n.institutionsName=t.institutionsName,n.siteName=t.siteName,n[i]={total:0,waiting:0,running:0,success:0,failed:0}}),u.push(n)}),u.forEach(function(t){o.forEach(function(n){for(var i in t)t.siteName===n.siteHostName&&i===n.siteGuestName&&(t[i]={total:n.total,waiting:n.waiting,running:n.running,success:n.success,failed:n.failed})})}),n?this.tableIntSiteData=[].concat(u):setTimeout(function(){i.tableIntSiteData=[].concat(u)},500)}}},O=I,F=(i("a032"),i("2877")),T=Object(F["a"])(O,s,o,!1,null,null,null),k=T.exports,J={name:"monitor",components:{monitortoday:k},filters:{},data:function(){return{radio:"Today’s active data"}},created:function(){},mounted:function(){},methods:{handleChahe:function(t){this.$refs["monitortoday"].type=t,this.$refs["monitortoday"].initi()}}},N=J,L=(i("d17f"),Object(F["a"])(N,a,e,!1,null,null,null));n["default"]=L.exports},f410:function(t,n,i){i("1af6"),t.exports=i("584a").Array.isArray}}]);