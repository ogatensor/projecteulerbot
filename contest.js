// pulls questioons from atcoder.jp contests
const axios = require('axios');
const dom = require('jsdom');
const {JSDOM} = dom;
const problems = ['a', 'b', 'c', 'd', 'e'];

async function AtCoderContestProblem() {
  // choose a random problem number between the values or 1-139.
  const contestNumber = Math.floor(Math.random() * (139 - 121) + 1);
  const contestPath = `arc${contestNumber}_${problems[Math.floor(Math.random() * problems.length)]}`;

  const url = `https://atcoder.jp/contests/arc${contestNumber}/tasks/${contestPath}`;

  console.log(url);
  // retrieve problem from ProjectEuler
  console.log(`(@___@)/kimikoProblemBotv1:
    [RunningTask] => Fetching AtCoder.jp Problem: # ${contestPath}`);
  // const p = await axios.get(`${url}`).then((problem) => {
  // console.log(problem.status);
  // const dom = new JSDOM(problem.data);
  // let desc = dom.window.document.getElementsByClassName("problem_content");
  // console.log(desc[0].innerHTML);

  // });
}
AtCoderContestProblem();
module.AtCoderContestProblem = AtCoderContestProblem;
