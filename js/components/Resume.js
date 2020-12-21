import {Validator} from '../misc/Validator.js';

class Resume {
    constructor(params) {
        this.selector = params.selector;
        this.data = params.data;
        this.DOM = null;

        this.init();
    }

    init() {
        this.render();
    }

    
    render() {
        let HTML = '';
        for(let item in this.data) {
            if(!Validator.isObject(this.data[item])) {
                console.error('Error');
                continue
            }

            if(!Validator.isTitle(this.data[item]['timeline'])) {
                console.error('Error: timeline is not string');
                continue;
            }

            if(!Validator.isTitle(this.data[item]['title'])) {
                console.error('Error: title is not string');
                continue
            }

            if(!Validator.isTitle(this.data[item]['company'])) {
                console.error('Error: company is not string');
                continue
            }

            if(!Validator.isDescription(this.data[item]['description'])) {
                console.error('Error: description is not string');
               continue
            }


            HTML += `<div class="resume__timeline-item">
                        <div class="row">
                            <div class="col-md-6">
                                    <div class="date-label">${this.data[item]['timeline']}</div>
                            </div>
                            <div class="col-md-6">
                                <div class="description-block">
                                    <h3 class="description-block__title">${this.data[item]['title']}</h3>
                                    <div class="description-block__subtitle">${this.data[item]['company']}</div>
                                    <p class="description-block__text">${this.data[item]['description']}</p>
                                </div>
                            </div>
                        </div>
                    </div>`;
        }

        this.DOM = document.querySelector(this.selector);
        this.DOM.insertAdjacentHTML('beforeend', HTML);
    }
}

export {Resume};