import {Validator} from '../misc/Validator.js';
function headerNavActions(selector) {
    //input validate
    if(typeof selector !== 'string' || selector.length === 0) {
        console.error('Error: selector not string or empty');
        return false
    }
    const DOM = document.querySelectorAll(selector);
    if(!Validator.isValidDOM(DOM)) {
        console.error('Error: selector not exists');
        return false
    }
    //logic

    DOM.forEach(item => {
        item.addEventListener('click', () => {
            const current = document.querySelector('header .nav .active');
            if(!Validator.isValidDOM(current)) {
                console.error('Error: selector not exists');
                return false
            }
            
            current.classList.remove('active');
            
            item.classList.add('active');
        })
    });
}

export {headerNavActions};