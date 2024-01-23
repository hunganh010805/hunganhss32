// let person ={
//     // dunfg để chỉ đến các đối tượng cần mô tả
//     // key: VALUE,
//     //..
//     // keyN: valueN,
//     name: "Xuân Đức",
//     age: 20,
//     school:"Phổ thông Hà giang",
//     favoriteFood:["Mèn mén" , "Pịa"],
//     height:150,
//     weight: 70,
//     single: true,
//     //Methods: Phương thức - Hành động mà các đối tượng có thể thực hiện được.
//     // key: value (function),
//     // ...
//     // keyN: valueN (function)
//     eat: function(){
//         console.log("Xuân đức ăn mèn mén nhồm nhoàm , Ngon quá...");
//     },
//     seeFriends: function(){
//         console.log("Mày bị điên à!!!");
//     },
// };

// let person2={
//     name: "Minh Hiển ngáo",
//     age: 1,
//     school:"Top 1 Hải Dương",
//     favoriteFood:["Thịt chó mắm tép","con tép mắm tôm"],
//     height: 172,
//     weight:50,
//     face: "bựa",
//     eat: function(){
//         console.log("Minh Hiển idol tiktok");
//     },
// };
// let person3={
//     name: "Thế Cường",
//     age: 18,
//     weight: 64,
//     height: 169,
//     monAn: function(){
//         console("SƯờn xào chua ngọt");
//     },
// };
// console.log(person);
// console.log(person2);
// console.log(person3);










 
// let student1 = {
//     id: 1,
//     name: "Thế Cường",
//     age: 18,
//     school:"PTIT",
// }; 

// let student2 = {
//     id: 2,
//     name: "Việt Hà",
//     age: 18,
//     school:"Viện KIểm Soát Nhân Dân Tối Cao",
// };

// let student3 = {
//     id: 3,
//     name: "Đức Cương",
//     age: 18,
//     school:"Quân Nhân",
// };

class Student {
    constructor(name,id,age,school){
        this.id = id;
        this.name = name;
        this.age = age;
        this.school = school;
    }
    introduce(){
        console.log("XIn chào");
    }
}
let student1 = new Student("XUân Đức",1,18,"ptit");
let student2 = new Student("Thái ANh",2,19,"ptit");
let student3 = new Student("Trí Đức",3,20,"ptit");

console.log("student1",student1);
console.log("student2",student2);
console.log("student3",student3);

// Thuộc tính prototype là gì?

// cơ chế prototype-based inheritance trong js là ntn?


