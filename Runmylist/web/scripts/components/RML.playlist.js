var RML = RML || {};

// Init on document ready
$(function () {
//	RML.Playlist.init();
});

RML.Playlist = new function() {
	var self = this;
	var $body = $('body');

	this.init = function() {
		
		//vars
		 var $playlist_name_form = $('.js-playlist-name-form'),
			 $playlist_name = $playlist_name_form.find('form');

		//code to call methods.. (events listener are written here)
		$(document).on('click', '.card-info__play-btn', function() {	
			
			//vars
			var $playlist = $(this.parentNode.parentNode);
			
			self.loadPlaylist($playlist);
		});
		
		$playlist_name.on('submit', function() {
			
			//vars
			var playlist_new_name = $(this).find('input').val(),
				$gray_background = $('.js-gray-background'),
				data = {
					title: playlist_new_name
				};
			
			self.creatPlaylist(data);
			$gray_background.click();
			return false;
		});
		
		$(document).on('click', '.card-front-side__thumbnail-new', function() {
			

			self.requestPlaylistName();
		});
       
	};

	// function for renaming a playlist
	this.renamePlaylist = function(oldName) {
		if (logged()) {
			$.post('pl_mngr/renamePL.php','q='+'oldName',function(responseText){

			})
		}
		else {
			var newName = $("#pl_title").html();
			localStorage[newName] = localStorage[oldName];
			delete  localStorage[oldName];
			//change url
		}
	}
	this.loadPlaylist = function($playlist) {
				alert($playlist);

		//vars
		var JSON_data_arr = [],
			$card_info = $playlist.find('.card-info'),
			playlist_title = $card_info.find('.card-info__title').text(),
			playlist_song_count = $card_info.find('.card-info__song-count').text(),
			$play_btn = $card_info.find('.card-info__play-btn'),
			playlist_info = {
				playlist_name: playlist_title,
				item_count: playlist_song_count
//				total_duration: "13:04", // TODO (maybe)
			};

		$playlist.find('.card-items').find('li').each(function() {

			//vars
			var $this = $(this),
				JSON_data = JSON.parse($this.attr('data-info'));
			
			//add each item information to the big array
			JSON_data_arr.push(JSON_data);
		});
		$play_btn.addClass('.card-info__play-btn--playing'); // change the timg to ||
		RML.Uplayer.loadPlaylist(playlist_info, JSON_data_arr);
	}
	this.requestPlaylistName = function() {
		
		//vars
		var $playlist_name_form = $('.js-playlist-name-form'),
			$playlist_name = $playlist_name_form.find('input'),
			$gray_background = $('.js-gray-background');
		
		$gray_background.addClass('visible');
		$playlist_name_form.addClass('visible');
		$playlist_name.focus();
	}
	this.creatPlaylist = function(data) {
		
		//var
		var $cards_cont = $('.js-cards-container');
		var title = data['title'],
			playlist_str = "<div class=\"card-container\" ontouchstart=\"this.classList.toggle('flip');\">" +
					"<div class=\"card js-card \">" + 
						"<div class=\"card-front-side\">" + 
							"<div class=\"card-front-side__thumbnail\">" + 
								"<img src=\"./images/new-pl-thumb.jpg\" alt=\"img\" />" + 
							"</div>" + 
						"</div>" + 
						"<div class=\"card-back-side\">" + 
							"<div class=\"card-back-side__thumbnail\">" + 
								"<img src=\"./images/new-pl-thumb.jpg\" alt=\"img\" />" + 
							"</div>" + 
							"<div class=\"card-items\">" + 
								"<p class=\"card-items__header\" >" + title + "</p>" + 
								"<ul>" + 
								"</ul>" + 
							"</div>" + 
						"</div>" + 
					"</div>" + 
					"<div class=\"card-info\">" + 
						"<div class=\"card-info__play-btn\"></div>" + 
						"<div class=\"card-info__title\">" + title + "<</div>" + 
						"<div class=\"card-info__song-count\"> 0 songs </div>" + 
					"</div>" + 
				"</div>";
		
		$cards_cont.append($(playlist_str));
		
	};
	this.deletePlaylist = function(data) {
		//TODO..
	};
	this.moveToacount = function(data) {
		//TODO..
	};
	this.moveTolocal = function(data) {
		//TODO..
	};
	this.changeItemOrder = function(data) {
		//todo..
	};
	this.addItem = function(data) {};
	this.removeItem = function(data) {};
	this.getDetails = function(data) {
		//return JSON: {name :"test", items: 20, totalDuration: 12:14....}
	}
	this.setData = function(data, objJSON) {
		//foreach key in objJSON set value
	}

};

/* Playlist helper functions
*******************************/



