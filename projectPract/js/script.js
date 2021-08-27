/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

'use strict';

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
    list = document.querySelectorAll('.promo__interactive-item');


adv.forEach(item => {
    item.remove();
});
// const adv = document.querySelector('.promo__adv');
// adv.remove();

// const genres = document.querySelector('.promo__genre');
// genres.innerHTML = '<div class="promo__genre">ДРАМА</div>';

// const logo = document.querySelector('.promo__bg');
// logo.style.background = 'backgound:url("../img/bg.jpg")';

genre.textContent = "ДРАМА";
poster.style.backgroundImage = 'url("img/bg.jpg")';

list.forEach(item => {
    
});