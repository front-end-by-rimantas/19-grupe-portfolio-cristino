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
        document.querySelector('.header .navbar').classList.toggle('open');
    });
}

export {burgerToggle};