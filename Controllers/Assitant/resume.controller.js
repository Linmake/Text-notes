import { GoogleGenerativeAI } from '@google/generative-ai';
import * as dotenv from 'dotenv';

dotenv.config();

const genAI = new GoogleGenerativeAI(process.env.GOOGLE_API_KEY);
const conversationHistory = new Map();

export const resumeAssistantController = async (req, res) => {
  try {
    const { text, sessionId = 'default-session' } = req.body;
    
    console.log('📥 Solicitud recibida:', { sessionId, textLength: text?.length });

    if (!text || text.trim() === '') {
      return res.status(400).json({ 
        success: false,
        error: 'El texto no puede estar vacío' 
      });
    }

    // Inicializar historial de conversación
    if (!conversationHistory.has(sessionId)) {
      conversationHistory.set(sessionId, []);
    }

    const history = conversationHistory.get(sessionId);

    // Construir contexto con historial
    const context = history.length > 0 
      ? `Historial de conversación:\n${history.slice(-6).map(msg => 
          `${msg.role}: ${msg.text}`
        ).join('\n')}\n\n`
      : '';
       const prompt = `Eres un asistente muy amable.

${context}
Usuario: "${text}"

Proporciona un análisis útil, sugerencias de mejora o respuestas relevantes basándote en el contexto de la conversación. si alguien saluda o es amable tu tambien `;

    const model = genAI.getGenerativeModel({ 
      model: 'gemini-1.5-flash',
      generationConfig: {
        temperature: 0.7,
        maxOutputTokens: 1500,
        topP: 0.9,
      }
    });

    const result = await model.generateContent(prompt);
    const responseText = result.response.text();

    // Actualizar historial
    history.push({ role: 'user', text: text.substring(0, 500) }); // Limitar longitud
    history.push({ role: 'assistant', text: responseText.substring(0, 500) });

    // Mantener máximo 10 intercambios
    if (history.length > 20) {
      conversationHistory.set(sessionId, history.slice(-20));
    }

    res.json({ 
      success: true,
      response: responseText,
      sessionId: sessionId
    });

  } catch (error) {
    console.error('💥 Error en el servidor:', error.message);
    
    res.status(500).json({ 
      success: false,
      error: 'Error procesando la solicitud',
      details: process.env.NODE_ENV === 'development' ? error.message : undefined
    });
  }
};