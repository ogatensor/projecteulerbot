const axios = require('axios');
const {AtCoderContestProblem} = require('./contest.js');
const {GetDailyProblem} = require('./daily.js');
const problemSetLength = 4 || process.env.CUSTOM_PROBLEM_SET_LENGTH;
const express = require('express');
const server = express();
const problemSet = [];
 
server.get(`/problems/random/euler`, async (req, res) => {
  try {
    // choose a random problem number between the values or 1-785.
    const number = Math.floor(Math.random() * 785);
    const peURI = 'https://projecteuler.net/problem=';

    // retrieve problem from ProjectEuler
    console.log(`
(@___@)/kimikoProblemBotv1:
[RunningTask] => Fetching Project Euler Problem: # ${number}
    `);

    let p = await axios.get(`${peURI}${number}`);
    res.send(JSON.stringify(p.data));

  } catch (error) {
    res.status(500).json({message: error.message});
  }
});

server.get(`/problems/random/atcoder`, async (req, res) => {
   try {
      const problems = ['a', 'b', 'c', 'd', 'e'];

  // choose a random problem number between the values or 1-139.
  const contestNumber = Math.floor(Math.random() * (139 - 1) + 1);
  const contestPath = `arc${contestNumber}_${problems[Math.floor(Math.random() * problems.length)]}`;

  const url = `https://atcoder.jp/contests/arc${contestNumber}/tasks/${contestPath}`;

  console.log(url);
  // retrieve problem from ProjectEuler
  console.log(`(@___@)/kimikoProblemBotv1:
    [RunningTask] => Fetching AtCoder.jp Problem: # ${contestPath}`);
   let p = await axios.get(`${url}`);
    res.send(p.data)
   } catch (error) {
     res.status(500).json({message: error.message});
   }
}); 

server.listen(3333, () => {
  console.log(`Bot server running on 3333`);
});

async function main() {

}

async function generateProblemSet() {
  // get project euler problem
  await GetDailyProblem;
  // get atcoder problem
  await AtCoderContestProblem;
}

function dispatchToClients() {
  return false;
}
