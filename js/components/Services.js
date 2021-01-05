import {Validator} from '../misc/Validator.js'

class Services{
    constructor(params){
        this.selector = params.selector;

        this.data = params.data;
        this.containerDOM = null;

        this.initialize();
        
    }

    initialize(){
        this.containerDOM = document.querySelector(this.selector)

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
            HTML += ` <div class="services-cube col-xs-12 col-sm-12 col-md-6 col-lg-4 col-xl-4">
            <div class="cube-container">
                <svg class="cube-icon"${item.icon}
                </svg>
                <h5 class="cube-h5">${item.h5}</h5>
                <p class="cube-text">${item.p}</p>
                <svg class="cube-icon-grow"${item.iconBig}
                </svg>
            </div>          
        </div>`
        }
        
        this.containerDOM.insertAdjacentHTML('beforeend',HTML)
    }
}

export {Services}