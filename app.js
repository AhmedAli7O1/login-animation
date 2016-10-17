$(document).ready(() => {

    fadeIn('#topBox')
        .then(() => animate("#topBox", { top: '42.5%' }))
        .then(() => fadeIn("#rightBox"))
        .then(() => animate("#rightBox", { right: '42.5%' }))
        .then(() => fadeIn("#bottomBox"))
        .then(() => animate("#bottomBox", { bottom: '42.5%' }))
        .then(() => fadeIn("#leftBox"))
        .then(() => animate("#leftBox", { left: '42.5%' }))
        .then(() => text("#leftBox", "Welcome back"))
        .then(() => text("#leftBox", "THE BRAND"))
        .then(() => text("#leftBox", "get ready to login!"))
        .then(() => fadeIn("#loginBox"))
        .then();

});


function fadeIn(element) {
    return new Promise((resolve, reject) => {

        $(element).fadeIn(500, resolve);

    });
}

function fadeOut(element) {
    return new Promise((resolve, reject) => {
        
        $(element).fadeOut(500, resolve);

    });
}

function animate(element, direction) {
    return new Promise((resolve, reject) => {
        
        $(element).animate(direction, 1000, resolve);

    });
}

function text(element, text) {
    return new Promise((resolve) => {

        element += ' span';

        $(element).fadeOut(1000, function () {
            $(this).text(text);
            $(this).fadeIn(1000, resolve);
        });

    });
}