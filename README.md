# Introduction to Prompt Engineering for Generative AI

## Introduction

### Whait is prompt engineering

- Generative AI: text, images, videos or code
- Prompt engineering: contructing inputs in order to get the most from generative AI

### Tokens vs words

A unit understood by a language model

Tokenization:

| Words    | Tokens    |
| -------- | --------- |
| everyday | every day |

### Large language model

## Text generation

### Diving into ChatGPT

- OpanAI models
- Generative
- Pretrained
- Transformer
- Multiple modalities
- Voice instructions
- Learning model feedback
- Excels following instructions

### Voice model on mobile

[ChatGPT](https://chatgpt.com/)

### Google Gemini for a ride

[Gemini](https://gemini.google.com/app?hl=it)

- Very large context window
- Different mdalities
- Robust developer platform
- Transformer
- Mixture of experts

### Exploring MiscroSoft Copilot

[Copilot](https://copilot.microsoft.com/)

- OpenAI, Dall-E
- Enterprise ready
- Integrated insto 365

#### Github Copilot

- Dev tools
- Open source
- VSCode

### Learning with Claude

[Claude](https://claude.ai)

- Anthropic
- Leads in many benchmarks
- Code genetation

### Prompt best practices

1. Give Clear Instructions:
   Unclear prompts may result in generic or inaccurate outputs. Be sure to include relevant details, such as the desired output format and context.

2. Assign a Persona:
   Begin your prompt by assigning a specific role to the AI assistant.

Examples:
“You are a senior marketing professional specializing in social media campaigns…”
“As a user experience expert, you are capable of…”

3. Use Delimiters to Structure Your Prompt:
   Delimiters can help organize the prompt clearly. This example uses three quotes as delimiters:

The following is a part of a Wikipedia article on Language Models:

“””
A language model is a probabilistic model of a natural language.[1] In 1980, the first significant statistical language model was proposed, and during the decade IBM performed ‘Shannon-style’ experiments, in which potential sources for language modeling improvement were identified by observing and analyzing the performance of human subjects in predicting or correcting text.
“””

In this prompt, markdown-style ticks are used with the label “python”

How can we make this function more efficient with lru_cache?

`python

def fib(n):

    if n in {0, 1}:

        return n

    return fib(n-1) + fib(n-2)

`

4. Break Tasks into Subtasks:
   Divide complex tasks into manageable steps.

## Images and videos

### Landscapes

#### Controversies

- Artist credits
- Art?
- Potential misuse?

#### Dall-E

- OpenAI
- Diffusion based (remove noise)
- Trained with millions of images
- Available in Copilot and ChatGPT

#### Midjourney

- Extremely powerful
- Discord interface
- Fewer free capabilities

#### Stable diffusion

- Developed by Stability AI
- Open source

#### Sora

- Diffusion based
- Realistic videos
- Struggles with some generations

### DALL-E

[DALL-E](https://openart.ai/home?utm_source=google&utm_medium=cpc&utm_campaign=Ser_EU_Midjourney_Dalle&utm_content=Dalle_Exact&utm_source=google&utm_medium=cpc&utm_campaign=21049810241&utm_term=dall%20e&gad_source=1&gad_campaignid=21049810241&gbraid=0AAAAAp6wzGQ1KED_IQgHk9O2Jh2au9MUG&gclid=Cj0KCQjw6bfHBhDNARIsAIGsqLholQxuFXgUuAgUht5OpmoqvhyaUunhoNakz3Igs8K7ThCdNZSzV7waAgLUEALw_wcB)

### Midjourney

[Midjourney](https://www.midjourney.com/home)

## Adanced concepts

### Custom GPT

- Reduce repetitions
- Shared wotkflows
- Easy get started

### Multimodality in AI

- Text
- Image
- Video
- Audio

### Model fine tuning

- Additional training for specialized model
- Smaller model
- Efficency
- Fewer tokens in prompt

### Interacting with API

```js
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
```
