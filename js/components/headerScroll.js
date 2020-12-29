import {Validator} from '../misc/Validator.js';
function headerScroll(selector) {
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
    window.addEventListener('scroll', () => {
        if(window.pageYOffset > 50) {
            DOM.classList.add('fixed');
        }else {
            DOM.classList.remove('fixed');
        }
    });

}

export {headerScroll};