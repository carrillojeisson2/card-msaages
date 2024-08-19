import {ENV} from "../../utils/constants"

import { OpenAI } from 'openai';

const openai = new OpenAI({
  apiKey: process.env.API_KEY 
});

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { messageContent } = req.body;

    if (!messageContent) {
      return res.status(400).json({ error: 'El parámetro messageContent es requerido' });
    }

    try {
      const response = await openai.chat.completions.create({
        model: 'gpt-4',
        messages: [{ role: 'user', content: messageContent }],
        max_tokens: 100,
    });
  
      res.status(200).json({ message: response.choices[0].message.content, role: "Jeisson Carrillo" });

    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Error al contactar con la API de OpenAI' });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}