const timer = {
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

            
            console.log(this.secondsPassed < 10 ?
                `${this.minsPassed}:0${this.secondsPassed}` :
                `${this.minsPassed}:${this.secondsPassed}`);
            }, 1000);
            return interval;
        // setTimeout(() =>clearInterval(), 65000);
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




let secondsPassed = 0;
let minsPassed = 0;
// function startTimer() {
//     setInterval(() => {
//         if (secondsPassed < 60) {
//             secondsPassed += 1;
//         } else {
//             secondsPassed = 0;
//             minsPassed += 1;
//         }
//         console.log(`${minsPassed} : ${secondsPassed}`);
//     }, 200);
// }

function startTimer(value) {
   const interval = setInterval(() => alert('WOW!!!'), 1000);
  if(value == 1) {clearInterval(interval); alert('stop!');}
}
//startTimer();

function stop() {
 
startTimer(1);
}

setTimeout(stop,5000);

