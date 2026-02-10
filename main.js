var player;

function onYouTubeIframeAPIReady() {
    player = new YT.Player('player', {
        height: '390',
        width: '640',
        videoId: 'RvHFlqJTfjE',
        events: {
            'onReady': onPlayerReady,
        }
    });
}

function onPlayerReady(event) {
    document.getElementById('playButton').addEventListener('click', function() {
        player.playVideo();
    });
}
