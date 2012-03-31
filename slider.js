var Slider = new function() {

	var slider = document.getElementById('slideshow'),
		wrapper = $('#slideshow-wrapper', slider),
		links = $('a', document.getElementById('slideshow-nav')),
		slides = $('div.slide', wrapper),
		previous = $('#previous', slider),
		next = $('#next', slider),
		current = null,
		once = 0;
		
	var prepare = function() {
	
		previous.hide();
		next.hide();
	
	};
	
	var showBtns = function() {
	
		previous.show();
		next.show();
	
	
	};
		
	var navigate = function() {
	
		links.each(function() {
		
			var $a = $(this);
			var slide = $($a.attr('href'));
			
			$a.click(function(e) {
			
			    once++;
			    
			    if(once == 1) {
			    
			    	showBtns();
			    
			    }
			
				current = slide;
			
			    $a.addClass('current').parents('ul').
			    find('a').not($a).removeClass('current');
			    
				_slide(slide);
				e.preventDefault();
			
			});
		
		
		});
	
	
	};
	
	var control = function() {
	
		previous.click(function(e) {
		    
		    var to = (current.prev().length) ? current.prev() : current.next();
		    
		    current = to;
		    
		    _highlight(current);
		    	
		    _slide(to);	
		     
		
					
			e.preventDefault();
		
		});
		
		next.click(function(e) {
		
			    
		    var to = (current.next().length) ? current.next() : current.prev();
		    
		    current = to;
		    
		    _highlight(current);
		    	
		    _slide(to);	
		    

		
					
			e.preventDefault();
		
		});

	
	
	};
	
	var _slide = function(element) {
	
		wrapper.animate({
			left: - element.position().left
		}, 1000);
	
	
	
	};
	
	var _highlight = function(element) {
	
		var id = element.attr('id');
		
		links.each(function() {
		
			var $link = $(this);
			var href = $link.attr('href');
			var $id = href.replace('#', '');
			
			if($id == id) {
			
				$link.addClass('current').
				parents('ul').find('a').not($link).
				removeClass('current');
			
			}
		
		
		});
			
	
	};
	
	this.init = function() {
		
		prepare();
		navigate();
		control();
	
	
	};


}();

$(function() {

	Slider.init();

});