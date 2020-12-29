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

class PortfolioBtn{
    constructor(params){
        this.selectorBtn = params.selectorBtn;

        this.data = params.data;
        this.containerDOM = null;
        this.isBtnActive = false;
        this.initialize();

        
    }

    initialize(){
        this.containerDOM = document.querySelector(this.selectorBtn)

        if(!Validator.isValidDOM(this.containerDOM))
        {
            console.error('Wrong selector....')
            return false;
        }       
        this.render()
        this.addEvents()
    }

    render(){
        let HTML = "";
        for(let item of this.data)
        {
            if(item.btn === 'All')
                HTML += `<button class="portfolio-btn portfolio-btn-active">${item.btn}</button>`
            else
                HTML += `<button class="portfolio-btn">${item.btn}</button>`
        }
        
        this.containerDOM.insertAdjacentHTML('beforeend',HTML)
    }

    addEvents(){
        const btnDOMs = document.querySelectorAll(this.selectorBtn  + '> .portfolio-btn')
        btnDOMs.forEach(btn => {
            btn.addEventListener('click', () => {
                this.toggleActive(btn,btnDOMs)
                this.filterPhotos(btn)
            })
        });
    }

    toggleActive(btn,btnDOMs){
        btnDOMs.forEach(btn => { btn.classList.remove('portfolio-btn-active')})
        btn.classList.add('portfolio-btn-active')
    }
    filterPhotos(btn){
         const photosDOMs = document.querySelectorAll('.portfolio-photo')
         
         photosDOMs[0].classList.add('portfolio-photo-hide')
    }
}

export {Portfolio, PortfolioBtn}