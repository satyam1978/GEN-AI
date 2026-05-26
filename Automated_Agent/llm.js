//Here we perform the context technique to make the model remember the previous conversation and generate a response based on that.

import { GoogleGenAI } from "@google/genai";
import readlineSync from "readline-sync";
import dotenv from "dotenv";
dotenv.config();

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
const history = [];

async function Chatting(userProblem) {
  
  history.push({
  "role": "user",
  "parts": [{text: userProblem}]
});

  const response = await ai.models.generateContent({
    model: "gemini-3.5-flash",
    contents: history
  });

  history.push({
  "role": "model",
  "parts": [{text: userProblem}]
})

  console.log("\n");
  console.log(response.text);
  
}


async function main(){

  const userProblem = readlineSync.question("How can I help you? ");
  await Chatting(userProblem);
  main()
}
main()


