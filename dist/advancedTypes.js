"use strict";
var _a;
const e1 = {
    name: 'Max',
    privilages: ['Create-Server'],
    startDate: new Date()
};
function add(a, b) {
    if (typeof a === 'string' || typeof b === 'string') {
        return a.toString() + b.toString();
    }
    return a + b;
}
const result = add('Max', 'Maria');
result.split('');
const fetchedUserData = {
    id: 'u1',
    name: 'Fotis',
    job: { title: 'CEO', description: 'My Company' }
};
console.log((_a = fetchedUserData === null || fetchedUserData === void 0 ? void 0 : fetchedUserData.job) === null || _a === void 0 ? void 0 : _a.title);
const userInput = undefined;
const storedData = userInput !== null && userInput !== void 0 ? userInput : 'DEFAULT';
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
if (userInputElement) {
    userInputElement.value = 'Hi there!';
}
const errorBag = {
    email: 'Not a Valid Email!',
    username: 'Must start with a Character!'
};
