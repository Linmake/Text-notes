import { googleAI } from '@genkit-ai/googleai';
import { genkit } from 'genkit/beta';
import { createInterface } from 'node:readline/promises';
import fs from 'fs';
import * as dotenv from 'dotenv';

// 🔥 NUEVO: Markdown en terminal
import { marked } from 'marked';
import TerminalRenderer from 'marked-terminal';
marked.setOptions({
  renderer: new TerminalRenderer() as any,
});

// ✅ CARGAR VARIABLES DE ENTORNO
dotenv.config();

// ✅ VERIFICAR API KEY
if (!process.env.GOOGLE_API_KEY) {
  console.error('❌ ERROR: GOOGLE_API_KEY no está configurada');
  console.log('💡 Crea un archivo .env con: GOOGLE_API_KEY=tu_api_key');
  process.exit(1);
}   

// ✅ CONFIGURAR GENKIT CON API KEY
const ai = genkit({
  plugins: [googleAI({
    apiKey: process.env.GOOGLE_API_KEY
  })],
  model: googleAI.model('gemini-1.5-flash'),
});

const aiFunction = async () => {
  try {
    console.log('📁 Cargando archivo de contexto local...');

    let context = '';
    const fallbackFiles = ['texto_extraido.txt', 'texto.txt'];

    for (const file of fallbackFiles) {
      if (fs.existsSync(file)) {
        console.log(`📂 Archivo encontrado: ${file}`);
        context = fs.readFileSync(file, 'utf-8');
        break;
      }
    }

    if (!context || context.trim().length === 0) {
      console.error('❌ No se pudo cargar ningún archivo de texto válido.');
      process.exit(1);
    }

    console.log(`📊 Contexto cargado: ${context.length} caracteres`);

    // Limitar el contexto si es necesario
    const maxContextLength = 15000;
    if (context.length > maxContextLength) {
      console.log(`✂️ Recortando contexto a ${maxContextLength} caracteres`);
      context = context.substring(0, maxContextLength) + '... [texto truncado]';
    }

    const prompt = `Eres un asistente de la Universidad de Sonora. Esta es la información que se te proporcionará si la necesitas:

${context}

Si algo no viene puedes investigar por tu cuenta en otras fuentes y razonar por tu cuenta, gracias.`;

    console.log("\n🎓 Asistente UNISON listo. Haz tu pregunta:");

    const readline = createInterface({
      input: process.stdin,
      output: process.stdout
    });

    while (true) {
      const userInput = await readline.question('Tú: ');

      if (userInput.toLowerCase() === 'salir') {
        console.log('👋 ¡Hasta luego!');
        break;
      }

      console.log('🤖 Pensando...');

      const chat = ai.chat({ system: prompt });
      const result = await chat.send(userInput);

      if (result.text) {
        // 🔥 Mostrar con estilo Markdown
        console.log('\nUNISON:\n');
        console.log(marked(result.text));
      } else {
        console.log('❌ No se recibió respuesta');
      }
    }

    readline.close();

  } catch (error: any) {
    console.error('💥 Error general:', error.message);
  }
};

// Manejar cierre con Ctrl+C
process.on('SIGINT', () => {
  console.log('\n👋 Programa terminado');
  process.exit(0);
});

//aiFunction();

