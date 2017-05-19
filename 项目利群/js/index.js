	$(function(){
//	二级菜单滑过显示
		$(".down").hover(function(){
			$(".customer").show();
		},function(){
			$(".customer").hide();
		});
		
		
//	鼠标聚焦
		$("#txt").focus(function(){
			$(this).attr("placeholder","")
		})
		$("#txt").blur(function(){
			$(this).attr("placeholder","美赞臣")
		})
		
		
//	滑过导航字体变色
		$(".bignav_list").hover(function(){
			$(this).find($(".bignav_a")).addClass("active");
			
		},function(){
			$(this).find($(".bignav_a:not(:first)")).removeClass("active");
		})
		
		
//	选项卡	
		$(".option_list").hover(function(){
			$(this).css("background","#B1191B");
			$(".hide_all").show();
			hide=$(".option_list").index($(this));
			$(".hide_list").eq(hide).show().siblings().hide();
			
			
		},function(){
			$(this).css("background","");
			$(".hide_all").hide();
		})
		
		
//	大轮播图
//		var timer=setInterval(picture,3000)
//		index=0;
//		function picture(){
//			index++;
//			if(index==$(".number_list").size()){
//				index=0;
//			}
//			$(".number_list").eq(index).addClass("active1").siblings().removeClass("active1");
//			$(".picture_list").eq(index).fadeIn(1000).siblings().fadeOut(1000);
//		}
//		$(".number_list").hover(function(){
//			clearInterval(timer);
//			index=$(this).index()-1;
//			picture();
//		},function(){
//			timer=setInterval(picture,3000)
//		})
		
//	水果小轮播图	
//		var time=setInterval(fruit,3000)
//		index1=0;
//		function fruit(){
//			index1++;
//			if(index1==$(".btn_list").size()){
//				index1=0;
//			}
//			$(".btn_list").eq(index1).addClass("active2").siblings().removeClass("active2");
//			$(".fruit_list").eq(index1).fadeIn(1000).siblings().fadeOut(1000);
//		}
//		$(".btn_list").hover(function(){
//			clearInterval(time);
//			index1=$(this).index()-1;
//			fruit();
//		},function(){
//			time=setInterval(fruit,3000);
//		})

//选项卡
	


	
//	大轮播图
		lunbo($(".number_list"),$(".picture_list"),"active1",1000);
//	小轮播图
		lunbo($(".btn_list"),$(".fruit_list"),"active2",1000);
		
//	轮播图函数封装
		function lunbo(obj,obj1,attr){
			var time=setInterval(fruit,3000)
			var index=0;
			function fruit(){
				index++;
				if(index==obj.size()){
					index=0;
				}
				obj.eq(index).addClass(attr).siblings().removeClass(attr);
				obj1.eq(index).fadeIn(time).siblings().fadeOut(time);
			}
			obj.hover(function(){
				clearInterval(time);
				index=$(this).index()-1;
				fruit();
			},function(){
				time=setInterval(fruit,3000);
			})
		}

//	生活超市轮播		
		hoverlunbo($(".lifebtn_list"),$(".lifepic_list"),"active3");
//	食品专场轮播
		hoverlunbo($(".foodbtn_list"),$(".foodpic_list"),"active4");
//	封装滑过轮播
		function hoverlunbo(obj,obj1,attr){
			obj.hover(function(){
				$(this).addClass(attr).siblings().removeClass(attr);
				obj1.eq($(this).index()-1).fadeIn(500).siblings().fadeOut(500);
			})
			
		}
		
//		返回轮播
//		
//			var timer=setInterval(carousel,3000);
//			var num = 0;
//			function carousel(){
//				num++;
//				if(num == 3){
//					num = 0;
//				}
//				$(".seamless_ul").animate({"left":-1020*num},1000);
//			}
//			$(".shade_left").click(function(){
//				
//				carousel();
//			})
//			$(".shade_right").click(function(){
//				
//				num--;
//				if(num == -1){
//					num = 2;
//				}
//				$(".seamless_ul").animate({"left":-1020*num},1000);
//			})

//	返回轮播
		returnlb($(".seamless_list"),$(".seamless_ul"),-1020,$(".shade_left"),$(".shade_right"),3000)
		returnlb($(".vigourfirst_list"),$(".vigourfirst_ul"),-798,$(".circle_left"),$(".circle_right"),3500)
//	封装返回轮播	
		function returnlb(obj,obj1,long,shade_left,shade_right,time){
			var timer=setInterval(carousel,time);
			var num = 0;
			function carousel(){
				num++;
				if(num == obj.size()){
					num = 0;
				}
				obj1.animate({"left":long*num},1000);
			}
			shade_left.click(function(){
				carousel();
			})
			shade_right.click(function(){
				num--;
				if(num == -1){
					num = obj.size()-1;
				}
				obj1.animate({"left":long*num},1000);
			})
		}
		
//		精选特卖选项轮播
//			$(".sellnav_list").hover(function(){
//				$(this).addClass("active5").siblings().removeClass("active5");
//				var number=$(this).index();
//				$(".sell_list").eq(number).fadeIn(300).siblings().fadeOut(300);
//			})
			
		sell($(".sellnav_list"),$(".sell_list"),"active5")
		function sell(obj,obj1,attr){
			obj.hover(function(){
				$(this).addClass(attr).siblings().removeClass(attr);
				var number=$(this).index();
				obj1.eq(number).fadeIn(300).siblings().fadeOut(300);
			})
		}
		
		
		
		
		
	})


