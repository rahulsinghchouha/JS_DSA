
const prompt = require("prompt-sync")();
// Q-1 Palindrome number
// const palindrome = function (x)
// {
//     let b = x;

//     let i=0;
//     let j=x.length;

//     while(i<j && j>=0)
//     {
//         if(x[i]!==x[j])
//         {
//             return false;
//         }
//         i++;
//         j--;
//     }
//     return true;
// }

// let a = "121";

// const res =palindrome(a);

// console.log("result->",res);


// one more way ->

// const isPalindrome = function(x){
//     return x === +x.toString().split("").reverse().join("");
// }

// console.log(isPalindrome("11"));


// Q-2 Fibonnaci number

// const fib = function (n)
// {
//     const arr=[0,1];

//     for (let index = 2; index <=n; index++) {
//       arr.push(arr[index-1]+arr[index-2]);
        
//     }

//     return arr[n];
// }
// let res = fib(8);
// console.log(res);

//one more way ->

// const fib = function (n)
// {
//      if(n<=1) return n;

//      return fib(n-1) + fib (n-2);
    
// }
// let a= prompt('Enter Number');
// const res = fib(a);

// console.log(res);


//Q - 3 Anagrams

// const anagram = function(s,t)
// {
//     s = s.split("").sort().join("");
//     t = t.split("").sort().join("");

//     return s===t;
// }

// console.log(anagram("ram","mra"));


//one more way

// let isAnagram = function (s,t)
// {
//     if(s.length !== t.length) return false;

//     let obj1={};
//     let obj2={};

//     for (let index = 0; index < s.length; index++) {
//         obj1[s[index]] = (obj1[s[index]] || 0) + 1;
//         obj2[t[index]] = (obj2[t[index]] || 0) + 1;        
//     }

//     for (const key in obj1) {
            
//         if(obj1[key] !== obj2[key]) return false;
        
//     }
    
//     return true;
// }

// const res = isAnagram("ram","rma");

// console.log(res);

// TWO SOME -------->
//nums-[2,3,4,1,5] target = 9 ->output  -> 2,4 index

//brute force solution 

// const twoSum = function (nums,target)
// {
//     for(let i=0; i<nums.length; i++)
//     {
//         for(let j=i+1; j<nums.length; j++)
//         {
//             if(nums[i]+nums[j]==target)
//             {
//                 return [i,j];
//             }
//         }
//     }
// }

// console.log(twoSum([1,2,4,5,3],9));

// Using JS Object

// const twoSum = function (nums,target)
// {
//    let obj ={}

//         for(let i=0; i<nums.length; i++)
//         {
//             let n = nums[i];

//             if(obj[target-n]>=0)
//             {
//                 return [obj[target-n],i];
//             }
//             else{
//                 obj[n]=i;
//                 console.log(obj[n]);
//             }
//         }

// }
// console.log(twoSum([2,7,11,15],26));
// {
//     "2":0, //26-2 =24 kya 24 hai nhi
//     "7":1, //26-7  = 19 kya 19 hai nhi
//     "11":2 //26- 11 = 14 nhi available hai
//     "15":3 //26-15 = 11 available hai so return i,obj[n]
// }


//-> Best time to buy and sell stock

// buy and sell the stock

//you want to maximize your profit by choosing a single day to buy one stock and sell in future
//return maximum profit if you can not achieve any profit return 0

// function maxProfit(prices)
// {
//     let globalProfit = 0;
//     for(let i =0; i< prices.length-1; i++)//prices.length -1 because last vale ke liye nhi hoga
//     {
//         for(let j= i+1; j<prices.length; j++)
//         {
//             //hm aage vali se pichhe vali ko gata kr compare kr lenge agr jyada hai to update kr denge
//             const currentProfit = prices[j]-prices[i];
//             if(currentProfit>globalProfit)globalProfit=currentProfit;
        
//         }
//     }
//     return globalProfit;
// }

// console.log(maxProfit([7,1,5,3,6,4]));

// optimize approach
//[7,1,5,3,6,4]
// profit = 0 => 5-1 = 4 =>  6-1 = 5

// Gready algorithm
const maxProfit = function (prices)
{
   let minStockPurchasePrice = prices[0] || 0;
   let profit = 0;

   for(let i=1; i < prices.length; i++)
   {
    if(prices[i] < minStockPurchasePrice)
    {
        minStockPurchasePrice = prices[i];
    }

    let currentProfit = prices[i] - minStockPurchasePrice;
    profit = Math.max(profit,currentProfit);

   }
return profit;
}
console.log(maxProfit([1,2,4,6,7,1]));
