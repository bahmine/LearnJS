let numberOfSeasons = 6;
let numberOfEpisodes = 12;
let episodeTime = 45 , commercialTime = 5; 
let totalShowTime = (commercialTime + episodeTime)*numberOfEpisodes*numberOfSeasons;
let paragraph = document.querySelector ('#info');
const hoursPerDay = 24;
const minutesPerHour = 60;
const secondsPerMinute = 60;

paragraph.innerText = `${numberOfSeasons} seasons, 
${numberOfEpisodes} episodes per persons,
Total showTime : ${totalShowTime} minutes`;


const dayInput = document.querySelector ('#day-input'),
    calculateButton = document.querySelector ('#calculate-button'),
    hours = document.querySelector ('#hours'),
    minutes = document.querySelector ('#minutes'),
    seconds = document.querySelector ('#seconds');
calculateButton.addEventListener ('click',()=> {
    let days = dayInput.value;
    let calcHours = days * hoursPerDay;
    let calcMinutes = calcHours * minutesPerHour;
    let calcSeconds = calcMinutes * secondsPerMinute;

    hours.innerText = `${calcHours} Hours`;
    minutes.innerText = `${calcMinutes} minutes`;
    seconds.innerText = `${calcSeconds} seconds`;
});


let episodeTitle = "Episode 01";
const episodeDuration = 25;
let hasBeenWatched = false;
document.querySelector ('#episode-info').innerText = `
Episodes: ${episodeTitle},
Duration: ${episodeDuration} minutes,
Watched: ${hasBeenWatched? 'Alread':'Not Yet'}`;

//les objets
let episode = {
    title : "The last movie",
    duration : 30,
    hasBeenWatched : true
};
document.querySelector('#episode-info-object').innerText = `
    Episodes: ${episode.title},
    duration: ${episode.duration} min,
    watched: ${episode.hasBeenWatched ? 'Alreday':'loot at it'}`;
//création d'une classe
class Episode {
    constructor (title,duration,etat) {
        this.title = title;
        this.duration = duration;
        this.hasBeenWatched = etat;
    }
}

let firstEpisode = new Episode ("E0",25,false);
document.querySelector('#first-episode-info').innerText = `
    Episodes: ${firstEpisode.title},
    duration: ${firstEpisode.duration} min,
    watched: ${firstEpisode.hasBeenWatched ? 'Alreday':'loot at it'}`;


let secondEpisode = new Episode ("E1",24,true);
document.querySelector('#second-episode-info').innerText = `
    Episodes: ${secondEpisode.title},
    duration: ${secondEpisode.duration} min,
    watched: ${secondEpisode.hasBeenWatched ? 'Alreday':'loot at it'}`;

let thirdEpisode = new Episode ("E3",30,true);
document.querySelector('#third-episode-info').innerText = `
    Episodes: ${thirdEpisode.title},
    duration: ${thirdEpisode.duration} min,
    watched: ${thirdEpisode.hasBeenWatched ? 'Alreday':'loot at it'}`;

//les tableaux
