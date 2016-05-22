var RML = RML || {};

// Init on document ready
$(function () {
//	RML.Uplayer.init();
});

RML.Uplayer = new function(){
	var self = this;
	var $body = $('body');
	this.current_item = {};
	this.states = {
		ready: false,
		playing: false,
		shuffle: false,
		playlistRepeat: false,
		songRepeat: false,
		lastItem: false
	}
	this.items = [];
	
	this.init = function(IDs, pl_name) {
		
		//vars
		var $player = $('.playlist').find('.player'),
		_$player = {
			$play_btn: $player.find('.js-player__play-button'),
			$next_btn: $player.find('.js-player__next-button'),
			$previous_btn: $player.find('.js-player__prev-button'),
			$repeat_btn: $player.find('.js-player__repeat-button'),
			$shuffle_btn: $player.find('.js-player__shuffle-button')
		}
		
		// event listeners 
		_$player.$play_btn.on('click', function() {
			if (self.isReady()) {
				self.togglePlay();
			}
		});
		
		_$player.$next_btn.on('click', function() {
			if (self.isReady()) {
				self.playNextItem();
			}
		});
		
		_$player.$previous_btn.on('click', function() {
			if (self.isReady()) {
				self.playPreviousItem();
			}
		});
		
		_$player.$repeat_btn.on('click', function() {
			if (self.isPlaylistRepeat()) {
				$(this).removeClass('js-player__shuffle-button--is-shuffle');
				self.setShuffle(false);
			}
			else {
				$(this).addClass('js-player__shuffle-button--is-shuffle');
				self.setShuffle(true);
			}
		});
		
		_$player.$shuffle_btn.on('click', function() {
			if (self.isShuffle()) {
				$(this).removeClass('player__repeat-button--is-repeat')
				self.setPlaylistRepeat(false);
			}
			else {
				$(this).addClass('player__repeat-button--is-repeat')
				self.setPlaylistRepeat(true);
			}
		});
	};	
	this.isSongRepeat = function() {
		return self.states.songRepeat;
	};
	this.isPlaylistRepeat = function() {
		return self.states.playlistRepeat;
	};
	this.setSongRepeat = function(repeat) {
		self.states.songRepeat = repeat;
	};
	this.setPlaylistRepeat = function(repeat) {
		self.states.playlistRepeat = repeat;
	}
	this.setShuffle = function(shuffle) {
		self.states.shuffle = shuffle;
	}
	this.isFinalItem = function() {
		return self.states.lastItem;
	}
	this.refreshFinalItem = function() {
		self.states.lastItem =  self.current_item.position  == (self.items.length - 1);
	}
	// methods of the class Uplayer
	this.makeReady = function(src) {
		switch (src) {
			case "dm":
				this.dmReady = true;
				break;
			case "yt":
				this.ytReady = true;
				break;
			case "sc":
				this.scReady = true;
				break;
				//	case "dz":
				//		this.dzReady = true;
				//		break;
			default:
				break;
		}
//		if (this.dmReady && this.ytReady && this.scReady) {
		if (this.ytReady && this.scReady) {
			self.states.ready = true;
			self.onUPlayerReady();
		} else {
			self.states.ready = false;
		}
		return this.states.ready;
	};
	this.onUPlayerReady = function() {
		//...this function will trigger when all sub-players are ready
		console.log("Universal player is ready!");
	};
	this.isReady = function() {
		return this.states.ready;
	};
	this.isPlaying = function() {
		return this.states.playing;
	};
	this.play = function() {
		if(this.isReady()) {
			var src = IDs[loc][1];
			document.getElementById(play_pause_button).src = play_pause_src;
			switch (src) {
				case 'dm':
					D_player.play();
					break;
				case 'yt':
					player.playVideo();
					break;
				case 'sc':
					sc_player.play();
					break;
				case 'dz':
					DZ.player.play();
					break;
			}
			this.states.playing = true;
		} else { // if not ready
			setTimeout(function(){
				this.play();
				console.log("UPlayer in not ready to play()");
			},250);
		}
	};
	this.togglePlay = function() {
		if (this.isReady()) {

			//vars
			var src = self.current_item['src'];

			switch (src) {
				case 'dm':
					D_player.togglePlay();
					break;
				case 'yt':
					if(player.getPlayerState() == 1) {
						player.pauseVideo();
						self.states.playing = false;
					} else
						if(
							player.getPlayerState() == -1 || //not started
							player.getPlayerState() == 0 || //ended
							player.getPlayerState() == 2 // paused
						  ) {
							player.playVideo();
							self.states.playing = true;
						}
					break;
				case 'sc':
					sc_player.toggle();
					self.states.playing = ! self.states.playing;
					break;
				case 'dz':
					if(DZ.player.isPlaying()) {
						DZ.player.pause();
					}
					else {
						DZ.player.play();
					}
					break;
			}
		}
		else { // if not ready
			setTimeout(function(){
				this.togglePlay();
				console.log("UPlayer in not ready to togglePlay()");
			},150);
		}
	};
	this.clearPlayer = function() {
		
		//vars
		var $playlist = $('.playlist'),
			$player = $playlist.find('.player'),
			$playlist_items_cont = $playlist.find('.playlist-items').find('ul');
		
		$playlist_items_cont.empty();
		
		this.STOP();
		
	};
	this.refreshItems = function() {
		
		//vars
		var $playlist = $('.playlist'),
			$player = $playlist.find('.player'),
			$playlist_items_cont = $playlist.find('.playlist-items'),
			$playlist_items = $playlist_items_cont.find('ul').find('li');
		self.items = [];
		$playlist_items.each(function(i) {
			//vars 
			var $this = $(this),
				item = JSON.parse($this.attr('data-info')),
				title = item['title'],
				duraiton = item['duraiton'],
				id = item['id'],
				src_type =item['src_type'],
				url = item['url'],
				author = item['author'], //!!!
				thumb_url = item['thumb_url'];

			self.items[i] = {
				$obj: $this,
				src: src_type,
				id: id,
				position: i,
				title: title
			}
		})
		
		
		
		
	};
	this.loadPlaylist = function(playlist_info, JSON_data_arr) {
		
		//debug
		console.log(playlist_info);
		console.log(JSON_data_arr);
		
		//vars
		var $playlist = $('.playlist'),
			$player = $playlist.find('.player'),
			$playlist_items_cont = $playlist.find('.playlist-items'),
			$playlist_items_cont_ul = $playlist_items_cont.find('ul'),
			$playlist_title = $player.find('.player__title'),
			playlist_title = playlist_info['playlist_name'],
			json_size = JSON_data_arr.length;
		
		this.clearPlayer();
		$playlist_title.text(playlist_title);
		
		for (var i = 0; i < json_size; i++) {
			//vars
			var item = JSON_data_arr[i],
				title = item['title'],
				duraiton = item['duraiton'],
				id = item['id'],
				src_url = './images/' + item['src_type'] + '.png',
				url = item['url'],
				author = item['author'], //!!!
				thumb_url = item['thumb_url'],
				item_str = '<li data-info=\'' + JSON.stringify(item) + '\' class="playlist-item">'+
				'<div class="playlist-item__thumbnail"><img class="" src="' + thumb_url + '" /></div>'+
				'<div class="playlist-item__delete"></div> '+
				'<div class="playlist-item__title">' + title + '</div>'+
				'<img class="playlist-item__source" src="' + src_url + '" />'+
				'<div class="playlist-item__duration"> ' + duraiton + ' </div>'+
				'</li>';
//			console.log('item to add: \n' + item_str);
			$playlist_items_cont_ul.append($(item_str));
		}
		self.refreshItems();
		if (json_size != 0) {
			self.current_item = self.items[0];	
			this.playVideo();
		}
	}; // loads a PL with a name and auth
	this.STOP = function() {
		if (self.isReady()) {
			
			//vars
			var $play_btn = $('.js-player__play-button player__button');
			
			
//			D_player.pause();
//			D_player.load('2');
//			DZ.player.pause();
			sc_player.pause();
			player.stopVideo(); //yt stop
			$play_btn.addClass('player__play-button--pause');
//			$('#c_play').attr('src', 'imgs/c_play.png');
		}
		else { // if not ready
			var _this = this;
			setTimeout(function(){
				_this.STOP();
				console.log("UPlayer in not ready to STOP()");
			},100);
		}
	};
	this.preLoc = function (l) {
		if(this.isShuffle()) {
			var random_integer = -5;
			do {
				random_integer = Math.floor(Math.random() * IDs.length);
				//alert(random_integer);
			} while(random_integer == l);
			return random_integer;
		}
		if( l == 0 )
			l = (IDs.length);
		return --l;
	};
	this.isShuffle = function () {
		return self.states.shuffle;
	}
	this.nextLoc = function (l) {
		if(this.isShuffle()) {
			var random_integer = -5;
			do {
				random_integer = Math.floor(Math.random() * IDs.length);
			} while(random_integer == l);
			return random_integer;
		}
		if( l == (IDs.length - 1) )
			l = -1;
		return ++l;
	};
	this.playVideo = function() {
//		this.ready = true;
		if (self.isReady()) {
			
			//vars 
			var title = self.current_item['title'],
				id = self.current_item['id'],
				src = self.current_item['src'],
				$item = self.current_item['$obj'],
				position = self.current_item['position'];
				
			self.refreshFinalItem();
//			this.container.playVideo();
//			if(!IDs) IDs = getIDs($('#pl_title').html());
			
//			stopCount(); //stop the counter for the time
//			startCount(getTime); //create a new counter for this video
//			this.container.loadPlayerWith(title, duration);
//			this.notify(name, auth, duration);
			this.notify(name, src, 'duration');
//			alert('source is: '+ src);
			switch(src) {
				case 'yt':
//					D_player.pause();
//					DZ.player.pause();
					sc_player.pause();
					$('.dm-player-cont, .sc-player-cont, .deezer-player-cont').hide();
					$('.yt-player-cont').show();
//					alert('id to play is; ' + id);
					player.loadVideoById(id);
					break;

				case 'dm':
					$('.yt-player-cont, .deezer-player-cont, .sc-player-cont').hide();
					player.stopVideo(); //yt stop
//					DZ.player.pause();
					sc_player.pause();
					$('.dm-player-cont').show();
//					var str = D_player.src;
//					var oldID = str.substr(39, 7);
//					var new_src = str.replace(oldID, id );
//					D_player.src = new_src;
//					D_player.src += '&autoplay=1'; // used this instead
					//D_player.play(); didnt work
					break;
				case 'sc':
					player.stopVideo();
//					D_player.pause();
//					DZ.player.pause();
					var url = "https%3A//api.soundcloud.com/tracks/" + id;
					$('.dm-player-cont, .deezer-player-cont, .yt-player-cont').hide();
					$('.sc-player-cont').show();
					sc_player.load(url,{
						auto_play:true,
						hide_related:true,
						show_comments:true,
						show_user:true,
						show_reposts:false,
						visual:true
					});
					break;
				case 'dz':
					player.stopVideo();
					sc_player.pause();
//					D_player.pause();

					$('.dm-player-cont, .sc-player-cont, .yt-player-cont').hide();
					$('.deezer-player-cont').show();
//					DZ.player.playTracks([id]);
					break;
			}

			//replace the URL without reloading the page !!! (should be a seperate function (maybe Class))
//			var val = window.location.href;
//			var new_url = replaceUrlParam(val,"p",$('#pl_title').html());
//			new_url = replaceUrlParam(new_url,"v",loc);
//			change_url(new_url);
//			$('.pl_video_elm:eq('+loc+')').toggleClass('pl_vid pl_vid_playing');
		}
		else {
			// if not ready
			var _this = this;
			setTimeout(function(){
				_this.playVideo(id,src);
				console.log("UPlayer in not ready to playVideo()");
			},100);
		}
	};
	this.playNextItem = function(){
		
		//vars
		var current_position = parseInt(self.current_item['position']),
			items_count = self.items.length,
			new_position = null;
		
		if(this.isShuffle()) {
			
			//vars
			var random_integer = -5;
			
			do {
				random_integer = Math.floor(Math.random() * items_count);
			} while(random_integer == current_position);
			new_position = random_integer;
			
			console.log('random generated number:' + random_integer);
		}
		else {
			new_position = current_position == (items_count - 1) ? 0 : (current_position + 1);
		}
		
		self.current_item = self.items[new_position];
		self.playVideo();
	};
	this.playPreviousItem = function(){
		
		//vars
		var current_position = parseInt(self.current_item['position']),
			items_count = self.items.length,
			new_position = null;
		
		if(this.isShuffle()) {
			
			//vars
			var random_integer = -5;
			
			do {
				random_integer = Math.floor(Math.random() * items_count);
			} while(random_integer == current_position);
			new_position = random_integer;
			
			console.log('random generated number:' + random_integer);
		}
		else {
			new_position = current_position == 0 ? items_count - 1 : (current_position - 1);
		}
		
		self.current_item = self.items[new_position];
		self.playVideo();
	};
	this.isLast = function () {
		return self.states.lastItem;
	};
	this.setVolume = function() {
		$('#vol_cntr_container').stop().show(0).stop().delay(500).fadeOut('slow');
		var $meter = $('#vol_meter > span');
		vol_r = this.vol + '%';
		$meter.css('width', vol_r);
		D_player.setVolume(vol/100);
		player.setVolume(vol);
		sc_player.setVolume(vol/100);
		DZ.player.setVolume(vol);
		//show vol div and hide
	};
	this.notify = function(s_name, auth, dur) {
		// Check for notification compatibility.
		if (!'Notification' in window) {
			console.log('notification not supproted');
			return;
		}
		// Log current permission level
		console.log(Notification.permission);
		// If the user has not been asked to grant or deny notifications
		// from this domain...
		if (Notification.permission === 'default') {
			Notification.requestPermission(function () {
				// ...callback this function once a permission level has been set.
//				self.notify(s_name, auth, dur);
			});
		}
		// If the user has granted permission for this domain to send notifications...
		else if (Notification.permission === 'granted') {
			var n = new Notification(
				'playing: '+ s_name,
				{
					'body': 'By: ' + auth + '.  ' + dur,
					// ...prevent duplicate notifications
					'tag' : 'unique string'
				}
			);
			// Remove the notification from Notification Center when clicked.
			n.onclick = function () {
				this.close();
			};
			setTimeout(function(){
				n.close();
			}, 4500);
		}
		// If the user does not want notifications to come from this domain...
		else if (Notification.permission === 'denied') {
			// ...remain silent.
			return;
		}
	};
	

};

/* Cookie helper functions
*******************************/

// change url without refresh
function change_url(URL) {
	history.pushState( {}, '', URL );
	//other code needed
}
function UPlayerContainer () {

}

UPlayerContainer.prototype.togglePlayer = function() {
	var e = document.getElementById(play_pause_button);
	if(e.classList.contains(play_mode_button)) {
		e.classList.add(pause_mode_button);
		e.classList.remove(play_mode_button);
		this.playing = true;
	}
	else {
		e.classList.add(play_mode_button);
		e.classList.remove(pause_mode_button);
		this.playing = false;
	}
}
UPlayerContainer.prototype.loadPlayerWith = function(title, duration) {

	$('#c_title').html(title);
	$('#c_duration').html(duration);
	$('.meter > span').css('width',"1%");
	$('#c_cur_duration').html('0:00');
}; //fills the Uplayer with data

UPlayerContainer.prototype.playItem = function() {
	$('#c_play').attr('src', 'imgs/c_pause.png');
	$('.pl_video_elm').removeClass('pl_vid_playing');
	$("#player").show(0);
	$('.meter > span').css("width", "1px;");
	$('.pl_video_elm:eq(' + loc + ')').toggleClass('pl_vid pl_vid_playing');
}




/************ YOUTUBE JS API ***********/
var tag = document.createElement('script');
tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
function onYouTubeIframeAPIReady() {
	player = new YT.Player('yt_player', {
		height: '204',
		width: '334',
		videoId: 'xxxxxxxxxx',
		playerVars: {
			//'controls':0,
			'rel': 0,
			//'showInfo': 0,
			'modestBranding': 1
		},
		events: {
			'onReady': onPlayerReady,
			'onStateChange': onPlayerStateChange
		}
	});
}
function onPlayerReady(event) {
	event.target.playVideo();
	RML.Uplayer.makeReady("yt");
}
function onPlayerStateChange(event) {
	if (event.data == YT.PlayerState.ENDED) {
	//	if(loc === IDs.length - 1 && $("#rep_all").hasClass('repeat_all_no')) {
	//	if(RML.Uplayer.isLast() && !RML.Uplayer.isRepeatAll()) {
	//		return;
	//	}

		if(RML.Uplayer.isSongRepeat()) {
			RML.Uplayer.playVideo();
		}
		else {
			if (!RML.Uplayer.isFinalItem()) {
//				alert('final item: ' + RML.Uplayer.isFinalItem());
				RML.Uplayer.playNextItem();
			}
		}
	}
}


/************ SoundCloud JS API ***********/
//var pl = document.getElementById('play_pause');
var iframeElement = document.getElementById('sc_player');
var sc_player = SC.Widget(iframeElement);
sc_player.bind('ready',function(){
	//what to do when it first loads
	//sc_player.play();
	RML.Uplayer.makeReady("sc");

});
sc_player.bind('finish',function(){
	if(loc === IDs.length - 1 && $("#rep_all").hasClass('repeat_all_no')) {
		return;
	}
	loc = RML.Uplayer.nextLoc(loc);
	RML.Uplayer.playItem(IDs[loc][0],IDs[loc][1]);
});
sc_player.bind('play',function(){
	$('#c_play').attr('src', 'imgs/c_pause.png');

});
sc_player.bind('pause',function(){
	$('#c_play').attr('src', 'imgs/c_play.png');

});

