import { LightningElement, track } from 'lwc';
import mtb_Login_Images from '@salesforce/resourceUrl/mtb_Login_Images';

export default class Mtp_ForgotPassword extends LightningElement {

    hootie = mtb_Login_Images + '/hootie.png';
    lamp_Img = mtb_Login_Images + '/lamp_Img.png';
    highResLogo = mtb_Login_Images + '/MV_Cloud_HighResLogo.png';

    @track isSpinner = false;
    username

    connectedCallback(){

    }

    renderedCallback(){

    }

    // Get Background Image
    get backgroundImage() {
        return `background-image:url(${mtb_Login_Images + '/forgotpassword.png'})`;
    }

    resetPass(){
        var inputValue = this.template.querySelector("input");
        this.username = inputValue;

        console.log(this.username);
    }
}