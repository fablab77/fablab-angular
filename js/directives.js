'use strict';

/* Directives */
var app_d = angular.module('scriptsDirectives', []);

app_d.directive('myScripts', function($window){
	return function(scope, element, attrs){

		$('.expo-slide a').click(function(e){
			e.stopPropagation();
		});

		$('.fotorama').fotorama();
		$('.fotorama .fotorama__nav__shaft .fotorama__thumb-border').next('.fotorama__nav__frame').find('.fotorama__thumb').append('<img src="img/slider/thumb/bot.jpg" width="100" height="68">');

		(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
		(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
		m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
		})(window,document,'script','//www.google-analytics.com/analytics.js','ga');
		ga('create', 'UA-34687389-2', 'auto');
		ga('send', 'pageview');

		(function (d, w, c) {
			(w[c] = w[c] || []).push(function() {
				try {
					w.yaCounter25982920 = new Ya.Metrika({id:25982920,
						clickmap:true,
						trackLinks:true,
						accurateTrackBounce:true});
				} catch(e) { }
			});
			var n = d.getElementsByTagName("script")[0],
				s = d.createElement("script"),
				f = function () { n.parentNode.insertBefore(s, n); };
			s.type = "text/javascript";
			s.async = true;
			s.src = (d.location.protocol == "https:" ? "https:" : "http:") + "//mc.yandex.ru/metrika/watch.js";
			if (w.opera == "[object Opera]") {
				d.addEventListener("DOMContentLoaded", f, false);
			} else { f(); }
		})(document, window, "yandex_metrika_callbacks");

	}
});