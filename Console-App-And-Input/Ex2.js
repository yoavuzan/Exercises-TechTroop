import promptSync from "prompt-sync";
const prompt = promptSync();

const AnsAndQ = [
  { 4: "What is 2 + 2?" },
  { Paris: "What is the capital of France?" },
  { 2025: "What year is it?" },
];

let correct = 0;

for (let pair of AnsAndQ) {
  const [answer, question] = Object.entries(pair)[0];
  const yourAns = prompt(question + " ");
  if (yourAns.trim().toLowerCase() === answer.toLowerCase()) {
    correct++;
  }
}

console.log(`Final Score:${correct}/${AnsAndQ.length} correct!`);
