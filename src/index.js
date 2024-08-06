// You should implement your task here.

module.exports = function towelSort(matrix) {
    if (!matrix) {
        return [];
    }
    const res = [...matrix]
        .map((subArr, idx) => {
            if (idx % 2) {
                subArr.reverse();
            }
            return subArr;
        })
        .flat(1);
    return res;
};
