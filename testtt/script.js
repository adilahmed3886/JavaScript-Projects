// fetch('https://api.github.com/users/adilahmed3886')
// .then((response)=> {
//     return  response.json()
// })
// .then((data)=> data)
// .catch((error)=>{
//     console.log(error)
// })

// console.log(data)

// async function data() {
//     try {
//         const response = await fetch('https://api.github.com/users/adilahmed3886')
//         const user = await response.json();
//         console.log(user);
//     } catch (error) {
//         console.log(error);
//     }

// }

// fetch('https://api.github.com/users/adilahmed3886')
// .then((response) => {
//     return response.json();
// })
// .then((response) => {
//     return console.log(response)
// })
// .catch((error) => {
//     console.log(error);
// })

// let array = [1,2,3,4,5];
// newArray = Array.from(array)
// console.log(typeof newArray);

// const generateHashTag = (str) => {
//     if(str.trim().length > 280 || str.trim().length === 0){
//         return false
//     }else{
//         newStr = str.split(" ")
//         newNewStr = newStr.map( (curElem) => {
//             return curElem.replace(curElem[0], curElem[0].toUpperCase())
//         })
//         strJoin = newNewStr.join("");
//         endResult = `#${strJoin}`
//         console.log(endResult)

//     }
// }

// const generateHashTag = (str) => {
//     let hashTag = "#";
//     for (const word of str.split(" ")) {
//         if(word){
//             hashTag += word.charAt(0).toUpperCase() + word.slice(1);
//         }

//     }
//     return hashTag;
// }

// console.log(generateHashTag("hi im a dev"));

// [1, 2, 3].forEach(num => console.log(num));

// const gameName = new String('adil ahmed')
// const gameNameArray = gameName.split(" ")
// const example = gameNameArray.flatMap(element => {
//     return element.split("");
// });

// let example = [];

// for (const word of gameNameArray) {
//     for (const char of word) {
//         example.push(char)
//     }
// }

// console.log(example);

// console.log(gameNameArray);

// const anotherString = gameNameArray.splice(0, 5, "a", "h", "m", "e", "d")
// console.log(anotherString)

// let name = "Hi I'm Adil"
// array = name.split(" ");
// let newArray = [];
// for (const arr of array) {
//     for (const char of arr) {
//         newArray.push(char)
//     }
// }
// let newnew = newArray.slice(0,5)

// console.log(newnew);

// let score = 400.33;
// score = score.toPrecision(4)
// console.log(score);

// const hundreds = 100000000000000
// console.log(hundreds.toLocaleString());

// console.log(Math.floor(4.99));

// let array = (4,5,56,6,3,2,2,22,2,3,4)
// console.log(typeof array);

// console.log(Math.min(array));

// let name = "adil ahmed hi I am adil ahmed"
// let array = name.split(" ")
// let adil = array.splice(1,5, "hi")
// console.log(array)

// let date = new  Date()
// // console.log(date.toDayString());

// let myTimeStamp = Date.now()
// console.log(myTimeStamp.getTime());

// let newDate = new Date()
// console.log(newDate);
// console.log(newDate.getMonth() + 1);
// console.log(newDate.getDay());

// const dayName = newDate.toLocaleString()

// console.log(dayName);
// const myArr = [0, 1, 2, 3, 4, 5]
// console.log("A ", myArr);

// const myn1 = myArr.slice(1, 3)

// console.log(myn1);
// console.log("B ", myArr);

// const myn2 = myArr.splice(1, 3)
// console.log("C ", myArr);
// console.log(myn2);

// const marvel_heros = ["thor", "Ironman", "spiderman"]
// const dc_heros = ["superman", "flash", "batman"]
// const all_new_heros = marvel_heros.concat(dc_heros)

// console.log(all_new_heros);

// console.log(Array.from("hi my name is adil"));
// console.log(Array.from({name: "adil"}));

// const JsUser = {
//     name: "Hitesh",
//     "full name": "Hitesh Choudhary",
//     age: 18,
//     location: "Jaipur",
//     email: "hitesh@google.com",
//     isLoggedIn: false,
//     lastLoginDays: ["Monday", "Saturday"]
// }
// // Object.freeze(JsUser)
// JsUser.name = "adil"

// // console.log(JsUser)

// JsUser.test = function(){
//     console.log(Array.from(this.name));
// }
// console.log(JsUser.test())

// const tinderUser = {}
// tinderUser.name = "adil"

// console.log(tinderUser)

// const user = {
//     email: "adil@google.com",
//     fullName: {
//         userName: "adil123",
//         name: {
//             firstName: "adil",
//             lastName: "ahmed"
//         }
//     }

// }

// console.log(user.fullName.name.firstName)

// const obj1 = {1: "a", 2: "b"}
// const obj2 = {3: "a", 4: "b"}
// const obj3 = [1,2,3,4,5]

// const object = {...obj1, ...obj2, ...obj3}

// console.log(object);

// const users = [
//     {
//         id: 1,
//         email: "h@gmail.com"
//     },
//     {
//         id: 1,
//         email: "h@gmail.com"
//     },
//     {
//         id: 1,
//         email: "h@gmail.com"
//     },
// ]

// console.log(Object.hasOwnProperty('isLoggedIn'))

// const course = {
//     coursename: "js in hindi",
//     price: "999",
//     courseInstructor: "hitesh"
// }

// const {courseInstructor: instructor} = course

// console.log(courseInstructor);
// console.log(instructor);

// function sayMyName(str) {
//     for(const char of str){
//         console.log(char)
//     }
// }
// sayMyName("hibabe")

// function loginUserMessage(username = "sam"){
//     if(!username){
//         console.log("PLease enter a username");
//         return
//     }
//     return `${username} just logged in`
// }

// console.log(loginUserMessage(111))

// const myNewArray = [200, 400, 100, 600]

// function returnSecondValue(getArray){
//     return getArray[1]
// }
// console.log(returnSecondValue(myNewArray))

// let a = 300
// if (true) {
//     let a = 10
//     const b = 20
//     console.log("INNER: ", a);

// }

// console.log(b);

// function one(){
//     const username = "hitesh"

//     function two(){
//         const website = "youtube"
//         console.log(username);
//     }
//     console.log(website);

//      two()

// }

// one()

// const movie = "JL"

// switch(movie) {
//     case "BP":
//         console.log("black panther");
//         break;
//     case "SM":
//         console.log("superman");
//         break;
//     case "JL":
//         console.log("Justice Leageue");
//         break;
//     default:
//         console.log("DC MOVIE");
//         break;
// }
// val1 = null ?? 10 ?? 20

// console.log(val1);

// for (let i = 1; i <= 10; i++) {
//     console.log(`Outer loop value: ${i}`);
//    for (let j = 1; j <= 10; j++) {
//     console.log(`Inner loop value ${j} and inner loop ${i}`);
//     console.log(i + '*' + j + ' = ' + i*j );
//    }
// }

// // console.log("adil ahmed".length)
// const str = "adil ahmed"
// for (let i = 0; i < str.length; i++) {
//     console.log(str[i])

// }

// for (let index = 1; index <= 20; index++) {
//     if (index === 5) {
//         console.log(`Detected 5`);
//         continue
//     }
//    console.log(`Value of i is ${index}`);

// }

// const arr = [1, 2, 3, 4, 5]

// for (const num of arr) {
//     console.log(num);
// }

// const greetings = "Hello world!"
// for (const greet of greetings) {
//     console.log(`Each char is ${greet}`)
// }

// const map = new Map()
// map.set('IN', "India")
// map.set('USA', "United States of America")
// map.set('Fr', "France")
// map.set('IN', "India")

// for (const [key, value] of map) {
//     console.log(key, ':-', value);
// }

// const myObject = {
//     js: 'javascript',
//     cpp: 'C++',
//     rb: "ruby",
//     swift: "swift by apple"
// }
// Object.defineProperty(myObject, "js", {
//     writable: false,
//     configurable: true,
//     enumerable: false,
// })

// let array = []
// for (const key in myObject) {
//     array.push(key)
// }
// console.log(array)

// const programming = ["js", "rb", "py", "java", "cpp"]

// for (const key in programming) {
//     console.log(key);
// }

// const map = new Map()
// map.set('IN', "India")
// map.set('USA', "United States of America")
// map.set('Fr', "France")
// map.set('IN', "India")

// Object.keys(map).forEach((key) => {
//     console.log(key)
// })

// const coding = ["js", "ruby", "java", "python", "cpp"];

// for (code of coding){
//     console.log(code)
// }

// const myCoding = [
//     {
//         languageName: "javascript",
//         languageFileName: "js"
//     },
//     {
//         languageName: "java",
//         languageFileName: "java"
//     },
//     {
//         languageName: "python",
//         languageFileName: "py"
//     },
// ]

// const coding = ["js", "ruby", "java", "python", "cpp"]

// const values = coding.map( (item) => {
//     return item
// } )

// console.log(values);

// const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const filtered = myNums.filter(element => element < 5)

// console.log(filtered);

// const books = [
//     { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
//     { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
//     { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
//     { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
//     { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
//     { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
//     { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
//     { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
//     { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
//   ];

//   const fictionBooks = books.filter(obj => obj.genre === "Fiction" && obj.publish > 1985)

//   console.log(fictionBooks);

// const myNumers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// // const newNums = myNumers.map( (num) => { return num + 10})

// const newNums = myNumers
//                 .map((num) => num * 10 )
//                 .map( (num) => num + 1)
//                 .filter( (num) => num >= 40)

// console.log(newNums);

// const sum = myNumers.reduce((acc, num) => acc + num, 5)
// console.log(sum);

// const shoppingCart = [
//     {
//         itemName: "js course",
//         price: 2999
//     },
//     {
//         itemName: "py course",
//         price: 999
//     },
//     {
//         itemName: "mobile dev course",
//         price: 5999
//     },
//     {
//         itemName: "data science course",
//         price: 12999

//     },
// ]

// const total = shoppingCart.reduce((acc, curr) => acc + curr.price, 0)
// console.log(total);

// array2 = array.splice(0,3, "hi", "how", "are", "you")
// console.log(array2);
// console.log(array);

// let array = [1,2,3,4,5]
// let array2 = [1,2,3,4,5]

// switch (array) {
//     case array === array2:
//         console.log("hi");
//         break;

//     default:
//         console.log("not hi")
//         break;
// }

// console.log( null ?? 10 ?? 12)

// const array = [1,2,3,4,5]
// // for(let i = 0; i < array.length; i++){
// //     console.log("this is i")
// //     for(let j = 1; j < array.length; j++)
// //         console.log("this is j")
// // }

// // const hi = array.filter((index) => {
// //     return index % 2 !== 0
// // })
// // console.log(hi)

// const sum = array.reduce((acc, curr) => acc + curr)
// console.log(sum)

// const h1 = document.querySelector("body")
// h1.addEventListener("keydown", (e) =>  console.log(e.shiftKey))

// class Person {
//     constructor(name, age) {
//       // 'this' refers to the object instance being created
//       this.name = name;
//       this.age = age;
//     }

//     // Method defined in the class
//     greet() {
//       console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
//     }
//   }
//   const person = new Person("adil", 23)
//   console.log(person)

//   function Object(name, age) {
//     this.name =  name;
//     this.age = age;
//     this.greet = () => {
//       console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
//     };
//   }
//   const  person2 = new Object ("adil", 23)
//   console.log(person2)

// new Promise((resolve, reject) => {
//     setTimeout(() => {
//         let error = false
//         if(!error) {
//             resolve({user: "adil", id: 1, age: 23})
//         }else {
//             reject("error 404")
//         }
//     }, 1000)
// })
// .then((resolve) => {
//     console.log(resolve)
//     const {user, id, age} = resolve
//     return user
// })
// .then(user => {
//     console.log(user)
// })
// .catch(error => {
//     console.log(error)
// }).finally(() => {
//     console.log("Promise")
// })

// async function data() {
//     try {
//         const data = await new Promise((resolve, reject) => {
//             setTimeout(() => {
//                 let error = true
//                 if(!error) {
//                     resolve({user: "JAVASCRIPT", pass: 123})
//                 }else {
//                     reject("error 404 JS")
//                 }
//             }, 1000)
//         })
//         console.log(data)
//     }
//     catch (error){
//         console.log(error)
//     }
// }

// data()

// new Promise((resolve, reject) => {
//     setTimeout(() => {
//         const error = true
//         if(!error) {
//             resolve("success")
//         }else{
//             reject("warning! error")
//         }
//     }, 500)
// })
// .then((res) => {
//     console.log(res)
// })
// .catch((err) => {
//     console.log(err)
// })
// .finally(() => {
//     console.log("Promise Fulfilled")
// })

// const promise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         const error = false
//         if(!error) {
//             resolve({user: "adil", id: 1, age: 23})
//         }else{
//             reject("error 404")
//         }
//     }, 500)
// })

// .then((res) => {
//     return res
// })
// .then((res) => {
//     const {user, id, age} = res;
//     console.log(user)
// })
// .catch((err) => {
//     console.log(err)
// })
// .finally(() => {
//     console.log("Promise Fulfilled")
// })

// const promise = async () => {
//   try {
//     const data = await fetch("https://api.github.com/users/adilahmed3886");
//     const user = await data.json();
//     console.log(user.followers);
//   } catch (error) {
//     console.log(error);
//   }
// };

// promise();

const response = fetch("https://api.github.com/users/adilahmed3886")
.then((response) => response.json())
.then((data) => console.log(data.followers))
.catch((error) => console.log(error))
.finally(() => console.log("Promise Fulfilled"))