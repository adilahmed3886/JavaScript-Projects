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

fetch('https://api.github.com/users/adilahmed3886')
.then((response) => {
    return response.json();
})
.then((response) => {
    return console.log(response)
})
.catch((error) => {
    console.log(error);
})