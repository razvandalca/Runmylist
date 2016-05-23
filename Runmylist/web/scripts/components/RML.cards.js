var RML = RML || {};

// Init on document ready
$(function () {
//	RML.Navbar.init();
});

RML.Cards = new function(){
	var self = this;
	var $body = $('body');

	this.init = function() {
		//variabls
		

		//events listeners go here
		$(document).on('click', ".card-info__title, .card-info__song-count", function() {
            $(this).closest(".card-container").toggleClass("flip"); 
        })

	}
	
	//other medhtos for Navbar go here...
};

// Helping funcitons go here







