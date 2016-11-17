var index = 1;
var _html = '';
$(function(){
	setInterval(timer,1000);
        function timer()  
            {  
                var ts = (new Date(2018, 11, 11, 9, 0, 0)) - (new Date()); 
                var hh = parseInt(ts / 1000 / 60 / 60 % 24, 10);
                var mm = parseInt(ts / 1000 / 60 % 60, 10); 
                var ss = parseInt(ts / 1000 % 60, 10);
                var timer= [checkTime(hh), checkTime(mm),checkTime(ss)];  
                $('.timer p').each(function(index){
                	$(this).attr('index',index)
                	.text(timer[$(this).attr('index')]);
                })
  
            }  
            function checkTime(i)    
            {    
               if (i < 10) {    
                   i = "0" + i;    
                }    
               return i;    
            }
	$(window).scrollTop(0);
			 var swiper = new Swiper('.swiper-container', {
		        pagination: '.swiper-pagination',
		        paginationClickable: true
		    });
			
			$(window).on('scroll',function(){
			    if($(window).scrollTop() == $(document).height() - $(window).height()){
			        index++;
					if(index<4){
						ajax();
						
					}
			    }
			});			
		
			
			ajax();
			function ajax () {
				var i = (index == 1) ? index : index * 3;
				$.ajax({
						url:'http://diviner.jd.com/diviner?p=610009&uuid=12396477&lid='+i+'&lim=3&cb=tempGuessLikeCallback',
						dataType:'jsonp',
						scriptCharset:"gb2312",
						jsonpCallback: 'tempGuessLikeCallback',
						success:function(res){
							var data = res.data;
							
							
							$.each(data,function(idx,obj){
								_html += '<li><a href="' + obj.clk +'"><img src="http://img13.360buyimg.com/n1/s200x200_'+ obj.img +'"></a><div class="mnb-right"><h5 class="mnb-head">' + unescape(obj.t) + '</h5><p>' + obj.jp + '元<span>新用户5元抢</span></p><span class="x">已售 '+obj.c3+'</span></div></li>';
							});
							$('.mnb').html(_html);
							
						}
					});
			}
		});