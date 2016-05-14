var RML = RML || {};

// Init on document ready
$(function () {
//	RML.Uplayer.init();
});

RML.Uplayer = new function(){
	var self = this;
	var $body = $('body');

	this.init = function(IDs, pl_name) {
		// jq vas delarations
		//...
		this.vol; //volume
		this.playing = false; //is playing 
		this.cur_IDs = IDs || {}; // curr ids in the playlist
		this.pl_name = pl_name || "";
		this.videos_count = this.cur_IDs.length || 0;
		this.container = new UPlayerContainer();

		// initial code example:
		// if (self.ready) {...} else self.attemptReady()....
	};

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
		if (this.dmReady && this.ytReady && this.scReady) {
			this.ready = true;
			this.onUPlayerReady();
		} else {
			this.ready = false;
		}
		return this.ready;
	};
	this.onUPlayerReady = function() {
		//...this function will trigger when all sub-players are ready
		console.log("Universal player is ready!");
	};
	this.isReady = function() {
		return this.ready;
	};
	this.isPlaying = function() {
		return this.playing;
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
			this.playing = true;
		} else { // if not ready
			setTimeout(function(){
				this.play();
				console.log("UPlayer in not ready to play()");
			},250);
		}
	};
	this.togglePlay = function() {
		if (this.isReady) {
			this.container.togglePlayer();
			var src = IDs[loc][1];
			switch (src) {
				case 'dm':
					D_player.togglePlay();
					break;
				case 'yt':
					if(player.getPlayerState() == 1) {
						player.pauseVideo();
					} else
						if(player.getPlayerState() == 2 ) {
							player.playVideo();
						}
					break;
				case 'sc':
					sc_player.toggle();
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
	this.loadPlaylist = function(pl_name, auth) {
		if(!document.getElementById('the_list'))
			uplayer.loadListApp(pl_name);
		if(auth != null) {
			$.ajax({
				url: 'pl_mngr/load_pl.php',
				data: "pl_name=" + pl_name + "&auth=" + auth,
				success: function(responseText) {
					loc = 0;
					$('#pl_title').html(pl_name);
					$('#the_list').html(responseText);
					$('.pl_video_elm:eq('+loc+')').toggleClass('pl_vid pl_vid_playing');
				},
				type: 'post'
			});
		}
		else {
			if(logged())
				$.ajax({
					url: 'pl_mngr/getPL.php',
					data: "q=get_videos&PL_name=" + pl_name,
					success: function(responseText) {
						loc = 0;
						$('#pl_title').html(pl_name);
						$('#the_list').html(responseText);
						//				setTimeout(function(){$('#the_list').html(responseText);},500);
						$('.pl_video_elm:eq('+loc+')').toggleClass('pl_vid pl_vid_playing');5
					},
					type: 'post'
				});
			else {
				var arr = JSON.parse(localStorage[pl_name]);
				var the_list = document.getElementById('the_list');
				the_list.innerHTML = '';
				$('#pl_title').html(pl_name);
				for (i = 0; i < arr.length; i++) {
					var title = arr[i]['title'];
					var duration = arr[i]['duration'];
					var id = arr[i]['id'];
					var thumb = arr[i]['thumbnail'];
					var src = arr[i]['src'];
					var auth = arr[i]['author'];

					var x = document.createElement('li');
					x.className = 'a_vid white';
					x.appendChild(document.createElement('p'));
					x.appendChild(document.createElement('p'));
					var img = document.createElement('img');
					img.src = thumb;
					img.className = "thumbnail_img";
					x.appendChild(img);

					var dur = document.createElement('span');
					dur.className = 'duration_line';
					dur.innerHTML = duration;
					x.appendChild(dur);

					var tit = document.createElement('div');
					tit.className = 'title_line';
					tit.innerHTML = title;
					x.appendChild(tit);

					var lit_img = document.createElement('img');
					lit_img.src = "imgs/" + src + ".png";
					lit_img.style.cursor = "pointer";
					x.appendChild(lit_img);

					var au = document.createElement('span');
					au.className = 'author_line';
					au.innerHTML = "By: " + auth;
					x.appendChild(au);
					x.appendChild(document.createElement('br'));

					clone_edits(id,x,src,title,duration);

					the_list.appendChild(x);
				}
				loc = 0;
				$('.pl_video_elm:eq('+loc+')').toggleClass('pl_vid pl_vid_playing');
			}
			IDs = getIDs(pl_name);
		}
		loc = 0;

		if(IDs.length != 0) {
			//need to add setup_player with duration param from IDs array with duration in ti
			uplayer.playVideo(IDs[0][0],IDs[0][1]);
			mini($('#page'));
		}
		else {
			loc = undefined;
		}
	}; // loads a PL with a name and auth
	this.STOP = function() {
		if (this.isReady()) {
			//alert("YUP MEEE");
			D_player.pause();
			D_player.load('2');
			DZ.player.pause();
			sc_player.pause();
			player.stopVideo(); //yt stop
			$('#c_play').attr('src', 'imgs/c_play.png');
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
		if(this.isShuffleMode()) {
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
	this.isShuffleMode = function () {
		return $('#c_shuf').hasClass('c_selected');
	}
	this.nextLoc = function (l) {
		if(this.isShuffleMode()) {
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
	this.playVideo = function(id, src) {
		if (this.isReady()) {
			this.container.playVideo();
			if(!IDs) IDs = getIDs($('#pl_title').html());

			var title, duration;
			for(i = 0; i < IDs.length; i++) { //will redo this cuz IDS will be different
				if(IDs[i][0] == id) {
					src = IDs[i][1];
					title = IDs[i][3];
					duration = IDs[i][4];
					auth = IDs[i][2];
				}
			}
			stopCount(); //stop the counter for the time
			startCount(getTime); //create a new counter for this video
			this.container.loadPlayerWith(title, duration);
			this.notify(title, auth, duration);
			switch(src) {
				case 'yt':
					D_player.pause();
					DZ.player.pause();
					sc_player.pause();
					$('#dm_player, #sc_player, #dz_player').hide();
					$('#yt_player').show();
					player.loadVideoById(id);
					break;

				case 'dm':
					$('#yt_player, #dz_player, #sc_player').hide();
					player.stopVideo(); //yt stop
					DZ.player.pause();
					sc_player.pause();
					$('#dm_player').show();
					var str = D_player.src;
					var oldID = str.substr(39, 7);
					var new_src = str.replace(oldID, id );
					D_player.src = new_src;
					D_player.src += '&autoplay=1'; // used this instead
					//D_player.play(); didnt work
					break;
				case 'sc':
					player.stopVideo();
					D_player.pause();
					DZ.player.pause();
					var url = "https%3A//api.soundcloud.com/tracks/" + id;
					$('#dm_player, #dz_player, #yt_player').hide();
					$('#sc_player').show();
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
					D_player.pause();

					$('#dm_player, #sc_player, #yt_player').hide();
					$('#dz_player').show();
					DZ.player.playTracks([id]);
					break;
			}

			//replace the URL without reloading the page
			var val = window.location.href;
			var new_url = replaceUrlParam(val,"p",$('#pl_title').html());
			new_url = replaceUrlParam(new_url,"v",loc);
			change_url(new_url);
			$('.pl_video_elm:eq('+loc+')').toggleClass('pl_vid pl_vid_playing');
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
				this.notify(s_name, auth, dur);
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

UPlayerContainer.prototype.playVid = function() {
	$('#c_play').attr('src', 'imgs/c_pause.png');
	$('.pl_video_elm').removeClass('pl_vid_playing');
	$("#player").show(0);
	$('.meter > span').css("width", "1px;");
	$('.pl_video_elm:eq(' + loc + ')').toggleClass('pl_vid pl_vid_playing');
}