"use strict";
let user1;
user1 = {
    name: 'Max',
    age: 27,
    greet(phrase) {
        console.log(phrase + '' + this.name);
    }
};
