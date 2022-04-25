const axios = require('axios'); 
const url = "https://projecteuler.net/problem="; 

async function main() {
     getDailyProblem(); 
     dispatchToClients(); 
}

function getDailyProblem() { 
   // choose a random problem number between the values or 1-700. 
   let number = Math.floor(Math.random() * 700); 
   
   let problem = (number) => { 
     // retrieve problem from ProjectEuler
     let data = axios.get(`${url}/${number}.html`); 
     data.then((problem) => { 
       console.log(problem); 
     }); 
 }  
 return problem(number); 
}

function dispatchToClients() { 
 return false; 
}
main(); 