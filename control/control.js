

var main = (function(){
	
	var path = 'headerPre.html';

	if (window.location.pathname.indexOf('index') == -1 && window.location.pathname.indexOf('html') != -1){
		path = window.location.href + '/headerPre.html';
	}

	$('#headerHolder').load(path, () => {
		
		$(function() {

			$('a[href^=\\#]').click(function() {

				if (window.location.pathname.indexOf('index') == -1 && window.location.pathname.indexOf('html') != -1)
					window.location.pathname = "index.html";
		
				var target = $(this.hash);
				target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
				if (target.length) {
				  $('html,body').animate({
					scrollTop: target.offset().top
				  }, 500);
				}
			});

			if(window.location.hash){
				scroll(0, 0);
				setTimeout(function(){
					scroll(0, 0);
				}, 1);
			}

			if (window.location.hash){
				$('html,body').animate({
					scrollTop: $(window.location.hash).offset().top + 'px'
				  }, 500);
			}

		  });
	})

})();



