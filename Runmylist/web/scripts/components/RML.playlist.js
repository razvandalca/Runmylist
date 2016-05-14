var RML = RML || {};

// Init on document ready
$(function () {
//	RML.Playlist.init();
});

RML.Playlist = new function() {
	var self = this;
	var $body = $('body');

	this.init = function() {
		//declare variabls $cont, $pl--asdd
		//...
/*
		//code to call methods.. (events listener are written here)
		$obj.on('event', function() {
			self.method();
		});
       */
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



