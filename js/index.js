//Скролл к заказу

const btnOrder = document.querySelectorAll('.scroll_order');
const formOrder = document.querySelector('.order');

btnOrder.forEach(element => (
    element.onclick = () => {
        formOrder.scrollIntoView({ behavior: "smooth" });
    }
))

//Слайдер
let position = 0;
const slidesToShow = 1;
const slidesToScroll = 1;
const slider = document.querySelector('.slider');
const track = document.querySelector('.slider__track');
const item = document.querySelectorAll('.slider__item');
const btnPrev = document.querySelector('.slider__btn_prev');
const btnNext = document.querySelector('.slider__btn_next');
const itemWidth = document.querySelector('.slider__item').offsetWidth;
const movePosition = slidesToScroll * itemWidth;
const itemsCount = item.length;

const setPosition = () => {
    track.style = `transform: translateX(${position}px)`;
}

const checkBtns = () => {
    if (position === 0) {
        btnPrev.classList.add('hide');
    } else btnPrev.classList.remove('hide');
    if (position <= -(itemsCount - slidesToShow) * itemWidth) {
        btnNext.classList.add('hide');
    } else btnNext.classList.remove('hide');
}

checkBtns();

btnPrev.onclick = function () {
    position += movePosition;
    setPosition();
    checkBtns();
};

btnNext.onclick = function () {
    position -= movePosition;
    setPosition();
    checkBtns();
};

// Таймер

let endPromotion = new Date();
endPromotion.setMinutes(endPromotion.getMinutes() + 30);
let gap;

const counts = () => {
    const now = new Date();
    gap = endPromotion - now;
    let minutes = Math.floor(gap / 1000 / 60) % 60;
    let seconds = Math.floor(gap / 1000) % 60;

    if (gap < 0) {
        document.querySelector('.order__timer').innerHTML = "Акция закончилась"
        stopTimer();
    } else {
        if (minutes < 10) {
            document.querySelector('.minutes').innerText = '0' + minutes
        } else document.querySelector('.minutes').innerText = minutes;

        if (seconds < 10) {
            document.querySelector('.seconds').innerText = '0' + seconds
        } else document.querySelector('.seconds').innerText = seconds
    }
}

const changeCounts = setInterval(() => counts(), 1000);

const stopTimer = () => { clearInterval(changeCounts) };


//Подсказки

const inputName = document.querySelector('.input_name');
const inputPhone = document.querySelector('.input_phone');
const promtName = document.querySelector('.promt_name');
const promtPhone = document.querySelector('.promt_phone');

inputName.onfocus = () => {
    promtName.classList.remove('promt_hide')
};
inputPhone.onfocus = () => {
    promtPhone.classList.remove('promt_hide')
};
inputName.onblur = () => {
    promtName.classList.add('promt_hide')
};
inputPhone.onblur = () => {
    promtPhone.classList.add('promt_hide')
};

