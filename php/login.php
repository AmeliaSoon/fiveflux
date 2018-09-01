<?php
	header("Content-type:text/html;charset=utf-8");
	$link = mysql_connect("localhost","root","19920506");
	if(!$link){
		echo '数据库连接失败';
		exit;
	}
	mysql_set_charset('utf8');
	mysql_select_db('userss');
	
	$username = $_POST['username'];
	$userpassword = $_POST['userpassword'];
	
	
	
	$sql = "SELECT * FROM userdata WHERE username='$username'";
	$res = mysql_query($sql);
	$arr = mysql_fetch_array($res);
	
	if($arr['username'] == $username){
		if($arr['userpassword'] == $userpassword){
			echo "登录成功";
		}else{
			echo "密码错误";
		}
	}else{
		echo "用户名不存在";
	}	
?>	