$(document).ready(function(){

	$('#chart-item a').tooltip({placement: 'bottom', trigger: 'hover'});
	$('#wrench-item a').tooltip({placement: 'bottom', trigger: 'hover'});
	$('#about-item a').tooltip({placement: 'bottom', trigger: 'hover'});

	$('#sidebar-nav').animate({right : '40px'}, 400, function(){
		$(this).animate({right : '0px'}, 400)
	});

	$window = $(window);
	$('section[data-type="background"]').each(function(){
		var $scroll = $(this);
		$(window).scroll(function(){
			var yPos = -($window.scrollTop() / $scroll.data('speed'));
			var coords = '50% ' + yPos + 'px';
			$scroll.css({backgroundPosition: coords});
		});
	});

	$('#sidebar-nav a').click(function(){
    $('html, body').animate({
        scrollTop: $('[name="' + $.attr(this, 'href').substr(1) + '"]').offset().top
    }, 1000);
    return false;
	});

	function navScroller() {
		var homeTop = 0,
				portfolioTop = $('#projects-section').offset().top - 100,
				skillsTop = $('#skills-section').offset().top - 100,
				aboutTop = $('#about-section').offset().top - 100;
				$window = $(window);
		$window.scroll(function(){
			var scrollCount = $window.scrollTop();
			if (scrollCount + $window.height() > $(document).height() - 100) {
				navUpdate('3');
			} else if ((scrollCount >= portfolioTop) && (scrollCount < skillsTop)) {
				navUpdate('1');
			} else if ((scrollCount >= skillsTop) && (scrollCount < aboutTop)) {
				navUpdate('2');
			} else if (scrollCount >= aboutTop) {
				navUpdate('3');
			} else {
				navUpdate('0');
			};
		});
	};

	navScroller();

	//parameter 'location' is the element in the side-nav which will be shown as 
	//full. It is based on a zero-based index and the number is in a string.
	//i.e. a 'location' which is '1' will change the second dot to full.
	function navUpdate(location) {
		$('#sidebar-nav img').attr('src', 'public/img/button-empty.png');
		$('#sidebar-nav img:eq(' + location + ')').attr('src', 'public/img/button-full.png');
	}

	function wordReplace() {
		var loganAttribute = $("#logan-attribute"),
				words = [
				'Logan Bestwick', 
				'a web developer', 
				'a web designer',
				'open to new opportunities'
				],
				index = 1;
		 setInterval(function(){
			loganAttribute.animate({opacity : 0}, 2000, function(){
				loganAttribute.html(words[index]).animate({opacity : 1}, 2000, function(){
					index++;
					if (index >= words.length){
						index = 0;
					}
				});
			})
		}, 4000);
	};
	wordReplace();

});