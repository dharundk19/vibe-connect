import bell_icon from "./bell.png";
import home_icon from "./home.png";
import like_icon from "./like.png";
import loop_icon from "./loop.png";
import mic_icon from "./mic.png";
import next_icon from "./next.png";
import play_icon from "./play.png";
import pause_icon from "./pause.png";
import plays_icon from "./plays.png";
import prev_icon from "./prev.png";
import search_icon from "./search.png";
import shuffle_icon from "./shuffle.png";
import speaker_icon from "./speaker.png";
import stack_icon from "./stack.png";
import zoom_icon from "./zoom.png";
import plus_icon from "./plus.png";
import arrow_icon from "./arrow.png";
import mini_player_icon from "./mini-player.png";
import queue_icon from "./queue.png";
import volume_icon from "./volume.png";
import arrow_right from "./right_arrow.png";
import arrow_left from "./left_arrow.png";
import spotify_logo from "./MUSIC LOGO.png";
import clock_icon from "./clock_icon.png";

import Imaikkanodigal from "./img/song-thumb/Imaika nodigal.jpeg";
import madras from "./img/song-thumb/madras.jpeg";
import master from "./img/song-thumb/master.jpeg";
import meesaiyamurukku from "./img/song-thumb/meesaiya murukku.jpeg";
import moonu from "./img/song-thumb/Moonu.jpeg";
import Paiya from "./img/song-thumb/Paiya.jpg";
import retro from "./img/song-thumb/retro.jpeg";
import semabothaaagatha from "./img/song-thumb/Sema botha aagathey.jpeg";
import shajahan from "./img/song-thumb/Shajahan.jpg";
import sillunuorukadhal from "./img/song-thumb/sillunu oru kadhal.jpg";
import thuglife from "./img/song-thumb/Thuglife.jpeg";
import velaikaran from "./img/song-thumb/Velaikaran.jpeg";

import AniHits from "./img/ANI HITS.jpeg";
import arrmix from "./img/arr-mix.jpg";
import hiphopthamizha from "./img/HIP HOP THAMIZHA.jpeg";
import Santhoshhits from "./img/Santhosh hits.jpeg";
import vijayhits from "./img/Vijay Hits.jpeg";
import yuvan from "./img/yuvan.jpg";

import aaagayamtheepicha from "./Songs/Agayam-Theepiditha.mp3";
import ennanadandhalum from "./Songs/Enna-Nadanthalum-.mp3";
import idhayathaorunodi from "./Songs/Idhayathai-Oru-Nodi-.mp3";
import iraiva from "./Songs/Iraiva-Ennai-Thedi-.mp3";
import kadhaoruaagayam from "./Songs/Kadhal-Oru-Aagayam-.mp3";
import kannadipoove from "./Songs/Kannadi Poove.mp3";
import melliname from "./Songs/Mellinamae Mellinamae.mp3";
import muthamazhai from "./Songs/Muththa Mazhai.mp3";
import poneepo from "./Songs/Po Nee Po (The Pain of Love).mp3";
import newyork from "./Songs/New York Nagaram.mp3";
import quitpannuda from "./Songs/Quit-Pannuda-.mp3";
import yedhoondru from "./Songs/Yedho-Ondru-Ennai.mp3";

export const assets = {
  bell_icon,
  home_icon,
  like_icon,
  loop_icon,
  mic_icon,
  next_icon,
  play_icon,
  plays_icon,
  prev_icon,
  search_icon,
  shuffle_icon,
  speaker_icon,
  stack_icon,
  zoom_icon,
  plus_icon,
  arrow_icon,
  mini_player_icon,
  volume_icon,
  queue_icon,
  pause_icon,
  arrow_left,
  arrow_right,
  spotify_logo,
  clock_icon,
};

export const albumsData = [
  {
    id: 0,
    name: "ANI HITS",
    image: AniHits,
    desc: "Your weekly update of the most played tracks",
    bgColor: "#D10000",
  },
  {
    id: 1,
    name: "Santhosh narayanan",
    image: Santhoshhits,
    desc: "Best Love Songs of 2025s from kollywood",
    bgColor: "#bcc45e",
  },
  {
    id: 2,
    name: "A.R. Rahman",
    image: arrmix,
    desc: "Hits of A.R. Rahman that will kill you",
    bgColor: "#029ed6",
  },
  {
    id: 3,
    name: "VIJAY",
    image: vijayhits,
    desc: "Cool tracks from Kollywood music industry",
    bgColor: "#44337a",
  },
  
  {
    id: 4,
    name: "Hip Hop Tamizha",
    image: hiphopthamizha,
    desc: "Love and more love from Aadhi",
    bgColor: "#F7567C",
  },
  {
    id: 5,
    name: "Yuvan Hits",
    image: yuvan,
    desc: "Drugs from u1",
    bgColor: "#4E3822",
  },
];

export const songsData = [
  {
    id: 0,
    name: "Aagayam Theepidicha",
    image: madras,
    file: aaagayamtheepicha,
    desc: "Faiure hits of santhosh narayanan!!",
    duration: "3:50",
  },
  {
    id: 1,
    name: "Enna Nadanthalum",
    image: meesaiyamurukku,
    file: ennanadandhalum,
    desc: "Dive into aadhi sad zone",
    duration: "4:05",
  },
  {
    id: 2,
    name: "Idhayathai Oru Nodi",
    image: semabothaaagatha,
    file: idhayathaorunodi,
    desc: "Crazy Love from Aadharva",
    duration: "3:46",
  },
  {
    id: 3,
    name: "Iraiva Ennai Thedi",
    image: velaikaran,
    file: iraiva,
    desc: "Deppression hits from Anirudh",
    duration: "4:54",
  },
  {
    id: 4,
    name: "Kadha Oru Aagayam",
    image: Imaikkanodigal,
    file: kadhaoruaagayam,
    desc: "Put a smile on your face with these happy tunes",
    duration: "2:41",
  },
  {
    id: 5,
    name: "Kannadi Poove",
    image: retro,
    file: kannadipoove,
    desc: "Rukkumani's Punishment",
    duration: "4:21",
  },
  {
    id: 6,
    name: "Mellinamae Mellinamae",
    image: shajahan,
    file: melliname,
    desc: "Put a headphones becoz you going to fly",
    duration: "5:26",
  },
  {
    id: 7,
    name: "Muththa Mazhai",
    image: thuglife,
    file: muthamazhai,
    desc: "Put a smile on your face with these happy tunes",
    duration: "4:01",
  },
  {
    id: 8,
    name: "New York Nagaram",
    image: sillunuorukadhal,
    file: newyork,
    desc: "Feeling Lonely",
    duration: "6:18",
  },
   {
    id: 9,
    name: "Po Nee Po",
    image: moonu,
    file: poneepo,
    desc: "Dive into Anirudh's sad zone",
    duration: "4:11",
  },
   {
    id: 10,
    name: "Quit Pannuda",
    image: master,
    file: quitpannuda,
    desc: "JD Drugs from Thalapathy",
    duration: "4:17",
  },
   {
    id: 11,
    name: "Yedho Ondru Ennai",
    image: Paiya,
    file: yedhoondru,
    desc: "Missing your lovable Moment",
    duration: "3:33",
  },
   
];
