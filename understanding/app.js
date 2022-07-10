var person = {
    name: 'laughface809',
    age: 30,
    hobbies: ['sports', 'cooking'],
    role: [2, 'author']
};
// person.role.push('admin');
// person.role[1] = 10;
// person.role = [0, 'admin', 'user']
var favouriteActivities;
favouriteActivities = ['sports'];
console.log(person.name);
for (var _i = 0, _a = person.hobbies; _i < _a.length; _i++) {
    var hobby = _a[_i];
    console.log(hobby.toUpperCase());
    // console.log(hobby.map()) !!Error !!
}
