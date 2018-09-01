//main.js : 主模块
//配置依赖文件的路径
require.config({
	paths : {
		"jquery" : "jquery-1.11.3",
		"cookie" : "jquery.cookie",
		"mod1" : "mod1"
	}
})

//引入依赖文件
require(['jquery','cookie',"mod1"],function($,cookie,tools){
	$(function(){
//		alert('hehe');
		//$.cookie("key"[,"value",{expires:数字,path : '/'}]) : 创建或获取cookie
		//$.removeCookie("key"[,"value",{expires:数字,path : '/'}]):删除cookie
//		$.cookie("cookieKey","cookieValue",{expires:7,path:'/'});
//		alert($.cookie("cookieKey"));
//		$.removeCookie('cookieKey',{expires:7,path:'/'});
//		alert(tools.myMax([4,2,2,1,5,7,3,4]));
		tools.drag('box');
	})
})
