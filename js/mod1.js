define(function(){
	return {
		drag : function (id){
			var $ele = $('#' + id);
			var disX = null;
			var disY = null;
			$ele.mousedown(function(evt){
				disX = evt.pageX - $(this).offset().left;
				disY = evt.pageY - $(this).offset().top;
				$(document).mousemove(function(evt){
					$ele.css({left : evt.pageX - disX,top : evt.pageY - disY});
				})
				$(document).mouseup(function(){
					$(this).off();
				})
			})
		},
		myMax : function(arr){
			return Math.max.apply(null,arr);
		},
		myMin : function(arr){
			return Math.min.apply(null,arr);
		},
		mySum : function(arr){
			return arr.reduce(function(a,b){
				return a + b;
			});
		},
		myRandom : function(min,max){
			return Math.floor(Math.random() * (max - min + 1) + min);
		}
	}
//	//对外创建接口
//	return {
//		drag : drag
//	}
})
