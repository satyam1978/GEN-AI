//Here we perform the context technique to make the model remember the previous conversation and generate a response based on that.

import { GoogleGenAI } from "@google/genai";
import readlineSync from "readline-sync";
import dotenv from "dotenv";
dotenv.config();

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

const chat = ai.chats.create({
    model: "gemini-3.5-flash",
    history: []
});



async function main(){

  const userProblem = readlineSync.question("How can I help you? ");
  const response = await chat.sendMessage({
    message: userProblem,
  });

  console.log("\n");
  console.log(response.text);
 await main()
}
main()


