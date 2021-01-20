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


