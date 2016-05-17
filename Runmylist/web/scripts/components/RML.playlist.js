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
		

		//code to call methods.. (events listener are written here)
		$(document).on('click', '.card-info__play-btn', function() {	
			
			//vars
			var $playlist = $(this.parentNode.parentNode);
			self.loadPlaylist($playlist);
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
			playlist_title = $card_info.find('.card-info__title'),
			playlist_song_count = $card_info.find('.card-info__song-count'),
			$play_btn = $card_info.find('.card-info__play-btn'),
			playlist_info = {
				playlist_name: playlist_title,
				item_count: playlist_song_count
//				total_duration: "13:04", // TODO (maybe)
			};

		$playlist.find('.card-items').find('li').each(function() {
		
			alert($(this).data('info'));
			
			//vars
			var $this = $(this),
				JSON_data = JSON.parse($this.data('info'));
			
			//add each item information to the big array
			JSON_data_arr.push(JSON_data);
		});
		$play_btn.addClass('.card-info__play-btn--playing'); // change the timg to ||
		RML.Uplayer.loadPlaylist(playlist_info, JSON_data_arr);
	}
	this.creatPlaylist = function(data) {
		//TOD..
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



