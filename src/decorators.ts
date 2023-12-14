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
function Log(target: any, propertyName:string | symbol){
    console.log('Property Decorator');
    console.log(target, propertyName);
}
function Log2(target:any, name:string, descriptor: PropertyDescriptor){
    console.log('Accessor Decorator!');
    console.log(target);
    console.log(name);
    console.log(descriptor);
}
function Log3(target: any, name: string | symbol, descriptor: PropertyDescriptor){
    console.log('Method Decorator!');
    console.log(target);
    console.log(name);
    console.log(descriptor);
}
function Log4(target: any, name: string | symbol, position: number){
    console.log('Parameter Decorator!');
    console.log(target);
    console.log(name);
    console.log(position);
}

class Product{
    @Log
    title: string;
    private _price: number;
    @Log2
    set price(val: number){
        if(val>0){
            this._price=val;
        }else{
            throw new Error('Invalid Price - should be positive!')
        }
    }

    constructor(t: string, p: number){
        this.title = t;
        this._price = p;
    }
    @Log3
    getPriceWithTax(@Log4 tax: number){
        return this._price*(1+tax);
    }

}
const p1 = new Product('Book', 19);
const p2 = new Product('Book 2', 29);

function Autobind(_:any, _2: string, descriptor:PropertyDescriptor){
    const originalMethod = descriptor.value;
    const adjDescriptor: PropertyDescriptor= {
        configurable:true,
        enumerable: false,
        get(){
            const boundFn = originalMethod.bind(this);
            return boundFn; 
        }
    };
    return adjDescriptor;
}

class Printer{
    message = 'This works!';
    @Autobind
    showMessage(){
        console.log(this.message);
    }
}
const p = new Printer();

const button = document.querySelector('button')!;
button.addEventListener('click', p.showMessage);



