function maxSubArray(nums)
{
    let  maxSum = Number.NEGATIVE_INFINITY;

    let startIdx=0,endIdx=0;

    for(let i=0; i<nums.length; i++)
    {
        let currentSum = 0;
        for(let j=i; j<nums.length; j++)
        {
            currentSum=currentSum+nums[j];
            if(currentSum>maxSum)
            {
                maxSum=currentSum;
                startIdx=i;
                endIdx=j;
                console.log("end->",endIdx);
            }
        }
    }
//return maxSum;

return {
    sum:maxSum,
    subArray:nums.slice(startIdx,endIdx+1)
}


}
//console.log(maxSubArray([1,2,3,-1,4,5,-9]));
function maxSubArray(nums)
{
    if(nums.length==0) return 0;

    let sum=0;
    let maxSum=nums[0];

    for(let i=0; i<nums.length; i++)
    {
        sum=sum+nums[i]

        if(sum>maxSum)
        {
            maxSum=sum;
        }
        if(sum<0)
        {
            sum=0;
        }

    }
    return maxSum;

}


console.log(maxSubArray([1,2,3,-1,4,5,-9]));