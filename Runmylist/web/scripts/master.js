/*
 * RML master
 *  Author: APN modified by DLA
 *  Use this file to call functions in other files, on document ready, window.resize etc.
 *  ------
 * Dependencies: jquery, RML.js, other files with awesome functions.
 *  Usage: $(function () {
 *              projectName.slider.heroSlider($('.owl-carousel'));
 *         }); // Document ready end
 */

var RML = RML || {};
var projectName = projectName || "RunMyList";

// Document ready
$(function () {
	// Only include RML functions that you use!
//	RML.responsive.init();
	RML.Uplayer.init();
	RML.Playlist.init();
	RML.Navbar.init();
    RML.Cards.init();
    RML.Login.init();
	// RML.adjustFigureImage.init();
	// RML.lazyload.content();
	// RML.lazyload.image();

	// Call new functions here like this:
	//projectName.slider.heroSlider($('.owl-carousel'));
	//svg4everybody(); // Fix SVG spritemap in IE/Edge

}); // Document ready end


/*
 *  Use the following if needed
 */

// Window load
// $(window).load(function(e){
//     // call functions here
// }); // Window load

// // Window resize
// $(window).resize(function(e){
//     // call functions here
// }); // Window resize

// // Window scroll
// $(window).scroll(function(e){
//     // call functions here
// }); // Window scroll