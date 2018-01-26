function initAccordion(){
	$('.listAccordion h3').bind('click', function(){
		if($(this).next().css('display')=='none')
		{
			$(this).next().slideDown('nomal');
			$(this).removeClass('close');
			$(this).addClass('open');
		}else
		{
			$(this).next().slideUp('nomal');
			$(this).removeClass('open');
			$(this).addClass('close');
		}
	});
}