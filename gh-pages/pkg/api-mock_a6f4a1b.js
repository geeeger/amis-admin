;/*!mock/axiosMock.ts*/
define("6b68254",function(e,n){"use strict";function t(e){return new Promise(function(n){setTimeout(n,e)})}function r(){var e=this;console.info("启用 纯前端 mock，所有 API 请求，直接前端返回");var n=new a.default(o.default);n.onAny("/api/login").reply(200,{status:0,msg:""}),n.onAny("/api/form/save").reply(function(){return i.__awaiter(e,void 0,void 0,function(){return i.__generator(this,function(e){switch(e.label){case 0:return[4,t(2e3)];case 1:return e.sent(),[2,[200,{status:0,msg:"保存成功"}]]}})})}),n.onAny("/api/saveWizard").reply(function(){return i.__awaiter(e,void 0,void 0,function(){return i.__generator(this,function(e){switch(e.label){case 0:return[4,t(2e3)];case 1:return e.sent(),[2,[200,{status:0,msg:"保存成功"}]]}})})})}Object.defineProperty(n,"__esModule",{value:!0});var i=e("849c8c1"),o=e("a5149e9"),a=e("c3f4b95");n.init=r});