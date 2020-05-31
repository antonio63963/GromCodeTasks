import { timer} from './index.js';

it('should get 00', () => {
   timer.startTimer();
   expect(timer.secondsPassed).not.toEqual(60); 
});