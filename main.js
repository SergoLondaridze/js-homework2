//1
let arr = [
    {
        name: 'Temo',
        age: 25
    },
    {
        name: 'Lasha',
        age: 21
    },
    {
        name: 'Ana',
        age: 28
    }
]
const minAge = (arr) => {
    let min = Number.MAX_VALUE;
    arr.forEach(item => {
        if (item.age < min) {
            min = item.age;
        }
    });
    return min;
}
console.log(minAge(arr))

//2
let obj = {
    name: 'Lasha',
    age: 21,
    obj1: {
        city: 'Tbilisi',
        country: 'Georgia'
    }
}

const copyObj = (obj) => {
    let newObj = {}
    for (const key in obj) {
        newObj[key] = obj[key];
        if (typeof obj[key] == 'object') {
            copyObj(obj[key]);
        }
    }
    return newObj;
}
let rr = copyObj(obj);
rr.obj1.city = "moskva"
console.log(copyObj(obj))
console.log(obj)
//3
let a = 0, b = 0;
let randomA, randomB;
do {
    randomA = parseInt(Math.random() * 6 + 1)
    a++;
    console.log('a', a)
    console.log('randomA', randomA)
} while (randomA !== 3);

do {
    randomB = parseInt(Math.random() * 6 + 1)
    b++;
    console.log('b', b)
    console.log('randomB', randomB)
} while (randomB !== 3);
if (a > b) {
    console.log('Win b')
} else if (a < b) {
    console.log('Win a')
} else {
    console.log('Nobady Win')
}
