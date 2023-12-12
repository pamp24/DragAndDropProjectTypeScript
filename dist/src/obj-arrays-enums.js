"use strict";
var Role;
(function (Role) {
    Role["Admin"] = "ADMIN";
    Role["Read_Only"] = "READ ONLY";
    Role["Author"] = "AUTHOR";
})(Role || (Role = {}));
;
const person = {
    name: 'Fotis',
    age: 100,
    hobbies: ['Sports', 'Cooking'],
    role: Role.Admin
};
// let favoritesActivities: string[];
// favoritesActivities = ['Computing','Sports'];
console.log(person.name);
console.log(person.role);
for (const hobby of person.hobbies) {
    console.log(hobby);
}
