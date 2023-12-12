type Admin = {
    name:string;
    privilages:string[];
};
type Employee = {
    name:string;
    startDate:Date;
};
type ElevatedEmployee = Admin & Employee;

const e1: ElevatedEmployee ={
    name: 'Max',
    privilages: ['Create-Server'],
    startDate: new Date()
};
type Combinables = string | number;
type Numerics = number | boolean;
type Universal = Combinables & Numerics;

function add(a:number, b:number):number
function add(a:string, b:string):string
function add(a:string, b:number):string
function add(a:number, b:string):string
function add(a:Combinables, b:Combinables){
    if(typeof a === 'string' || typeof b === 'string'){
        return a.toString() + b.toString();
    }
    return a + b;
}
const result = add('Max', 'Maria');
result.split('');

const fetchedUserData = {
    id: 'u1',
    name: 'Fotis',
    job: {title:'CEO', description:'My Company'}
};
console.log(fetchedUserData?.job?.title);

const userInput = undefined;
const storedData = userInput ?? 'DEFAULT';
console.log(storedData);

// type UnknownEmployee = Employee | Admin;
// function printEmployeeInformation(emp: UnknownEmployee){
//     console.log('Name: ' + emp.name);
//     if('privilages'in emp){
//         console.log('Privilages: ' + emp.privilages);
//     }
//     if('startDate'in emp){
//         console.log('Start Date: ' + emp.startDate);
//     }
// }
// printEmployeeInformation(e1);

// class Car {
//     drive(){
//         console.log('Drining a car!');
//     }
// }
// class Truck{
//     drive(){
//         console.log('Driving a Truck!')
//     }
//     loadCargo(amount: number){
//         console.log('Loading Cargo: '+amount)
//     }
// }

// type Vehicle = Car | Truck;
// const v1 = new Car();
// const v2 = new Truck();
// function useVehicle(vehicle: Vehicle){
//     vehicle.drive();
//     if(vehicle instanceof Truck){
//         vehicle.loadCargo(1000);
//     }
// }
// useVehicle(v2);
// useVehicle(v1);
//const userInputElement = <HTMLInputElement>document.getElementById('user-input')!;
const userInputElement = document.getElementById('user-input');
if(userInputElement){
    (userInputElement as HTMLInputElement).value = 'Hi there!';
}

interface ErrorContainer{
    [prop: string]: string;
}
const errorBag: ErrorContainer={
    email: 'Not a Valid Email!',
    username: 'Must start with a Character!'
};






