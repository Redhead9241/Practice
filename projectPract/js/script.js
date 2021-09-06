/* Задания на урок:

1) Реализовать функционал, что после заполнения формы и нажатия кнопки "Подтвердить" - 
новый фильм добавляется в список. Страница не должна перезагружаться.
Новый фильм должен добавляться в movieDB.movies.
Для получения доступа к значению input - обращаемся к нему как input.value;
P.S. Здесь есть несколько вариантов решения задачи, принимается любой, но рабочий.

2) Если название фильма больше, чем 21 символ - обрезать его и добавить три точки

3) При клике на мусорную корзину - элемент будет удаляться из списка (сложно)

4) Если в форме стоит галочка "Сделать любимым" - в консоль вывести сообщение: 
"Добавляем любимый фильм"

5) Фильмы должны быть отсортированы по алфавиту */

'use strict';

document.addEventListener('DOMContentLoaded', ()=>{
    const movieDB = {
        movies: [
            "Логан",
            "Лига справедливости",
            "Ла-ла лэнд",
            "Одержимость",
            "Скотт Пилигрим против..."
        ]
    };
    const adv = document.querySelectorAll('.promo__adv img'),
        poster = document.querySelector('.promo__bg'),
        genre = poster.querySelector('.promo__genre'),
        list = document.querySelectorAll('.promo__interactive-item'),
        movieList = document.querySelector('.promo__interactive-list'),
        addForm = document.querySelector('form.add'),
        addInput = addForm.querySelector('.adding__input'),
        checkbox = addForm.querySelector('[type="checkbox"]');
    
    
    
    
    // const adv = document.querySelector('.promo__adv');
    // adv.remove();
    // const genres = document.querySelector('.promo__genre');
    // genres.innerHTML = '<div class="promo__genre">ДРАМА</div>';
    // const logo = document.querySelector('.promo__bg');
    // logo.style.background = 'backgound:url("../img/bg.jpg")';
    
    const deleteAdv = (arr) =>{
        arr.forEach(item => {
            item.remove();
        });
    };

    
    
    const makeChanges = () =>{
        genre.textContent = "ДРАМА";
        poster.style.backgroundImage = 'url("img/bg.jpg")';
    };

    const sortArray = (arr) => {
        arr.sort();
    };

    // list.forEach(item => {
    // list.forEach(item => {
    
    // });
    
    // movieDB.movies.forEach(function(a,b){
    //     return a-b;
    // });
    // console.log(movieDB.movies);
    
    movieList.innerHTML = "";
    // movieDB.movies.sort();
    
    movieDB.movies.forEach((film, i) =>{
        movieList.innerHTML += `
        <li class="promo__interactive-item">${i+1} ${film}
        <div class="delete"></div>
        </li>
        `; 
    });
    
    addForm.addEventListener('submit', (event) => {
        event.preventDefault();

        let newFilm = addInput.value;
        const favorite = checkbox.checked;

        if(favorite) {
            console.log('Добавляем любимый фильм');
        }
        // if(newFilm.length > 20){
        //     const arrStron = newFilm.split();
        //     for(let a = 0; a < 3; a++){
        //         arrStron[length-a] = '.';

        //     }
        
        //     const fin = arrStron.join();
        //     movieDB.movies.push(fin);

        // }else {
            if(newFilm) {

                if(newFilm.length > 21) {
                    newFilm = `${newFilm.substring(0, 22)}...`;
                }
                movieDB.movies.push(newFilm);       
                // sortArray(movieDB.movies);
                createMovieList(movieDB.movies, movieList);
            }
        
        event.target.reset();
    });



    function createMovieList(films,parent){
        parent.innerHTML ='';
        sortArray(films);
        films.forEach((film, i) =>{
            parent.innerHTML += `
            <li class="promo__interactive-item">${i+1} ${film}
            <div class="delete"></div>
            </li>
            `; 
        });

        document.querySelectorAll('.delete').forEach((btn, i) => {
            btn.addEventListener('click', () => {
                btn.parentElement.remove();
                movieDB.movies.splice(i, 1);
                createMovieList(films, parent);
                // sortArray(movieDB.movies);
            });
        });

    }
    deleteAdv(adv);
    makeChanges();
    createMovieList(movieDB.movies, movieList);
   

});

