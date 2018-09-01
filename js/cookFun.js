function convertCartStrToObj(cartStr){
	//"sp1,香蕉,30,1,src1:sp2,苹果,40,2,src2:sp3,梨,50,3,str3"
	//如果是空字符串，即没有购物车信息，那么购物车为空，直接返回一个空对象
	var goods = cartStr.split(":");
	var obj = {};
	for(var i = 0; i < goods.length; i ++){
		var data = goods[i].split(",");
		//以商品的id为健，商品的其他信息为值，这个值也设计为一个对象
		obj[data[0]] = {
			name : data[1],
			message:data[2],
			price : data[3],
			num : parseInt(data[4]),
			src : data[5]
		}
	}
	return obj;
}
function convertObjToCartStr(obj){
		/* {
		 * 	sp1 : {
		 * 		name : "香蕉",
			 * price : 30,
			 * num : 1,
			 * src : "img/1.jpg"
		 * },
		 * sp2 :{
			 * 	name :"苹果",
			 * price : 40,
			 * num:2,
			 * src : "img/2.jpg"
		 * },
		 * sp3{
			 * 	name : "梨"，
			 * price : 50,
			 * num : 3,
			 * src : "img/3.jpg"
		 * }
		 * }
		 */
		var cartStr = "";
		//遍历对象
		for(var id in obj){
			if(cartStr){
				cartStr += ":";
			}
			//"sp1,香蕉,30,1,src1:sp2,苹果,40,2,src2:sp3,梨,50,3,str3"
			cartStr += id + "," + obj[id].name + ","+ obj[id].message + "," + obj[id].price + "," + obj[id].num + "," + obj[id].src;
		}
		return cartStr;
}

