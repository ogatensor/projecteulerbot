const axios = require('axios'); 
const url = "https://projecteuler.net/problem="; 
const dom = require('jsdom'); 
const { JSDOM } = dom; 
const { AtCoderContestProblem } = require("./contest.js"); 

async function main() {
  //   await getDailyProblem(); 
     dispatchToClients(); 
     //get atcoder problem 
     await AtCoderContestProblem;
}

async function getDailyProblem() { 
   // choose a random problem number between the values or 1-785. 
   const number = Math.floor(Math.random() * 785); 
   
// retrieve problem from ProjectEuler
     console.log(`(@___@)/kimikoProblemBotv1:
[RunningTask] => Fetching Project Euler Problem: # ${number}`);
   const p = await axios.get(`${url}${number}`).then((problem) => { 
       //console.log(problem.data); 
       const dom = new JSDOM(problem.data); 
       let desc = dom.window.document.getElementsByClassName("problem_content");
       console.log(desc[0].innerHTML);
     
   }); 
}

function dispatchToClients() { 
 return false; 
}
main()