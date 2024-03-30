//find second largest in array
function secondLargest(arr)
{
    const uniqueArr = Array.from(new Set(arr));

    uniqueArr.sort((a,b)=>{
        return b-a;
    });

    if(uniqueArr.length >= 2)
    {
        return uniqueArr[1];
    }
    else{
        return -1;
    }
}

//console.log(secondLargest([10,5,10]));

//second largest optimised
function optimisedSecondLargest(arr)
{
    let largest = Number.NEGATIVE_INFINITY;
    let secondLargest = Number.NEGATIVE_INFINITY;

    for(let i=0; i<arr.length; i++)
    {
        // for largest 
        if(arr[i] > largest)
        {
            secondLargest = largest;
            largest = arr[i];
        }// for second largest
        else if(arr[i]!= largest && arr[i]>secondLargest)
        {
            secondLargest = arr[i];
        }

    }

    return secondLargest;
     
}

//console.log(optimisedSecondLargest([5,10,10,5,3,1,1]));

function rotatedArray(nums,k)
{
    let size = nums.length;
    if(size>k)
    {
        k=k%size;
    }

    const rotated = nums.splice(size-k,size);
    console.log("rotated->",rotated);
    console.log("nums",nums);
    nums.unshift(...rotated);

    return nums;
}

//console.log(rotatedArray([1,2,3,4,5,6,7],3));

//solve without a inbuild function 
function rotatedArray(nums,k)
{
    let size = nums.length;

    if(size>k)
    {
        k = k % size; 
    }

    reverse(nums,0,size-1);
    reverse(nums,0,k-1);
    reverse(nums,k,size-1);

    return nums;
}
function reverse(nums,left,right)
{
    while(left<right)
    {
    let temp = nums[left];
    nums[left++]=nums[right];
    nums[right--]=temp;
    }
}
//console.log(rotatedArray([1,2,3,4,5,6,7,8],4));

function removeDuplicates(nums)
{
    for(let i=0; i<nums.length; i++)
    {
        if(nums[i]==nums[i+1])
        {
            nums.splice(i+1,1);
            i--;
        }
    }
    console.log(nums);
    return nums.length;
}
//console.log(removeDuplicates([1,1,2,3,4,5,6]));

