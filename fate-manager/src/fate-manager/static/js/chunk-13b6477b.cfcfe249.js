(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-13b6477b"],{"188d":function(e,t,r){"use strict";var n=r("263e"),o=r.n(n);o.a},"263e":function(e,t,r){},b9ec:function(e,t,r){"use strict";r.r(t);var n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"home"},[r("el-header",[r("div",{staticClass:"logo"},[r("span",[e._v("FATE Cloud")])]),r("div",{staticClass:"right-bar"},[e.userName?r("el-popover",{attrs:{placement:"bottom","popper-class":"usrname-pop","visible-arrow":!1,trigger:"click"}},[r("div",{staticClass:"mane",on:{click:e.tologout}},[e._v("Sign out")]),r("div",{attrs:{slot:"reference"},slot:"reference"},[r("span",[e._v(e._s(e.userName))]),r("i",{staticClass:"el-icon-caret-bottom"})])]):r("span",{on:{click:e.tologin}},[e._v("Sign in")])],1)]),r("el-main",[r("router-view")],1)],1)},o=[],a=r("cebc"),s=r("2f62"),i={name:"home",components:{},data:function(){return{loginName:"",contactdialog:!0,loginForm:{username:"",password:""},value:"",pwdType:"",checked:!1,showPwd:!1,loginRules:{username:[{required:!0,trigger:"blur",validator:function(e,t,r){var n=t.trim();0===n.length?r(new Error("Please enter the Username/Email/Phone")):n.length>=50?r(new Error("Please enter the correct account!")):r()}}],password:[{required:!0,trigger:"blur",validator:function(e,t,r){var n=t.trim();0===n.length?r(new Error("Please enter the password")):r()}}]}}},watch:{},computed:Object(a["a"])({},Object(s["mapGetters"])(["userId","userName"])),created:function(){},mounted:function(){},methods:{tologout:function(){var e={userId:this.userId,userName:this.userName};this.$store.dispatch("LogOut",e).then(function(e){location.reload()}).catch(function(){})},tologin:function(){this.$router.push({path:"/welcome/login"})}}},c=i,l=(r("188d"),r("2877")),u=Object(l["a"])(c,n,o,!1,null,null,null);t["default"]=u.exports}}]);