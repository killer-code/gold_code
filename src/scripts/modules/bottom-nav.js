function bottomNav() {
    const bottomNavArr = document.querySelectorAll('.js-bottom-nav__item');

    if(!bottomNavArr) { return };

    bottomNavArr.forEach(function(item) {
        item.addEventListener('click', function(evt) {

            evt.preventDefault();

            bottomNavArr.forEach(function(activeEl) {
                if(activeEl.classList.contains('js-bottom-nav__item-active')) {
                    activeEl.classList.remove('js-bottom-nav__item-active')
                }
            });
            item.classList.add('js-bottom-nav__item-active');
        }, false)
    })
};

export { bottomNav };