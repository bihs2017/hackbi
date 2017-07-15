//makes .schedule and .items same height
function fixScheduleAndItemsHeight() {
	$screenWidth = $(window).width();
	if ($screenWidth >= 768) {
		$heightToSet = Math.max($('.schedule').outerHeight(), $('.items').outerHeight());
		$('.schedule').css('height', $heightToSet);
		$('.items').css('height', $heightToSet);
	}
}

function updateHideShow() {
	$('.hideme').each( function(i) {
		var bottom_of_object = $(this).offset().top + ($(this).outerHeight() / 2);
		var bottom_of_window = $(window).scrollTop() + $(window).height();
		if ( bottom_of_window > bottom_of_object ) {
			$(this).addClass('showme');
		}
	});
}

$(document).ready(function() {
	fixScheduleAndItemsHeight();
	updateHideShow();
	$('#map').addClass('scrolloff');
	
	$(window).scroll( function() {
		updateHideShow();
	});
	
	$('#map-container').on('click', function () {
		$('#map').removeClass('scrolloff');
	});
	$("#map").mouseleave(function () {
		$('#map').addClass('scrolloff');
	});
});