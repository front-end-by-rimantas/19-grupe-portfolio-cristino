/***************
ALL IMPORTS
****************/
/* loader */
/* header */
import {burgerToggle} from './components/burger.js';
import {headerScroll} from './components/headerScroll.js';
import {headerNavActions} from './components/headerNavActions.js';
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
import {Portfolio, PortfolioBtn} from './components/portfolio.js'
import { portfolioData,portfolioBtnData } from './data/portfolioData.js';
/* testimonial */
/* blog */
import {Blog} from './components/Blog.js';
import {blogData} from './data/blogData.js';
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
burgerToggle('.header .burger');
headerScroll('.header');
headerNavActions('.header .nav .link');
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
    selector: '.services > .row',
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
new PortfolioBtn({
    selectorBtn: '.row.button-container > .portfolio-buttons.col-12',
    data:portfolioBtnData
})
/* testimonial */
/* blog */
new Blog({
    selector: '.blog .blog-row',
    data: blogData
});
/* freelancer */
/* contact */
/* footer */
/* back top */
/* style swicher */