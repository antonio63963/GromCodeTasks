'use strict';


export const callbackPrompt = {
    message: 'I need your phone number!',
    showPrompt() {
       const phoneNumber = prompt(`${this.message}`);
        console.log(phoneNumber);
    },
    showDefferredPrompt(ms) {
        setTimeout(this.showPrompt.bind(this), ms);
    }
};

callbackPrompt.showDefferredPrompt(5000);





