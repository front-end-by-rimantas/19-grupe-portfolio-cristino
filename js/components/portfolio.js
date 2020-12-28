import {Validator} from '../misc/Validator.js'

class Portfolio{
    constructor(params){
        this.selectorPhotos = params.selectorPhotos;

        this.data = params.data;
        this.containerDOM = null;

        this.initialize();
        
    }

    initialize(){
        this.containerDOM = document.querySelector(this.selectorPhotos)

        if(!Validator.isValidDOM(this.containerDOM))
        {
            console.error('Wrong selector....')
            return false;
        }       
        this.render()
    }

    render(){
        let HTML = "";
        for(let item of this.data)
        {
            HTML += `<div class="portfolio-photo col-xs-12 col-sm-12 col-md-6  col-lg-4 col-xl-4">
            <div class="portfolio-img-cont">
                <img class="portfolio-img" src="${item.img}" alt="#">
                <div class="svg-cont">
                    <svg class="portfolio-hover-img" ${item.svg}</svg>
                </div>
            </div>
            <div class="portfolio-text">
                <h5 class="portfolio-h5">${item.h5}</h5>
                <p class="portfolio-p">${item.p}</p>
            </div>
        </div>`
        }
        
        this.containerDOM.insertAdjacentHTML('beforeend',HTML)
    }
}

export {Portfolio}