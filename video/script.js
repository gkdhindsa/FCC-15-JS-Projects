const video=document.querySelector('.video-container');
const play=document.querySelector('.play');
const pause=document.querySelector('.pause');

play.addEventListener('click', function(){
    video.play()
})
pause.addEventListener('click', function(){
    video.pause()
})