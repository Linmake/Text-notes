import { GoogleGenerativeAI } from '@google/generative-ai';
import * as dotenv from 'dotenv';

dotenv.config();

console.log('🔍 Verificando API Key:', process.env.GOOGLE_API_KEY ? '✅ Presente' : '❌ Faltante');

const genAI = new GoogleGenerativeAI(process.env.GOOGLE_API_KEY || '');

export const resumeAssistantController = async (req, res) => {
  console.log('📥 Body recibido:', req.body);
  
  try {
    const { text } = req.body;
    
    if (!text) {
      console.log('❌ Texto no proporcionado en body');
      return res.status(400).json({ 
        error: 'Se requiere el campo text en el body',
        receivedBody: req.body // Para debug
      });
    }

    // Verificar que la API key existe
    if (!process.env.GOOGLE_API_KEY) {
      console.log('❌ GOOGLE_API_KEY no configurada');
      return res.status(500).json({ 
        error: 'Configuración incompleta del servidor' 
      });
    }

    const model = genAI.getGenerativeModel({ 
      model: 'gemini-1.5-flash'
    });

    const prompt = `Eres un asistente de la Universidad de Sonora. Responde al siguiente saludo: "${text}"`;

    console.log('🚀 Enviando a Gemini...');
    const result = await model.generateContent(prompt);
    const response = result.response;
    
    console.log('✅ Respuesta de Gemini:', response.text());
    
    return res.json({ 
      success: true,
      response: response.text() 
    });

  } catch (error) {
    console.error('💥 ERROR COMPLETO:');
    console.error('Nombre:', error.name);
    console.error('Mensaje:', error.message);
    console.error('Stack:', error.stack);
    
    // Error específico de Google AI
    if (error.message.includes('API_KEY')) {
      return res.status(500).json({ 
        error: 'Error de autenticación con Google AI',
        details: 'Verifica la API_KEY' 
      });
    }
    
    return res.status(500).json({ 
      error: 'Error del servidor',
      details: process.env.NODE_ENV === 'development' ? error.message : 'Error interno'
    });
  }
};