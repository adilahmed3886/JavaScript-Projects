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


