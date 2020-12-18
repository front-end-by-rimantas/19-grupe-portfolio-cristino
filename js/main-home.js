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
/* skill */
/* portfolio */
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
/* skill */
/* portfolio */
/* testimonial */
/* blog */
/* freelancer */
/* contact */
/* footer */
/* back top */
/* style swicher */