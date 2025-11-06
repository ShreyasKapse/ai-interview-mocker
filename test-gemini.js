const { GoogleGenerativeAI } = require("@google/generative-ai");

// Access your API key from environment
const apiKey = process.env.NEXT_PUBLIC_GEMINI_API_KEY;
const genAI = new GoogleGenerativeAI(apiKey);

async function testGeminiAPI() {
  try {
    // For text-only input, use the gemini-pro model
    const model = genAI.getGenerativeModel({
      model: "gemini-pro",
      generationConfig: {
        temperature: 0.7,
        maxOutputTokens: 2048,
      },
    });

    const prompt = "Hello, can you respond with a simple 'Hi!' to test the connection?";

    const result = await model.generateContent(prompt);
    const response = await result.response;
    console.log("API Response:", response.text());
    console.log("API Connection successful!");
  } catch (error) {
    console.error("API Error:", error);
  }
}

testGeminiAPI();