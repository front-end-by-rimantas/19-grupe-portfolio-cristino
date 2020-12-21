import {Validator} from '../misc/Validator.js'

class Projects{
    constructor(params){
        this.selector = params.selector;
        this.data = params.data;
        this.containerDOM = null;
        this.sectionDOMs = null

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
        this.fireEvents()
    }

    render(){
        let HTML = "";
        for(let item of this.data)
        {
            HTML += `<div class="section-projects col-xl-3 col-6">
            <svg class="icon-projects" ${item.icon}</svg>
            <h3 class="h3-projects">${item.h3}</h3>
            <h6 class="h6-projects">${item.h6}</h6> </div>`
        }
        
        this.containerDOM.innerHTML = HTML;
    }
    
    fireEvents()
    {
        this.sectionDOMs = this.containerDOM.querySelectorAll('.h3-projects')

        addEventListener('scroll', () => {
            
            const windBot = scrollY + innerHeight;
            for (let index = 0; index < this.sectionDOMs.length; index++) {
                
                const element = this.sectionDOMs[index];

                if(element.classList.contains('animated'))
                    continue;
                
                const elementBot = element.offsetTop + element.clientHeight - 30; //chaltura nes marginas
                
                if(windBot > elementBot){
                    element.classList.add('animated')
                    this.runAnimation(element, index)
                }
            }

        })
    }
    runAnimation(el,idx)
    {
        let numb = 0;

        if(this.data[idx].h3 < 50)
        {
            const timer = setInterval(() =>{
                el.innerText = (numb++ * 2)
                if(Number(el.innerText) > this.data[idx].h3)
                {
                    el.innerText = this.data[idx].h3
                    clearInterval(timer)
                }              
            }, 70)
        }
        else
        {
            const timer = setInterval(() =>{
                el.innerText = (numb++ * 7);
                if(Number(el.innerText) > this.data[idx].h3)
                {
                    el.innerText = this.data[idx].h3
                    clearInterval(timer)
                }            
            }, 1)
        }

    }
}

export{Projects}