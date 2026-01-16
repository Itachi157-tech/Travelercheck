let next = document.querySelector('.next');
let prev = document.querySelector('.prev');
let slider = document.querySelector('.slide');
let canClick = true;

next.addEventListener('click', function(){
    if(!canClick) return;
    canClick = false;

    let items = document.querySelectorAll('.item');
    slider.appendChild(items[0]);

    setTimeout(() => { canClick = true; }, 600);
});

prev.addEventListener('click', function(){
    if(!canClick) return;
    canClick = false;

    let items = document.querySelectorAll('.item');
    slider.prepend(items[items.length - 1]);

    setTimeout(() => { canClick = true; }, 600);
});