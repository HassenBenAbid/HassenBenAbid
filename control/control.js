//WEach time a floatIn object get in view, we start the floatIn animation.
const observer = new IntersectionObserver(entries => {
	entries.forEach(entry => {
		if (entry.isIntersecting) entry.target.classList.add('FloatInAnimation');
	});
});

//We get all objects that have the scrollFade ID.
const containerToBeObserved = document.querySelector("#scrollFade")
observer.observe(containerToBeObserved);

//Modal

$("document").ready(function() {

	//Gets the video src from the data-src on each button
	var videoSource;  
	var oldScroll;

	$('.VideoWrapper').click(function() {
		//Set a youtube video with autoplay.
		videoSource = $(this).data("src");
		$("#ModalVideo").attr('src',videoSource + "?autoplay=1&amp;modestbranding=1&amp;showinfo=0" );	
	}); 	
	
	$('#YoutubeModal').on('show.bs.modal', function() {
		//We prevent the main page from being scrolled.
		oldScroll = window.scrollY;
		document.body.style.position = 'fixed';
		document.body.style.top = `-${oldScroll}px`; 
		document.documentElement.style.scrollBehavior = "auto";

		//Remove background and border
		$(".modal-content").css("background","transparent");
		$(".modal-content").css("border","none");
	})

	//When we close the modal, we stop the youtube video and make the page scrollable again.
    $('#YoutubeModal').on('hide.bs.modal', function() {
		$("#ModalVideo").attr('src',videoSource); 
		document.body.style.position = '';
		window.scrollTo(0, oldScroll);
		document.documentElement.style.scrollBehavior = "smooth";
	})
});


