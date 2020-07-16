
export const sum = (num) => {
    return num == 1 ? num : num + sum(num - 1);
};

// console.log(sum(4))