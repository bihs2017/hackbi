//makes .schedule and .items same height
function fixScheduleAndItemsHeight() {
	$heightToSet = Math.max($('.schedule').outerHeight(), $('.items').outerHeight());
	$('.schedule').css('height', $heightToSet);
	$('.items').css('height', $heightToSet);
}

function preventAccidentalMapScroll() {
	$('#map').addClass('scrolloff');
	
	$('#map-container').on('click', function () {
		$('#map').removeClass('scrolloff');
	});
	$("#map").mouseleave(function () {
		$('#map').addClass('scrolloff');
	});
}

function formatForMobile() {
	$screenWidth = $(window).width();
	if ($screenWidth >= 768) {
		fixScheduleAndItemsHeight();
		preventAccidentalMapScroll();
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
	formatForMobile();
	updateHideShow();
	$(window).scroll(function() {
		updateHideShow();
	});
});