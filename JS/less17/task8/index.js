export const timer = {
    secondsPassed: 0,
    minsPassed: 0,
    timerId: 0,
    startTimer() {
        this.timerId =  setInterval(() => {
            if (this.secondsPassed < 59) {
                this.secondsPassed += 1;
            } else {
                this.secondsPassed = 0;
                this.minsPassed += 1;
            }

            
            // console.log(this.secondsPassed < 10 ?
            //     `${this.minsPassed}:0${this.secondsPassed}` :
            //     `${this.minsPassed}:${this.secondsPassed}`);
            }, 1000);
            return interval;
       
    },
    getTime() {
        
        return this.secondsPassed < 10 ?
            `${this.minsPassed}:0${this.secondsPassed}` :
            `${this.minsPassed}:${this.secondsPassed}`;

    },
    stopTimer() {
        clearInterval(this.timerId);
      
    },
    resetTimer() {
        this.secondsPassed = 0;
        this.minsPassed = 0;
    }

};

//timer.startTimer();






