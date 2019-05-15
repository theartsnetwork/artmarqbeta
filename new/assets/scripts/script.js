$(document).ready(function() {

	/*----------------------------------------------------*/
	/*	adjust height
	/*----------------------------------------------------*/
	
	
AOS.init();


   // iframe height
	function fixHeight() {
		var headerHeight = $('#switcher').height();
		var winWidth = $(window).height();
		
		$('#iframe').attr('height', (($(window).height()) - headerHeight) + 'px');
	}

	$(window).resize(function() {
		fixHeight();			
	}).resize();


	/*----------------------------------------------------*/
	/*	hide ads
	/*----------------------------------------------------*/

  	$('.close-ad').on('click', function(event){
  		event.preventDefault();
  		$('#ad-container').hide();
  	});

});







