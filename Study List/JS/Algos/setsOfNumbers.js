const rec = () => {
    if(total == 0) {
        return 1;
    } else if (total < 0) {
        return 0;
    } else if(i < 0) {
        return 0;
    } else if (total < arr[i]) {
        return rec(arr, total, i-1);
    } else {
        return rec(arr, total - arr[i], i-1) + rec(arr, total, i-1)
    }
}

const count_sets = (arr, total) =>  {
    return rec(arr, total, arr.length - 1);
}
