const axios = require('axios'); 
const { AtCoderContestProblem } = require("./contest.js"); 
const { GetDailyProblem } = require("./daily.js"); 
const problemSetLength = 4 || process.env.CUSTOM_PROBLEM_SET_LENGTH; 

async function main() {
   let problemSet = [];

   for (let idx = 0; idx < problemSetLength - 1; idx++) { 
      problemSet[idx] = await generateProblemSet();
   }
   console.log(problemSet[0], problemSet[1])
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