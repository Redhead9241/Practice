'use strict';

const box = document.getElementById('box'),
    btns = document.getElementsByTagName('button'),
    circles = document.getElementsByClassName('circle'),
    hearts = document.querySelectorAll('.heart'),
    oneHeart = document.querySelector('.heart'),
    wrapper = document.querySelector('.wrapper');

let num = 600;

box.style.cssText = `background-color: blue; width: ${num}px`;
btns[1].style.borderRadius = '100%';
circles[0].style.backgroundColor = 'yellow';

// for(let i = 0; i < hearts.length; i++) {
//     hearts[i].style.backgroundColor = 'blue';
// }
hearts.forEach(item => {
    item.style.backgroundColor = 'yellow';
});

const div = document.createElement('div');
// const text = document.createTextNode('Тут был я');
div.classList.add('black');
document.body.append(div);

wrapper.append(div);
// wrapper.prepend(div);

// hearts[0].before(div);
// hearts[0].after(div);

// circles[0].remove();

// hearts[0].replaceWith(circles[0]);

div.innerHTML = '<h1>Hello World!</h1>';

// div.textContent = 'Hello';

div.insertAdjacentHTML("afterbegin", '<h2>Hello</h2>');