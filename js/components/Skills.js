import {Validator} from '../misc/Validator.js'

class Skills{
    constructor(params){
        this.selectorButtons = params.selectorButtons;
        this.selectorGraphs = params.selectorGraphs;
        this.data = params.data;
        this.buttonsContainerDOM = null;
        this.grahpsContainerDOM = null;
        
        this.initializeButtons()
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

    renderButtons(){
        let HTML = "";
        for(let item of this.data)
        {
            HTML+= `<a href="javascript:void();" id="${item.buttonName}" class="btn btn-primary skill-btn">${item.buttonName}</a>`
        }
        this.buttonsContainerDOM.innerHTML += HTML;
    }

    fireEventsButtons()
    {
        for(let item of this.data)
        {
            document.getElementById(item.buttonName).addEventListener('click',()=>{
                {
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
            // console.log(windBot)  
            const element = document.getElementById('skill-graphs')  
            const elementBot = element.offsetTop + element.clientHeight - 120;
                
            if(element.classList.contains('animated'))
            return;

                if(windBot > elementBot){    
                    console.log('as cia');
                    element.classList.add('animated')            
                    this.fireGraphsAnimation(data.buttonGraphs)
                   
                }

        })
    }

    renderGrahps(item){

        this.grahpsContainerDOM = document.getElementById("skill-graphs")
        let HTML = "";
        
        for(let itm of item.buttonGraphs)
        {
          HTML += `<div class="skill-progress-bar">
          <div class="skill-progress-visibile">${itm.title}
              <div id="${itm.title}" class="skill-progress-active">${itm.skillLevel}</div>
          </div>
      </div>`
        }
        this.grahpsContainerDOM.innerHTML = HTML
        
    }

    fireGraphsAnimation(items){
        
        let counter = 0;
        
        for(let itm of items)
        {
            const graphDOM = document.getElementById(itm.title)
            const timer = setInterval(() =>{
                if(counter > itm.skillLevel)
                clearInterval(timer)
                counter++
                graphDOM.style.width = counter + '%'
            }, 45)
        }


        

    }

}

export{Skills}