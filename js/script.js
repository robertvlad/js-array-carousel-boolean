const images_array = [
    '01.webp',
    '02.webp',
    '03.webp',
    '04.webp',
    '05.webp',
];

let item_content = '';

for (let i = 0; i < images_array.length; i++) {
    item_content += `<div class="item"><img src="./img/${ images_array[i] }"></div>`;
    
};

const items_slider = document.querySelector('.item-slider').innerHTML = item_content;

const items = document.getElementsByClassName('item');
console.log(items);
let item_active = 0;

items[item_active].classList.add('active');

const circles = document.getElementsByClassName('circle');

circles[item_active].classList.add('active')

let next = document.querySelector('.next');
let prev = document.querySelector('.prev');

next.addEventListener ('click', function() {

});

prev.addEventListener ('click', function() {

});



