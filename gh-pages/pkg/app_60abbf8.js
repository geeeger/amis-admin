;/*!stores/User.ts*/
define("7e85150",function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=e("2426036");t.User=n.types.model("User",{name:""}).views(function(e){return{get isAuthenticated(){return!!e.name}}}).actions(function(e){return{login:function(t){localStorage.setItem("authenticated",t),e.name=t},logout:function(){e.name=""},afterCreate:function(){e.name=localStorage.getItem("authenticated")||""}}})});
;/*!stores/index.ts*/
define("3ff6dfd",function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=e("2426036"),o=e("7e85150");t.MainStore=n.types.model("MainStore",{theme:"default",user:n.types.optional(o.User,{}),asideFixed:!0,asideFolded:!1,offScreen:!1}).views(function(e){return{get fetcher(){return n.getEnv(e).fetcher},get notify(){return n.getEnv(e).notify},get alert(){return n.getEnv(e).alert},get copy(){return n.getEnv(e).copy}}}).actions(function(e){function t(){e.asideFolded=!e.asideFolded,localStorage.setItem("asideFolded",e.asideFolded?"1":"")}function n(){e.asideFixed=!e.asideFixed}function o(){e.offScreen=!e.offScreen}return{toggleAsideFolded:t,toggleAsideFixed:n,toggleOffScreen:o,afterCreate:function(){e.asideFolded=!!localStorage.getItem("asideFolded")}}})});
;/*!components/AMisRenderer.tsx*/
define("3bb7333",function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=t("849c8c1"),r=t("cc4bbf0"),o=t("167c905"),i=t("2426036"),a=t("024943c"),s=t("6af3be1"),c=t("9c65a3c"),u=function(t){function e(e){var n=t.call(this,e)||this;n.env=null,n.handleAction=function(t,e){n.env.alert("没有识别的动作："+JSON.stringify(e))};var r=e.store,o=i.getEnv(r).fetcher,a=i.getEnv(r).notify,s=i.getEnv(r).alert,u=i.getEnv(r).confirm,p=i.getEnv(r).copy,f=i.getEnv(r).apiHost,h=i.getEnv(r).getModalContainer,v=e.history,l=function(t){if(/^\/api\//.test(t))return t;t=t||"";var e=v.location;t&&"#"===t[0]?t=e.pathname+e.search+t:t&&"?"===t[0]&&(t=e.pathname+t);var n=t.indexOf("?"),r=t.indexOf("#"),o=~n?t.substring(0,n):~r?t.substring(0,r):t,i=~n?t.substring(n,~r?r:void 0):"",a=~r?t.substring(r):"";if(o){if("/"!=o[0]&&!/^https?\:\/\//.test(o)){var s=e.pathname,c=s.split("/");c.pop();for(var u=void 0;u=/^\.\.?\//.exec(o);)"../"===u[0]&&c.pop(),o=o.substring(u[0].length);o=c.concat(o).join("/")}}else o=e.pathname;return o+i+a};return n.env={session:"global",updateLocation:e.updateLocation||function(t,e){return"goBack"===t?v.goBack():void v[e?"replace":"push"](l(t))},isCurrentUrl:function(t){var e=l(t),n=v.location,r=e,o="",i=e.indexOf("?");if(~i&&(r=e.substring(0,i),o=e.substring(i)),o){if(r!==n.pathname||!n.search)return!1;var a=c.parse(o.substring(1)),s=c.parse(n.search.substring(1));return Object.keys(a).every(function(t){return a[t]===s[t]})}return r===n.pathname?!0:!1},jumpTo:e.jumpTo||function(t,e){return"goBack"===t?v.goBack():(t=l(t),e&&"url"===e.actionType?void(e.blank===!1?window.location.href=t:window.open(t)):void(/^https?:\/\//.test(t)?window.location.replace(t):v.push(t)))},fetcher:o,notify:a,alert:s,confirm:u,copy:p,apiHost:f,getModalContainer:h},n}return n.__extends(e,t),e.prototype.render=function(){var t=this.props,e=t.schema,r=t.store,i=t.onAction,a=n.__rest(t,["schema","store","onAction"]);return o.render(e,n.__assign({onAction:i||this.handleAction,theme:r&&r.theme},a),this.env)},e=n.__decorate([a.inject("store"),s.withRouter,a.observer,n.__metadata("design:paramtypes",[Object])],e)}(r.Component);e.default=u});
;/*!routes/Login.tsx*/
define("17f9337",function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=e("849c8c1"),n=e("cc4bbf0"),a=e("3bb7333"),o=e("024943c"),l=e("6af3be1"),s="";s="/amis-admin";var c={type:"form",submitText:"登录",api:"post:/api/login",wrapWithPanel:!1,messages:{saveSuccess:"登录成功，欢迎光临！"},controls:[{children:function(e){return n.createElement("div",{className:"list-group list-group-sm"},e.renderFormItems({controls:[{name:"username",children:function(e){return n.createElement("div",{className:"list-group-item"},n.createElement("input",{placeholder:"用户名",type:"text",className:"form-control no-shadow no-border",value:e.value||"",onChange:function(t){return e.onChange(t.currentTarget.value)}}))}},{name:"password",children:function(e){return n.createElement("div",{className:"list-group-item"},n.createElement("input",{placeholder:"密码",type:"password",className:"form-control no-shadow no-border",value:e.value||"",onChange:function(t){return e.onChange(t.currentTarget.value)}}))}}]}))}},{type:"submit",label:"登录",size:"lg",inputClassName:"block w-full",level:"primary"}]},i=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.handleFormSaved=function(e){var r=t.props.store,n=t.props.history;r.user.login(e.username),n.replace(s+"/admin")},t}return r.__extends(t,e),t.prototype.render=function(){return n.createElement("div",{className:"app app-header-fixed "},n.createElement("div",{className:"container w-xxl w-auto-xs"},n.createElement("a",{className:"block m-t-xxl m-b-xl text-center text-2x"},"XXX 系统登录"),n.createElement(a.default,{onFinished:this.handleFormSaved,schema:c})))},t=r.__decorate([o.inject("store"),l.withRouter,o.observer],t)}(n.Component);t.default=i});
;/*!routes/Register.tsx*/
define("8da64bf",function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=e("849c8c1"),r=e("cc4bbf0"),u=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return n.__extends(t,e),t.prototype.render=function(){return r.createElement("div",null,"Register")},t}(r.Component);t.default=u});
;/*!components/UserInfo.tsx*/
define("3a1719a",function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=e("849c8c1"),o=e("cc4bbf0"),s=function(e){function t(t){var n=e.call(this,t)||this;return n.state={open:!1},n.open=n.open.bind(n),n.close=n.close.bind(n),n.logout=n.logout.bind(n),n}return n.__extends(t,e),t.prototype.open=function(){this.setState({open:!0})},t.prototype.close=function(){this.setState({open:!1})},t.prototype.handleClickOutside=function(){this.close()},t.prototype.logout=function(){},t.prototype.render=function(){{var e=this.props.user;this.state.open}return o.createElement("div",{className:"dropdown"},o.createElement("span",{onClick:this.open},o.createElement("span",{className:"pull-right m-b-n-sm m-l-sm"},o.createElement("span",null,o.createElement("i",{className:"iconfont icon-admin"})),o.createElement("i",{className:"on md b-white bottom"})),o.createElement("span",{className:"hidden-sm hidden-md"},e.name),o.createElement("b",{className:"caret"})))},t.defaultProps={},t}(o.Component);t.default=s});
;/*!utils/schema2component.tsx*/
define("7330ffa",function(e,t){"use strict";function n(e){return function(t){return u.createElement(f.default,c.__assign({schema:e},t))}}Object.defineProperty(t,"__esModule",{value:!0});var c=e("849c8c1"),f=e("3bb7333"),u=e("cc4bbf0");t.default=n});
;/*!routes/admin/Dashboard.tsx*/
define("be919e8",function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=e("7330ffa"),d={type:"page",title:"Dashboard",body:"body..."};t.default=a.default(d)});
;/*!routes/admin/form/Basic.tsx*/
define("90bcab8",function(e,l){"use strict";Object.defineProperty(l,"__esModule",{value:!0});var a=e("7330ffa"),t={type:"page",title:"基础表单",subTitle:"展示一些常规的表单，包括验证、提示等等",body:[{type:"form",mode:"horizontal",title:"常规表单示例",affixFooter:!0,api:"/api/form/save",actions:[{label:"保存",type:"submit",level:"success"}],controls:[{label:" 标题",type:"text",placeholder:"请输入标题",description:"请输入一个能吸引眼球的标题",name:"title",size:"md"},{label:"编号",required:!0,type:"text",placeholder:"请输入编号",name:"b",size:"md",validations:{matchRegexp:"/^\\w{4}-\\w{4}-\\w{4}$/"},validationErrors:{matchRegexp:"您输入的内容格式不对，请按提示输入！"},hint:"输入范例：xxxx-xxxx-xxxx"},{label:"置顶",type:"switch",name:"c",inline:!0,labelRemark:"开启后将置顶这条数据！"},{label:"活动时间",type:"date-range",name:"range",size:"md",remark:"这是一个字段时间范围"},{label:"日期范围",type:"group",controls:[{type:"date",size:"md",name:"start",mode:"inline",maxDate:"${end}"},{label:"到",type:"date",size:"md",name:"end",inputClassName:"m-l-sm",mode:"inline",minDate:"${start}",remark:"这是两个字段的时间范围"}]},{label:"浏览器",type:"button-group",name:"browser",value:"chrome",options:[{label:"Chrome",value:"chrome"},{label:"火狐",value:"firefox"},{label:"IE",value:"ie"}]},{type:"list",name:"taocan",label:"套餐选择",options:[{value:1,body:'<div class="m-l-sm m-r-sm m-b-sm m-t-xs">\n                                <div class="text-md p-b-xs b-b m-b-xs">套餐：C01</div>\n                                <div class="text-sm">CPU：22核</div>\n                                <div class="text-sm">内存：10GB</div>\n                                <div class="text-sm">SSD盘：1024GB</div>\n                            </div>'},{value:2,body:'<div class="m-l-sm m-r-sm  m-b-sm m-t-xs">\n                            <div class="text-md p-b-xs b-b m-b-xs">套餐：C02</div>\n                            <div class="text-sm">CPU：23核</div>\n                            <div class="text-sm">内存：11GB</div>\n                            <div class="text-sm">SSD盘：1025GB</div>\n                            </div>'},{value:3,disabled:!0,body:'<div class="m-l-sm m-r-sm  m-b-sm m-t-xs">\n                            <div class="text-md p-b-xs b-b m-b-xs">套餐：C03</div>\n                            <div class="text-sm">CPU：24核</div>\n                            <div class="text-sm">内存：12GB</div>\n                            <div class="text-sm">SSD盘：1026GB</div>\n                            </div>'}]},{label:"最爱周几",type:"select",name:"select",size:"md",clearable:!0,options:[{label:"周一",value:"0"},{label:"周二",value:"1"},{label:"周三",value:"2"},{label:"周四",value:"3"},{label:"周五",value:"4"},{label:"周六",value:"5"},{label:"周日",value:"6"}]},{label:"休息日",type:"list",name:"freeday",value:["5","6"],multiple:!0,extractValue:!0,options:[{label:"周一",value:"0"},{label:"周二",value:"1"},{label:"周三",value:"2"},{label:"周四",value:"3"},{label:"周五",value:"4"},{label:"周六",value:"5"},{label:"周日",value:"6"}]},{label:"人数",type:"number",name:"num",size:"md",value:10},{label:"比率",type:"range",name:"percent"},{label:"简介",type:"textarea",name:"textarea"}]}]};l.default=a.default(t)});
;/*!routes/admin/form/Advanced.tsx*/
define("bbb802a",function(e,l){"use strict";Object.defineProperty(l,"__esModule",{value:!0});var a=e("7330ffa"),t={type:"page",title:"复杂表单",subTitle:"展示表格编辑、联动等等",body:[{type:"form",mode:"horizontal",title:"",affixFooter:!0,api:"/api/form/save",actions:[{label:"保存",type:"submit",level:"success"}],controls:[{type:"fieldSet",title:"基本配置",controls:[{type:"text",label:"任务名称",name:"title",size:"md",required:!0},{type:"textarea",label:"任务描述",name:"description",size:"md"},{label:"任务频率",type:"radios",name:"repeat",inline:!0,value:"none",required:!0,options:[{label:"不重复",value:"none"},{label:"每天",value:"day"},{label:"每周",value:"week"},{label:"每月",value:"month"}]},{label:"每天几点",type:"select",name:"time",multiple:!0,required:!0,extractValue:!0,visibleOn:'this.repeat == "day"',inline:!0,options:Array.from({length:24},function(e,l){return{value:l,label:l+":00"}})},{label:"每周几执行",type:"button-group",name:"weekdays",size:"md",visibleOn:'this.repeat == "week"',clearable:!0,multiple:!0,required:!0,extractValue:!0,maxLength:7,options:[{label:"周一",value:"0"},{label:"周二",value:"1"},{label:"周三",value:"2"},{label:"周四",value:"3"},{label:"周五",value:"4"},{label:"周六",value:"5"},{label:"周日",value:"6"}]},{label:"每月几号执行",type:"list",name:"monthday",size:"md",visibleOn:'this.repeat == "month"',required:!0,maxLength:31,clearable:!0,multiple:!0,extractValue:!0,options:Array.from({length:31},function(e,l){return{value:l,label:(""+((l+1)/100).toFixed(2)).substr(-2)}})}]},{type:"fieldSet",title:"其他信息",collapsable:!0,controls:[{type:"combo",name:"admins",label:"用户列表",value:[""],description:"请输入用户信息，不要重复。",multiple:!0,inline:!0,controls:[{type:"text",name:"name",unique:!0},{type:"select",name:"perm",value:"read",options:[{label:"可读",value:"read"},{label:"可写",value:"write"}]}]},{label:"新增一行",type:"button",actionType:"add",target:"thetable",level:"info"},{name:"thetable",type:"table",label:"任务参数",editable:!0,addable:!0,removable:!0,columns:[{label:"参数名",name:"key",quickEdit:!0},{label:"参数值",name:"value",quickEdit:!0}]}]}]}]};l.default=a.default(t)});
;/*!routes/admin/form/Wizard.tsx*/
define("5a2f459",function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=e("7330ffa"),l={type:"page",title:"表单向导",subTitle:"可以通过表单向导，将一个超长的表单页面拆分成多个步骤，一步一步指引用户完成。",body:[{type:"wizard",actionFinishLabel:"确认",api:"/api/saveWizard",steps:[{title:"填写活动信息",controls:[{type:"text",name:"title",label:"活动标题",required:!0,size:"md"},{type:"date",name:"date",label:"举办时间",size:"md"},{type:"number",name:"num",label:"参与人数",value:10,size:"md"}]},{title:"填写赞助商信息",controls:[{type:"text",name:"company",label:"公司名称",required:!0,size:"md"},{type:"text",name:"money",label:"赞助金额",addOn:{type:"text",label:"￥"},size:"md"}]},{title:"确认",mode:"horizontal",horizontal:{leftFixed:"sm"},controls:[{type:"static",name:"company",label:"活动标题",labelClassName:"text-muted"},{type:"static-date",name:"date",label:"举办时间",labelClassName:"text-muted"},{type:"static",name:"num",label:"参与人数",labelClassName:"text-muted"},{type:"static",name:"company",label:"公司名称",labelClassName:"text-muted"},{type:"static",name:"money",label:"赞助金额",labelClassName:"text-muted"}]}]}]};t.default=a.default(l)});
;/*!routes/admin/index.tsx*/
define("efeaa5a",function(e,a){"use strict";function t(e){void 0===e&&(e=b);var a=[];return f.forEach(function(t){t.children&&d.mapTree(t.children,function(t){t.path&&t.component?a.push(r.createElement(o.Route,{key:a.length+1,path:"/"===t.path[0]?v+t.path:""+v+e+"/"+t.path,component:t.component})):t.path&&t.getComponent&&a.push(r.createElement(o.Route,{key:a.length+1,path:"/"===t.path[0]?v+t.path:""+v+e+"/"+t.path,getComponent:t.getComponent}))})}),a}function n(e,a){return!(!e||e!==a.pathname)}Object.defineProperty(a,"__esModule",{value:!0});var l=e("849c8c1"),r=e("cc4bbf0"),o=e("f7998ad"),i=e("167c905"),c=e("024943c"),s=e("3a1719a"),d=e("70cb05e"),p=e("be919e8"),m=e("90bcab8"),h=e("bbb802a"),u=e("5a2f459"),f=[{label:"导航",children:[{path:"dashboard",label:"Dashboard",icon:"glyphicon glyphicon-signal",component:p.default},{label:"表单页面",icon:"glyphicon glyphicon-edit",children:[{label:"常规表单",path:"form/basic",component:m.default},{label:"复杂表单",path:"form/advanced",component:h.default},{label:"向导",path:"form/wizard",component:u.default}]}]}],b="/admin",v="";v="/amis-admin";var g=function(e){function a(){return null!==e&&e.apply(this,arguments)||this}return l.__extends(a,e),a.prototype.renderHeader=function(){var e=this.props.store;return r.createElement("div",null,r.createElement("div",{className:"a-Layout-brandBar"},r.createElement("button",{onClick:e.toggleOffScreen,className:"pull-right visible-xs"},r.createElement("i",{className:"glyphicon glyphicon-align-justify"})),r.createElement("div",{className:"a-Layout-brand"},r.createElement("i",{className:"fa fa-paw"}),r.createElement("span",{className:"hidden-folded m-l-sm"},"AMis Boilerplate"))),r.createElement("div",{className:"a-Layout-headerBar"},r.createElement("div",{className:"nav navbar-nav hidden-xs"},r.createElement(i.Button,{level:"link",className:"no-shadow navbar-btn",onClick:e.toggleAsideFolded,tooltip:"展开或收起侧边栏",placement:"bottom",iconOnly:!0},r.createElement("i",{className:e.asideFolded?"fa fa-indent":"fa fa-dedent"}))),r.createElement("div",{className:"hidden-xs p-t-sm pull-right"},r.createElement(s.default,{user:e.user}))))},a.prototype.renderAside=function(){var e=this.props.location,a=this.props.store;return r.createElement(i.AsideNav,{key:a.asideFolded?"folded-aside":"aside",navigations:f,renderLink:function(e){var t=e.link,n=(e.active,e.toggleExpand),l=e.classnames,i=[];return t.children&&i.push(r.createElement("span",{key:"expand-toggle",onClick:function(e){return n(t,e)},className:l("AsideNav-itemArrow")})),t.badge&&i.push(r.createElement("b",{key:"badge",className:l("AsideNav-itemBadge",t.badgeClassName||"bg-info")},t.badge)),t.icon?i.push(r.createElement("i",{key:"icon",className:l("AsideNav-itemIcon",t.icon)})):a.asideFolded&&i.push(r.createElement("i",{key:"icon",className:l("AsideNav-itemIcon","fa fa-file")})),i.push(r.createElement("span",{className:l("AsideNav-itemLabel"),key:"label"},t.label)),t.path?r.createElement(o.Link,{to:"/"===t.path[0]?v+t.path:""+v+b+"/"+t.path},i):r.createElement("a",{onClick:t.children?function(){return n(t)}:void 0},i)},isActive:function(a){return n(a.path&&"/"===a.path[0]?v+a.path:""+v+b+"/"+a.path,e)}})},a.prototype.render=function(){var e=this.props.store;return r.createElement(i.Layout,{aside:this.renderAside(),header:this.renderHeader(),folded:e.asideFolded,offScreen:e.offScreen},r.createElement(o.Switch,null,r.createElement(o.Redirect,{to:""+v+b+"/dashboard",from:""+v+b+"/",exact:!0}),t(),r.createElement(o.Redirect,{to:v+"/404"})))},a=l.__decorate([c.inject("store"),c.observer],a)}(r.Component);a.default=g});
;/*!routes/404.tsx*/
define("a22da5d",function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=e("cc4bbf0"),r=e("f7998ad"),c=e("167c905");t.default=function(){return a.createElement(c.NotFound,{links:a.createElement(r.Link,{to:"/",className:"list-group-item"},a.createElement("i",{className:"fa fa-chevron-right text-muted"}),a.createElement("i",{className:"fa fa-fw fa-mail-forward m-r-xs"}),"去首页"),footerText:""})}});
;/*!routes/index.tsx*/
define("0dba1f5",function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=e("cc4bbf0"),n=e("167c905"),o=e("f7998ad"),r=e("024943c"),c=e("17f9337"),l=e("8da64bf"),m=e("efeaa5a"),u=e("a22da5d"),d="";d="/amis-admin",t.default=r.observer(function(e){var t=e.store;return a.createElement(o.BrowserRouter,null,a.createElement("div",{className:"routes-wrapper"},a.createElement(n.ToastComponent,{key:"toast",position:"top-right",theme:t.theme}),a.createElement(n.AlertComponent,{key:"alert",theme:t.theme}),a.createElement(o.Switch,null,a.createElement(o.Redirect,{to:d+"/login",from:d+"/",exact:!0}),a.createElement(o.Route,{path:d+"/login",exact:!0,component:c.default}),a.createElement(o.Route,{path:d+"/register",exact:!0,component:l.default}),t.user.isAuthenticated?a.createElement(o.Route,{path:d+"/admin",component:m.default}):a.createElement(o.Route,{path:"*",exact:!0,component:c.default}),a.createElement(o.Route,{component:u.default}))))})});
;/*!App.tsx*/
define("4c5556c",function(t,e){"use strict";function n(){var e=window.store=f.MainStore.create({},{fetcher:function(t){var e=t.url,n=t.method,r=t.data,o=t.config;return o=o||{},o.headers=o.headers||{},o.withCredentials=!0,"post"!==n&&"put"!==n&&"patch"!==n?(r&&(o.params=r),i[n](e,o)):(r&&r instanceof FormData||!r||"string"==typeof r||r instanceof Blob||r instanceof ArrayBuffer||(r=JSON.stringify(r),o.headers["Content-Type"]="application/json"),i[n](e,r,o))},notify:function(t,e){a.toast[t]?a.toast[t](e,"error"===t?"系统错误":"系统消息"):console.warn("[Notify]",t,e),console.log("[notify]",t,e)},alert:alert,confirm:confirm,copy:function(t,e){void 0===e&&(e={});var n=c(t,e);return n&&(!e||e.shutup!==!0)&&a.toast.info("内容已拷贝到剪切板"),n}});return t(["6b68254"],function(t){return t.init()}),r.createElement(o.Provider,{store:e},r.createElement(s.default,{store:e}))}Object.defineProperty(e,"__esModule",{value:!0});var r=t("cc4bbf0"),o=t("024943c"),a=t("167c905"),i=t("a5149e9"),f=t("3ff6dfd"),c=t("6f82c2d"),s=t("0dba1f5");e.default=n});
;/*!index.tsx*/
define("8d0e5e4",function(e,t){"use strict";function c(e){r.render(n.createElement(d.default,null),e)}Object.defineProperty(t,"__esModule",{value:!0});var n=e("cc4bbf0"),r=e("3c5b02d"),d=e("4c5556c");t.bootstrap=c});