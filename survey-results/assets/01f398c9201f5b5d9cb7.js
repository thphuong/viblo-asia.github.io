(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{177:function(t,e,n){var content=n(282);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(26).default)("50c5ecc1",content,!0,{sourceMap:!1})},178:function(t,e,n){var content=n(356);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(26).default)("242b7ea4",content,!0,{sourceMap:!1})},179:function(t,e,n){var content=n(358);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(26).default)("39d59b78",content,!0,{sourceMap:!1})},180:function(t,e,n){var content=n(360);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(26).default)("5ba2512d",content,!0,{sourceMap:!1})},183:function(t,e,n){var content=n(366);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(26).default)("111af27e",content,!0,{sourceMap:!1})},184:function(t,e,n){var content=n(368);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(26).default)("265da9ba",content,!0,{sourceMap:!1})},232:function(t,e,n){t.exports=n.p+"img/49a12b9.png"},281:function(t,e,n){"use strict";var r=n(177);n.n(r).a},282:function(t,e,n){(t.exports=n(25)(!1)).push([t.i,'.sidebar{padding:10px 0}.sidebar__logo{max-width:120px;margin:10px auto}.sidebar__logo img{width:100%}.sidebar__path:before{border-top:3px solid #e9ecef;content:"";display:block;padding:3px 0;margin:3px 0}.sidebar__path li{width:100%}.sidebar__path li a{display:block;color:#1b1b1b;text-transform:capitalize;padding:2px 15px 0;border-right:2px solid #fff;width:100%}.sidebar__path-answer{margin-left:20px}.sidebar__path .active{border-right:2px solid #5488c7;font-weight:700;background:#f6f6f7}',""])},355:function(t,e,n){"use strict";var r=n(178);n.n(r).a},356:function(t,e,n){(t.exports=n(25)(!1)).push([t.i,".product-info{max-width:400px;min-height:220px;background-color:#fff;z-index:9999;position:relative;box-shadow:1px 2px 8px 3px rgba(0,0,0,.2);border-radius:5px}.product-info__header{height:115px;width:auto;background-repeat:no-repeat;background-size:cover;background-position:50%}.product-info__body{display:flex;align-items:center}.product-info__content{width:100%;padding:10px;display:inline-block}.product-info__content-side{width:96px;height:96px;overflow:hidden;border:1px solid #fff;background-repeat:no-repeat;background-size:contain;background-position:50%;float:left}.product-info__content-main{width:265px;float:left;margin-left:15px;word-wrap:break-word}.product-info__product-name{font-weight:700;font-size:1.2rem}",""])},357:function(t,e,n){"use strict";var r=n(179);n.n(r).a},358:function(t,e,n){(t.exports=n(25)(!1)).push([t.i,".result-item__product-name{border-bottom:5px solid #ddd;padding:10px 30px;margin-bottom:20px}.result-item__product-name a{display:block;text-transform:capitalize;font-size:1.3rem;font-weight:500}.result-item__product-answer{padding:10px}.result-item__product-description{padding:25px;background-color:#f6f6f6;font-size:1rem}",""])},359:function(t,e,n){"use strict";var r=n(180);n.n(r).a},360:function(t,e,n){(t.exports=n(25)(!1)).push([t.i,".entry{height:50px;width:100%;border-left:5px solid #5aa1e7;display:flex;align-items:center;background-color:#f6f6f6;margin-bottom:10px}.entry a{margin-left:30px;text-transform:capitalize}",""])},365:function(t,e,n){"use strict";var r=n(183);n.n(r).a},366:function(t,e,n){(t.exports=n(25)(!1)).push([t.i,'.translate-fade-enter-active,.translate-fade-leave-active{transition:all .25s;transition-timing-function:cubic-bezier(.53,2,.36,.85)}.translate-fade-enter,.translate-fade-leave-active{opacity:0}.translate-fade-enter,.translate-fade-leave-active{-webkit-transform:translateX(50px);transform:translateX(50px)}.modal-form{width:100%}.modal-title{margin:0 auto}.modal-header{width:100%}.modal-header .close{margin-left:0}.modal-body{width:100%}.modal-body .required:after{content:" *";color:#e32}',""])},367:function(t,e,n){"use strict";var r=n(184);n.n(r).a},368:function(t,e,n){(t.exports=n(25)(!1)).push([t.i,".app-header{background:#7474bf;background:linear-gradient(90deg,#348ac7,#7474bf);min-height:300px;color:#fff;display:flex;align-items:center;justify-content:center}.app-main{margin:20px auto;min-height:60vh}.app-footer{background-color:#f1f5fa;min-height:100px;display:flex;align-items:center;justify-content:center}",""])},370:function(t,e,n){"use strict";n.r(e);n(35);var r=n(5),o=n(215),c=n.n(o).a.create({baseURL:"https://viblo.asia"}),l=[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"sidebar__logo"},[e("img",{attrs:{src:n(232),alt:"Logo"}})])}],d=(n(233),n(156),n(173),n(279)),m=n.n(d),v=n(62),f=n.n(v),h={props:{answers:{type:Array,required:!0}},mounted:function(){""!==this.$route.hash&&f.a.scrollTo(this.$route.hash,0,{}),window.attachEvent?window.attachEvent("onload",this.init()):window.addEventListener?window.addEventListener("load",this.init(),!1):document.addEventListener("load",this.init(),!1)},destroyed:function(){window.onload=null},methods:{init:function(){m()("#main-menu",{sectionClass:".scrollspy",menuActiveTarget:".menu-item",offset:-300})}}},_=(n(281),n(9)),w=Object(_.a)(h,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"sidebar"},[t._m(0),t._v(" "),n("ul",{staticClass:"sidebar__path",attrs:{id:"main-menu"}},[n("li",[n("a",{directives:[{name:"scroll-to",rawName:"v-scroll-to",value:"#overview",expression:"'#overview'"}],staticClass:"menu-item",attrs:{href:"#overview"}},[t._v("Overview")])]),t._v(" "),n("li",[n("a",{directives:[{name:"scroll-to",rawName:"v-scroll-to",value:"#products",expression:"'#products'"}],staticClass:"menu-item",attrs:{href:"#products"}},[t._v("Products")]),t._v(" "),n("ul",{staticClass:"sidebar__path-answer"},t._l(t.answers,function(e,r){return n("li",{key:r},[n("a",{directives:[{name:"scroll-to",rawName:"v-scroll-to",value:"#survey-"+e.id,expression:"`#survey-${answer.id}`"}],staticClass:"menu-item",attrs:{href:"#survey-"+e.id}},[t._v(t._s(e.product_name))])])}),0)])])])},l,!1,null,null,null).exports,y=(n(283),{props:{projectsTotal:{type:Number,default:0}},computed:{totalLabel:function(){if(!this.projectsTotal||this.projectsTotal<=3)return"các";var t=Math.ceil(this.projectsTotal);return"hơn ".concat(t)}}}),x=Object(_.a)(y,function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"overview"},[e("div",{staticClass:"overview__content"},[e("p",[this._v("\n            Viblo là một dịch vụ miễn phí về chia sẻ và học tập kiến thức về\n            Công Nghệ Thông Tin dành cho các lập trình viên ở Việt Nam.\n            Trải qua gần 4 năm hình thành và phát triển, hiện Viblo đã trở thành\n            một cộng đồng lớn mạnh với hơn 25,000 người dùng,\n            hơn 20,000 bài viết được chia sẻ, hơn 700 bài viết mới\n            cũng như hơn 1,5 triệu pageviews hàng tháng.\n        ")]),this._v(" "),e("p",[this._v("\n            Chúng tôi đang tiến hành thực hiện một survey về những kỹ thuật đang được sử dụng\n            trong các sản phẩm công nghệ nổi tiếng trong đất nước Việt Nam chúng ta.\n            Hiện tại, chúng tôi đang nhận được những phản hồi đầu tiên và sẽ liên tục cập nhật\n            trong thời gian tới. Dưới đây là báo cáo kết quả tổng hợp những kỹ thuật từ\n            "+this._s(this.totalLabel)+" dự án công nghệ nổi tiếng đã đồng hành tham gia\n            cùng chúng tôi trong cuộc khảo sát lần này.\n        ")])])])},[],!1,null,null,null).exports,C=(n(95),n(286)),k=n.n(C),filter=n(329),j=n.n(filter),E=n(333),N=n.n(E),S=n(342),$=n.n(S),O=(n(214),n(350));n(353);var M={props:{product:{type:Object,default:function(){return{}}}},methods:{imageUrl:function(t){return t?function(t,e){return e?"".concat("https://images.viblo.asia","/").concat(e,"/").concat(t):"".concat("https://images.viblo.asia","/").concat(t)}(t):""}}},P=(n(355),Object(_.a)(M,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"product-info"},[n("div",{staticClass:"product-info__header",style:{"background-image":"url("+(t.imageUrl(t.product.banner_image)||t.imageUrl(t.product.company_logo))+")"}}),t._v(" "),n("div",{staticClass:"product-info__body"},[n("div",{staticClass:"product-info__content"},[n("div",{staticClass:"product-info__content-side",style:{"background-image":"url("+t.imageUrl(t.product.company_logo)+")"}}),t._v(" "),n("div",{staticClass:"product-info__content-main"},[n("div",{staticClass:"product-info__product-name"},[t._v("\n                    "+t._s(t.product.product_name)+"\n                ")]),t._v(" "),n("div",{staticClass:"product-info__company-name"},[t._v("\n                    "+t._s(t.product.company_name)+"\n                ")]),t._v(" "),n("div",{staticClass:"product-info__company-url"},[n("a",{attrs:{href:t.product.company_url,target:"_blank",rel:"noopener noreferrer"}},[t._v("\n                        "+t._s(t.product.company_url)+"\n                    ")])])])])])])},[],!1,null,null,null).exports),L=["product_name","product_url","product_description","company_name","company_url","banner_image","company_logo"],z={components:{VPopover:O.a,Info:P},props:{item:{required:!0,type:Object}},data:function(){return{answers:this.item.answers.data}},computed:{filtedAnswers:function(){return j()(this.answers,function(t){return N()(["product_name","product_url"],t.question)||!N()(L,t.question)})},product:function(){var data=j()(this.answers,function(t){return N()(L,t.question)});return k()(data,function(t,e){return t[e.question]=e.content,t},{})}},methods:{formatQuestionName:function(text){return"Serivce"===$()(text)?"Service":$()(text)},formatAnswer:function(text){return text.split(",").join(", ")},imageUrl:function(t){return t?image(t):""}}},T=(n(357),Object(_.a)(z,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",[n("div",{staticClass:"result-item__product-name"},[n("VPopover",{attrs:{trigger:"hover",delay:{show:200,hide:300}}},[n("a",{attrs:{href:t.product.product_url,target:"_blank"}},[n("span",[t._v(t._s(t.product.product_name))])]),t._v(" "),n("Info",{attrs:{slot:"popover",product:t.product},slot:"popover"})],1)],1),t._v(" "),n("blockquote",{staticClass:"result-item__product-description blockquote"},[n("p",[t._v("\n            "+t._s(t.product.product_description)+"\n        ")])]),t._v(" "),n("div",{staticClass:"result-item__product-answer table-responsive"},[n("table",{staticClass:"table table-bordered table-striped"},[n("tbody",t._l(t.filtedAnswers,function(e,r){return n("tr",{key:r},[n("td",{staticClass:"w-25"},[t._v("\n                        "+t._s(t.formatQuestionName(e.question))+"\n                    ")]),t._v(" "),"product_url"===e.question?n("td",[n("a",{attrs:{href:e.content,target:"_blank"}},[t._v("\n                            "+t._s(e.content)+"\n                        ")])]):n("td",[t._v("\n                        "+t._s(t.formatAnswer(e.content))+"\n                    ")])])}),0)])])])},[],!1,null,null,null).exports),V={props:{entry:{type:String}}},A=(n(359),Object(_.a)(V,function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{staticClass:"entry"},[e("a",{directives:[{name:"scroll-to",rawName:"v-scroll-to",value:"#"+this.entry,expression:"`#${entry}`"}],staticClass:"h3",attrs:{href:"#"+this.entry}},[this._v("\n        "+this._s(this.entry)+"\n    ")])])},[],!1,null,null,null).exports),U={components:{StackModal:n(369).a},props:{show:{type:Boolean}},data:function(){return{form:{name:"",link:"",email:"",comment:""},submited:!1,errors:[]}},methods:{close:function(){this.clearForm(),this.$emit("close")},clearForm:function(){this.form={name:"",link:"",email:"",comment:""}},onSubmit:function(t){t.preventDefault();var e=this;c.post("/api/survey-suggestion",this.form).then(function(){e.submited=!0,e.close()}).catch(function(t){e.errors=t.response.data.errors})}}},R=(n(365),{components:{Modal:Object(_.a)(U,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[t.submited?t._e():n("form",{ref:"form",on:{submit:t.onSubmit}},[n("StackModal",{attrs:{show:t.show,"modal-class":{"modal-lg":!0},"save-button":{visible:!1},"cancel-button":{btnClass:{"d-none":!0}}},on:{close:t.close,save:t.onSubmit}},[n("template",{slot:"modal-header"},[n("div",{staticClass:"modal-header"},[n("h5",{staticClass:"modal-title"},[t._v("\n                        Survey Suggestion\n                    ")]),t._v(" "),n("button",{staticClass:"close",attrs:{type:"button","aria-label":"Close"},on:{click:function(e){return e.stopPropagation(),t.$emit("close")}}},[n("span",{attrs:{"aria-hidden":"true"}},[t._v("×")])])])]),t._v(" "),n("div",{staticClass:"container-fluid modal-form"},[n("div",{staticClass:"form-group row"},[n("label",{staticClass:"col-sm-3 control-label required",attrs:{for:"productName"}},[t._v("Product Name:")]),t._v(" "),n("div",{staticClass:"col-sm-9"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.form.name,expression:"form.name"}],staticClass:"form-control",class:t.errors.name?"is-invalid":"",attrs:{type:"text","aria-describedby":"productName",placeholder:"Product Name",required:""},domProps:{value:t.form.name},on:{input:function(e){e.target.composing||t.$set(t.form,"name",e.target.value)}}}),t._v(" "),t.errors.name?n("div",{staticClass:"invalid-feedback"},[t._v("\n                            "+t._s(t.errors.name[0])+"\n                        ")]):t._e()])]),t._v(" "),n("div",{staticClass:"form-group row"},[n("label",{staticClass:"required col-sm-3",attrs:{for:"productLink"}},[t._v("Product Link:")]),t._v(" "),n("div",{staticClass:"col-sm-9"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.form.link,expression:"form.link"}],staticClass:"form-control",class:t.errors.link?"is-invalid":"",attrs:{type:"text","aria-describedby":"productLink",placeholder:"Product Link",required:""},domProps:{value:t.form.link},on:{input:function(e){e.target.composing||t.$set(t.form,"link",e.target.value)}}}),t._v(" "),t.errors.link?n("div",{staticClass:"invalid-feedback"},[t._v("\n                            "+t._s(t.errors.link[0])+"\n                        ")]):t._e()])]),t._v(" "),n("div",{staticClass:"form-group row"},[n("label",{staticClass:"col-sm-3",attrs:{for:"emailContact"}},[t._v("Email Contact:")]),t._v(" "),n("div",{staticClass:"col-sm-9"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.form.email,expression:"form.email"}],staticClass:"form-control",class:t.errors.email?"is-invalid":"",attrs:{type:"email","aria-describedby":"emailContact",placeholder:"Email Contact"},domProps:{value:t.form.email},on:{input:function(e){e.target.composing||t.$set(t.form,"email",e.target.value)}}}),t._v(" "),t.errors.email?n("div",{staticClass:"invalid-feedback"},[t._v("\n                            "+t._s(t.errors.email[0])+"\n                        ")]):t._e()])]),t._v(" "),n("div",{staticClass:"form-group row"},[n("label",{staticClass:"col-sm-3",attrs:{for:"comment"}},[t._v("Comment:")]),t._v(" "),n("div",{staticClass:"col-sm-9"},[n("textarea",{directives:[{name:"model",rawName:"v-model",value:t.form.comment,expression:"form.comment"}],staticClass:"form-control",class:t.errors.comment?"is-invalid":"",attrs:{placeholder:"Comment"},domProps:{value:t.form.comment},on:{input:function(e){e.target.composing||t.$set(t.form,"comment",e.target.value)}}}),t._v(" "),t.errors.comment?n("div",{staticClass:"invalid-feedback"},[t._v("\n                            "+t._s(t.errors.comment[0])+"\n                        ")]):t._e()])])]),t._v(" "),n("template",{slot:"modal-footer"},[n("div",{staticClass:"modal-footer"},[n("button",{staticClass:"btn-primary btn btn-block",attrs:{type:"submit"}},[t._v("\n                        Submit\n                    ")])])])],2)],1),t._v(" "),n("stack-modal",{attrs:{show:t.submited,title:"Survey Suggestion","modal-class":{"modal-lg":!0},"save-button":{visible:!1},"cancel-button":{title:"Close"}}},[n("template",{slot:"modal-header"},[n("div",{staticClass:"modal-header"},[n("h5",{staticClass:"modal-title"},[t._v("\n                    Survey Suggestion\n                ")]),t._v(" "),n("button",{staticClass:"close",attrs:{type:"button","aria-label":"Close"},on:{click:function(e){e.stopPropagation(),t.submited=!1}}},[n("span",{attrs:{"aria-hidden":"true"}},[t._v("×")])])])]),t._v(" "),n("div",{staticClass:"alert alert-success",attrs:{role:"alert"}},[t._v("\n            Cảm ơn những góp ý của bạn về dự án bạn mong muốn hiển thị trong survey.\n            Chúng tôi sẽ cố gắng hoàn thiện những thông tin phù hợp với bạn trong thời gian sớm nhất.\n        ")])],2)],1)},[],!1,null,null,null).exports},data:function(){return{visible:!1}},methods:{open:function(){this.visible=!0},close:function(){this.visible=!1}}}),B={components:{OverView:x,ResultItem:T,Entry:A,Suggestion:Object(_.a)(R,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"alert alert-primary",attrs:{role:"alert"}},[t._v("\n        Bạn mong muốn được biết thêm về các kỹ thuật, công nghệ đã và đang\n        được áp dụng tại các dự án khác tại Việt Nam?\n        "),n("a",{staticClass:"alert-link",attrs:{href:"#"},on:{click:function(e){return e.preventDefault(),t.open(e)}}},[t._v("Nhấn vào đây")]),t._v("\n        để cho chúng tôi biết tên các dự án\n        mà bạn đang mong chờ được chia sẻ thêm trong survey này.\n    ")]),t._v(" "),n("Modal",{attrs:{show:t.visible},on:{"update:show":function(e){t.visible=e},close:t.close}})],1)},[],!1,null,null,null).exports},props:{answers:{type:Array,required:!0}}},D={components:{Main:Object(_.a)(B,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"mb-5 scrollspy",attrs:{id:"overview"}},[n("section",[n("Entry",{attrs:{entry:"overview"}}),t._v(" "),n("OverView",{attrs:{"projects-total":t.answers.length}}),t._v(" "),n("Suggestion")],1)]),t._v(" "),n("div",{staticClass:"scrollspy",attrs:{id:"products"}},[n("section",[n("Entry",{attrs:{entry:"products"}})],1)]),t._v(" "),t._l(t.answers,function(t){return n("div",{key:t.id,staticClass:"result-item scrollspy",attrs:{id:"survey-"+t.id}},[n("ResultItem",{staticClass:"mb-1",attrs:{item:t}})],1)}),t._v(" "),n("Suggestion")],2)},[],!1,null,null,null).exports,SideBar:w},data:function(){return{answers:[]}},asyncData:function(){var t=Object(r.a)(regeneratorRuntime.mark(function t(){var e,data;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,c.get("/api/survey");case 3:return e=t.sent,data=e.data,t.abrupt("return",{answers:data.data});case 8:return t.prev=8,t.t0=t.catch(0),t.abrupt("return",{answers:[]});case 11:case"end":return t.stop()}},t,null,[[0,8]])}));return function(){return t.apply(this,arguments)}}()},I=(n(367),Object(_.a)(D,function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"row"},[e("Main",{staticClass:"app-main col",attrs:{answers:this.answers}}),this._v(" "),e("div",{staticClass:"app-sidebar col-md-3 d-none d-md-block"},[e("SideBar",{staticClass:"menu sticky-top",attrs:{answers:this.answers}})],1)],1)},[],!1,null,null,null));e.default=I.exports}}]);