'use strict';

export class Order {
    constructor(price, city, type) {
        this.id = Math.floor(Math.random(100) * 100);
        this.price = price;
        this.dataCreated = new Date();
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

    isValidType(type) {
        return type == 'Buy' || type == 'Sell' ? 
        true :
        false;

    }
}