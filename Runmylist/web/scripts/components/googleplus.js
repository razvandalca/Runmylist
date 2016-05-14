 function onSuccess(googleUser) {
      console.log('Logged in as: ' + googleUser.getBasicProfile().getName());
//	 login(googleUser);
	 console.log(googleUser.getBasicProfile());
	 $.post('http://localhost/runmylist.com/php/user_login.php', function(rsp) {
		 alert(rsp);
	 });
    }
    function onFailure(error) {
      console.log(error);
    }
    function renderButton() {
      gapi.signin2.render('my-signin2', {
        'scope': 'https://www.googleapis.com/auth/plus.login',
        'width': 212,
        'height': 40,
        'longtitle': true,
        'theme': 'dark',
        'onsuccess': onSuccess,
        'onfailure': onFailure
      });
    }