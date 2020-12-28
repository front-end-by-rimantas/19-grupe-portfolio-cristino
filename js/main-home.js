/***************
ALL IMPORTS
****************/
/* loader */
/* header */
/* hero */
/* about */
/* hobbies */
/* project done */
import{Projects} from './components/Projects.js';
import {projectsData} from './data/ProjectsData.js';
/* services */
import {servicesData} from './data/ServicesData.js';
import{Services} from './components/Services.js';
/* resume */
import {Resume} from './components/Resume.js';
import {resumeData} from './data/resumeData.js';
/* skill */
import { Skills } from './components/Skills.js';
import {skillsData} from './data/SkillsData.js';
/* portfolio */
import {Portfolio} from './components/portfolio.js'
import { portfolioData } from './data/portfolioData.js';
/* testimonial */
/* blog */
/* freelancer */
/* contact */
/* footer */
/* back top */
/* style swicher */

/***************
EXECUTION
****************/

/* loader */
/* header */
/* hero */
/* about */
/* hobbies */
/* project done */
new Projects({
    selector: '.container.projects > .row',
    data: projectsData
});
/* services */
new Services({
    selector: '.container.services > .row',
    data: servicesData
})
/* resume */
new Resume({
    selector: '.resume .resume__timeline',
    data: resumeData
});
/* skill */
new Skills({
    selectorButtons:'skill-buttons',
    selectorGraphs: 'skill-graphs',
    data: skillsData,
})
/* portfolio */
new Portfolio({
    selectorPhotos:'.row.photo-container',
    data:portfolioData
})
/* testimonial */
/* blog */
/* freelancer */
/* contact */
/* footer */
/* back top */
/* style swicher */