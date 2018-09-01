//插入侧边栏背景图
			$('#slide ul li').mouseenter(function(){
				$(this).css('background','rgb(198,156,109)');
				$(this).find('i').css('color','#fff');
				$(this).find('img').css('display','block');
				$(this).find('span').css('display','block');
				$(this).find('b').css('display','block');
			}).mouseleave(function(){
				$(this).css('background','rgb(51,51,51)');
				$(this).find('i').css('color','rgb(198,156,109)');
				$(this).find('span').css('display','none');
				$(this).find('b').css('display','none');
				$(this).find('img').css('display','none');
			})
			
			$('#slide ul li').eq(7).click(function(){
				$('html , body').animate({scrollTop: 0},'slow');
			})



//底部悬浮
$('.footerBottomCon>p').click(function(){
	$(this).parent().parent().remove();
})




//title
// 下拉菜单
$('#diwu').find('a').mouseenter(function(){
	$('#dadao').css({'display':'block'})
})
$('#dadao').mouseleave(function(){
	$('#dadao').css({'display':'none'})
})

//二级小
$('#dadao li').mouseenter(function(){
	if($(this).index() == 0){
		$(this).find('a').css('color','rgb(178,130,71)');
		$(this).find('a').find('i').attr('class','iconfont icon-sanjiaoshang');
	}else{
		$(this).find('a').css('color','rgb(208,0,0)');
	}
}).mouseleave(function(){
	if($(this).index() == 0){
		$(this).find('a').css('color','#6a706c');
		$(this).find('a').find('i').attr('class','iconfont icon-sanjiaoxia');
	}else{
		$(this).find('a').css('color','#6a706c');
	}	
})

//旁边
$('#shouji').find('a').mouseenter(function(){
	$('#xiazai').css({'display':'block'})
})
$('#xiazai').mouseleave(function(){
	$('#xiazai').css({'display':'none'})
})


$('#xiazai li').mouseenter(function(){	
	if($(this).index() == 0){
		$(this).find('a').css('color','rgb(208,0,0)');
		$(this).find('a').find('i').attr('class','iconfont icon-sanjiaoshang');
	}
}).mouseleave(function(){
	if($(this).index() == 0){
		$(this).find('a').css('color','#6a706c');
		$(this).find('a').find('i').attr('class','iconfont icon-sanjiaoxia');
	}
})







//logo
//购物车
$('.logoCon').find('img').eq(2).mouseenter(function(){
	$(this).attr('src','image/over.png');
}).mouseleave(function(){
	$(this).attr('src','image/overseadef.jpg');
});

	
//二级菜单
//$('.navCon').eq(0).click(function(e){
//	e.preventDefault();
	ajax({
		url: 'json/indexNav.json',
		success: function(data){
//			alert(data);
			var arr = JSON.parse(data);
			for(var i = 1; i < 4; i++){
				var oMenuDiv = document.createElement('div');
				$(oMenuDiv).attr('class','menuCon');
				var arrBrand = arr[0]['brand'+i];
//				alert(arrBrand)
				for(var j = 0; j < arrBrand.length; j++){
					var oStrong = document.createElement('strong');
					$(oStrong).attr('class','menuText');
					$(oStrong).html(arrBrand[j]);
					$(oMenuDiv).append($(oStrong));
				}
				$('.menu').eq(i-1).append($(oMenuDiv));
				$('.menuText').click(function(){
					location.href = 'list.html';
				})
			}
//			
			$('.navLi1').mouseenter(function(){
					$(this).find('.nav2').css('display','block');
			})
			$('.navLi1').mouseleave(function(){	
				$(this).find('.nav2').css('display','none');
			})
			
		},
		error: function(msg){
			alert(msg);
		}
	})
//})


//一级菜单小图标
for(var i = 1; i < 15; i++){
	var len = -10-32*i;
	$("#nav1 li").eq(i).find('i').css({'backgroundPositionY':len+'px'});
}
$('.navCon li').eq(0).mouseenter(function(){
	$('#nav1').css({'display':'block'});
})

//一级菜单事件
$("#nav1 li").mouseenter(function(){
	var len = -10-32*$(this).index();
	$(this).css({'opacity':'1'});
	
	$(this).find('i').css({"background":"url(image/brand_category2.png) no-repeat -18px "+len+"px"});
	$(this).find('a').css({"color":"#bd9164"});
	$(this).find('span').css({"display":"block"});
}).mouseleave(function(){
	var len = -10-32*$(this).index();
	$(this).css({'opacity':'0.8'});
	$(this).find('i').css({"background":"url(image/brand_category1.png) no-repeat -18px "+len+"px"});
	$(this).find('a').css({"color":"#1b090e"});
	$(this).find('span').css({"display":"none"});
	$('#nav1').css({'display':'none'});
})


//轮播
$(document).ready(function(){
	
	/* 设置第一张图片 */
	$(".slider .bd li").first().before($(".slider .bd li").last());
	$(".slider .hd li").html("")
	/* 滚动切换 */
	$(".slider").slide({
		titCell:".hd ul", 
		mainCell:".bd ul", 
		effect:"leftLoop",
		autoPlay:true, 
		vis:3,
		autoPage:true, 
		trigger:"mouseover"
	});

});



//flagship ajax
ajax({
		url: 'json/flagship.json',
		success: function(data){
//			alert(data);
			var arr = JSON.parse(data);
//			alert(arr.length)
			for(var i = 0; i < arr.length; i++){
//				alert(arr[i].backpic);
				var oflagLi = document.createElement('li');
				var oflagDiv = document.createElement('div');
				var oflagImg = document.createElement('img');
				var oflagP1 = document.createElement('p');
				var oflagP2 = document.createElement('p');
				var oflagP3 = document.createElement('p');
				$(oflagLi).attr('class','flagli');
				$(oflagDiv).attr('class','flaglist');
				$(oflagP1).attr('class','heng');
				$(oflagP2).attr('class','endBrand');
				$(oflagP3).attr('class','chiBrand');
				$(oflagImg).attr('src',arr[i].image);
				$(oflagP2).html(arr[i].eng);
				$(oflagP3).html(arr[i].chi);
				$(oflagLi).css('backgroundImage',arr[i].backpic);

				$(oflagDiv).append($(oflagImg),$(oflagP1),$(oflagP2),$(oflagP3));
				$(oflagLi).append($(oflagDiv));
				$('.flagship').append($(oflagLi));
			}
			$('.flagli').mouseover(function(){
				$(this).find('div').stop().animate({'height':'154'},1000)
			}).mouseout(function(){
				$(this).find('div').stop().animate({'height':'54'},1000)
			})
	
		},
		error: function(msg){
			alert(msg);
		}
	})


//flagbrand
ajax({
		url: 'json/flagBrands.json',
		success: function(data){
//			alert(data);
			var arr = JSON.parse(data);
//			alert(arr[1].length)
			for(var i = 0; i < arr[0].length; i++){
				var ofgBrandLi = document.createElement('li');
				var ofgBrandImg = document.createElement('img');
				var ofgBrandP1 = document.createElement('p');
				var ofgBrandP2 = document.createElement('p');
				$(ofgBrandP1).attr('class','chinese');
				$(ofgBrandP2).attr('class','heng');
				$(ofgBrandImg).attr('src',arr[0][i].image);
				$(ofgBrandP1).html(arr[0][i].chi);
				$(ofgBrandLi).append($(ofgBrandImg),$(ofgBrandP1),$(ofgBrandP2));
				$('.ulList1').append($(ofgBrandLi));
			}
			for(var j = 0; j < arr[1].length; j++){
				var ofgBrandLi = document.createElement('li');
				var ofgBrandImg = document.createElement('img');
				var ofgBrandP1 = document.createElement('p');
				var ofgBrandP2 = document.createElement('p');
				$(ofgBrandP1).attr('class','chinese');
				$(ofgBrandP2).attr('class','heng');
				$(ofgBrandImg).attr('src',arr[1][j].image);
				$(ofgBrandP1).html(arr[1][j].chi);
				$(ofgBrandLi).append($(ofgBrandImg),$(ofgBrandP1),$(ofgBrandP2));
				$('.ulList2').append($(ofgBrandLi));
			}

		
			$('.flagnext,.flagprev').click(function(){
				if($('.ulList2').css('left') == '0px'){
					$('.ulList2').animate({left:'-1212px'},'slow',function(){
				 		$('.ulList2').css('left','1212px');
				 	});
				 	$('.ulList1').animate({left:'0'},'slow');
				}else if($('.ulList1').css('left') == '0px'){
					$('.ulList1').animate({left:'-1212px'},'slow',function(){
						$('.ulList1').css('left','1212px');
					});
				 	$('.ulList2').animate({left:'0'},'slow');
				}	 
			})
			
			$('.ulList li').mouseover(function(){
				$(this).find('img').css('display','none');
				$(this).find('p').css('display','block')
			}).mouseout(function(){
				$(this).find('p').css('display','none');
				$(this).find('img').css('display','block')
			})
			$('.chinese').mouseenter(function(){
				$(this).css('color','#b28247');
			}).mouseleave(function(){
				$(this).css('color','#000');
			})
			
		
		},
		error: function(msg){
			alert(msg);
		}
	})


//oversea
ajax({
		url: 'json/oversea.json',
		success: function(data){
//			alert(data);
			var arr = JSON.parse(data);
//			alert(arr.image.length);
			for(var i = 0; i < arr.image.length; i++){
				var overseaLi = document.createElement('li');
				var overseaImg = document.createElement('img');
				$(overseaImg).attr("src",arr.image[i]);
				$(overseaLi).append($(overseaImg));
				$('.overseaUl').append($(overseaLi));
			}
		},
		error: function(msg){
			alert(msg);
		}
	})


//hotItem
ajax({
		url: 'json/hotItem.json',
		success: function(data){
//			alert(data);
			var arr = JSON.parse(data);
			
			//hotItem1
			var arrh = arr.hotItem1;
		   $('.hotConLeft').css('background',arr.hotItem1.background);
			for(let i = 0; i < arrh.img.length; i++){
			
				var oLi = document.createElement('li');
				var oDiv = document.createElement('div');
				var oImg = document.createElement('img');
				var oP1 = document.createElement('p');
				var oP2 = document.createElement('p');
				$(oDiv).attr('class','hotP');
				$(oP1).html(arrh.p[i][0]);
				$(oP2).html(arrh.p[i][1]);
				$(oDiv).append($(oP1),$(oP2))
				if(arrh.p[i].length == 3){
					var oP3 = document.createElement('p');
					$(oP3).html(arrh.p[i][2]);
					$(oDiv).append($(oP3));
				}
				$(oImg).attr('src',arrh.img[i]);
				$(oLi).append($(oDiv),$(oImg));
				if(i >= 0 && i <= 2){
					$('.hotUlTop').append($(oLi));
				}else if(i >=3 && i <= 5){
					$('.hotUlBottom').append($(oLi));
				}
			}
			
			//滑动效果
			$('.hotConRight li').mouseenter(function(){
				if($(this).index() == 1 && $(this).parent().attr('class') == 'hotUlTop'){
					$(this).find('.hotP').stop().animate({left:'-235'},500);
					$(this).find('img').stop().animate({right:'-160'},500);
				}else{
					$(this).find('.hotP').stop().animate({left:'-50'},500);
					$(this).find('img').stop().animate({left:'50'},500);
				}
					
			}).mouseleave(function(){
				if($(this).index() == 1 && $(this).parent().attr('class') == 'hotUlTop'){
					$(this).find('.hotP').stop().animate({left:'-175'},500);
					$(this).find('img').stop().animate({right:'-100'},500);
				}else{
					$(this).find('.hotP').stop().animate({left:'0'},500);
					$(this).find('img').stop().animate({left:'0'},500);
				}
			})
			
			//hotItem3
			var arrt = arr.hotItem3; 
			 $('.hotItemLeft').css('background',arrt.backLeft[0]);
			var oDiv1 = document.createElement('div');
			var oDiv2 = document.createElement('div');
			var oH2 = document.createElement('h2');
			var oH3 = document.createElement('h3');
			var oH4 = document.createElement('h4');
			var oP = document.createElement('p'); 
			$(oH2).html(arrt.backLeft[1][0]);
			$(oH3).html(arrt.backLeft[1][1]);
			$(oH4).html(arrt.backLeft[1][2]);
			$(oDiv1).attr('class','hotConshadow');
			$(oDiv2).attr('class','hotShadow');
			$(oDiv2).append($(oH2),$(oH3),$(oP),$(oH4));
			$(oDiv1).append($(oDiv2));
			$('.hotItemLeft').append($(oDiv1));
			
		
			for(var j = 0; j < arrt.p.length; j++){
				var aLi = document.createElement('li');
				var aDiv1 = document.createElement('div');
				var aDiv2 = document.createElement('div');
				var aH2 = document.createElement('h2');
				var aH3 = document.createElement('h3');
				var aH4 = document.createElement('h4');
				var aP = document.createElement('p'); 
				$(aLi).css('background',arrt.libg[j]);
				$(aH2).html(arrt.p[j][0]);
				$(aH3).html(arrt.p[j][1]);
				$(aH4).html(arrt.p[j][2]);
				$(aDiv1).attr('class','hotConshadow');
				$(aDiv2).attr('class','hotShadow');
				$(aDiv2).append($(aH2),$(aH3),$(aP),$(aH4));
				$(aDiv1).append($(aDiv2));
				$(aLi).append($(aDiv1));
				$('.hotItemRight').append($(aLi));
			}
			
			
			$('.hotItemLeft,.hotItemRight li').mouseenter(function(){
				$(this).find('.hotConshadow').stop().animate({width:'399',marginRight:'-200'},1000,'swing');
			}).mouseleave(function(){
				$(this).find('.hotConshadow').stop().animate({width:'0',marginRight:'0'},1000,'swing');
			})
			
			
			//类似于轮播
			$('.hotItemsCon h3').find('span').mouseenter(function(){
				$(this).css('background','#000');
				$('.hot').eq($(this).index()).prev().stop().animate({'left':'-1212px'},1000)
				$('.hot').eq($(this).index()).next().stop().animate({'left':'1212px'},1000);
				$('.hot').eq($(this).index()).stop().animate({'left':'0px'},1000)
			}).mouseleave(function(){
				$(this).css('background','#999');
			})
			
			
		},
		error: function(msg){
			alert(msg);
		}
	})



//SHOPPINGmALL
ajax({
		url: 'json/shoppingMall.json',
		success: function(data){
//			alert(data);
			var arr = JSON.parse(data);
			
			//lilist
			var liList = arr.shoppingMall1.liList;
			for(var i = 0; i < liList.length; i++){
				var shopLeftLi = document.createElement('li');
				$(shopLeftLi).html(liList[i]);
				$('.shoppingLeft ul').append($(shopLeftLi));
			}
			
			//shoppingPic
			var shopPic = arr.shoppingMall1.pics;
			for(var j = 0; j < shopPic.length; j++){
				var shopThing = document.createElement('div');
				$(shopThing).attr('class','shoppingThing');
				for(var k = 0; k < shopPic[0].length; k++){
					var shopimg = document.createElement('img');
					$(shopimg).attr('src',shopPic[j][k]);
					$(shopThing).append($(shopimg));
				}
				$('.shoppingPic').append($(shopThing));
			}
			
			//btn
			var  btnA1= document.createElement('a');
			var  btnA2= document.createElement('a');
			var  btnOl= document.createElement('ol');
			var  btnLi1= document.createElement('li');
			var  btnLi2= document.createElement('li');
			var  btnLi3= document.createElement('li');
			$(btnOl).append($(btnLi1),$(btnLi2),$(btnLi3))
			$('.shoppingBtn').append($(btnA1),$(btnOl),$(btnA2));
			
			//shoppingCenterCon
			var wordList = arr.shoppingMall1.wordList;
			var  wordH2= document.createElement('h2');
			var  wordP= document.createElement('p')
			var  wordH4= document.createElement('h4');
			var  wordH5= document.createElement('h5');
			$(wordH2).html(wordList[0]);
			$(wordH4).html(wordList[1]);
			$(wordH5).html(wordList[2]);
			$('.shoppingCenterCon').append($(wordH2),$(wordP),$(wordH4),$(wordH5));
			$('.shoppingCenter').css('background',arr.shoppingMall1.background)
			
			//shoppingRight
			var rightPics = arr.shoppingMall1.rightPics;
			for(var m = 0; m < rightPics.length; m++){
				var shopRightLi = document.createElement('li');
				var shopRightImg = document.createElement('img');
				$(shopRightImg).attr('src',rightPics[m]);
				$(shopRightLi).append($(shopRightImg));
				$('.shoppingRight').append($(shopRightLi));
			}
			
		},
		error: function(msg){
			alert(msg);
		}
	})


//promotion
ajax({
		url: 'json/promotion.json',
		success: function(data){
//			alert(data);
			var arr = JSON.parse(data);
			
			var proImg = arr.promotion.img;
			for(var i = 0; i < proImg.length; i++){
				var promotionLi = document.createElement('li');
				if(i == 6){
					for(var j = 0; j < proImg[6].length; j++){
						var promoImg = document.createElement('img');
						var promoA = document.createElement('a');
						$(promoImg).attr("src",proImg[6][j]);
						$(promoA).append($(promoImg));
						$(promotionLi).append($(promoA));
 					}
				}else{
					var promotionImg = document.createElement('img');
					$(promotionImg).attr("src",proImg[i]);
					$(promotionLi).append($(promotionImg));
				}
				
				
				$('.promotion').append($(promotionLi));
			}
		},
		error: function(msg){
			alert(msg);
		}
	})

