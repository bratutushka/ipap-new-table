$('select').on('change', function () {
	$('.tabs__content .inner').removeClass('active')
	let i = $(this).prop('selectedIndex')
	$('.tabs__content').each(function (k, v) {
		$(v).find('.inner').eq(i).addClass('active');
	});
});