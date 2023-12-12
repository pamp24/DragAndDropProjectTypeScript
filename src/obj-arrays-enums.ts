enum Role {Admin='ADMIN', Read_Only='READ ONLY', Author='AUTHOR'};

const person = {
    name: 'Fotis',
    age: 100,
    hobbies: ['Sports','Cooking'],
    role: Role.Admin
};



// let favoritesActivities: string[];
// favoritesActivities = ['Computing','Sports'];

console.log(person.name);
console.log(person.role);

for (const hobby of person.hobbies){
    console.log(hobby);
}