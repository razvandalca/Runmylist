var RML = RML || {};

// Init on document ready
$(function () {
//	RML.Navbar.init();
});

RML.Login = new function(){
	var self = this;
	var $body = $('body');
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
			$show_reg_btn = $login_cont.find('.js-login-register__register-show');
			
		//events listeners go here
		$login_btns_cont.on('click', function() {
			$login_cont.addClass("visible");
			$gray_background.addClass('visible');
		})
		$gray_background.on('click', function() {
			$('.js-popup').removeClass('visible');
			$gray_background.removeClass('visible');
		})
		$register_form.submit(function() {
			var $this = $(this);
			if ($this.find('.js-register__password').val() == $this.find('.js-register__password-r').val()){
				var params = $(this).serialize() + "&login_type=default";
				console.log('parameters to send for regestration: \n' + params);
				$.ajax({
					url: 'http://localhost:8080/Runmylist/RegisterController',
					data: params,
					method: "post",
					success: function(rsp) {
						alert(rsp);
					},
					error: function(err) {
						console.log("error ajax on registeration: ");
						console.log(err);
					}
				});
			}
			return false;
		});
		$login_form.submit(function() {
			var $this = $(this);
				var params = $(this).serialize() + "&login_type=default";
				console.log('parameters to send for regestration: \n' + params);
				$.ajax({
					url: 'http://localhost:8080/Runmylist/LoginController',
					data: params,
					method: "post",
					success: function(rsp) {
						alert(rsp);
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
	
		
		//other methods for login go here...
};

// Helping funcitons go here
};






