const person: {
    name: string;
    age: number;
    hobbies: string[];
    role: [number, string];
} = {
    name: 'laughface809',
    age: 30,
    hobbies: ['sports', 'cooking'],
    role: [2, 'author']
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