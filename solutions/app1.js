const removeDuplicatesFromArray = (arr) =>
    arr.filter((item, i, originArray) => originArray.indexOf(item) === i);



export default removeDuplicatesFromArray