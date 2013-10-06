(function ($) {
	$(".picker .items").height(($(window).innerHeight() - 150) + 'px');
	
	$("#content .picker .items .menu_left .item").bind('click touchend', function(){
		$("#itemID").val($(this).find('input[name="id"]').val());

		if(typeof $(this).find('input[name="mainImage"]') != 'undefined') {
			$(".preview .image img").attr('src', $(this).find('input[name="mainImage"]').val());
		}
		if(typeof $(this).find('input[name="runningCost"]') != 'undefined') { 
			var val = $(this).find('input[name="runningCost"]').val();
			$('.running_total').each(function(){
				$(this).find('.cost').html(val);
			});
		}
	});
}($));