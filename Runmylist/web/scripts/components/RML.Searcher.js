var RML = RML || {};

// Init on document ready
$(function () {
//	RML.Navbar.init();
});

RML.Searcber = new function(){
	var self = this;
	var $body = $('body');
	var $item_results_cont = $body.find('.js-result-items');
	this.init = function() {
		
		//variabls
//		var
		
		
		//events listeners go here

//		$window.scroll(function() {
//			//TODOO load more video on scroll (maybe)
//		});

	}
	
	//other medhtos for Navbar go here...
	this.loadItemSearcbResults = function(json_array) {
		
		//vars
		var $nav = $(document.getElementsByClassName('js-nav-bar')),
			$item_search_btn = $nav.find('.js-search-types__search-type-videos'),
			result_count = json_array.length;
			
		self.emptyItemResults();
		$item_search_btn.click();
		
		for (var i = 0; i < result_count; i++) {
			
			//vars
			var item = json_array[i],
				title = item['title'],
				duration = item['duration'],
				id = item['videoId'],
				src_url = './images/' + item['src_type'] + '.png',
				url = item['url_content'],
				author = item['author'], //!!!
				thumb_url = item['url_thumbnail'],
				item_str = '<li data-info=\'' + JSON.stringify(item) + '\' class="result-item">' +
					'<div class="result-item__thumbnail">' +
					'<img class="" src="' + thumb_url + '" />' +
					'</div>' +
					'<div class="result-item__add"></div>' +
					'<div class="result-item__title">' + title + '</div>' +
					'<img class="result-item__source" src="' + src_url + '" alt="yt" />' +
					'<div class="result-item__duration">' + duration + '</div>' 
					'</li>';
//			console.log('item to add: \n' + item_str);
			result_count.append($(item_str));
		}
		
	};
	
	this.emptyItemResults = function() {
		$item_results_cont.empty();
	};
	this.searchItems = function(str) {
		
		//vars
		var params = "inputQuery=" + str;
		
		$.ajax({
			url: "http://localhost:8080/Runmylist/SearchController",
			data: params,
			method: 'get',
			success: function(rsp) {
				console.log('success');
				alert('wuhuuu');
				console.log(rsp);
				rsp = JSON.parse(rsp)['results'];
				self.loadItemSearcbResults(rsp);
			},
			error: function(err) {
				console.log('error:' + err);
			}
		});
		
	}
};

// Helping funcitons go here







