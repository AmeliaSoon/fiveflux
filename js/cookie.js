$(function(){
	var cartStr = $.cookie("cartgoods") ? $.cookie("cartgoods") : "";
	var allNum = 0;
	var allMoney = 0;
	if(!cartStr){
		$('.goodsEmpty').css({
			'display': "block"
		});
	} else{
		
		
		var cartObj = convertCartGoodsStrToObj(cartStr);
		//遍历所有的商品生成html添加到购物车列表中去
		
		for(var id in cartObj) {
			//商品信息对象
			var that = id;
			var good = cartObj[that];
			allNum += good.num
			 ajax({
				url: 'json/goodList.json',
				success: function(data){
//					alert(data);
					var arr = JSON.parse(data);
					
					var str = '<tr class="manygoods"><th class="carTitle" width="80"><input name="product_checkall" value="1" class="cart_tfinput" checked="checked" type="checkbox"></th>'+
                '<th width="95">'+ '<img src="'+ arr[that].listImage + '"/></th><th width="233">'+
              	arr[that].description[1]+'</th><th width="112">'+ arr[that].attribute + '</th><th width="170">'+
                parseInt(arr[that].price.slice(1)).toFixed(2) + '</th><th width="112" class="carFun"><a href="" class="subNum">-</a>'+
                '<input type="text" name="" that="" value="' + good.num  +'"/><a href="" class="addNum">+</a>'+
                '</th><th width="167"></th><th width="176">'+ good.num * arr[that].price.slice(1) +'</th><th class="carFun" width="75">'+
                '<a href="" class="'+ that+'">删除</a><a href="">移入收藏夹</a><a href=""><i></i>定制包装</a></th></tr>';
					
            		$(str).appendTo(".cartList");
            		
					//删除按钮
					$('.'+that).click(function() {
						//在页面上将商品信息删除，顺便获取一个该商品的id
						var that = $(this).attr('class');
						$(this).parent().parent().remove;
						//从cookie中将该商品删除
						var cartStr = $.cookie("cartgoods") ? $.cookie("cartgoods") : "";
						var cartObj = convertCartGoodsStrToObj(cartStr);
				
						delete cartObj[that];
					
						//将新商品信息放回cookie
						$.cookie('cartgoods',convertObjToCartGoodsStr(cartObj), {
							expires: 7,
							path: "/"
						});
					})	
					
					
            		
	            	$(".addNum").click(function() {
						var cartStr = $.cookie("cartgoods") ? $.cookie("cartgoods") : "";
						var cartObj = convertCartGoodsStrToObj (cartStr);
						cartObj[that].num += 1;
						//将页面上显示的数量加1
						$(this).parent().siblings("input").val("" + cartObj[that].num);
						//更新页面上的小计
						$(this).parent().next().next().html(cartObj[that].num * arr[that].price.slice(1) + "");
						//将信息放回cookie
						$.cookie('cartgoods', convertObjToCartGoodsStr(cartObj), {
							expires: 7,
							path: "/"
						});
					});
					
					//给减按钮添加点击事件
					$(".subNum").click(function(){
						var cartStr = $.cookie("cartgoods") ? $.cookie("cartgoods") : "";
						var cartObj = convertCartGoodsStrToObj (cartStr);
						//将信息放回cookie
						if(cartObj[that].num > 1){ //商品数量减少不能少于1
							cartObj[that].num -= 1;
							//将页面上显示的数量减1
							$(this).parent().siblings("input").val("" + cartObj[that].num);
							//更新页面上的小计
							$(this).parent().next().next().html(cartObj[that].num * arr[that].price.slice(1) + "");
							//将信息放回cookie
							$.cookie('cartgoods',convertObjToCartGoodsStr(cartObj), {
								expires: 7,
								path: "/"
							});
						}		
					});
					
					
					$(".subNum").siblings('input').blur(function(){
						var cartStr = $.cookie("cartgoods") ? $.cookie("cartgoods") : "";
						var cartObj = convertCartGoodsStrToObj(cartStr);
						//判断用户输入是否合法
						var pattern = /^\d+$/;
						if(!pattern.test($(this).val())){
							cartObj[that].num = 1;
							$(this).val("1");
						}else{
							//修改一下数量
						cartObj[that].num = parseInt($(this).val());
						}
						
						
						$(this).val("" + cartObj[that].num);
							//更新页面上的小计
						$(this).parent().next().next().html(cartObj[that].num * arr[that].price.slice(1) + "");
						//将信息放回cookie
						$.cookie('cartgoods', convertObjToCartGoodsStr(cartObj), {
							expires: 7,
							path: "/"
						});
					})
					
//					$('.cartAll').click(function(){
//						if($(this).attr('checked') == true){
//							$('.cart_tfinput').attr('checked',false);
//						}else{
//							$('.cart_tfinput').attr('checked',true);
//						}
//					})
					
					
					allMoney += good.num * arr[that].price.slice(1);
					$('.countN').html(allNum)
					$('.allCount').html(allNum);
					$('.allPrice').html(allMoney);
				},
				error: function(msg){
					alert(msg);
				}
			})
			
			
		}
	}
})

//
//$('.clearCart').click(function(){
//	alert($('.manygoods').length)
//	$.cookie("cartgoods", "", {expires: -1});
//	
//	$('.cartList').find('.manygoods').remove()
//})
