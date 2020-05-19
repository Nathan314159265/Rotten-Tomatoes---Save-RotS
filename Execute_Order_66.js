$(function(){
	if(typeof jQuery=='undefined') {
	    var headTag = document.getElementsByTagName("head")[0];
	    var jqTag = document.createElement('script');
	    jqTag.type = 'text/javascript';
	    jqTag.src = '//ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js';
	    jqTag.onload = order_66;
	    headTag.appendChild(jqTag);
	} else {
	     order_66();
	}
});

function order_66() {
	iframe = get_iframe();
	if (iframe == null) return;
	
	iframe.ready(function() {
		contents = iframe.contents();
		set_titles(contents);
		i_love_democracy(contents);
	});
}

function get_iframe() {
	var iframe = $('iframe[data-id="1e924cad-7563-4198-9626-ad8a0f12615f"]');
	if (iframe.length == 0) {
		setTimeout(order_66, 100);
		return null;
	}
	return iframe;
}

function set_titles(e) {
	titles = e.find('.section-title p');
	if (titles.length == 0) {
		setTimeout(order_66, 100);
		return;
	}
	titles.text('Good Soldiers Follow Orders');
}

function i_love_democracy(e) {
	containers = e.find('.poll-answer-container');
	containers.each(function() {
		if ($(this).is(':contains("Star Wars")')
			|| $(this).is(':contains("Return of the Jedi")')
			|| $(this).is(':contains("The Empire Strikes Back")')
			|| $(this).is(':contains("Revenge of the Sith")')) {
			dew_it($(this).find('button'));
		}
	});
}

function dew_it(button) {
	setTimeout(function () {
		if (!button.hasClass('selected')) {
			console.log('CT-0001');
			button.trigger('click');
			dew_it(button);
		} else {
			the_circle_is_now_complete();
		}
	},100);
}

function the_circle_is_now_complete() {
	localStorage.clear();
	setTimeout(function() {
		location.reload();
	}, 2000);
}
