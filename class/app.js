class Car {
    constructor(modelName, modelYear, type, price) {
        this.modelName = modelName;
        this.modelYear = modelYear;
        this.type = type;
        this.price = price;
    }

    getModelName() {
        return this.modelName;
    }

    getModelYear() {
        return this.modelYear;
    }

    getType() {
        return this.type;
    }

    getPrice() {
        return this.price;
    }

    setModelName(modelName) {
        this.modelName = modelName;
    }

    setModelYear(modelYear) {
        this.modelYear = modelYear;
    }

    setType(type) {
        this.type = type;
    }

    setPrice(price) {
        this.price = price;
    }
}

class ElecCar extends Car {
    constructor(modelName, modelYear, price, chargeTime) {
        super(modelName, modelYear, 'e', price);
        this.chargeTime = chargeTime;
    }

    setChargeTime(time) {
        this.chargeTime = time;
    }

    getChargeTime() {
        return this.chargeTime;
    }
}

let ionic = new Car('아이오닉', '2022', 'e', 4000);
console.log(ionic);
ionic.setPrice(4300);
console.log(ionic);

let ionic5 = new ElecCar('아이오닉', '2022', 5000, 30);
console.log(ionic5);
console.log(ionic5.getModelName());
