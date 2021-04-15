(function(){
	let vid, playbtn, seekslider;
	let intializePlayer = () =>{
		// Set object references
		vid = document.getElementById("my_video");
		vid.paused;
		playbtn = document.getElementById("playpausebtn");
		seekslider = document.getElementById("seekslider");
		// Add event listeners
		playbtn.addEventListener("click",playPause,false);
		seekslider.addEventListener("change",vidSeek,false);
		vid.addEventListener("timeupdate",seektimeupdate,false);
	}
	let playPause =() => {
		if(vid.paused){
			vid.play();
			playbtn.src = "images/pause.png";
		} else {
			vid.pause();
			playbtn.src = "images/play.png";
		}
	}
	let vidSeek = () => {
		var seekto = vid.duration * (seekslider.value / 100);
		vid.currentTime = seekto;
	}
	let seektimeupdate = ()=> {
		var nt = vid.currentTime * (100 / vid.duration);
		seekslider.value = nt;
		var nt = vid.currentTime * (100 / vid.duration);
		seekslider.value = nt;
		if(nt===100){
			seekslider.value =0;
			playbtn.src = "images/play.png";
		}
	}
	//Events
	window.addEventListener('load', intializePlayer);
	document.getElementById("my_video").addEventListener('click',playPause);
})();document.getElementById("my_video").src="opas"
