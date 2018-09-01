//手机号
$('#username').blur(function(){
	var pattern = /^1(3|5|7|8)\d{9}/ig
	if($(this).val().length != 11 || pattern.test($(this).val()) == false){
		$(this).html('')
		$(this).next().css('display','block').html('请输入11位手机号');
		$(this).css('border','red 1px solid');
	}else{
		
		$(this).next().css('display','block').html('输入正确');
		$(this).css('border','green 1px solid');
	}
})


//验证码
$('#code').click(function(){
	var num = numCode(4);
	$(this).prev().blur(function(){
		if($(this).val() != num){
			$(this).html('')
			$(this).css('border','red 1px solid');
			$(this).parent().next().css('display','block').html('验证失败');
		}else{
			$(this).css('border','green 1px solid');
			$(this).parent().next().html('验证通过');
		}
		
	})
})

//密码
$('#userpassword').blur(function(){
	var pattern = /^[a-zA-Z][a-zA-Z0-9]{5,19}/ig;
	if($('#userpassword').val().length < 6 || $('#userpassword').val().length > 20 || pattern.test($('#userpassword').val()) == false){
		$(this).html('')
		$(this).next().css('display','block').html('建议使用字母数字的组合，6-20个字符');;
		$(this).css('border','red 1px solid');
	}else{
		$(this).next().css({'display':'block','color':'green'}).html('输入成功');
		$(this).css('border','green 1px solid');
	}	
})


//确认密码
$('#opass').blur(function(){
	if($('#userpassword').val() != $('#opass').val()){
		$(this).html('')
		$(this).next().css('display','block').html('两次密码输入不一致');
		$(this).css('border','red 1px solid');
	}else{
		$(this).next().css({'display':'block','color':'green'}).html('输入成功');
		$(this).css('border','green 1px solid');
	}
})


//button
$('#registerNow').mouseenter(function(){
	$(this).css({'background': 'rgb(166,0,0)',' transition':'background 2s','-moz-transition':'background 2s','-webkit-transition':'background 2s','-o-transition':'background 2s'})
}).mouseleave(function(){
	$(this).css({'background': 'rgb(51,51,51)',' transition':'background 2s','-moz-transition':'background 2s','-webkit-transition':'background 2s','-o-transition':'background 2s'})
})

//ajax获取数据
//var oName = document.getElementById('username');
//var oPass = document.getElementById('userpassword');
//var oButton = document.getElementById('registerNow');
//
$("#registerNow").click(function(){
	$.ajax({
	 			method: 'post',
	 			url: 'php/register.php',
	 			data:`username=${$('#username').val()}&userpassword=${$('#userpassword').val()}`,
	 			success: function(data){
	 				alert(data);
	 				if(data == '注册失败'){
	 					location.href = 'http://localhost/things/register.html?__hbt=1534821453625';
	 				}else{
	 					location.href='http://localhost/things/index.html?__hbt=1534822159729';
	 				}
//	 				
	 				
	 			},
	 			error: function(msg){
	 				alert(msg);
	 			
	 			}
	 		})
})


//oButton.onclick = function(){
//				ajax({
//					method : 'post',
//					url : "register.php",
//					data : `username=${oName.value}&userpassword=${oPass.value}`,
//					success : function(data){
//						alert(data);
//					}
//				})
//			}


function numCode(n){
	var str = '';
	for(var i = 0; i < n; i++){
		var num = parseInt(Math.random()*10);
		str += num;	
	}
	console.log(str);
	return str;
}


//function ajax({method = 'get', url, data, success, error}){
//
//	var xhr = null;
//
//	try{
//		xhr = new XMLHttpRequest();
//	}catch(error){
//		xhr = new ActiveXObject('Microsoft.XMLHTTP');
//		console.log(error);
//	}
//
//	//判断
//	if(method.toLowerCase() == 'get' && data){
//		url += '?' + data;
//	}
//
//	xhr.open(method, url, true);
//
//	if(method.toLowerCase() == 'get'){
//		xhr.send();
//	}else{
//		xhr.setRequestHeader('content-type', 'application/x-www-form-urlencoded');
//		xhr.send(data);
//	}
//
//	xhr.onreadystatechange = function(){
//		if(xhr.readyState == 4){
//			if(xhr.status == 200){
//				/*
//					在这里要处理下载的数据，不能确定如何处理下载到的数据。不能确定这里的代码怎么去编写。
//
//					【注】我们需要在这里传入一个函数，在这里去调用函数。
//					   这种函数叫做回调函数。
//				*/
//				if(success){
//					success(xhr.responseText);
//				}
//			}else{
//				// alert('Error: ' + xhr.status);
//				if(error){
//					error('Error: ' + xhr.status);
//				}
//			}		
//		}
//	}
//}