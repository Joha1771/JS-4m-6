const Animal = {
  ye() {
    console.log("yedi");
  },
};
const Dog = Object.create(Animal);
Dog.name = "Jiraf";
console.log(Dog);

Dog.ye();

// 2

const Animal2 = {
  speak() {
    console.log("Ovoz chiqaryapti");
  },
};

const dog2 = Object.create(Animal2);

dog2.speak = function () {
  console.log("Gav - gav deyapti");
};
dog2.speak();
Animal2.speak();

// 3

const Animal3 = {
  xususiyat() {
    console.log("Barchasi qlaoladigan");
  },
};
const dog3 = Object.create(Animal3);

dog3.name = "Pashsha";

console.log(dog3.hasOwnProperty("name"));
console.log(dog3.hasOwnProperty("xususiyat"));

console.log("name" in dog3);
console.log("xususiyat" in dog3);

// 4

const Animal4 = {
  yes() {
    console.log("U yes deyapti");
  },
};

const dog4 = Object.create(Animal4);
console.log(Object.getPrototypeOf(dog4));

// 5

function Mashina(nomi, rangi) {
  this.nomi = nomi;
  this.rangi = rangi;
}

Mashina.prototype.signal = function () {
  console.log(this.nomi + " - bip bip deyapti");
};

const jentra = new Mashina("Jentra", "Qora");
const monza = new Mashina("Monza", "moqriy - Asfalt");

jentra.signal();
monza.signal();

console.log(jentra.signal === monza.signal);

// 6

const normalObj = {};
console.log(normalObj.toString);

const pureObj = Object.create(null);

console.log(pureObj.toString);
console.log(Object.getPrototypeOf(pureObj));

// 7

function Mashina7() {}
const damas = new Mashina7();

console.log(damas.__proto__ === Mashina7.prototype);

// 8

function Robot8() {}
const r1 = new Robot8();

Robot8.prototype.fly = function () {
  console.log("Uchip kettim unda");
};

r1.fly();

// 9

const Grandfather9 = { family: "Alimov" };
const Father9 = Object.create(Grandfather9);
const Son9 = Object.create(Father9);

console.log(Son9.family); // katta oyla )))


// 10

const Phone10 = { color: "black" };
const myPhone = Object.create(Phone10);

myPhone.color = "red"; 

console.log(myPhone.color); 
console.log(Phone10.color);

// 11

const obj11 = {};
Object.defineProperty(obj11, "id", {
    value: 777,
    writable: false,     
    configurable: false   
});
obj11.id = 888;
delete obj11.id; 
console.log(obj11.id); 


// 12

const obj12 = { name: "Ali" };
Object.defineProperty(obj12, "yashirin sekretcha", {
    value: "12345",
    enumerable: false 
});

for (let key in obj12) { console.log(key); }

// 13

const obj13 = {};
Object.defineProperty(obj13, "test", {
    value: "A",
    configurable: false 
});

// 14

const user14 = {
    firstName: "Asad",
    lastName: "Bek",
    get fullName() {
        return `${this.firstName} ${this.lastName}`;
    }
};
console.log(user14.fullName);

// 15

const user15 = {
    _age: 0, 

    set age(qiymat) {
        if (qiymat > 0) {
            this._age = qiymat; 
            console.log("Muvaffaqiyatli o'zgartirildi: " + qiymat);
        } else {
            
            console.log("Xato: Yosh faqat musbat son bo'lishi kerak!");
        }
    }
};

user15.age = -10; 

user15.age = 25; 

console.log(user15._age); 

// 16

const obj16 = {};
Object.defineProperty(obj16, "data", {
    value: [1, 2, 3],
    writable: false 
});

// 17

const counter17 = {
    _count: 0,
    get view() {
        this._count++;
        return this._count;
    }
};
console.log(counter17.view); 
console.log(counter17.view); 

// 18

const obj18 = { a: 1 };
Object.defineProperty(obj18, "extra", {
    value: "yashirin",
    enumerable: false
});
console.log(Object.keys(obj18)); 

// 19

const Obyekt19 = {};
Object.defineProperties(Obyekt19, {
    p1: { value: 10, writable: true },
    p2: { value: 20, enumerable: false }
});