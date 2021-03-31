'use strict';

import Teacher, { promote } from './Teacher.js';
import { Car } from './Car.js';



const teacher = new Teacher('Bakari', 'N/A');
const camry = new Car('Toyota', 'Camry', '2001');

const Rav4 = new Car('Toyota', 'Rav4', '2004');

class Sword {
    constructor(handlewood, bladeSteel) {
        this.handlewood = handlewood;
        this.bladeSteel = bladeSteel;
    }

    static compareSwords() {

    }
}


const apiEndpoint = 'https://google.typicode.com/todos/1';
fetch(apiEndpoint)
  .then(response => response.json(), (error) => {console.log('error,', error )})
  .then(json => console.log(json))


let parentState = { isThrottled: false}


const expensive = () => {
        console.log("Expensive");
        console.log(parentState);
}

const throttle = (funcToRun, limit) => {
    if(parentState.isThrottled) {
        console.log('Please wait');
    } else {
        funcToRun();
        parentState.isThrottled = !parentState.isThrottled;
        setTimeout(() => { parentState.isThrottled = !parentState.isThrottled; console.log('unblocked'); }, limit);
    }
}



document.querySelector('#expensiveButton').addEventListener('click', () => { throttle(expensive, 700); });
