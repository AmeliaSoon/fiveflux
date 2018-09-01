//button
$('#loginNow').mouseenter(function(){
	$(this).css({'background': 'rgb(166,0,0)',' transition':'background 2s','-moz-transition':'background 2s','-webkit-transition':'background 2s','-o-transition':'background 2s'})
}).mouseleave(function(){
	$(this).css({'background': 'rgb(51,51,51)',' transition':'background 2s','-moz-transition':'background 2s','-webkit-transition':'background 2s','-o-transition':'background 2s'})
})


//登录
$("#loginNow ").click(function(){
	$.ajax({
	 			method: 'post',
	 			url: 'php/login.php',
	 			data:`username=${$('#username').val()}&userpassword=${$('#userpassword').val()}`,
	 			success: function(data){
	 				alert(data);
	 				if(data == '登录失败'){
	 					location.href = 'http://localhost/things/login.html?__hbt=1534823357484';
	 				}else{
	 					location.href='http://localhost/things/index.html?__hbt=1534822159729';
	 				}				 				
	 			},
	 			error: function(msg){
	 				alert(msg);
	 			
	 			}
	 		})
})


//二维码
$(function(){
	$('#ewmCode').attr('src',`http://m.5lux.com/api/gen2qrcode?t=${longcode()}`)
})

function randomNum(n){
	return Math.ceil(Math.random()*n)
}

function longcode(){
	
	var m = randomNum(13);
	var str=''
	for(var i = 0; i < m; i++){
		str += parseInt(Math.random()*10)
	}
	return str
}
