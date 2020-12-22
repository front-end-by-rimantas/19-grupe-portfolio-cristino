import {Validator} from '../misc/Validator.js'

class Skills{
    constructor(params){
        this.selectorButtons = params.selectorButtons;
        this.selectorGraphs = params.selectorGraphs;
        this.data = params.data;
        this
        this.buttonsDOM = null;
        
        this.init()
        
    }
    init(){
        this.buttonsDOM = document.getElementById(this.selectorButtons)
        
        this.grahpsContainerDOM = document.getElementById(this.selectorGraphs)

        if(!Validator.isValidDOM(this.grahpsContainerDOM))
        {
            console.error('Wrong selector....')
            return false;
        }   
        if(!Validator.isValidDOM(this.buttonsContainerDOM))
        {
            console.error('Wrong selector....')
            return false;
        }
        
        this.data.map( (button)  => {
            this.renderButton(button)

            if(button.active)
            {
                button.buttonGraphs.map((graph) => {
                    this.renderGraph(graph)
                })
            }
        });

    }

    renderButton = button => button.active ? this.buttonsDOM.insertAdjacentHTML('beforeend',`<button id="${button.buttonName}" class="btn btn-primary skill-btn skill-btn-active">${button.buttonName}</button>`)
        : this.buttonsDOM.insertAdjacentHTML('beforeend',`<button id="${button.buttonName}" class="btn btn-primary skill-btn ">${button.buttonName}</button>`)

    renderGraph = graph => this.grahpsContainerDOM.insertAdjacentHTML('beforeend', `<div class="skill-progress-bar">
    <div class="skill-progress-visibile"><span class="title">${graph.title}</span>
        <div id="${graph.title}" class="skill-progress-active"><span id="${graph.title}-skill-level" class="skill-level"></span></div>
    </div>
    </div>`)
    }

export{Skills}