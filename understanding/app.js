var person = {
    name: 'laughface809',
    age: 30,
    hobbies: ['sports', 'cooking']
};
var favouriteActivities;
favouriteActivities = ['sports'];
console.log(person.name);
for (var _i = 0, _a = person.hobbies; _i < _a.length; _i++) {
    var hobby = _a[_i];
    console.log(hobby.toUpperCase());
    // console.log(hobby.map()) !!Error !!
}
