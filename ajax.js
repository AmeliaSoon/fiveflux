function ajax({method = 'get', url, data, success, error}){

	var xhr = null;

	try{
		xhr = new XMLHttpRequest();
	}catch(error){
		xhr = new ActiveXObject('Microsoft.XMLHTTP');
		console.log(error);
	}

	//判断
	if(method.toLowerCase() == 'get' && data){
		url += '?' + data;
	}

	xhr.open(method, url, true);

	if(method.toLowerCase() == 'get'){
		xhr.send();
	}else{
		xhr.setRequestHeader('content-type', 'application/x-www-form-urlencoded');
		xhr.send(data);
	}

	xhr.onreadystatechange = function(){
		if(xhr.readyState == 4){
			if(xhr.status == 200){
				/*
					在这里要处理下载的数据，不能确定如何处理下载到的数据。不能确定这里的代码怎么去编写。

					【注】我们需要在这里传入一个函数，在这里去调用函数。
					   这种函数叫做回调函数。
				*/
				if(success){
					success(xhr.responseText);
				}
			}else{
				// alert('Error: ' + xhr.status);
				if(error){
					error('Error: ' + xhr.status);
				}
			}		
		}
	}
}