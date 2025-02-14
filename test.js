import 'dotenv/config';
import { GoogleGenerativeAI, HarmBlockThreshold, HarmCategory } from "@google/generative-ai";

let API_KEY = process.env.API_KEY;

console.log(
    `API_KEY: ${API_KEY}`
)