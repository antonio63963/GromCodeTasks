 const delay = (delay, callback, context, ...args) => {
    if ([...args].length > 0) {
        setTimeout(() => callback.call(context), delay);
    }
    
};

const context = {
    name: 'John',
    text: 'задержка исполнения  ',
    callback() {
        console.log(`Mr. ${this.name} ${this.text}`);
    }
};

delay(5000, context.callback, context, 65, '34');