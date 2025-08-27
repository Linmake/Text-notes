// Controlador temporal de prueba
export const testController = async (req, res) => {
  console.log('✅ Ruta /assistant/resume alcanzada');
  console.log('📦 Body recibido:', req.body);
  console.log('🔑 API Key presente:', !!process.env.GOOGLE_API_KEY);
  
  return res.json({ 
    message: 'Ruta funcionando', 
    receivedText: req.body.text,
    apiKeyPresent: !!process.env.GOOGLE_API_KEY,
    timestamp: new Date().toISOString()
  });
};