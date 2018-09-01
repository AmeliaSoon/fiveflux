//goods

ajax({
		url: 'json/goodsList.json',
		success: function(data){

			var arr = JSON.parse(data);

			for(var i = 0; i < arr.length; i++){
				var goodsLi = document.createElement('li');
				var goodsI = document.createElement('i');
				var goodsDiv = document.createElement('div');
				var goodsImg = document.createElement('img');
				var goodsH2 = document.createElement('h2');
				var goodsH4 = document.createElement('h4');
				$(goodsDiv).attr('class','goodsCon');
				$(goodsImg).attr("src",arr[i].listImage);
				$(goodsH2).html(arr[i].description[0]);
				$(goodsH4).html(arr[i].price);
				$(goodsDiv).append($(goodsImg),$(goodsH2));
				if(arr[i].description.length > 0){
					var goodsH3 = document.createElement('h3');
					$(goodsH3).html(arr[i].description[1]);
					$(goodsDiv).append($(goodsH3))
				}
				$(goodsDiv).append($(goodsH4));
				$(goodsLi).append($(goodsI),$(goodsDiv));
				$('.goods').append(goodsLi);
			}
			
			$('.goods li').mouseenter(function(){
				$(this).find('.goodsCon').css('border','10px solid #f2f2f2')
			}).mouseleave(function(){
				$(this).find('.goodsCon').css('border','10px solid #fff');
			})
			$('.goodsCon').children().mouseenter(function(){
				$(this).css('color','#ce8d47')
			}).mouseleave(function(){
				$(this).css('color','#000')
			})
			
		},
		error: function(msg){
			alert(msg);
		}
	})