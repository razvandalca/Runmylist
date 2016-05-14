//var distance = $('div').offset().top,
//	$window = $(window),
//	is_fixed_nav = false,
//	is_shortened = false,
//	is_hidden_logo = false,
//	$main_wrapper = $(document.getElementsByClassName('js-main-wrapper')),
//	$nav = $(document.getElementsByClassName('js-nav-bar')),
//	$search_input = $($nav[0].getElementsByClassName('js-search-form__search-input')),
//	$search_types = $($nav[0].getElementsByClassName("js-search-types")),
//	$secondary_logo = $($nav[0].getElementsByClassName('js-secondary-logo')),
//	$logo = $(document.getElementsByClassName('js-logo'));
//
//
//$window.scroll(function() {
//	var scroll_amount = $window.scrollTop();
//
////	console.log(scroll_amount);
//	if ( scroll_amount >= 46 && !is_shortened) {
//		is_shortened = true;
//		$logo.addClass("logo--shorten");
//	}
//	else if ( scroll_amount < 46 && is_shortened) {
//		is_shortened = false;
//		$logo.removeClass("logo--shorten");
//	}
//	if ( scroll_amount >= 81 && !is_hidden_logo) {
//		is_hidden_logo = true;
//		$logo.hide();
//	}
//	else if ( scroll_amount < 81 && is_hidden_logo) {
//		is_hidden_logo = false;
//		$logo.show();
//	}
//	//fixed mode
//	if ( scroll_amount > 85 && !is_fixed_nav) {
//		is_fixed_nav = true;
//		$nav.toggleClass('nav-bar-cont--relative nav-bar-cont--fixed');
//		$secondary_logo.addClass('nav-bar__secondary-logo--visible')
//		$search_input.addClass('search-form__search-input--slide-sorten');
//		$search_types.addClass("slided-left");
//		$main_wrapper.addClass("main-wrapper--margin-top");
//	}
//	//relative mode
//	else if (scroll_amount < 85 && is_fixed_nav) {
//		is_fixed_nav = false;
//		$nav.toggleClass('nav-bar-cont--relative nav-bar-cont--fixed');
//		$search_input.removeClass('search-form__search-input--slide-sorten');
//		$secondary_logo.removeClass('nav-bar__secondary-logo--visible')
//		$search_types.removeClass("slided-left");
//		$main_wrapper.removeClass("main-wrapper--margin-top");
//	}
//});


