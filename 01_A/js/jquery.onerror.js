/** Spy to get JavaScript error that is occuring in the user's browser
https://github.com/posabsolute/jQuery-Error-Handler-Plugin

Set your e-mail address inside jserrorhandler.php script


(function( $ ){
  $.fn.jsErrorHandler = function(options) {
  	
	var settings = {
		from: "support@typing_s.de",
		website: document.domain
	}
	if (options) $.extend(settings, options);

 
    window.onerror = function (msg, url, line) {
		
		$.ajax({
			type:"GET",
			cache:false,
			url:"js/jserrorhandler.php",
			data: $.param({'message':msg, 'url': url, userAgent: navigator.userAgent, 'line': line, 'from':settings.from, 'website': settings.website}),
			success: function(test){
				if(window.console) console.log("Report sent about the javascript error")
			}
		})
		
		/* Add an error message to the page */
		var emsg = "<span class='large center-content'><p>Thank you for agreeing to participate!</p>"+
					"<p>Unfortunately, this experiment does not launch correctly from your browser.</p>"+
					"<p>An error report has been sent to allow us to fix this issue. </p>"+
					"<p>Feel free to try again later ! </p> </span>";
		$("body").html(emsg);	

	    return true;
	}
	

  };
})( jQuery );



