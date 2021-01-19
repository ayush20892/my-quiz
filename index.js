var readlinesync = require("readline-sync");

var score = 0;

var name = readlinesync.question("What is your name ? ");
console.log("  ");
console.log("Hello "+name+", welcome to quiz on Ayush."); 
console.log("  ");

function ques(question,ans)
{ var u_ans = readlinesync.question(question);
  if (u_ans == ans) 
  {
    console.log("You are right.");
    score = score + 1;
  } 
  else 
  {
    console.log("You are Wrong.");
  }
  console.log("Current Score : ",score);
}

var ques_ans = [{ question: "What is his age? ", 
               ans: "20"},
            { question: "Where does he live ? ",
               ans: "Howrah"},
            { question: "What is his birth day? ",
               ans: "20/8"} ];
for(var i= 0; i<ques_ans.length; i=i+1)
{
  var cur_ques = ques_ans[i];
   ques(cur_ques.question,cur_ques.ans);
   console.log(" ");
}
console.log("-----");
console.log("Final Score : ",score);
