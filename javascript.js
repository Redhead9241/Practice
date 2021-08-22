'use strict';
let numberOfFilms;


function start() {
    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?');
        
    }
}


function rememberMyFilms() {
    for (let i = 0; i<2; i++) {
        const a = prompt('Один из последних просмотренных фильмов?', ''),
              b = prompt('На сколько оцените его?', '');
              if (a!= null && b != null && a != '' && b != '' && a.length < 50) {
                personalMovieDB.movies[a] = b;
              } else {
                  i--;
              }
    }
}


function detectPersonalLevel() {
    if (personalMovieDB.count < 10){
        alert("Просмотрено довольно мало фильмов");
    } else if(personalMovieDB.count >= 10 && personalMovieDB.count < 30){
        alert("Выклассический зритель");
    } else if(personalMovieDB.count >= 30){
        alert("Вы киноман");
    } else {
        alert("Произошла ошибка");
    }
}


function showMyDB(hidden) {
    if (!hidden) {
        console.log(personalMovieDB);
    }
}


function writeYourGenres() {
    for (let i = 0; i < 3; i++) {
        
           personalMovieDB.genres[i] = prompt(`Ваш любимый жанр под номером ${i+1}`);
           if (personalMovieDB.genres[i] == null || personalMovieDB.genres[i] == '' || !isNaN(personalMovieDB.genres[i])) {
            i--;
        }
               
        
    }
}

start();
let personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};


rememberMyFilms();
detectPersonalLevel();
writeYourGenres();
showMyDB(personalMovieDB.privat);