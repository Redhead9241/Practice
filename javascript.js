'use strict';

function first() {
    // Do something
    setTimeout(function() {
        console.log(1);
    },500);
}
function second() {
    console.log(2);
}
first();
second();

function learnJavaScript(lang, callBack) {
    console.log(`Я учу: ${lang}`);
    callBack();
}

function done(){
    console.log("Я прошел этот урок");
}

learnJavaScript('JS', done);