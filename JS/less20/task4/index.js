'use strict';

export class Order {
    constructor(price, city, type) {
        this.id = Math.floor(Math.random(100) * 10);
        this.price = price;
        this.dateCreated = new Date().getTime();
        this.isConfirmed = false;
        this.dateConfirmed;
        this.city = city;
        this.type = type;
    }

    checkPrice() {
        return this.price > 1000 ? true : false;
    }

    confirmOrder() {
        if (this.isConfirmed == false) {
            this.isConfirmed = true;
            this.dateConfirmed = new Date();
        }
    }

    isValidType() {
        return this.type == 'Buy' || this.type == 'Sell' ? 
        true :
        false;

    }
}