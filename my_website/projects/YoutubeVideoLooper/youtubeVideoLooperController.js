var videoURL;
var player;

//    This code loads the IFrame Player API code asynchronously.
function startVideoLooper() {
    var tag = document.createElement('script');
    tag.src = "https://www.youtube.com/iframe_api";
    var firstScriptTag = document.getElementsByTagName('script')[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
    videoURL = parseURL();
    $(document.getElementById('youtubeVideoUrl')).hide();
    $(document.getElementById('enterButton')).hide();
}

function parseURL() {
    return document.getElementById('youtubeVideoUrl').value.split("watch?v=")[1];
}

//    This function creates an <iframe> (and YouTube player)
//    after the API code downloads.
function onYouTubeIframeAPIReady() {
    player = new YT.Player('player', {
        height: '360',
        width: '640',
        videoId: videoURL,
        playerVars: {
            autoplay: 1,            // Auto-play the video on load
            controls: 0,            // Show pause/play buttons in player
            showinfo: 0,            // Hide the video title
            modestbranding: 1,      // Hide the Youtube Logo
            fs: 1,                  // Hide the full screen button
            cc_load_policy: 0,      // Hide closed captions
            iv_load_policy: 3,      // Hide the Video Annotations
            autohide: 0,            // Hide video controls when playing
        },
        events: {
            'onReady': onPlayerReady,
            'onStateChange': onPlayerStateChange
        }
    });
}

// 4. The API will call this function when the video player is ready.
function onPlayerReady(mEvent) {
    mEvent.target.playVideo();
}

//    The API calls this function when the player's state changes.
//    The function indicates that when playing a video (state=1),
//    the player should play for six seconds and then stop.
function onPlayerStateChange(mEvent) {
    if (mEvent.data == YT.PlayerState.ENDED) {
        player.loadVideoById({
            videoId: videoURL,
        });
    }
}

function stopVideo() {
    player.stopVideo();
}