//création d'une classe
class Episode {
    constructor (title,duration,etat) {
        this.title = title;
        this.duration = duration;
        this.hasBeenWatched = etat;
    }
}
let firstEpisode = new Episode ("E0",25,false);
let secondEpisode = new Episode ("E1",24,true);
let thirdEpisode = new Episode ("E3",30,true);

//les tableaux
//let episodes = [firstEpisode, secondEpisode, thirdEpisode];
let episodes = [];
episodes.push (firstEpisode,secondEpisode,thirdEpisode,thirdEpisode,secondEpisode);
episodes.pop ();//retire le dernier 
let numberOfEpisodes = episodes.length;

for (let i = 0; i < numberOfEpisodes; i ++) {
    let newDiv =  document.createElement ('div');
        newDiv.classList.add('series-frame');
    let newTitle = document.createElement('h2');
        newTitle.innerText = "The Story of Tau";
    let newParagraph =  document.createElement('p');
        newParagraph.innerText = `Episodes : ${episodes[i].title},
        Duration: ${episodes[i].duration} min,
        Watched : ${episodes[i].hasBeenWatched ? 'Already':'Not yet'}`;
    newDiv.append (newTitle);
    newDiv.append (newParagraph);
    document.querySelector('body').append (newDiv);
}
