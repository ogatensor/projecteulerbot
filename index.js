const axios = require('axios'); 
const url = "https://projecteuler.net/problem="; 

async function main() {
     await getDailyProblem(); 
     dispatchToClients(); 
}

async function getDailyProblem() { 
   // choose a random problem number between the values or 1-700. 
   let number = Math.floor(Math.random() * 700); 
   
// retrieve problem from ProjectEuler
     console.log(`${url}${number}`);
     const p = await axios.get(`${url}${number}`).then((problem) => { 
       console.log(problem); 
     }); 
console.log(p)
}

function dispatchToClients() { 
 return false; 
}
main()