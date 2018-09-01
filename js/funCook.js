function convertCartGoodsStrToObj(cartStr){
	//"sp1,香蕉,30,1,src1:sp2,苹果,40,2,src2:sp3,梨,50,3,str3"
	//如果是空字符串，即没有购物车信息，那么购物车为空，直接返回一个空对象
	if(!cartStr){
		return {};
	}
	var goods = cartStr.split(":");
	var obj = {};
	for(var i = 0; i < goods.length; i ++){
		var data = goods[i].split(",");
		//以商品的id为健，商品的其他信息为值，这个值也设计为一个对象
		obj[data[0]] = {
			num : parseInt(data[1]),
		}
	}
	return obj;
}
function convertObjToCartGoodsStr(obj){
		/* {
		 * 	sp1 : {
			 * num : 1,
		 * },
		
		 */
		var cartStr = "";
		//遍历对象
		for(var id in obj){
			if(cartStr){
				cartStr += ":";
			}
			//"sp1,香蕉,30,1,src1:sp2,苹果,40,2,src2:sp3,梨,50,3,str3"
			cartStr += id + "," + obj[id].num ;
		}
		return cartStr;
}

//加载购物车中的信息（使商品页与购物车页中的购物车数量同步）
function loadCart(){
	alert(2)
	var cartStr = $.cookie("cartgoods") ? $.cookie("cartgoods") : "";
	var cartObj = convertCartGoodsStrToObj(cartStr);
	//获取到购物车中所有商品的数量
	var total = 0;
	for(var id in cartObj){
		total += cartObj[id].num;
	}
	
	$("countN").click(function(){
		
	});
}