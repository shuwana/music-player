artists = ["Alex Mali", "Ari Lennox & J. Cole", "Jazmine Sullivan","Kali Uchis", "Rihanna", "Sabrina Claudio", "Summer Walker","SZA"];

songName = ["Obviously", "Shea Butter Baby 🅴", "Girl Like Me", "telepatía", "Same Ol' Mistakes", "Me In Her", "Riot", "Drew Barrymore"];

albums = ["Sweet & Sour - EP", "Shea Butter Baby", "Heaux Tales", "Sin Miedo (del Amor y Otros Demonios)", "ANTI", "Truth Is", "CLEAR - EP", "Ctrl"];

cover = ["https://c.saavncdn.com/598/Sweet-Sour-EP-English-2019-20190701154651-500x500.jpg",
     "https://images-na.ssl-images-amazon.com/images/I/71Y1yPQTYAL._SL1200_.jpg",
         "https://images.genius.com/3084bd2eeeedd30ec8064cf0e8234f82.1000x1000x1.png",
                    "https://media.pitchfork.com/photos/5fb551797e818f7ad25ead3c/1:1/w_600/Sin%20Miedo%20(del%20Amor%20y%20Otros%20Demonios)%20∞_Kali%20Uchis.jpg",
                    "https://lastfm.freetls.fastly.net/i/u/770x0/d4a339a2bd2bc5fe470e0b0c10444903.jpg",
                    "https://img.discogs.com/rJtmR__050rRoHgu3A7dwst90_0=/fit-in/600x600/filters:strip_icc():format(jpeg):mode_rgb():quality(90)/discogs-images/R-14342384-1572607145-5209.jpeg.jpg",
                    "https://i1.sndcdn.com/artworks-eJUYbJVZUrQI-0-t500x500.jpg",
                    "https://images-na.ssl-images-amazon.com/images/I/91QWynF67fL._AC_SY355_.jpg"];


tracks = ["https://res.cloudinary.com/shuwana/video/upload/v1620526518/06_Obviously_swbhti.m4a", 
                "https://res.cloudinary.com/shuwana/video/upload/v1620527045/05_Shea_Butter_Baby_kzto4p.m4a", 
          "https://res.cloudinary.com/shuwana/video/upload/v1620773088/01_Girl_Like_Me_feat._H.E.R._ncnsb1.m4a",
                "https://res.cloudinary.com/shuwana/video/upload/v1620525531/07_telepat%C3%ADa_lq3ykt.m4a", 
                "https://res.cloudinary.com/shuwana/video/upload/v1620527052/09_Same_Ol__Mistakes_j4budz.m4a", 
                "https://res.cloudinary.com/shuwana/video/upload/v1620527056/06_Me_In_Her_tcnmxo.m4a", 
                "https://res.cloudinary.com/shuwana/video/upload/v1620527059/01_Riot_tcqwej.m4a", 
                "https://res.cloudinary.com/shuwana/video/upload/v1620527062/04_Drew_Barrymore_stcufg.m4a"];

background = ["#89B95F", "#E7AE95", "#EDE678", "#EECADE", "#E6E7E9", "#B09492", "#8F9E9B", "#7F83B7"];

const audio = document.getElementById("audio");
const album = document.querySelector(".album-title");
const thumbnail = document.querySelector(".album-artwork");
const trackTitle = document.querySelector(".song-title");
const artist = document.querySelector(".artist-name");
const progressBar = document.getElementById("progressBar");
const currentTime = document.getElementById("currentTime");
const durationTime = document.getElementById("durationTime");

const play = document.querySelector(".play");
const next = document.querySelector(".bi-skip-forward-fill");
const prev = document.querySelector(".bi-skip-backward-fill");
index = 0;

play.addEventListener('click', function(event){
  if(audio.paused){
    audio.play();
  } else {
    audio.pause();
  }
});

next.addEventListener('click', function(event){
  index++;
  if(index > tracks.length -1){
    index = 0;
  }
  audio.src = tracks[index];
  thumbnail.src = cover[index];
  trackTitle.textContent = songName[index];
  artist.textContent = artists[index];
  album.textContent = albums[index];
  
  document.body.style.backgroundColor = background[index];
  audio.play();
  
});


prev.addEventListener('click', function(event){
  index--;
  if(index < 0){
    index = tracks.length - 1;
  }
  
  audio.src = tracks[index];
  thumbnail.src = cover[index];
  trackTitle.textContent = songName[index];
  artist.textContent = artists[index];
  album.textContent = albums[index];
  
  document.body.style.backgroundColor = background[index];
  audio.load();
  audio.play();
});

//Progress bar
function progressValue() {
  progressBar.max = audio.duration;
  progressBar.value = audio.currentTime;

  currentTime.textContent = formatTime(audio.currentTime);
  durationTime.textContent = formatTime(audio.duration);
}

setInterval(progressValue, 500);

function formatTime(sec) {
  let minutes = Math.floor(sec / 60);
  let seconds = Math.floor(sec - minutes * 60);
  if (seconds < 10) {
    seconds = `0${seconds}`;
  }
  return `${minutes}:${seconds}`;
}

progressBar.addEventListener('click', function(event){
  audio.currentTime = progressBar.value;
});

