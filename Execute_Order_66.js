$(function(){
	if(typeof jQuery=='undefined') {
	    var headTag = document.getElementsByTagName("head")[0];
	    var jqTag = document.createElement('script');
	    jqTag.type = 'text/javascript';
	    jqTag.src = '//ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js';
	    jqTag.onload = order_66;
	    headTag.appendChild(jqTag);
	} else {
		set_page_title();
		order_66();
	}
});

function set_page_title() {
	var vote_count = getCookie('vote_count');
	if (vote_count === '') {
		vote_count = 1;
	} else {
		vote_count++;
	}
	setCookie('vote_count', vote_count, 10);
	document.title = 'CT-' + vote_count + ' executing order 66';
}

function order_66() {
	var iframe = get_iframe();
	if (iframe === null) return;
	
	iframe.ready(function() {
		var contents = iframe.contents();
		set_titles(contents);
		i_love_democracy(contents);
	});
}

function get_iframe() {
	var iframe = $('iframe[data-id="1e924cad-7563-4198-9626-ad8a0f12615f"]');
	if (iframe.length === 0) {
		setTimeout(order_66, 100);
		return null;
	}
	return iframe;
}

function set_titles(e) {
	var titles = e.find('.section-title p');
	if (titles.length === 0) {
		setTimeout(order_66, 100);
		return;
	}
	titles.text('Good Soldiers Follow Orders');
}

function i_love_democracy(e) {
	var containers = e.find('.poll-answer-container');
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

function getCookie(cname) {
  var name = cname + "=";
  var decodedCookie = decodeURIComponent(document.cookie);
  var ca = decodedCookie.split(';');
  for(var i = 0; i <ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) === 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}

function setCookie(cname, cvalue, exdays) {
  var d = new Date();
  d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
  var expires = "expires="+d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}