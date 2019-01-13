const data = [5, 56];

const reducer = function (acc, item) {
    return acc + item
};

const initialValue = 10;

let total = data.reduce((acc, item) => acc + item, initialValue);

console.log(total);

const votes  = [
    'angular',
    'angular',
    'react',
    'react',
    'react',
    'ember',
    'vue',
    'vue',
    'vue',
    'vue',
    'vanilla',
    'vanilla',
    'vue',
]

const res = votes.reduce((acc, item)=> {
    if (acc[item]){
        acc[item]++
    } else {
        acc[item] = 1
    }
    return acc

}, {})

console.log(res, 'res')

const numbers = [1,2,4,7,8]



const doubled = numbers.map(number => number*2)

const even = numbers.reduce((acc, item)=> {
    if (!(item %2)) {
        acc.push(item)
    }
    return acc
}, [])

console.log(doubled, 'doubled')
console.log(even, 'even')


nestedArray = [[1,2,4], 99, 99, [5,7,8], [9,11,14], 99]

flattenArray = nestedArray.reduce((acc, item) =>{
    if(Array.isArray(item)) {
        // item.forEach(el => {acc.push(el)})
        return acc.concat(item)
    }else {
        acc.push(item)
    }
    return acc
}, []);

console.log(flattenArray, 'flatten array')

const input = [
    {
        title: "Batman Begins",
        year: 2005,
        cast: [
            "Christian Bale",
            "Michael Caine",
            "Liam Neeson",
            "Katie Holmes",
            "Gary Oldman",
            "Cillian Murphy"
        ]
    },
    {
        title: "The Dark Knight",
        year: 2008,
        cast: [
            "Christian Bale",
            "Heath Ledger",
            "Aaron Eckhart",
            "Michael Caine",
            "Maggie Gyllenhal",
            "Gary Oldman",
            "Morgan Freeman"
        ]
    },
    {
        title: "The Dark Knight Rises",
        year: 2012,
        cast: [
            "Christian Bale",
            "Gary Oldman",
            "Tom Hardy",
            "Joseph Gordon-Levitt",
            "Anne Hathaway",
            "Marion Cotillard",
            "Morgan Freeman",
            "Michael Caine"
        ]
    }
];

const onlyStars = input.reduce((acc, movie)=> {
    movie.cast.forEach(star => {
        if (!acc.includes(star)) {
            acc.push(star)
        }
    })
    return acc
}, [])

console.log(onlyStars, 'onlyStars')


const increment = ((input) => input +1)
const decrement = ((input) => input -1)
const double = ((input) => input *2)
const halve = ((input) => input /2)

const initial_value = 1
const pipline = [
    increment,
    decrement,
    double,
    halve
]

const finalValue = pipline.reduce((acc, fn)=> {
    return fn(acc)
}, initial_value)

console.log(finalValue);