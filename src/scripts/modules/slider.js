function slider() {
    const carousel    = document.querySelector('.js-carousel'),
          btnPrev     = document.querySelector('.js-btn__prev'),
          btnNext     = document.querySelector('.js-btn__next'),
          btnPrevMob  = document.querySelector('.js-btn__prev-mob'),
          btnNextMob  = document.querySelector('.js-btn__next-mob'),
          listSlides  = document.querySelector('.js-slider__list'),
          arrSlides   = document.querySelectorAll('.js-slider__item'),
          widthScreen = document.documentElement.clientWidth;

    let widthItem     = 0,
        count         = 1,
        position      = 0,
        visibleSildes = 0;

    if(!carousel) { return };

    
    if(widthScreen > 1100) {
        widthItem     = 118;
        visibleSildes = 8;
    } else if(widthScreen < 1100 && widthScreen > 760) {
        widthItem     = 118;
        visibleSildes = 5;
    } else {
        widthItem = 76;
        visibleSildes = 4;
    }

    for (let i = 0; i < arrSlides.length; i++) {
        let span = document.createElement('span');

        arrSlides[i].classList.add('position-r');
        span.classList.add('counter');
        span.innerHTML = i + 1;
        arrSlides[i].appendChild(span);
    }

    function prev() {
        position = Math.min(position + widthItem * count, 0);
        listSlides.style.marginLeft = position + 'px';

        if(position === 0) {
            btnPrev.classList.add('js-btn-disable');
            btnPrevMob.classList.add('js-btn-disable');
        }

        if(btnNext.classList.contains('js-btn-disable')) {
            btnNext.classList.remove('js-btn-disable');
            btnNextMob.classList.remove('js-btn-disable')
        }
    };

    function next() {
        position = Math.max(position - widthItem * count, 
            -widthItem * (arrSlides.length - visibleSildes));
        listSlides.style.marginLeft = position + 'px';

        if(btnPrev.classList.contains('js-btn-disable')) {
            btnPrev.classList.remove('js-btn-disable');
            btnPrevMob.classList.remove('js-btn-disable')
        }

        if(position === -widthItem * (arrSlides.length - visibleSildes)) {
            btnNext.classList.add('js-btn-disable');
            btnNextMob.classList.add('js-btn-disable') 
        }
    };

    btnPrev.addEventListener('click', prev);
    btnNext.addEventListener('click', next);
    btnPrevMob.addEventListener('click', prev);
    btnNextMob.addEventListener('click', next);
};

export { slider };