function onSuccess(googleUser) {
	console.log('Logged in as: ' + googleUser.getBasicProfile().getName());
	//	 login(googleUser);
	RML.Account.username = googleUser.getBasicProfile().getName();
	if (RML.Account.isLogged()) {
        RML.Account.handleUserloginStatus();
	 	return;
	}
	var profile = googleUser.getBasicProfile();
	console.log(googleUser.getBasicProfile());
	var email = profile.getEmail(),
		username = profile.getName(),
		f_name = profile.getGivenName(),
		l_name = profile.getFamilyName(),
		user_id = profile.getId();
	var params = "login_type=google&firstname=" + f_name + "&lastname=" + l_name + '&email=' + email +  "&google_id=" + user_id + "&username=" + username;
	console.log('parameters to send for regestration: \n' + params);
	$.ajax({
		url: 'LoginController',
		data: params,
		method: "post",
		success: function(rsp) {
			console.log("login success:" + rsp);
			RML.Account.setLogged(true);
			RML.Account.handleUserloginStatus();
			$('.js-gray-background').click();
		},
		error: function(err) {
			console.log("error ajax on google login: ");
			console.log(err);
		}
	});
}
function onFailure(error) {
	console.log(error);
}
function renderButton() {
	gapi.signin2.render('google_login_btn', {
		'scope': 'https://www.googleapis.com/auth/plus.login',
		'width': 334,
		'height': 60,
		'longtitle': true,
		'theme': 'dark',
		'onsuccess': onSuccess,
		'onfailure': onFailure
	});
}