//const fetchdatas=async()=>{
   // const getdata=await  fetch ("https://dummyjson.com/products")
       // console.log(getdata);
     //  const change=await getdata.json()
       //console.log(change.products);
       //const datas =change.products
       //const showdata=document.getElementById(getdatas)
       //getdata
       
       
        
//}
//fetchdatas()
const createCounter = () => {
    let count = 0;

    return () => {
        count = count + 10;
        console.log(count);
    };
};

const counter = createCounter();

counter();
counter();
counter();
counter();
counter();

const calculateSalary = (salary, callback) => {
    console.log("Original Salary: " + salary);
    callback(salary);
};

const addBonus = (salary) => {
    console.log("Salary After Bonus: " + (salary + 5000));
};

const deductSalary = (salary) => {
    console.log("Salary After Deduction: " + (salary - 2000));
};

calculateSalary(20000, addBonus);
calculateSalary(20000, deductSalary);