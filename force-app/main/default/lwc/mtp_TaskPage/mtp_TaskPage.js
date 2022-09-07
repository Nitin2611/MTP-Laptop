import { LightningElement, track, wire } from 'lwc';
import { loadStyle } from 'lightning/platformResourceLoader';
import mtb_Login_Images from '@salesforce/resourceUrl/mtb_Login_Images';
import mtp_CourcePage2_Css from '@salesforce/resourceUrl/mtp_CourcePage2_Css';
import getModuleTasks from '@salesforce/apex/mtp_CoursePage2Controller.getModuleTasks';


export default class Mtp_TaskPage extends LightningElement {

    @track moduleId;
    @track taskList = []
    connectedCallback() {
        const queryString = window.location.search;
        console.log({ queryString });
        // const urlParams = new URLSearchParams(queryString);
        console.log(queryString.substring(queryString.length, queryString.indexOf("=") + 1));
        // this.timesheetId = urlParams.get('id');
        this.moduleId = (queryString.substring(queryString.length, queryString.indexOf("=") + 1));
        console.log(this.moduleId);

        getModuleTasks({ getModuleId: this.moduleId })
            .then(result => {
                console.log({ result });
                this.taskList = result;
            })
            .catch(error => {
                this.error = error;
                console.log(this.error);
            });



    }
    renderedCallback() {
        Promise.all([
                loadStyle(this, mtp_CourcePage2_Css)
            ]).then(() => {
                console.log('Css loaded');
            })
            .catch(error => {
                console.log({ error });
            });
    }

    // Get Background Image
    get backgroundImage() {
        return `background-image:url(${mtb_Login_Images + '/course_image.png'})`;
    }


}