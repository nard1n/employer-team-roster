// TODO: Write code to define and export the Employee class
class Employee {
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
//////        id = lastId++;
        this.email = email;
    }

    getName() {
        return this.name;
    }

    getId() {
        return this.id;
    }

    getEmail(){
        return this.email;
    }

    getRole() {
        return `Employee`;
    }
}

/////Employee.lastId = 0;

module.exports = Employee;

const e = new Employee("Nardin", 1, "nardin@TextDecoderStream.com");
console.log(e);