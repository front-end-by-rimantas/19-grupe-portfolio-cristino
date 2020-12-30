import {Validator} from '../misc/Validator.js';

class Blog {
    constructor(params) {
        this.selector = params.selector;
        this.data = params.data;
        this.DOM = null;

        this.init();
    }

    init() {
        if(this.isValid()) {
            this.render();
        }
        return false;
    }

    isValid() {
        const selector = document.querySelector(this.selector);
        if(!Validator.isValidDOM(selector)) {
            console.error('Error: selector not exist');
            return false;
        }

        if(!Validator.isArray(this.data)) {
            console.error('Error: type date not array or empty');
            return false;
        }

        return true;
    }

    generateBlogPost(item) {
        return `<div class="col-lg-4 col-md-6">
                    <div class="blog__card">
                        <img src="${item.image}" alt="blog" class="blog__card-image">
            
                        <div class="blog__card-content">
                            <span class="blog__card-author">${item.author}</span>
                            <span class="blog__card-brand">${item.brand}</span>
                            <h3 class="blog__card-title"><a href="" class="blog__card-title-link">${item.title}</a></h3>
                            <a href="#" class="blog__card-btn btn">Read More</i></a>
                            <span class="blog__card-calendar">${item.date}</span>
                        </div>
                    </div>
             </div>`;
    }


    render() {
        let HTML = '';
        for(let item of this.data) {
            if(!Validator.isObject(item)) {
                console.error('Error: is not object');
                continue
            }

            if(!Validator.isTitle(item.author)) {
                console.error('Error: author is not string');
                continue;
            }

            if(!Validator.isTitle(item.brand)) {
                console.error('Error: brand is not string');
                continue;
            }

            if(!Validator.isTitle(item.title)) {
                console.error('Error: title is not string');
                continue;
            }

            HTML += this.generateBlogPost(item);
        }

        this.DOM = document.querySelector(this.selector);
        this.DOM.insertAdjacentHTML('beforeend', HTML);
    }
}

export {Blog};