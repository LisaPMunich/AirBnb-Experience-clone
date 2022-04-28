const array1 = [1, 4, 9, 16];

// pass a function to map
const map1 = array1.map(x => x * 2);

const map2 = array1.map((x, index) => {
    console.log(x, index);
});

const newArray = array1.map(function(x){(x===4)? true : false})