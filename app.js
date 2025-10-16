import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

const response = await openai.responses.create({
  model: "gpt-4o",
  input: [
    {
      role: "system",
      content: [
        {
          type: "input_text",
          text: "Summarize content you are provided with for a second-grade student.",
        },
      ],
    },
    {
      role: "user",
      content: [
        {
          type: "input_text",
          text: "Jupiter is the fifth planet from the Sun and the largest in the Solar System. It is a gas giant with a mass one-thousandth that of the Sun, but two-and-a-half times that of all the other planets in the Solar System combined. Jupiter is one of the brightest objects visible to the naked eye in the night sky, and has been known to ancient civilizations since before recorded history. It is named after the Roman god Jupiter.[19] When viewed from Earth, Jupiter can be bright enough for its reflected light to cast visible shadows,[20] and is on average the third-brightest natural object in the night sky after the Moon and Venus.",
        },
      ],
    },
  ],
  temperature: 1,
  max_output_tokens: 1024,
});

console.log(response);
