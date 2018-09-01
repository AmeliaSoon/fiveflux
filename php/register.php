
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
	
	
	$sql1 = "SELECT * FROM userdata WHERE username='$username'";
	$res1 = mysql_query($sql1);
	$arr = mysql_fetch_array($res1);
	
	if($arr){
		echo "用户名已存在";

	}else{
		$sql2 = "insert into userdata(username,userpassword) values ('$username','$userpassword')";
		$res2 = mysql_query($sql2);
		if($res2){
			echo "注册成功";
				
					
		}else{
			echo "注册失败";

				
		}
	}	
?>	