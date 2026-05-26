//Here we perform the context technique to make the model remember the previous conversation and generate a response based on that.

import { GoogleGenAI } from "@google/genai";
import dotenv from "dotenv";
dotenv.config();

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

async function main() {
  const response = await ai.models.generateContent({
    model: "gemini-3.5-flash",
    contents: [{
      "role": "user",
      "parts": [{"text": "Hey, there my name is Satyam. And how may I call You?"}]
   
  },{

   "role":"model",
   "parts":[{"text": "Hello Satyam! It's a pleasure to meet you. You can call me Gemini. How can I help you today?"}]
},{
      "role": "user",
      "parts": [{"text": "Hello, Do you know my name?"}]
    ,
}
   ]
  }
);
  console.log("\n");
  console.log(response.text);
  console.log("\n");
}

main();