import { Configuration, OpenAIApi } from 'openai';
import dotenv from 'dotenv';

dotenv.config();

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);

const generateFlashcard = async (prompt) => {
  const completion = await openai.createChatCompletion({
    model: 'gpt-4-turbo',
    messages: [
      { role: 'system', content: 'Ets un assistent que crea flashcards educatives i resums.' },
      { role: 'user', content: prompt },
    ],
    max_tokens: 500,
  });

  return completion.data.choices[0].message.content;
};

export default { generateFlashcard };
