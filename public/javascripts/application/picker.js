(function ($) {
	$(".picker .items").height(($(window).height() - 200) + 'px');
	
	$("#content .picker .items .menu_left .item").bind('click touchend', function(){
		$("#itemID").val($(this).find('input[name="id"]').val());
		$(".preview .image img").attr('src', $(this).find('input[name="mainImage"]').val());
	});
}($));