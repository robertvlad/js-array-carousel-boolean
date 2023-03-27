const images_array = [
    '01.webp',
    '02.webp',
    '03.webp',
    '04.webp',
    '05.webp',
];

let item_content = '';
let item_thumb = '';

for (let i = 0; i < images_array.length; i++) {
    item_content += `<div class="item"><img src="./img/${ images_array[i] }"></div>`;
    item_thumb += `<div class="thumb"><img src="./img/${ images_array[i] }"></div>`; 
};

const items_slider = document.querySelector('.item-slider').innerHTML = item_content;
const items_thumbnails = document.querySelector('.item-thumbnails').innerHTML = item_thumb;

const items = document.getElementsByClassName('item');
const circles = document.getElementsByClassName('circle');
const thumb = document.getElementsByClassName('thumb');
console.log(thumb);

let item_active = 0;

items[item_active].classList.add('active');
circles[item_active].classList.add('active');
thumb[item_active].classList.add('active');

let next = document.querySelector('.next');
let prev = document.querySelector('.prev');

next.addEventListener ('click', function() {

    items[item_active].classList.remove('active');
    circles[item_active].classList.remove('active');
    thumb[item_active].classList.remove('active');

    if ( item_active === images_array.length-1 ) {
        item_active = 0;
    }
    else {
        item_active++;
    };

    items[item_active].classList.add('active');
    circles[item_active].classList.add('active');
    thumb[item_active].classList.add('active');
});

prev.addEventListener ('click', function() {

    items[item_active].classList.remove('active');
    circles[item_active].classList.remove('active');
    thumb[item_active].classList.remove('active');

    if ( item_active === 0 ) {
        item_active = images_array.length - 1;
    }
    else {
        item_active--;
    };

    items[item_active].classList.add('active');
    circles[item_active].classList.add('active');
    thumb[item_active].classList.add('active');
});



