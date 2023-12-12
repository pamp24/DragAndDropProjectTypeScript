"use strict";
class Department {
    constructor(id, name) {
        this.id = id;
        this.name = name;
        this.employees = [];
    }
    static createEmployee(name) {
        return { name: name };
    }
    describe() {
        console.log(`Department ${this.id}: ${this.name}`);
    }
    addEmpolyees(employees) {
        this.employees.push(employees);
    }
    printEmployeeInformation() {
        console.log(this.employees.length);
        console.log(this.employees);
    }
}
class ITDepartment extends Department {
    constructor(id, admins) {
        super(id, 'IT');
        this.admins = admins;
    }
}
class AccountingDepartment extends Department {
    constructor(id, admins, reports) {
        super(id, 'ACC');
        this.reports = reports;
        this.admins = admins;
    }
    addReports(text) {
        this.reports.push(text);
    }
    printReports(text) {
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
const accounting = new AccountingDepartment('D2', ['Giorgos'], []);
accounting.addReports('Something went Wrong');
accounting.addEmpolyees('Giorgos');
accounting.addEmpolyees('Maria');
accounting.addEmpolyees('Eleni');
accounting.describe();
console.log(accounting);
