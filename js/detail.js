$(function(){
	//取出在cookie中存的购物车信息
	var cartStr = $.cookie("cart") ? $.cookie("cart") : "";
	//遍历所有的商品生成html添加到购物车列表中去
	var cartObj = convertCartStrToObj(cartStr);
	for(var id in cartObj) {
		//商品信息对象
		var good = cartObj[id];
		$('#tsImgS').find('img').attr('src',good.src);
		$('#tsImgS').find('a').attr('href',good.src);
		$('.goodsThingTitle').find('h2').html(good.name);
		$('.goodsThingTitle').find('h3').html(good.message);
		$('.goodsThingPrice .goodsPrice').html(good.price);
		$('.goodsThingButton').find('button').eq(0).attr('good-id',id);
		$('.goodsThingButton').find('button').eq(1).attr('good-id',id);
	
	}


})

$('#addNum').click(function(){
	var sum = $('#goodCountNum').val()
	$('#goodCountNum').val(++sum)
})
$('#subNum').click(function(){
	var count = $('#goodCountNum').val()
	if(count > 1){
		$('#goodCountNum').val(--count)
	}else{
		$('#goodCountNum').val(1)
	}
})
$('#goodCountNum').blur(function(){
	var counts = $('#goodCountNum').val()
	if(counts > 1){
		$('#goodCountNum').val(counts);
	}else{
		$('#goodCountNum').val(1);
	}
})

$('#putCar').click(function(){
	loadCart();

	var goodId = $(this).attr('good-id');
	//获取商品的数量
	var goodNum = $('#goodCountNum').val();
	//获取cookie中的信息
	//如果cookie中没有信息会返回一个undefined ,我所须是一个字符串类型的数据，所以将它转成一个“”空字符串。保持数据类型一致。
	var cartStr = $.cookie("cartgoods") ? $.cookie("cartgoods") : "";
	//将字符串转成对象
	var cartObj = convertCartGoodsStrToObj(cartStr);
	alert(cartStr)
	//判断该商品是否已经在购物车中存在
	if(goodId in cartObj){
		//如果已存在，那么该商品的数量加1
		cartObj[goodId].num = Number(goodNum) + Number(cartObj[goodId].num) +'';
	}else{
		//如果不存在，那么将新商品的信息存入
		cartObj[goodId] = {
			num : goodNum,
		};	
	}
//	alert(cartObj[goodId].num)
	//将新的购物车信息存回cookie
	//将对象转为字符串
	cartStr = convertObjToCartGoodsStr(cartObj);
	//存入cookie
	//document.cookie = "key=value"
	$.cookie("cartgoods",cartStr,{expires : 7,path:"/"});
	location.href = 'detail.html';
})

$('#buyNow').click(function(){
	$('#putCar').click()
	location.href = 'cookie.html'
})

