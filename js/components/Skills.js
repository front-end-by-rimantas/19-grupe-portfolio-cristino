import {Validator} from '../misc/Validator.js'

class Skills{
    constructor(params){
        this.selectorButtons = params.selectorButtons;
        this.selectorGraphs = params.selectorGraphs;
        this.data = params.data;
        this.buttonsContainerDOM = null;
        this.grahpsContainerDOM = null;
        this.firstElementDOM = null;
        
        this.initializeButtons()
        this.InitializeFirst()
    }

    initializeButtons(){
        this.buttonsContainerDOM = document.getElementById(this.selectorButtons)
         
        if(!Validator.isValidDOM(this.buttonsContainerDOM))
        {
            console.error('Wrong selector....')
            return false;
        }

        this.renderButtons()
        this.fireEventsButtons()
        
        this.renderGrahps(this.data[0])
        this.fireEventsScroll(this.data[0])        
    }

    InitializeFirst(){

        this.renderGrahps(this.data[0])
        this.fireEventsScroll(this.data[0])    
    }

    renderButtons(){
        let HTML = "";
        this.data[0].active = true;
        
        for(let item of this.data)
        {
            if(item.active)
                HTML+= `<button id="${item.buttonName}" class="btn btn-primary skill-btn skill-btn-active">${item.buttonName}</button>`
            else
                HTML+= `<button id="${item.buttonName}" class="btn btn-primary skill-btn ">${item.buttonName}</button>`
        }
        this.buttonsContainerDOM.innerHTML += HTML;
    }

    fireEventsButtons()
    {
        for(let item of this.data)
        {
            document.getElementById(item.buttonName).addEventListener('click',()=>{
                {
                    this.toggleActive(item)
                    this.renderGrahps(item);
                    this.fireGraphsAnimation(item.buttonGraphs)
                }
            })
        }    
    }

    fireEventsScroll(data)
    {
        addEventListener('scroll', () => {           
            const windBot = scrollY + innerHeight;
            const elementBot = this.grahpsContainerDOM.offsetTop + this.grahpsContainerDOM.clientHeight - 120; 
            
            if(this.grahpsContainerDOM.classList.contains('animated'))
                return;

                if(windBot > elementBot){
                    this.grahpsContainerDOM.classList.add('animated')            
                    this.fireGraphsAnimation(data.buttonGraphs)     
                }
        })
    }

    toggleActive(item){
        for(let itm of this.data)
            document.getElementById(itm.buttonName).classList.remove('skill-btn-active')
        document.getElementById(item.buttonName).classList.add('skill-btn-active')        
    }

    renderGrahps(item){
        this.grahpsContainerDOM = document.getElementById(this.selectorGraphs)

        if(!Validator.isValidDOM(this.grahpsContainerDOM))
        {
            console.error('Wrong selector....')
            return false;
        }     

        let HTML = "";
        
        for(let itm of item.buttonGraphs)
        {
            HTML += `<div class="skill-progress-bar">
            <div class="skill-progress-visibile"><span class="title">${itm.title}</span>
                <div id="${itm.title}" class="skill-progress-active"><span id="${itm.title}-skill-level" class="skill-level"></span></div>
            </div>
            </div>`
        }
        
        this.grahpsContainerDOM.innerHTML = HTML
    }

    fireGraphsAnimation(items){    
        for(let itm of items)
        {
            const graphDOM = document.getElementById(itm.title)
            const skillLevelDOM = document.getElementById(`${itm.title}-skill-level`)

            if(!Validator.isValidDOM(graphDOM))
            {
                console.error('Wrong selector....')
                return false;
            }
            
            if(!Validator.isValidDOM(skillLevelDOM))
            {
                console.error('Wrong selector....')
                return false;
            } 

            this.runAnimation(graphDOM,itm,skillLevelDOM)
        }
    }
    
    runAnimation(graphDOM,graph,skillLevelDOM)
    {
        let total = 0;
        let increment = graph.skillLevel / 70

        const timer = setInterval(() =>{ 
            graphDOM.style.width = Math.floor((total += increment)) + '%';

            if(total < 10)
                skillLevelDOM.innerText = '';
            else
                skillLevelDOM.innerText = Math.floor(total) +'%';

            if(Math.floor(total) >= graph.skillLevel)
            {
                graphDOM.style.width = graph.skillLevel + '%'
                skillLevelDOM.innerText = graph.skillLevel + '%'
                clearInterval(timer)
            }              
        }, 1000 / 30 )
    }
}

export{Skills}