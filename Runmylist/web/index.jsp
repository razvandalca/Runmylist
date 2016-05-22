<!--<%@page contentType="text/html" pageEncoding="UTF-8"%>-->
<!DOCTYPE html>
<html>
	<head>
		<title>runmylist</title>
		<meta charset="UTF-8">
		<meta name="google-signin-client_id" content="701669709805-p3l6nr16a7obtl7qappnh0t3i27fl5i6.apps.googleusercontent.com">
		<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.0/jquery.min.js"></script>
		<script src="./scripts/components/googleplus.js"></script>
		<script src="//connect.facebook.net/en_US/sdk.js"></script>
		<script src="./scripts/components/fb.js"></script>
		<script src="./scripts/components/soundcloud_api.js"></script>
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
						<div class="js-search-types__search-type-videos search-types__search-type search-types__search-type--active ">Videos</div>
						<span class="js-search-types__seperator">|</span>
						<div class="js-search-types__search-type-my-playlists search-types__search-type">My playlists</div>
					</div>
					<form class="js-search-form search-form">
						<input type="text" placeholder="Search for music" class="js-search-form__search-input search-form__search-input" name="search" />
						<button class="search-form__button">
							Search music
						</button>
					</form>
					<div class="login-cont js-login-cont">
						<div class="login-cont__btn js-login-cont__btn-login">Log in</div>
						<span class="login-cont__seperator">|</span>
						<div class="login-cont__btn js-login-cont__btn-register">Sign up</div>
					</div>
				</div>
			</div>
		</div>
		<div class="main-wrapper js-main-wrapper">
			<div class="result-items visible js-result-items">
				<li class="result-item" data-info='{"id":"j5-yKhDd64s","title":"Eminem- not afraid","duraiton":"02:33","src_type":"yt","url":"https://www.youtube.com/watch?v=j5-yKhDd64s","author":"EminemVEVO","thumb_url":"https://i.ytimg.com/vi/j5-yKhDd64s/hqdefault.jpg?custom=true&w=320&h=180&stc=true&jpg444=true&jpgq=90&sp=68&sigh=dLF-rethYT3hv2-5QIBZlQo_HCI"}' >
					<div class="result-item__thumbnail">
						<img class="" src="./images/test5.png" />
					</div>
					<div class="result-item__add js-result-item__add"></div>
					<div class="result-item__title"> rap god explicit </div>
					<img class="result-item__source" src="./images/youtube.png" alt="yt" />
					<div class="result-item__duration"> 04:23 </div>
				</li>
				<li class="result-item" data-info='{"id":"j5-yKhDd64s","title":"Eminem- not afraid","duraiton":"02:33","src_type":"yt","url":"https://www.youtube.com/watch?v=j5-yKhDd64s","author":"EminemVEVO","thumb_url":"https://i.ytimg.com/vi/j5-yKhDd64s/hqdefault.jpg?custom=true&w=320&h=180&stc=true&jpg444=true&jpgq=90&sp=68&sigh=dLF-rethYT3hv2-5QIBZlQo_HCI"}' >
					<div class="result-item__thumbnail">
						<img class="" src="./images/test5.png" />
					</div>
					<div class="js-result-item__add result-item__add"></div>
					<div class="result-item__title"> rap god explicit </div>
					<img class="result-item__source" src="./images/youtube.png" alt="yt" />
					<div class="result-item__duration"> 04:23 </div>
				</li>
			</div>
			<div class="cards-container cards-container--visiblse js-cards-container">

				<div class="card-container" ontouchstart="this.classList.toggle('hover');">
					<div class="card js-card ">
						<div class="card-front-side">
							<div class="card-front-side__thumbnail-new">
<!--								<img src="./images/test1.jpg" alt="img" />-->
								+
							</div>
						</div>
						
					</div>
					<div class="card-info">
						<div class="card-info__new-btn"></div>
						<div class="card-info__title">New playlist</div>
						<div class="card-info__song-count"> ? songs </div>
					</div>
				</div>


				
				
				<div class="card-container" ontouchstart="this.classList.toggle('hover');">
					<div class="card js-card ">
						<div class="card-front-side">
							<div class="card-front-side__thumbnail">
								<img src="./images/test1.jpg" alt="img" />
							</div>
						</div>
						<div class="card-back-side">
							<div class="card-back-side__thumbnail">
								<img src="./images/test1.jpg" alt="img" />
							</div>
							<div class="card-items">
								<p class="card-items__header" >Goodbye Lullaby</p>
								<ul>
									<li data-info='{"id":"1","title":"eminem..","duraiton":"03:12","src_type":"yt","url":"http://...","author":"fanckushVevo","thumb_url":"http://..."}' class="card-items__item" >i love you</li>
									<li data-info='{"id":"1","title":"eminem..","duraiton":"03:12","src_type":"yt","url":"http://...","author":"fanckushVevo","thumb_url":"http://..."}' class="card-items__item">Wish you were here</li>
									<li data-info='{"id":"1", "title":"eminem..", "duraiton":"03:12", "src_type":"yt", "url":"http://...", "author": "fanckushVevo", "thumb_url":"http://..."}' class="card-items__item">Not enough</li>
									<li data-info='{"id":"1", "title":"eminem..", "duraiton":"03:12", "src_type":"yt", "url":"http://...", "author": "fanckushVevo", "thumb_url":"http://..."}' class="card-items__item">Let go</li>
									<li data-info='{"id":"1", "title":"eminem..", "duraiton":"03:12", "src_type":"yt", "url":"http://...", "author": "fanckushVevo", "thumb_url":"http://..."}' class="card-items__item">Here's to never growing up</li>
									<li data-info='{"id":"1", "title":"eminem..", "duraiton":"03:12", "src_type":"yt", "url":"http://...", "author": "fanckushVevo", "thumb_url":"http://..."}' class="card-items__item">He wasn't</li>
									<li data-info='{"id":"1", "title":"eminem..", "duraiton":"03:12", "src_type":"yt", "url":"http://...", "author": "fanckushVevo", "thumb_url":"http://..."}' class="card-items__item">Hush hush</li>
									<li data-info='{"id":"1", "title":"eminem..", "duraiton":"03:12", "src_type":"yt", "url":"http://...", "author": "fanckushVevo", "thumb_url":"http://..."}' class="card-items__item">Falling fast</li>
									<li data-info='{"id":"1", "title":"eminem..", "duraiton":"03:12", "src_type":"yt", "url":"http://...", "author": "fanckushVevo", "thumb_url":"http://..."}' class="card-items__item">4 Real</li>
									<li data-info='{"id":"1", "title":"eminem..", "duraiton":"03:12", "src_type":"yt", "url":"http://...", "author": "fanckushVevo", "thumb_url":"http://..."}' class="card-items__item">Smile</li>
								</ul>
							</div>
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
								<img src="./images/test1.jpg" alt="img" />
							</div>
						</div>
						<div class="card-back-side">
							<div class="card-back-side__thumbnail">
								<img src="./images/test1.jpg" alt="img" />
							</div>
							<div class="card-items">
								<p class="card-items__header" >EMINEM Lullaby</p>
								<ul>
									<li data-info='{"id":"j5-yKhDd64s","title":"Eminem- not afraid","duraiton":"02:33","src_type":"yt","url":"https://www.youtube.com/watch?v=j5-yKhDd64s","author":"EminemVEVO","thumb_url":"https://i.ytimg.com/vi/j5-yKhDd64s/hqdefault.jpg?custom=true&w=320&h=180&stc=true&jpg444=true&jpgq=90&sp=68&sigh=dLF-rethYT3hv2-5QIBZlQo_HCI"}'  class="card-items__item" >i love you</li>
									<li data-info='{"id":"IcrbM1l_BoI","title":"AVICI - wake me up","duraiton":"04:12","src_type":"yt","url":"https://www.youtube.com/watch?v=IcrbM1l_BoI","author":"AVICI","thumb_url":"https://i.ytimg.com/vi/IcrbM1l_BoI/hqdefault.jpg?custom=true&w=320&h=180&stc=true&jpg444=true&jpgq=90&sp=68&sigh=jouNGoRyEDWL7jQmfT7kbavlGxE"}'  class="card-items__item">Wish you were here</li>
									<li data-info='{"id":"e-ORhEE9VVg","title":"song 3","duraiton":"03:12","src_type":"yt","url":"https://www.youtube.com/watch?v=e-ORhEE9VVg","author":"testVEVO","thumb_url":"https://i.ytimg.com/vi/e-ORhEE9VVg/hqdefault.jpg?custom=true&w=320&h=180&stc=true&jpg444=true&jpgq=90&sp=68&sigh=i1DQB_y3o-S4a4z1SfmUwlHigK0"}'  class="card-items__item">Taylor swift - Blanck space</li>
								</ul>
							</div>
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
								<img src="./images/test3.jpg" alt="img" />
							</div>
						</div>
						<div class="card-back-side">
							<div class="card-back-side__thumbnail">
								<img src="./images/test1.jpg" alt="img" />
							</div>
							<div class="card-items">
								<p class="card-items__header" >Goodbye Lullaby</p>
								<ul>
									<li data-info='{"id":"1","title":"eminem..","duraiton":"03:12","src_type":"yt","url":"http://...","author":"fanckushVevo","thumb_url":"http://..."}'  class="card-items__item" >i love you</li>
									<li data-info='{"id":"1","title":"eminem..","duraiton":"03:12","src_type":"yt","url":"http://...","author":"fanckushVevo","thumb_url":"http://..."}'  class="card-items__item">Wish you were here</li>
									<li data-info='{"id":"1","title":"eminem..","duraiton":"03:12","src_type":"yt","url":"http://...","author":"fanckushVevo","thumb_url":"http://..."}'  class="card-items__item">Not enough</li>
									<li data-info='{"id":"1","title":"eminem..","duraiton":"03:12","src_type":"yt","url":"http://...","author":"fanckushVevo","thumb_url":"http://..."}'  class="card-items__item">Let go</li>
									<li data-info='{"id":"1","title":"eminem..","duraiton":"03:12","src_type":"yt","url":"http://...","author":"fanckushVevo","thumb_url":"http://..."}'  class="card-items__item">Here's to never growing up</li>
									<li data-info='{"id":"1","title":"eminem..","duraiton":"03:12","src_type":"yt","url":"http://...","author":"fanckushVevo","thumb_url":"http://..."}'  class="card-items__item">He wasn't</li>
									<li data-info='{"id":"1","title":"eminem..","duraiton":"03:12","src_type":"yt","url":"http://...","author":"fanckushVevo","thumb_url":"http://..."}'  class="card-items__item">Hush hush</li>
									<li data-info='{"id":"1","title":"eminem..","duraiton":"03:12","src_type":"yt","url":"http://...","author":"fanckushVevo","thumb_url":"http://..."}'  class="card-items__item">Falling fast</li>
									<li data-info='{"id":"1","title":"eminem..","duraiton":"03:12","src_type":"yt","url":"http://...","author":"fanckushVevo","thumb_url":"http://..."}'  class="card-items__item">4 Real</li>
									<li data-info='{"id":"1","title":"eminem..","duraiton":"03:12","src_type":"yt","url":"http://...","author":"fanckushVevo","thumb_url":"http://..."}'  class="card-items__item">Smile</li>
								</ul>
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
							<div class="card-back-side__thumbnail">
								<img src="./images/test1.jpg" alt="img" />
							</div>
							<div class="card-items">
								<p class="card-items__header" >Goodbye Lullaby</p>
								<ul>
									<li data-info='{"id":"1","title":"eminem..","duraiton":"03:12","src_type":"yt","url":"http://...","author":"fanckushVevo","thumb_url":"http://..."}'  class="card-items__item" >i love you</li>
									<li data-info='{"id":"1","title":"eminem..","duraiton":"03:12","src_type":"yt","url":"http://...","author":"fanckushVevo","thumb_url":"http://..."}'  class="card-items__item">Wish you were here</li>
									<li data-info='{"id":"1","title":"eminem..","duraiton":"03:12","src_type":"yt","url":"http://...","author":"fanckushVevo","thumb_url":"http://..."}'  class="card-items__item">Not enough</li>
									<li data-info='{"id":"1","title":"eminem..","duraiton":"03:12","src_type":"yt","url":"http://...","author":"fanckushVevo","thumb_url":"http://..."}'  class="card-items__item">Let go</li>
									<li data-info='{"id":"1","title":"eminem..","duraiton":"03:12","src_type":"yt","url":"http://...","author":"fanckushVevo","thumb_url":"http://..."}'  class="card-items__item">Here's to never growing up</li>
									<li data-info='{"id":"1","title":"eminem..","duraiton":"03:12","src_type":"yt","url":"http://...","author":"fanckushVevo","thumb_url":"http://..."}'  class="card-items__item">He wasn't</li>
									<li data-info='{"id":"1","title":"eminem..","duraiton":"03:12","src_type":"yt","url":"http://...","author":"fanckushVevo","thumb_url":"http://..."}'  class="card-items__item">Hush hush</li>
									<li data-info='{"id":"1","title":"eminem..","duraiton":"03:12","src_type":"yt","url":"http://...","author":"fanckushVevo","thumb_url":"http://..."}'  class="card-items__item">Falling fast</li>
									<li data-info='{"id":"1","title":"eminem..","duraiton":"03:12","src_type":"yt","url":"http://...","author":"fanckushVevo","thumb_url":"http://..."}'  class="card-items__item">4 Real</li>
									<li data-info='{"id":"1","title":"eminem..","duraiton":"03:12","src_type":"yt","url":"http://...","author":"fanckushVevo","thumb_url":"http://..."}'  class="card-items__item">Smile</li>
								</ul>
							</div>
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
							<div class="card-back-side__thumbnail">
								<img src="./images/test1.jpg" alt="img" />
							</div>
							<div class="card-items">
								<p class="card-items__header" >Goodbye Lullaby</p>
								<ul>
									<li data-info='{"id":"1","title":"eminem..","duraiton":"03:12","src_type":"yt","url":"http://...","author":"fanckushVevo","thumb_url":"http://..."}'  class="card-items__item" >i love you</li>
									<li data-info='{"id":"1","title":"eminem..","duraiton":"03:12","src_type":"yt","url":"http://...","author":"fanckushVevo","thumb_url":"http://..."}'  class="card-items__item">Wish you were here</li>
									<li data-info='{"id":"1","title":"eminem..","duraiton":"03:12","src_type":"yt","url":"http://...","author":"fanckushVevo","thumb_url":"http://..."}'  class="card-items__item">Not enough</li>
									<li data-info='{"id":"1","title":"eminem..","duraiton":"03:12","src_type":"yt","url":"http://...","author":"fanckushVevo","thumb_url":"http://..."}'  class="card-items__item">Let go</li>
									<li data-info='{"id":"1","title":"eminem..","duraiton":"03:12","src_type":"yt","url":"http://...","author":"fanckushVevo","thumb_url":"http://..."}'  class="card-items__item">Here's to never growing up</li>
									<li data-info='{"id":"1","title":"eminem..","duraiton":"03:12","src_type":"yt","url":"http://...","author":"fanckushVevo","thumb_url":"http://..."}'  class="card-items__item">He wasn't</li>
									<li data-info='{"id":"1","title":"eminem..","duraiton":"03:12","src_type":"yt","url":"http://...","author":"fanckushVevo","thumb_url":"http://..."}'  class="card-items__item">Hush hush</li>
									<li data-info='{"id":"1","title":"eminem..","duraiton":"03:12","src_type":"yt","url":"http://...","author":"fanckushVevo","thumb_url":"http://..."}'  class="card-items__item">Falling fast</li>
									<li data-info='{"id":"1","title":"eminem..","duraiton":"03:12","src_type":"yt","url":"http://...","author":"fanckushVevo","thumb_url":"http://..."}'  class="card-items__item">4 Real</li>
									<li data-info='{"id":"1","title":"eminem..","duraiton":"03:12","src_type":"yt","url":"http://...","author":"fanckushVevo","thumb_url":"http://..."}'  class="card-items__item">Smile</li>
								</ul>
							</div>
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
					<div class="js-player__prev-button player__prev-button player__button"></div>
					<div class="js-player__play-button player__play-button player__button"></div>
					<div class="js-player__next-button player__next-button player__button"></div>
					<div class="js-player__repeat-button player__repeat-button player__button"></div>
					<div class="js-player__shuffle-button player__shuffle-button player__button"></div>
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
			<div class="palyers">
				<div id="yt_player" class="yt-player-cont"></div>
				<iframe id="sc_player" class="sc-player-cont" width="320" height="195" scrolling="no" frameborder="no" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/168285849&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;visual=true"></iframe>
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
		<div class="login-register fixed js-popup">
			<div class="login-register__intro-text">
				login for even better experience.
			</div>
			<button  onclick="return fbAuth()" class="login-register__fb-btn"> Connect with facebook</button>
			<div class="login__seperator"><hr></div>
			<div id="google_login_btn" class=""></div>
			<hr />
			<h2>Or: <span class="log-reg-btn js-login-register__login-show">Login</span> | <span class="log-reg-btn js-login-register__register-show">Register</span> </h2>
			<form class="register" method="POST" action="" autocomplete="off">
				<div style="color:red"> </div>
				<input class="register__input js-register__email" type="text" name="email" placeholder="Email">
				<input class="register__input js-register__username" type="text" name="username" placeholder="Username">
				<input class="register__input js-register__firstname" type="text" name="firstname" placeholder="firstname">
				<input class="register__input js-register__lastname" type="text" name="lastname" placeholder="lastname">
				<input class="register__input js-register__password" type="password" name="password" placeholder="Password">
				<input class="register__input js-register__password-r"  type="password" name="pass_rep" placeholder="Repeat Password"> <br>
				<input type="hidden" name="operation" value="register">
				<button class="register__submit" type="submit">Sign Up!</button>
			</form>
			<form class="login" method="post" action="" >
				<input minlength="5"  class="js-login__username login__input" type="text" required name="username" placeholder="Username">
				<input minlength="8"  class="js-login__password login__input" type="password" required name="pass" placeholder="Password">
				<input class="js-login__submit login__submit" type="submit" name="login" value="Log In">
			</form>
		</div>
		<div class="fixed js-popup playlist-name-form js-playlist-name-form">
			<form>
				<label>Playlist name:</label>
				<input type="text" placeholder="Name" />
			</form>
		</div>
		<div id="status"></div>
		<div class="js-gray-background gray-background absolute"></div>

		<!----------scripts---------->
		<script src="https://apis.google.com/js/platform.js?onload=renderButton" async defer></script>
		<script src="./scripts/master.js"></script>
		<script src="./scripts/components/RML.navbar.js"></script>
		<script src="./scripts/components/RML.login_register.js"></script>
		<script src="./scripts/components/RML.playlist.js"></script>
		<script src="./scripts/components/RML.Uplayer.js"></script>
		<script src="./scripts/components/RML.js"></script>
		<script src="./scripts/components/RML.cards.js"></script>
		<script src="./scripts/components/RML.Searcher.js"></script>
	</body>
</html>
