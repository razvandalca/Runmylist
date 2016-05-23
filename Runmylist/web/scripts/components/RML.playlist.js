var RML = RML || {};

// Init on document ready
$(function () {
//	RML.Playlist.init();
});

RML.Playlist = new function() {
	var self = this;
	var $body = $('body');
	self.item_to_add_json = {};
	self.states = {
		loaded: false,
		create_and_load: false	
	};

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
				},
				$created_playlist = self.createNewPlaylist(data);
			if (self.states.create_and_load) {
				self.loadPlaylist($created_playlist);
				self.addItem(self.item_to_add_json);
			}
			$gray_background.click();
			return false;
		});
		
		$(document).on('click', '.card-front-side__thumbnail-new', function() {
			

			self.requestPlaylistName();
		});
		
		$(document).on('click', '.js-result-item__add', function() {
			
			//vars
			var $this = $(this),
				$item = $(this.parentNode),
				json_data = JSON.parse($item.attr('data-info'));
				
			self.addItem(json_data);
			if (self.states.create_and_load) {
				self.item_to_add_json = json_data;
			}
			
				
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
		
		//vars
		var $playlist_cont = $('.playlist'),
			JSON_data_arr = [],
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
		self.setLoaded(true);
		$playlist_cont.removeClass('playlist--folded');
//		console.log('sending data: ' + JSON.stringify(JSON_data_arr));
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
	this.createNewPlaylist = function(data) {
		
		//var
		var $cards_cont = $('.js-cards-container');
		var title = data['title'],
			playlist_str = '<div class=\"card-container\" ontouchstart=\"this.classList.toggle(\'flip\');\">' +
					'<div class=\"card js-card \">' + 
						'<div class=\"card-front-side\">' + 
							'<div class=\"card-front-side__thumbnail\">' + 
								'<img src=\"./images/new-pl-thumb.jpg\" alt=\"img\" />' + 
							'</div>' + 
						'</div>' + 
						'<div class=\"card-back-side\">' + 
							'<div class=\"card-back-side__thumbnail\">' + 
								'<img src=\"./images/new-pl-thumb.jpg\" alt=\"img\" />' + 
							'</div>' + 
							'<div class=\"card-items\">' + 
								'<p class=\"card-items__header\" >' + title + '</p>' + 
								'<ul>' + 
								'</ul>' + 
							'</div>' + 
						'</div>' + 
					'</div>' + 
					'<div class=\"card-info\">' + 
						'<div class=\"card-info__play-btn\"></div>' + 
						'<div class=\"card-info__title\">' + title + '</div>' + 
						'<div class=\"card-info__song-count\"> 0 songs </div>' + 
					'</div>' + 
				'</div>',
			$new_playlist = $(playlist_str);
		$.ajax({
                    url: 'PlayListController',
                    data: 'playlistName=' + title + '&type=addPlaylist',
                    method: 'get',
                    success: function(rsp) {
                        console.log(rsp);
                    },
                    error: function(err) {
                        console.log("error" + err);
                    }
                })
		$cards_cont.append($new_playlist);
		return $new_playlist;
		
	};
	this.creatPlaylist = function(data) {
		
                //debug
                console.log('createPlyliat() call:');
                console.log(data)
                
		//vars
		var $cards_cont = $('.js-cards-container'),
			playlist_title = data['name'],
			items_arr = data['items'],
			items_count = items_arr.length,
//			playlist_thumbnail = 'haha',
			playlist_thumbnail = items_arr[0]['url_thumbnail'],
			playlist_str = '<div class="card-container" ontouchstart="this.classList.toggle(\'flip\');">' +
					'<div class="card js-card ">' + 
						'<div class="card-front-side">' + 
							'<div class="card-front-side__thumbnail">' + 
							'<img src="' + playlist_thumbnail + '" alt="img" />' + 
						'</div>' + 
						'</div>' + 
						'<div class="card-back-side">' + 
						'<div class="card-back-side__thumbnail">' + 
								'<img src="' + playlist_thumbnail + '" alt="img" />' + 
							'</div>' + 
							'<div class="card-items">' + 
								'<p class="card-items__header" >' + playlist_title + '</p>' + 
								'<ul>';
		
		for(var i = 0; i < items_count; i++) {
			
                        //debug
                        console.log(items_arr[i]);
                       // console.log(JSON.parse(items_arr[i]));
                        console.log(JSON.stringify(items_arr[i]));
                        console.log(items_arr[i]);
                        //console.log(JSON.parse(items_arr[i]));
                        console.log(JSON.stringify(items_arr[i]));
			//vars
			var item = items_arr[i],
				title = item['title'],
				item_str ='<li data-info=\'' + JSON.stringify(item) + '\' class="card-items__item" >' + title + '</li>';
				
			playlist_str += item_str;
		}
		
		playlist_str +=	'</ul>' + 
							'</div>' + 
						'</div>' + 
					'</div>' + 
					'<div class="card-info">' + 
						'<div class="card-info__play-btn"></div>' + 
						'<div class="card-info__title">' + playlist_title + '</div>' + 
						'<div class="card-info__song-count">' + items_count + ' songs </div>' + 
					'</div>' + 
				'</div>';
		console.log(playlist_str);
                console.log(playlist_str);
		var $imported_playlist = $(playlist_str);
		
		$cards_cont.append($imported_playlist);
		return $imported_playlist;
	};
	this.getAllPlaylists = function() {
		$.ajax ({
			url: 'InformationLoadingController',
			method: 'get',
			success: function(rsp) {
				console.log('success:' );
				console.log(rsp);
                                //console.log(JSON.stringify(JSON.parse(rsp)));
				self.loadAllPlaylists(JSON.parse(rsp));
			},
			error: function(err) {
				console.log('error:');
				console.log(err);
			}
		});	
	};
	this.loadAllPlaylists = function(JSON_data) {
		
                //debug
                console.log( JSON_data['result'].length)
                
		//vars
		var json_arr = JSON_data['result'],
                    	json_count = json_arr.length;
		
		for (var i = 0; i < json_count; i++) {
			self.creatPlaylist(json_arr[i]);
		}
	};
	this.createAndLoadPlaylist = function() {
		
		// vars
		var $new_playlist = self.createNewPlaylist(self.item_to_add_json);
		
		self.loadPlaylist($new_playlist);
		self.addExistingItem();
	};
	this.addExistingItem = function() {
		if (self.item_to_add_json != {}) {
			self.addItem(self.item_to_add_json);
		}
		else console.log('error adding item !! -13');
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
	this.addItem = function(JSON_data) {
			
            //vars
            var $playlist = $('.playlist'),
//					$player = $playlist.find('.player'),
                $playlist_items_cont = $playlist.find('.playlist-items'),
                $playlist_items_cont_ul = $playlist_items_cont.find('ul'),
                title = JSON_data['title'],
                duration = JSON_data['duration'],
                id = JSON_data['videoId'],
                src_url = './images/' + JSON_data['src_type'] + '.png',
                src_type = JSON_data['src_type'],
                url_content = JSON_data['url_content'],
                author = JSON_data['author'], //!!!
                playlist_name = RML.Uplayer.getPlaylistName(),
                url_thumbnail = JSON_data['url_thumbnail'],
                item_str = '<li data-info=\'' + JSON.stringify(JSON_data) + '\' class="playlist-item">'+
                '<div class="playlist-item__thumbnail"><img class="" src="' + url_thumbnail + '" /></div>'+
                '<div class="playlist-item__delete"></div> '+
                '<div class="playlist-item__title">' + title + '</div>'+
                '<img class="playlist-item__source" src="' + src_url + '" />'+
                '<div class="playlist-item__duration"> ' + duration + ' </div>'+
                '</li>';
		
               if (RML.Account.isLogged()) {
				   
				   
			//temp !!!
			var request = "url_content=" + url_content + "&title=" + title + "&url_thumbnail=" + url_thumbnail + "&src_type=" + src_type + "&author=" + author + "&duration=" + duration + "&type=addItem&playlistName=" + playlist_name  + "&videoID=" +id ;
			$.ajax({
				url: 'PlayListController',
				mehtod: "get",
				data: request,
				success: function(rsp) {
					console.log('succes:' + rsp);
					RML.Account.handleUserloginStatus();
				},
				error: function(err) {
					console.log("there is an error adding the playloist");
				}
			});
		}
		else {
			console.log('your work will be lost');
		}
		if (self.isLoaded()) {
			
			//add each item information to the big array
			$playlist_items_cont_ul.append($(item_str));
			RML.Uplayer.refreshItems();
			if (self.states.create_and_load) {
				RML.Uplayer.setCurrentItem(0)
				self.states.create_and_load = false;
			}
		}
		else {
			self.states.create_and_load = true;
			self.requestPlaylistName();
			RML.Uplayer.setIdLoaded(false);
		}
	};
	this.isLoaded = function() {
		return self.states.loaded;
	}
	this.setLoaded = function(bool) {
		self.states.loaded = bool;
	}
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



