import { googleAI } from '@genkit-ai/googleai';
import { genkit } from 'genkit/beta';
import { createInterface } from 'node:readline/promises';
import fs from 'fs';
import * as dotenv from 'dotenv';
import { UseData } from '../../context/dataContext';

dotenv.config();
if (!process.env.GOOGLE_API_KEY) {
  process.exit(1);
}   

const ai = genkit({
  plugins: [googleAI({
    apiKey: process.env.GOOGLE_API_KEY
  })],
  model: googleAI.model('gemini-1.5-flash'),
});

const aiFunction = async () => {
  const { response, setResponse, resume, setResume } = UseData();
  try {
    let context = '';
    const fallbackFiles = ['texto_extraido.txt', 'texto.txt'];

    for (const file of fallbackFiles) {
      const fileExisting = fs.existsSync(file) 
      if ( fileExisting ) {
        console.log(`📂 Archivo encontrado: ${file}`);
        context = fs.readFileSync(file, 'utf-8');
        setResume(context)
        break
      }
    }
    if (!context || context.trim().length === 0) {
      process.exit(1);
    }

    // Limitar el contexto si es necesario
    const maxContextLength = 15000;
    if (context.length > maxContextLength) {
      context = context.substring(0, maxContextLength) + '... [texto truncado]';
    }

    const prompt = `Eres un asistente de la Universidad de Sonora. Esta es la información que se te proporcionará si la necesitas:

${context}

Si algo no viene puedes investigar por tu cuenta en otras fuentes y razonar por tu cuenta, gracias.`;

    const readline = createInterface({
      input: process.stdin,
      output: process.stdout
    });

    while (true) {
      const userInput = await readline.question('Tú: ');
      const chat = ai.chat({ system: prompt });
      const result = await chat.send(userInput);

      if (result.text) {
        setResponse(result.text)
      } else {
        console.log('❌ No se recibió respuesta');
      }
    }
  } catch (error) {
    console.error('💥 Error general:', error.message);
  }
};

export default aiFunction