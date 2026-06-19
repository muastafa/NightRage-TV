const video = document.getElementById("player");

const channels = [
"https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8",
"https://test-streams.mux.dev/test_001/stream.m3u8",
"https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8",
"https://test-streams.mux.dev/test_001/stream.m3u8"
];

const servers = [
[
"https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8",
"https://test-streams.mux.dev/test_001/stream.m3u8",
"https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8",
"https://test-streams.mux.dev/test_001/stream.m3u8"
],
[
"https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8",
"https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8",
"https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8",
"https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8"
]
];

let currentServer = 0;
let currentChannel = 0;

const player = new Plyr(video);

function loadVideo(url){
if(Hls.isSupported()){
const hls = new Hls();
hls.loadSource(url);
hls.attachMedia(video);
}
else{
video.src = url;
}
}

function changeChannel(index){
currentChannel=index;

document.querySelectorAll(".channel").forEach(x=>{
x.classList.remove("active");
});

document.querySelectorAll(".channel")[index].classList.add("active");

loadVideo(servers[currentServer][index]);
}

function changeServer(index){
currentServer=index;

document.querySelectorAll(".server").forEach(x=>{
x.classList.remove("active");
});

document.querySelectorAll(".server")[index].classList.add("active");

loadVideo(servers[currentServer][currentChannel]);
}

loadVideo(channels[0]);