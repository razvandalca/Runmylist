<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
	<head>
		<title>runmylist</title>
		<meta charset="UTF-8">
		<meta name="google-signin-client_id" content="99061022196-9lf3m0ph7t6nutj1monsjj17submqtqq.apps.googleusercontent.com">
		<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.0/jquery.min.js"></script>
		<script src="./scripts/components/googleplus.js"></script>
		<script src="//connect.facebook.net/en_US/sdk.js"></script>
		<script src="./scripts/components/fb.js"></script>
		<link rel="stylesheet" href="css/master.css" />
		<link href='https://fonts.googleapis.com/css?family=Roboto:400,300,500,700' rel='stylesheet' type='text/css'>
	</head>
	<body>
		<!--<div class="wrap">-->
		<div class="header">
			<div class="logo js-logo">
				<img class="logo__image" src="images/logo_rml.png" alt="Run My List Logo" />
			</div>
			<div class="js-nav-bar nav-bar-cont nav-bar-cont--relative">
				<div class="nav-bar">
					<div class="nav-bar__secondary-logo  nav-bar__secondary-logo--hidden js-secondary-logo">
						<img src="images/logo_rml.png" alt="Run My List Logo" />
					</div>
					<div class="js-search-types search-types">
						<div class="search-types__search-type search-types__search-type--active ">Videos</div>
						<span class="search-types__seperator">|</span>
						<div class="search-types__search-type">My playlists</div>
					</div>
					<form class="js-search-form search-form">
						<input type="text" placeholder="Search for music" class="js-search-form__search-input search-form__search-input" name="search" />
						<button class="search-form__button">
							Search music
						</button>
					</form>
					<div class="login-cont">
						<div class="login-cont__btn">Log in</div>
						<span class="login-cont__seperator">|</span>
						<div class="login-cont__btn">Sign up</div>
					</div>
				</div>
			</div>
		</div>
		<div class="main-wrapper js-main-wrapper">
			<div class="cards-container js-cards-container">

				<div class="card-container" ontouchstart="this.classList.toggle('hover');">
					<div class="card js-card ">
						<div class="card-front-side">
							<div class="card-front-side__thumbnail">
								<img src="./images/test1.jpg" alt="img" />
							</div>         
						</div>
						<div class="card-back-side">
						</div>
					</div>
					<div class="card-info">
						<div class="card-info__play-btn"></div>
						<div class="card-info__title">Let Go</div>
						<div class="card-info__song-count"> 11 songs </div>
					</div>
				</div>


				<div class="card-container" ontouchstart="this.classList.toggle('hover');">
					<div class="card js-card ">
						<div class="card-front-side">
							<div class="card-front-side__thumbnail">
								<img src="./images/test2.jpg" alt="img" />
							</div>         
						</div>
						<div class="card-back-side">
						</div>
					</div>
					<div class="card-info">
						<div class="card-info__play-btn"></div>
						<div class="card-info__title">Avril Lavigne</div>
						<div class="card-info__song-count"> 12 songs </div>
					</div>
				</div>

				<div class="card-container" ontouchstart="this.classList.toggle('hover');">
					<div class="card js-card ">
						<div class="card-front-side">
							<div class="card-front-side__thumbnail">
								<img src="./images/test3.jpg" alt="img" />
							</div>         
						</div>
						<div class="card-back-side">
							<div class="card-back-side__thumbnail">
								<img src="./images/test4.jpg" alt="img" />
							</div>
						</div>
					</div>
					<div class="card-info">
						<div class="card-info__play-btn"></div>
						<div class="card-info__title">Goodbye Loullaby</div>
						<div class="card-info__song-count"> 10 songs </div>
					</div>
				</div>

				<div class="card-container" ontouchstart="this.classList.toggle('hover');">
					<div class="card js-card ">
						<div class="card-front-side">
							<div class="card-front-side__thumbnail">
								<img src="./images/test2.jpg" alt="img" />
							</div>         
						</div>
						<div class="card-back-side">
						</div>
					</div>
					<div class="card-info">
						<div class="card-info__play-btn"></div>
						<div class="card-info__title">Avril Lavigne</div>
						<div class="card-info__song-count"> 12 songs </div>
					</div>
				</div>

				<div class="card-container" ontouchstart="this.classList.toggle('flip');">
					<div class="card js-card ">
						<div class="card-front-side">
							<div class="card-front-side__thumbnail">
								<img src="./images/test4.jpg" alt="img" />
							</div>         
						</div>
						<div class="card-back-side">
						</div>
					</div>
					<div class="card-info">
						<div class="card-info__play-btn"></div>
						<div class="card-info__title">Best of Avril</div>
						<div class="card-info__song-count"> 1 songs </div>
					</div>
				</div>
			</div>

			<div class="playlist">
				<div class="player"> 
					<div class="player__title"> best of eminem </div>
					<div class="player__prev-button player__button"></div>
					<div class="player__play-button player__button"></div>
					<div class="player__next-button player__button"></div>
					<div class="player__repeat-button player__button"></div>
					<div class="player__shuffle-button player__button"></div>
				</div>
				<div class="playlist-items">
					<ul>
						<li class="playlist-item">
							<div class="playlist-item__thumbnail">
								<img class="" src="./images/test5.png" />
							</div>
							<div class="playlist-item__delete"></div> 
							<div class="playlist-item__title"> rap god explicit </div>
							<img class="playlist-item__source" src="./images/youtube.png" alt="yt" />
							<div class="playlist-item__duration"> 04:23 </div>
						</li>
						<li class="playlist-item">
							<div class="playlist-item__thumbnail"><img class="" src="./images/test2.jpg" /></div>
							<div class="playlist-item__delete"></div> 
							<div class="playlist-item__title"> rap god explicit </div>
							<img class="playlist-item__source" src="./images/youtube.png" alt="yt" />
							<div class="playlist-item__duration"> 04:23 </div>
						</li>
						<li class="playlist-item">
							<div class="playlist-item__thumbnail"><img class="" src="./images/test1.jpg" /></div>
							<div class="playlist-item__delete"></div> 
							<div class="playlist-item__title"> rap god explicit </div>
							<img class="playlist-item__source" src="./images/youtube.png" alt="yt" />
							<div class="playlist-item__duration"> 04:23 </div>
						</li>
						<li class="playlist-item">
							<div class="playlist-item__thumbnail"><img class="" src="./images/test3.jpg" /></div>
							<div class="playlist-item__delete"></div> 
							<div class="playlist-item__title"> rap god explicit </div>
							<img class="playlist-item__source" src="./images/youtube.png" alt="yt" />
							<div class="playlist-item__duration"> 04:23 </div>
						</li>
						<li class="playlist-item">
							<div class="playlist-item__thumbnail"><img class="" src="./images/test5.png" /></div>
							<div class="playlist-item__delete"></div> 
							<div class="playlist-item__title"> rap god explicit </div>
							<img class="playlist-item__source" src="./images/youtube.png" alt="yt" />
							<div class="playlist-item__duration"> 04:23 </div>
						</li>
						<li class="playlist-item">
							<div class="playlist-item__thumbnail"><img class="" src="./images/test4.jpg" /></div>
							<div class="playlist-item__delete"></div> 
							<div class="playlist-item__title"> rap god explicit </div>
							<img class="playlist-item__source" src="./images/youtube.png" alt="yt" />
							<div class="playlist-item__duration"> 04:23 </div>
						</li>
						<li class="playlist-item">
							<div class="playlist-item__thumbnail"><img class="" src="./images/test2.jpg" /></div>
							<div class="playlist-item__delete"></div> 
							<div class="playlist-item__title"> rap god explicit </div>
							<img class="playlist-item__source" src="./images/youtube.png" alt="yt" />
							<div class="playlist-item__duration"> 04:23 </div>
						</li>
					</ul>
				</div>

			</div>

			<div class="clear"></div>
		</div>
		<!--</div>-->
		<footer class="footer">
			<div class="footer-inner">
				<div class="footer-inner__logo">
					runmylist
				</div>
				<div class="share-cont">
					<div class="share-cont__text">
						Like us!
					</div>
					<img class="share-cont__google" alt="G" />
					<img class="share-cont__facebook" alt="F" />
					<img class="share-cont__twitter" alt="T" />
				</div>
			</div>
		</footer>

		<!--absolute positioned divs-->
		<div class="login absolute">
			<div class="login__intro-text">
				login for even better experience.
			</div>
			<button  onclick="return fbAuth()" class="login__fb-btn"> Connect with facebook</button>
			<div class="login__seperator"><hr></div>
			<div id="my-signin2" class=""></div>
		</div>
		<div id="status"></div>

		<!----------scripts---------->
		<script src="https://apis.google.com/js/platform.js?onload=renderButton" async defer></script>
		<script src="./scripts/master.js"></script>
		<script src="./scripts/components/RML.navbar.js"></script>
		<script src="./scripts/components/RML.playlist.js"></script>
		<script src="./scripts/components/RML.Uplayer.js"></script>
		<script src="./scripts/components/RML.js"></script>
		<script src="./scripts/components/RML.cards.js"></script>
	</body>
</html>