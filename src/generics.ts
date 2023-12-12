// const names:Array<string> = [];

// const promise = new Promise((resolve, reject)=>{
//     setTimeout(()=>{
//         resolve('This is done!');
//     }, 2000);
// });

// function merge<T extends object, U extends object>(objA: T, objB: U) {
//     return { ...objA, ...objB };
// }
// const mergedObj = merge({ name: 'Max', hobbies:['Cooking'] }, { age: 30 });
// console.log(mergedObj);

interface Lengthy{
    length: number;
}

function countAndDescribe<T extends Lengthy>(element: T):[T, string]{
    let descriptionText = 'Got no value.';
    if(element.length===1){
        descriptionText = 'Got 1 elements.';
    }else if(element.length>1){
        descriptionText = 'Got ' +element.length+' elements.';
    }
    return[element, descriptionText];
}
console.log(countAndDescribe(['Sports','Cooking']));

function extractAndConvert<T extends object, U extends keyof T>(obj: T, key:U){
    return 'Value: ' + obj[key];
}
extractAndConvert({name: 'Fotis'}, 'name');


class DataStorage<T extends string | number | boolean>{
    private data: T[] = [];
    
    addItem(item:T){
        this.data.push(item);
    }
    removeItem(item:T){
        if(this.data.indexOf(item)=== -1){
            return;
        }
        this.data.splice(this.data.indexOf(item), 1);
    }
    getItems(){
        return[...this.data];
    }
}
const textStorage = new DataStorage<string>();
textStorage.addItem('Max');
textStorage.addItem('Maria');
textStorage.addItem('Anna');
textStorage.addItem('Manu');
textStorage.removeItem('Anna');
console.log(textStorage.getItems());

const numberStorage = new DataStorage<number>();
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


