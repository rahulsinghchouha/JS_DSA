//you are given an array of integers nums, there is a sliding window of size k which is 

//sort array
const string=["raj","vikram","mitali"];
const nums = [3,2,111,44,11,33];


const comaprearray = (a,b)=>{
    return b-a;//descending
    //a-b descending
}
//console.log(nums.sort(comaprearray));
//console.log(string.sort());

//sort object


const people = [
    {name:"rahul",age:28},
    {name:"dilip",age:33},
    {name:"umesh",age:11},
    {name:"bharat",age:57},
    {name:"vinay",age:57},
]
const comapreObject = (a,b)=>{
    return b.age-a.age;//desending 
    //a-b descnding
}

console.log(people.sort(comapreObject));
