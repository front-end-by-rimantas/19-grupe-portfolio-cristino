import {Validator} from '../misc/Validator.js'

class Projects{
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
        console.log(this.containerDOM)
        for(let item of this.data)
        {
            HTML += `<div class="section-projects col-xl-3 col-6">
            <svg class="icon-projects" ${item.icon}</svg>
            <h3 class="h3-projects">${item.h3}</h3>
            <h6 class="h6-projects">${item.h6}</h6> </div>`
        }
        
        this.containerDOM.innerHTML = HTML;
    }
}

export{Projects}