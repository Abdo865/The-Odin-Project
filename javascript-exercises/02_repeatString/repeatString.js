const repeatString = function(st, num) {
    if(num < 0)
        return 'ERROR';
    let ans = '';
    while (num--) 
        ans += st;
    return ans;
};

repeatString('hey', 3);
// Do not edit below this line
module.exports = repeatString;
