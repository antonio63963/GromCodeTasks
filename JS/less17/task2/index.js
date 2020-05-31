'use strict';


const callbackPrompt = {
    message: 'I need your phone number!',
    showPrompt() {
        prompt(`${this.message}`);
    },
    showDefferredPrompt(ms) {
        setTimeout(this.showPrompt.bind(this), ms);
    }
};

callbackPrompt.showDefferredPrompt(5000);





