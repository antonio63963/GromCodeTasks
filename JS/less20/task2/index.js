'use strict';

export class Vehicle {
    constructor(name, numberOfWeels) {
        this.name = name;
        this.numberOfWeels = numberOfWeels;
    }
    move() {
        console.log(`${this.name} is moving`);
    }

    stop() {
        console.log(`${this.name} stopped`);
    }
}

export class Ship extends Vehicle {
    constructor(name, numberOfWeels, maxSpeed) {
        super(name, numberOfWeels);
        this.maxSpeed = maxSpeed;
    }

    move() {
        console.log(`${this.name} lifting anchor up`);
        super.move();
    }

    stop() {
        super.stop();
        console.log(`${this.name} lifting anchor down`);
    }
}

const ship1 = new Ship('Tovarich', false, 40);

ship1.move();
ship1.stop();