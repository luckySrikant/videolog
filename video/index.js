
function playPause(btn,vid){
	var vid = document.getElementById(vid);
	let data=`video is ${(vid.paused)?`paused`:`play`} at ${vid.currentTime} `;
	if(vid.paused){
		vid.play();
		btn.innerHTML = "Pause";
		alert("the video is play at"+vid.currentTime);
	} else {
		vid.pause();
		btn.innerHTML = "Play";
		alert("the video is paused at"+vid.currentTime);
    }
  let a=  document.createElement("p");
    a.innerHTML=data;
    document.getElementById("div1").append(a);
    
	
}
