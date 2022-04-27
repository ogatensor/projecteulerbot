const axios = require('axios'); 
const { AtCoderContestProblem } = require("./contest.js"); 
const { GetDailyProblem } = require("./daily.js"); 

async function main() {
   let problemSet = [];

   for (let idx = 0; idx < 3; idx++) { 
      problemSet[idx] = await generateProblemSet();
   }

   
}

async function generateProblemSet() { 
      // get project euler problem 
      await GetDailyProblem; 

      //get atcoder problem 
      await AtCoderContestProblem;
}

function dispatchToClients() { 
 return false; 
}



main()