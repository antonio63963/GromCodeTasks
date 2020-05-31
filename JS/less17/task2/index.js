export const callbackPrompt = {
    message: 'I need your phone number!',
    showPrompt() {
        const phoneNumber = prompt(`${this.message}`);
        console.log(phoneNumber);
    },
    showDeferredPrompt(ms) {
        setTimeout(this.showPrompt.bind(this), ms);
    }
};

callbackPrompt.showDeferredPrompt(1000);