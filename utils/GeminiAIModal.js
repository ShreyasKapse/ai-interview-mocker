const { GoogleGenerativeAI } = require("@google/generative-ai");

// Initialize the API with your key
const apiKey = process.env.NEXT_PUBLIC_GEMINI_API_KEY;

// Create the client
const genAI = new GoogleGenerativeAI(apiKey);

// Create a model instance
const model = genAI.getGenerativeModel({ 
  model: "gemini-1.0-pro",
  generationConfig: {
    temperature: 0.7,
    maxOutputTokens: 2048,
  },
});


  export const chatSession = model.startChat({
    generationConfig,

  });

