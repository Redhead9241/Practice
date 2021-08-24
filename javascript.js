'use strict';

let personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
    start: function(){
        while (personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
            personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?');
        }
    },
    rememberMyFilms: function(){
        for (let i = 0; i<2; i++) {
            const a = prompt('Один из последних просмотренных фильмов?', ''),
                  b = prompt('На сколько оцените его?', '');
                  if (a!= null && b != null && a != '' && b != '' && a.length < 50) {
                    personalMovieDB.movies[a] = b;
                  } else {
                      i--;
                  }
        }
    },
    detectPersonalLevel: function(){
        if (personalMovieDB.count < 10){
            alert("Просмотрено довольно мало фильмов");
        } else if(personalMovieDB.count >= 10 && personalMovieDB.count < 30){
            alert("Выклассический зритель");
        } else if(personalMovieDB.count >= 30){
            alert("Вы киноман");
        } else {
            alert("Произошла ошибка");
        }
    },
    writeYourGenres: function(){
        for (let i = 0; i < 3; i++) {
        
            personalMovieDB.genres[i] = prompt(`Ваш любимый жанр под номером ${i+1}`);
            if (personalMovieDB.genres[i] == null || personalMovieDB.genres[i] == '' || !isNaN(personalMovieDB.genres[i])) {
             i--;
         }
     }
     personalMovieDB.genres.forEach((item, i) => {
                console.log(`Любимый жанр ${i + 1} - это ${item}`);
             });   
    },
    toggleVisibleMyDB: function(){
        if (personalMovieDB.privat){
            personalMovieDB.privat = false;
        } else {
            personalMovieDB.privat = true;
        }
    },
    showMyDB: function(hidden){
        if (!hidden) {
            console.log(personalMovieDB);
        }
    }
};
personalMovieDB.start();
personalMovieDB.rememberMyFilms();
personalMovieDB.detectPersonalLevel();
personalMovieDB.writeYourGenres();
personalMovieDB.toggleVisibleMyDB();
personalMovieDB.showMyDB(personalMovieDB.privat);