import { Person } from './Person.js';

export function promote (){};

export default class Teacher extends Person  {
    constructor(name, degree) {
        super(name);
        this.degree = degree;
    }

    teach() {
        console.log('teach');
    }
}

