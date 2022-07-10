// const ADMIN = 0;
// const READ_ONLY = 1;
// const AUTHOR = 2;

enum Role { ADMIN, READ_ONLY, AUTHOR};

const person = {
    name: 'laughface809',
    age: 30,
    hobbies: ['sports', 'cooking'],
    role: Role.ADMIN
};

// person.role.push('admin');
// person.role[1] = 10;

// person.role = [0, 'admin', 'user']

let favouriteActivities: string [];
favouriteActivities = ['sports'];

console.log(person.name);

for (const hobby of person.hobbies){
    console.log(hobby.toUpperCase());
    // console.log(hobby.map()) !!Error !!
}

if(person.role === Role.ADMIN){
    console.log('is author')
}