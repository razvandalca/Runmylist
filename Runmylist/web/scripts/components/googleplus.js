function onSuccess(googleUser) {
	console.log('Logged in as: ' + googleUser.getBasicProfile().getName());
	//	 login(googleUser);
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
}
function onFailure(error) {
	console.log(error);
}
function renderButton() {
	gapi.signin2.render('google_login_btn', {
		'scope': 'https://www.googleapis.com/auth/plus.login',
		'width': 212,
		'height': 40,
		'longtitle': true,
		'theme': 'dark',
		'onsuccess': onSuccess,
		'onfailure': onFailure
	});
}