$(function() {	
	var downloadlink;
	var downloadtext;
	
	if ($.browser.webkit) {
		downloadlink = 'https://raw.github.com/mrkolby/Dagbladet-Nice/master/dagbladetnice.safariextz';
	    downloadtext = 'til Safari';
	} else if ($.browser.mozilla) {
		downloadlink = 'http://mrkolby.github.com/Dagbladet-Nice/download/dagbladetnice.xpi';
		downloadtext = 'til Firefox';
	}
	
	// chrome being a prick
	$.browser.chrome = /chrome/.test(navigator.userAgent.toLowerCase());
	if ($.browser.chrome) { 
		downloadlink = 'http://mrkolby.github.com/Dagbladet-Nice/dagbladetnice.crx';
		downloadtext = 'til Chrome';
		$.browser.safari = false;
	}
	
	$('#download').append('<a href="' + downloadlink + '" class="downloadlink">Last ned ' + downloadtext + '</a>');
});