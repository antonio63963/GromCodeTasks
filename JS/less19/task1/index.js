'use strict';

export const vehicle = {
    name: "Argo",
    move() {
        console.log(`${this.name} is moving`);
    },
    stop() {
        console.log(`${this.name} stopped`);
    }
};

export const ship = {
    stopMachine() {
        console.log(`${this.name} lifting anchor down`);
    },
    startMachine() {
        console.log(`${this.name} lifting anchor up`);
    }
    
};
Object.setPrototypeOf(ship, vehicle);

ship.startMachine();
ship.move();
ship.stop();
ship.stopMachine();






