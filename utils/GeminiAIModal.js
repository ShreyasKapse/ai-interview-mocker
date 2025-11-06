const {
  GoogleGenerativeAI,
  HarmCategory,
  HarmBlockThreshold,
} = require("@google/generative-ai");

// Initialize the API with your key
const apiKey = process.env.NEXT_PUBLIC_GEMINI_API_KEY;
const genAI = new GoogleGenerativeAI(apiKey);

// Create a model instance with the correct configuration
const model = genAI.getGenerativeModel({
  model: "gemini-pro",
  apiVersion: "v1", // Specify the API version explicitly
});

// Generation configuration
const generationConfig = {
  temperature: 0.9,
  topP: 1,
  topK: 1,
  maxOutputTokens: 2048,
};


  export const chatSession = model.startChat({
    generationConfig,

  });

