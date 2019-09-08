// TODO --> [0,1] --> [1, 0]

var productExceptSelf = function(nums) {
    let l = nums.length;
    let p = nums.reduce((acc, curr) => acc *= curr);
    console.log(p);
    return nums.map(curr => {
        let cp = p;
        let c = 0;
        while(cp > 0) {
            cp -= curr;
            c++;
        }
        return c;
    })
};

console.log(productExceptSelf([0,0]));