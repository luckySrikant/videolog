
function playPause(btn,vid){
	var vid = document.getElementById(vid);
	
	if(vid.paused){
		vid.play();
		btn.innerHTML = "Pause";
		// fs.appendFile('message.txt', vid.currentTime, (err) => {
        //     if (err) throw err;
        //     console.log('The "data to append" was appended to file!');
        //   });
        file=fopen("message.txt",0);
		alert("the video is play at"+vid.currentTime);
	} else {
		vid.pause();
		btn.innerHTML = "Play";
		alert("the video is paused at"+vid.currentTime);
	}
	
}