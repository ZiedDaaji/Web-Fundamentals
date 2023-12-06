console.log("page loaded...");

function playV(vid) {
    vid.play();
}
function pauseV(vid) {
    vid.pause();
    vid.currentTime = 0;
}

