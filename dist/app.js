"use strict";
// function Logger(logString: string){
//     console.log('LOGGER FACTORY');
//     return function(constructor: Function){
//         console.log(logString);
//         console.log(constructor)
//     };
// }
// function withTemplete(templete: string, hookId: string){
//     console.log('TEMPLATE FACTORY');
//     return function<T extends {new(...args: any[]):{name:string}} >(originalConstructor: T){    
//         return class extends originalConstructor{
//             constructor(..._: any[]){
//                 super();
//                 console.log('Rendering Template')
//                 const hoolEl = document.getElementById(hookId);
//                 const p = new originalConstructor();
//                 if(hoolEl){
//                     hoolEl.innerHTML = templete;
//                     hoolEl.querySelector('h1')!.textContent = this.name;
//                 }
//             }
//         }
//     }
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
// }
// @Logger('LOGGING')
// @withTemplete('<h1>My Person Object</h1>', 'app')
// class Person{
//     name ='Max';
//     constructor(){
//         console.log('Creating person object..');
//     }
// }
// const pers = new Person();
// console.log(pers);
//-----
function Log(target, propertyName) {
    console.log('Property Decorator');
    console.log(target, propertyName);
}
function Log2(target, name, descriptor) {
    console.log('Accessor Decorator!');
    console.log(target);
    console.log(name);
    console.log(descriptor);
}
function Log3(target, name, descriptor) {
    console.log('Method Decorator!');
    console.log(target);
    console.log(name);
    console.log(descriptor);
}
function Log4(target, name, position) {
    console.log('Parameter Decorator!');
    console.log(target);
    console.log(name);
    console.log(position);
}
class Product {
    set price(val) {
        if (val > 0) {
            this._price = val;
        }
        else {
            throw new Error('Invalid Price - should be positive!');
        }
    }
    constructor(t, p) {
        this.title = t;
        this._price = p;
    }
    getPriceWithTax(tax) {
        return this._price * (1 + tax);
    }
}
__decorate([
    Log
], Product.prototype, "title", void 0);
__decorate([
    Log2
], Product.prototype, "price", null);
__decorate([
    Log3,
    __param(0, Log4)
], Product.prototype, "getPriceWithTax", null);
const p1 = new Product('Book', 19);
const p2 = new Product('Book 2', 29);
function Autobind(_, _2, descriptor) {
    const originalMethod = descriptor.value;
    const adjDescriptor = {
        configurable: true,
        enumerable: false,
        get() {
            const boundFn = originalMethod.bind(this);
            return boundFn;
        }
    };
    return adjDescriptor;
}
class Printer {
    constructor() {
        this.message = 'This works!';
    }
    showMessage() {
        console.log(this.message);
    }
}
__decorate([
    Autobind
], Printer.prototype, "showMessage", null);
const p = new Printer();
const button = document.querySelector('button');
button.addEventListener('click', p.showMessage);
