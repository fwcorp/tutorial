// const person: {
//     name: string;
//     age: number;
// } = {
// const person: {
//     name: string;
//     age: number;
//     hobbies: string[];
//     role: [number, string]; // tuple
// } = {
enum Role { ADMIN, READ_ONLY, AUTHOR };

const person = {
    name: 'Jinhyuk',
    age: 30,
    hobbies: ['Sports', 'Cooking'],
    role: Role.ADMIN
};

let favoriteActivities: any;
favoriteActivities = ['Sports', 1];

console.log(person.age);

for (const hobby of person.hobbies) {
    console.log(hobby.toUpperCase());
}

if (person.role == Role.ADMIN) {
    console.log('read only user');
}