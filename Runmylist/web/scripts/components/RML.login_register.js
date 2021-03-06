var RML = RML || {};

// Init on document ready
$(function () {
//	RML.Navbar.init();
});

RML.Account = new function(){
	var self = this;
	var $body = $('body');
	self.username = '';
	self.states = {
		logged: false
	}
	
	this.init = function() {
		//variabls
		var $login_btns_cont = $('.js-login-cont'),
                    $btn_login = $login_btns_cont.find('.js-login-cont__btn-login'),
                    $btn_register = $login_btns_cont.find('.js-login-cont__btn-register'),
                    $login_cont = $('.login-register'),
                    $gray_background = $('.js-gray-background'),
                    $register_form = $('.register'),
                    $login_form = $('.login'),
                    $show_log_btn = $login_cont.find('.js-login-register__login-show'),
                    $show_reg_btn = $login_cont.find('.js-login-register__register-show'),
                    $logout_btn = $('.js-logout-cont__btn-register');
			
		//events listeners go here
		$login_btns_cont.on('click', function() {
			$login_cont.addClass("visible");
			$gray_background.addClass('visible');
		});
		$gray_background.on('click', function() {
			$('.js-popup').removeClass('visible');
			$gray_background.removeClass('visible');
		});
                
                $logout_btn.on('click', function() {
                   self.logout(); 
                });
                
		$register_form.submit(function() {
			var $this = $(this);
			if ($this.find('.js-register__password').val() == $this.find('.js-register__password-r').val()){
				var params = $(this).serialize() + "&login_type=default";
				console.log('parameters to send for regestration: \n' + params);
				$.ajax({
					url: 'RegisterController',
					data: params,
					method: "post",
					success: function(rsp) {
						console.log(rsp);
						alert("Registeration successful");
						$('.js-grey-background').click();
						$('.js-login-register__login-show').click();
					},
					error: function(err) {
						alert("Registeration error");
						console.log("error ajax on registeration: ");
						console.log(err);
					}
				});
			}
			return false;
		});
		$login_form.submit(function() {
			
			// vars
			var $this = $(this),
				name = $this.find('.js-login__username').val(),
				params = $(this).serialize() + "&login_type=default";
			
			self.username = name;
			console.log('parameters to send for regestration: \n' + params);
			$.ajax({
				url: 'LoginController',
				data: params,
				method: "post",
				success: function(rsp) {
					console.log(rsp);	
				},
				error: function(err) {
					console.log("error ajax on registeration: ");
					console.log(err);
				}
			});
			return false;
		});
		$show_log_btn.click(function() {
			var $this = $(this);
			if($this.hasClass('log-reg-btn--selected')) return false;
			$this.addClass('log-reg-btn--selected');
			$show_reg_btn.removeClass('log-reg-btn--selected');
			$register_form.removeClass('register--visible');
			$login_form.addClass('visible');

		});
		$show_reg_btn.click(function() {
			var $this = $(this);
			if($this.hasClass('log-reg-btn--selected')) return false;
			$this.addClass('log-reg-btn--selected');
			$show_log_btn.removeClass('log-reg-btn--selected');
			$register_form.addClass('register--visible');
			$login_form.removeClass('visible');
		});
	
//		self.handleUserloginStatus();
		//other methods for login go here...
	};
	
	this.handleUserloginStatus = function() {
//		self.refreshIsLogged();
		
		//vars
		var $logout = $('.js-logout-cont'),
			$logout_name = $logout.find('.js-logout-cont__name'),
			$logout_btn = $logout.find('.js-logout-cont__btn-register'),
			$login = $('.js-login-cont');

		if (self.isLogged()) {
                        
			$logout.addClass('visible');
			$login.removeClass('visible');
			$logout_name.text(self.username);
			RML.Playlist.getAllPlaylists();
		}
		else {
			
		
         var $playlists_cont = $('div .card-container:not(:first-child)').remove();

			$logout.removeClass('visible');
			$login.addClass('visible');
			$logout_name.text('');
			RML.Playlist.getAllPlaylists();

		}
	};
	
	this.login = function(params) {
		console.log('parameters to send for regestration: \n' + params);
		$.ajax({
			url: 'LoginController',
			data: params,
			method: "post",
			success: function(rsp) {
				console.log(rsp);
			},
			error: function(err) {
				console.log("error ajax on registeration: ");
				console.log(err);
			}
		});
	}
	this.logout = function() {
		$.ajax ({
			url: "UserManagemantController",
			data: 'session=logout',
			method: 'get',
			success: function(rsp) {
				console.log(rsp);
				if (rsp == "1") {
					self.setLogged(false);
					self.handleUserloginStatus();
					RML.UPlayerContainer.clearPlayer();
				}
				else {
					console.log('response' + rsp);
//					self.setLogged();
				}
			},
			error: function(err) {
				console.log('big problem here no INERNET');
			}
		});
	}
	this.isLogged = function() {
		return self.states.logged;
	};
	this.setLogged = function(bool) {
		self.states.logged = bool;
	}
	this.refreshIsLogged = function() {
		 
		$.ajax ({
			url: "UserManagemantController",
			data: 'session=verify',
			method: 'post',
			success: function(rsp) {
				if (rsp == "1")
					self.setLogged(true);
				else {
					console.log('response' + rsp);
					self.setLogged(false);
				}
			},
			error: function(err) {
				console.log('big problem here no INERNET');
			}
		});
		
	}

// Helping funcitons go here
};






