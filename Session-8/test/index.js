var person = {
    firstName: "Hoa",
    lastName: "mai",
    sayHello: function() {
        console.log("Hello " + this.firstName + " " + this.lastName);
        
    }

}

// person.sayHello();

var keyName = "aaallstName";
console.log(person[keyName]);

function Person(name, passwword) {
    this.name = name;
    this.passwword = passwword;
}
Person.prototype.getName = function() {
    return this.name;
}

Person.prototype.getpasswword= function() {
    return this.passwword;

}
Person.prototype.getLevel= function() {
    return this.level;

}

Person.prototype.level = 'admin';
 
function User(name) {
    this.name = name;
}
User.prototype = new Person();
var person = new Person ("Ti" , "78910");
var user = new User("Teo", "123456");
console.log(user.getName());
console.log(user.getpasswword());
console.log(user.getLevel());


Date.prototype.vnFormat = function() {
    var yyyy = this.getFullYear();
    var mm = this.getMonth() + 1;
    var dd = this.getDate();
    return dd + "/" + mm + "/" + yyyy;
}

var now = new Date();
var xms = new Date (2020, 11, 09);
console.log(now.vnFormat());
console.log(xms.vnFormat());