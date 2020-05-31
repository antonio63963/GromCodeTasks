const timer = {
    secondsPassed: 0,
    minsPassed: 0,
    startTimer() {
        setInterval(() => {
            if (this.secondsPassed <= 60) {
                this.secondsPassed += 1;
            } else {
                this.secondsPassed = 0;
                this.minsPassed += 1;
            }

        }, 1000);
    },
    getTime() {
        return this.secondsPassed < 10 ?
            `${this.minsPassed}:0${this.secondsPassed}` :
            `${this.minsPassed}:${this.secondsPassed}`;

    },
    stopTimer(interval) {
        clearInterval(interval);
    },
    resetTimer() {
        this.secondsPassed = 0;
        this.minsPassed = 0;
    }

};

timer.startTimer();
console.log(timer.getTime());
console.log(timer.getTime());

let secondsPassed = 0;
let minsPassed = 0;
function startTimer() {
    setInterval(() => {
        if (secondsPassed < 60) {
            secondsPassed += 1;
        } else {
            secondsPassed = 0;
            minsPassed += 1;
        }
        console.log(`${minsPassed} : ${secondsPassed}`);
    }, 1000);
}
startTimer();

