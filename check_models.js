
import { GoogleGenerativeAI } from "@google/generative-ai";
import dotenv from 'dotenv';
dotenv.config();

const apiKey = process.env.VITE_GEMINI_API_KEY;

if (!apiKey) {
    console.error("No API KEY found in .env");
    process.exit(1);
}

const genAI = new GoogleGenerativeAI(apiKey);

async function listModels() {
    try {
        const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
        // We can't list models directly with the Node SDK easily in this version without authentication scopes usually, 
        // but we can try to just run a generation with a candidate model to see if it works.
        // Actually, the error message from before said "Call ListModels to see the list".
        // Use the API directly for listing if SDK doesn't expose it easily or just try the probable names.

        // Let's just try 1.5-flash first as it's the most likely intended "Flash" model that is stable.
        const chat = model.startChat({ history: [] });
        const result = await chat.sendMessage("Test");
        console.log("gemini-1.5-flash is working.");
    } catch (error) {
        console.log("gemini-1.5-flash failed:", error.message);
    }

    // Try gemini-2.0-flash if 1.5 failed or just to check
    try {
        const model2 = genAI.getGenerativeModel({ model: "gemini-2.0-flash-exp" });
        const chat2 = model2.startChat({ history: [] });
        await chat2.sendMessage("Test");
        console.log("gemini-2.0-flash-exp is working.");
    } catch (e) {
        console.log("gemini-2.0-flash-exp failed");
    }
}

listModels();
