function topNav() {
    const titleText = document.querySelector('title').innerText,
          topNavArr = document.querySelectorAll('.js-top-nav__item');

    topNavArr.forEach(function(item) {
        if(item.innerText === titleText) {
            item.classList.add('js-top-nav__item-active')
        }
    })
};

export { topNav };