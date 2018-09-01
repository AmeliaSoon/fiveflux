define(function(){
	return {
		//点击×删除底部的bottomFoot
		close : function (className){
			var $ele = $('#' + className);
			$ele.onclick = (function(){
					$ele.parent().parent().remove();
			})
		}
		
		
		
	}