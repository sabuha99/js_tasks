
// task1
// class Human{
//     constructor(name,age){
//         this.name=name
//         this.age=age
//     }
// }
// class User extends Human{
//     constructor(name,age,username){
//         super(name,age)
//         this.username=username
//     }
// }
// const nusret= new User(`nusret`,22,`doktor`)
// const ali= new User(`ali`,24,`tchr`)
// console.log(nusret.age)

// task2
// class Car{
//     constructor(owner,color,wheelCount){
//         this.owner=owner
//         this.color=color
//         this.wheelCount=wheelCount
//     }
// }
// class Model extends Car{
//     constructor(owner,color,wheelCount,name,company){
//         super(owner,color,wheelCount)
//         this.name=name
//         this.company=company
//     }
// }
// const rav4=new Model(`someone`,`red`,4,`rav4`,`Toyota`)
// console.log(rav4)

// task
class Vehicle{
    constructor(fuel,wheelCount,landOrAir){
        this.fuel=fuel
        this.wheelCount=wheelCount
        this.landOrAir=landOrAir
    }
}
class Car extends Vehicle{
constructor(model,country,fuel,wheelCount,landOrAir){
super(fuel,wheelCount,landOrAir)
this.model=model
this.country=country
    }
}
class Plane extends Vehicle{
    constructor(model,country,fuel,wheelCount,landOrAir){
    super(fuel,wheelCount,landOrAir)
    this.model=model
    this.country=country
        }
    }
const teyyare=new Plane(`A320`,`Turkey`,`oil`,8,`air`)
console.log(teyyare)

const mashin=new Car(`KIA`,`BAKU`,`oil92`,4,`land`)
console.log(mashin)