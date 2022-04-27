const axios = require('axios'); 
const dom = require('jsdom'); 
const {JSDOM} = dom; 
const url = "https://projecteuler.net/problem="; 
const {Logger}  = require("./util/logger.js"); 

async function getDailyProblem() { 
    // choose a random problem number between the values or 1-785. 
    const number = Math.floor(Math.random() * 785); 
    
    // retrieve problem from ProjectEuler    
    console.log(`
    (@___@)/kimikoProblemBotv1:
    [RunningTask] => Fetching Project Euler Problem: # ${number}
    `);
    
    const p = await axios.get(`${url}${number}`).then((problem) => { 
        const dom = new JSDOM(problem.data); 
        const desc = dom.window.document.getElementsByClassName("problem_content");

        console.log(desc[0].innerHTML);
    }); 
 }
 getDailyProblem(); 
 module.GetDailyProblem = getDailyProblem;  