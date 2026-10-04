let arr=[1,2,3,"four",true]
console.log(arr[3]);
//console.log(arr);
console.log(arr[arr.length-2]);
arr[2]=7
console.log(arr);
    //one by one
for(let a=0;a<arr.length;a++){
    console.log(arr[a]);}
    //Reverse
for(let b=arr.length-1;b>=0;b--){
    console.log(arr[b]);}
//obj
//let obj={name:maya,cource:fullstack,grade:0}
//console.log (obj.grade);

//fruid-5
let Fruit=["kiwi","banana","jackfruit","papaya","dragonfruit"]
console.log(Fruit);
console.log(Fruit[0]);
console.log(Fruit[2]);
console.log(Fruit[Fruit.length-1]);
//color
let colors = ["Red", "Blue", "Green", "Yellow"];
colors[1]="Black"
console.log(colors);                                                   
//name
let name=["Abi","Karthi","Maya","Krishna","Luna"]
for(let v=0;v<name.length;v++){                          
    console.log(name[v]);}
//total mark
let marks = [80, 70, 90, 60, 85];
let total = 0;
for(let z=0;z<marks.length;z++){
    total=total+marks[z]    
}
console.log("total=",total);

//num
let numbers = [2, 4, 6, 8, 10];

for (let x = 0; x < numbers.length; x++) {
    console.log(numbers[x] * 2);
}
//obj
let obj={name:"Maya", age:20 ,course:"FS", city:"Chennai"}
console.log(obj.name);
console.log(obj.course);

//apply
let ob={name : "Arun",
salary : 25000,
role :"Developer"
}
ob.salary=20000;
console.log(ob);
//add
let product = {
    name: "Laptop",
    price: 50000
};
product.brand="dell"
console.log(product);
//print
let car = {
    brand: "Toyota",
    model: "Fortuner",
    year: 2025
};
for (let key in car) {
    console.log(key, car[key]);
}

//one by one
let students = [
    {
        name: "Arun",
        mark: 80
    },
    {
        name: "Priya",
        mark: 90
    },
    {
        name: "Kumar",
        mark: 75
    }
];

for (let i = 0; i < students.length; i++) {
    console.log(students[i].name + " - " + students[i].mark);
}

//array
//num
let ab=[1,2,3,4,5,6,7,8,9,10]
console.log(ab);
for(let a=0;a<ab.length;a++){
    console.log(ab[a]);}
    //string
let cd=["karthi","abi","maya"]
console.log(cd);
for(let a=0;a<cd.length;a++){
    console.log(cd[a]);}
    //index value
let ef=[1,"karthi",true,4]
console.log(ef);
console.log(ef[2]);
console.log(ef[0]);
console.log(ef[1]);
//reverse
let gh=[10,9,8,7,6,5,4,3,2,1]
for(let b=gh.length-1;b>=0;b--){
    console.log(gh[b]);}
//one by one
let ij=["apple","banana","cat","dog"]
for(let a=0;a<ij.length;a++){
    console.log(ij[a]);}
//intial and print
let ka=["fineshed the array work"]
console.log(ka);














    