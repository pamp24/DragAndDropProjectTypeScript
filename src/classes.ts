class Department{
    protected employees: string[]=[];
    constructor(protected readonly id: string,
                public name: string){
    }
    static createEmployee(name: string){
        return{name: name};
    }
    describe(this: Department){
        console.log(`Department ${this.id}: ${this.name}`);
    }
    addEmpolyees(employees: string){
        this.employees.push(employees);
    }
    printEmployeeInformation(){
        console.log(this.employees.length);
        console.log(this.employees);
    }
}

class ITDepartment extends Department{
    admins: string[];
    constructor(id: string, admins: string[]){
        super(id, 'IT');
        this.admins = admins;
    }
}

class AccountingDepartment extends Department{
    admins: string[];
    constructor(id:string, admins: string[], private reports:string[]){
        super(id, 'ACC')
        this.admins = admins;
    }
    addReports(text: string){
        this.reports.push(text);
    }
    printReports(text: string){
        console.log(this.reports);
    }
}
const employee1 = Department.createEmployee('lol');
console.log(employee1);

const it = new ITDepartment('D1', ['Fotis']);
it.addEmpolyees('Fotis');
it.addEmpolyees('Max');
it.addEmpolyees('Anna');
it.describe();
console.log(it);

const accounting = new AccountingDepartment('D2',['Giorgos'], []);
accounting.addReports('Something went Wrong');
accounting.addEmpolyees('Giorgos');
accounting.addEmpolyees('Maria');
accounting.addEmpolyees('Eleni');
accounting.describe();
console.log(accounting);

