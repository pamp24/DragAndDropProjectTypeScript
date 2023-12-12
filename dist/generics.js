"use strict";
// const names:Array<string> = [];
function countAndDescribe(element) {
    let descriptionText = 'Got no value.';
    if (element.length === 1) {
        descriptionText = 'Got 1 elements.';
    }
    else if (element.length > 1) {
        descriptionText = 'Got ' + element.length + ' elements.';
    }
    return [element, descriptionText];
}
console.log(countAndDescribe(['Sports', 'Cooking']));
function extractAndConvert(obj, key) {
    return 'Value: ' + obj[key];
}
extractAndConvert({ name: 'Fotis' }, 'name');
class DataStorage {
    constructor() {
        this.data = [];
    }
    addItem(item) {
        this.data.push(item);
    }
    removeItem(item) {
        if (this.data.indexOf(item) === -1) {
            return;
        }
        this.data.splice(this.data.indexOf(item), 1);
    }
    getItems() {
        return [...this.data];
    }
}
const textStorage = new DataStorage();
textStorage.addItem('Max');
textStorage.addItem('Maria');
textStorage.addItem('Anna');
textStorage.addItem('Manu');
textStorage.removeItem('Anna');
console.log(textStorage.getItems());
const numberStorage = new DataStorage();
numberStorage.addItem(1);
numberStorage.addItem(2);
numberStorage.addItem(3);
numberStorage.addItem(4);
numberStorage.removeItem(3);
console.log(numberStorage.getItems());
// const objStorage = new DataStorage<object>();
// objStorage.addItem({name:'Max'});
// objStorage.addItem({name:'Maria'});
// objStorage.addItem({name:'Anna'});
// objStorage.addItem({name:'Manu'});
// objStorage.removeItem({name:'Maria'});
// console.log(objStorage.getItems());
