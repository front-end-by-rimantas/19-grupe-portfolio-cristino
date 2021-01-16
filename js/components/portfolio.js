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
    set(){
        
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
        btn.classList.add('portfolio-btn-actived')
    }
    
    filterPhotos(btn){
         const photosDOMs = document.querySelectorAll('.portfolio-photo')
         
            if(btn.innerText.toUpperCase() === 'ALL')
            {
                console.log('ALL BTN PRESSED');
                photosDOMs.forEach(el => {
                    el.classList.remove('portfolio-photo-hide')
                    el.classList.remove('porfolio-photo-hidden')
                });
            }

            if(btn.innerText.toUpperCase() === 'NATURAL'){
                console.log('NATURAL BTN PRESSED');
                const idxs = [1,3,4]
                const idxs2 = [0,2,5]
                for (let i = 0; i < idxs.length; i++) {
                    const idx = idxs[i];
                    
                    photosDOMs[idx].classList.add('portfolio-photo-hide')
                    // setTimeout(() => {
                    //     photosDOMs[idx].classList.add('porfolio-photo-hidden')
                    // },500)
                }

                for (let i = 0; i < idxs2.length; i++) {
                    const idx = idxs2[i];
                    
                    photosDOMs[idx].classList.remove('portfolio-photo-hide')
                    // setTimeout(() => {
                    //     photosDOMs[idx].classList.remove('porfolio-photo-hidden')
                    // },500)
                }
            }

            if(btn.innerText.toUpperCase() === 'CREATIVE'){
                console.log('CREATIVE BTN PRESSED');
                const idxs = [0,3]
                const idxs2 = [1,2,4,5]
               
                for (let i = 0; i < idxs.length; i++) {
                    const idx = idxs[i];
                    
                    photosDOMs[idx].classList.add('portfolio-photo-hide')
                    // setTimeout(() => {
                    //     photosDOMs[idx].classList.add('porfolio-photo-hidden')
                    // },500)
                }

                for (let i = 0; i < idxs2.length; i++) {
                    const idx = idxs2[i];
                    
                    photosDOMs[idx].classList.remove('portfolio-photo-hide')
                    // setTimeout(() => {
                    //     photosDOMs[idx].classList.remove('porfolio-photo-hidden')
                    // },500)
                }
            }
            
            if(btn.innerText.toUpperCase() === 'PERSONAL'){
                console.log('PERSONAL BTN PRESSED');
                const idxs = [2,4,5]
                const idxs2 = [0,1,3]
               
                for (let i = 0; i < idxs.length; i++) {
                    const idx = idxs[i];
                    
                    photosDOMs[idx].classList.add('portfolio-photo-hide')
                    // setTimeout(() => {
                    //     photosDOMs[idx].classList.add('porfolio-photo-hidden')
                    // },500)
                }

                for (let i = 0; i < idxs2.length; i++) {
                    const idx = idxs2[i];
                    
                    photosDOMs[idx].classList.remove('portfolio-photo-hide')
                    // setTimeout(() => {
                    //     photosDOMs[idx].classList.remove('porfolio-photo-hidden')
                    // },500)
                }
            }

            if(btn.innerText.toUpperCase() === 'PHOTOGRAPHY'){
                console.log('PHOTOGRAPHY BTN PRESSED');
                const idxs = [0,2,5]
                const idxs2 = [1,3,4]
               
                for (let i = 0; i < idxs.length; i++) {
                    const idx = idxs[i];
                    
                    photosDOMs[idx].classList.add('portfolio-photo-hide')
                    // setTimeout(() => {
                    //     photosDOMs[idx].classList.add('porfolio-photo-hidden')
                    // },500)
                }

                for (let i = 0; i < idxs2.length; i++) {
                    const idx = idxs2[i];
                    
                    photosDOMs[idx].classList.remove('portfolio-photo-hide')
                    // setTimeout(() => {
                    //     photosDOMs[idx].classList.remove('porfolio-photo-hidden')
                    // },500)
                }
            }

    }
}

export {Portfolio, PortfolioBtn}