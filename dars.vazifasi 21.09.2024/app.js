class Car {
    constructor(make, model, year, money, sped) {
        this.make = make;
        this.model = model;
        this.year = year;
        this.money = money;
        this.sped = sped;

    }
    description(){
        return `${this.make} ${this.model} Выпушен в ${this.year} и он может выйти до 100 в ${this.sped} и он стоит ${this.money}`;
    }
}
const car1 = new Car("Tayota", "camry", 2024, "20.000$" , "10.0s");

const car2 = new Car("BMW", "m5 f90", 2025, "200.000$", "2.7s");

console.log(car1.description());
console.log(car2.description());