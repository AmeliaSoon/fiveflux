ajax({
		url: 'json/goodList.json',
		success: function(data){
			
			var arr = JSON.parse(data);
			$.each(arr,function(i){
				var goodsLi = document.createElement('li');
				$(goodsLi).attr('class',i);
				
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
			
			
				
				
				
			})

			
			$('.goods li').mouseenter(function(){
				$(this).find('.goodsCon').css('border','10px solid #f2f2f2')
			}).mouseleave(function(){
				$(this).find('.goodsCon').css('border','10px solid #fff');
			})
			$('.goodsCon').children().mouseenter(function(){
				$(this).css('color','#ce8d47')
			}).mouseleave(function(){
				$(this).css('color','#000');
			})
			

			
			$(".goodCar").click(function(){
					location.href = "cookie.html";
			})
			
			$('.goods li').click(function(){
				
//				获取
				var goodId = $(this).attr("class");
				//获取商品的名称
				var goodName =$(this).children('div').eq(0).find('h2').html();
				//获取商品的标题
				var goodMessage = $(this).children('div').eq(0).find('h3').html();
				//获取商品的价格
				var goodPrice = $(this).find('.goodsCon h4').html();
				//获取商品的图片src
				var goodSrc = $(this).children('div').eq(0).find('img').attr("src");
				//获取cookie中的信息
				//如果cookie中没有信息会返回一个undefined ,我所须是一个字符串类型的数据，所以将它转成一个“”空字符串。保持数据类型一致。
				var cartStr = $.cookie("cart") ? $.cookie("cart") : "";
				//将字符串转成对象
				var cartObj = convertCartStrToObj(cartStr);
				//判断该商品是否已经在购物车中存在
				
					cartObj[goodId] = {
						name : goodName,
						message:goodMessage,
						price:goodPrice,
						num : 1,
						src : goodSrc
					};
					
	
				
				//将新的购物车信息存回cookie
				//将对象转为字符串
				cartStr = convertObjToCartStr(cartObj);
				//存入cookie
				//document.cookie = "key=value"
				$.cookie("cart",cartStr,{expires : 7,path:"/"});
					
				location.href = "detail.html";
			})
			
		},
		error: function(msg){
			alert(msg);
		}
	})




