const slider = document.querySelector('.slider');
const slides = document.querySelectorAll('.slide');
const interval = 5000;
let currentIndex = 0;

function nextSlide() {
    currentIndex = (currentIndex + 1) % slides.length;
    updateSlider();
}

function updateSlider() {
    const offset = -currentIndex * 624;
    slider.style.transform = `translateX(${offset}px)`; // Анимируем свойство transform для плавной анимации
}

let slideInterval = setInterval(nextSlide, interval);

slider.addEventListener('mouseenter', () => {
    clearInterval(slideInterval);
});

slider.addEventListener('mouseleave', () => {
    slideInterval = setInterval(nextSlide, interval);
});

goToSlide(currentIndex);



window.addEventListener('scroll', function() {
    var element = document.querySelector('.fade-element');
    var position = element.getBoundingClientRect().top;
    var screenHeight = window.innerHeight;

    // Если верхняя часть элемента находится внутри видимой части экрана
    if (position < screenHeight) {
        element.classList.add('fade-out'); // Добавляем класс для затухания
    } else {
        element.classList.remove('fade-out'); // Убираем класс, если элемент не виден
    }
});

window.addEventListener("resize", AutoScale); //Масштабируем страницу при растягивании окна

AutoScale(); //Масштабируем страницу после загрузки

function AutoScale()
{
    let width = window.innerWidth; //Ширина окна
    //Если вы хотите проверять по размеру экрана, то вам нужно свойство window.screen.width

    if(width > 1280)
    {
     ChangeScale("big");
    }
    else if(width <= 1280 && width > 720)
    {
     ChangeScale("normal");
    }
    else if(width < 720)
    {
     ChangeScale("small");
    }
}