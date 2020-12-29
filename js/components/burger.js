import {Validator} from '../misc/Validator.js';
function burgerToggle(selector) {
    //input validate
    if(typeof selector !== 'string' || selector.length === 0) {
        console.error('Error: selector not string or empty');
        return false
    }
    const DOM = document.querySelector(selector);
    if(!Validator.isValidDOM(DOM)) {
        console.error('Error: selector not exists');
        return false
    }

    //logic
    DOM.addEventListener('click', (e) => {
        e.preventDefault();
        DOM.classList.toggle('active');
        const headerNavbarSelector = document.querySelector('.header .navbar');

        if(!Validator.isValidDOM(headerNavbarSelector)) {
            console.error('ERROR: selector not exists');
        }

        headerNavbarSelector.classList.toggle('open');
        window.addEventListener('click', (event) => {
            if(event.target.tagName.toLowerCase() === 'a') {
                DOM.classList.remove('active');
                headerNavbarSelector.classList.remove('open');
            }
        });
    });
}

export {burgerToggle};