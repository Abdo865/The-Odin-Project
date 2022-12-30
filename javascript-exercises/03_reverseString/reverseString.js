const reverseString = function(st) {
    let reversed = st.split('');

    for (let i = 0; i < st.length / 2; i++) {
        swap(reversed, i, reversed.length - i - 1);
    }
    return reversed.join('');
};

function swap(arr, i ,j){
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}

// Do not edit below this line
module.exports = reverseString;
