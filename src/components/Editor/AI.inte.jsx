import styled from "styled-components"
import { EditorFunctionsContext } from "../../context/editorFunctions";
import { useContext, useState } from "react";
import { UseData } from "../../context/dataContext";
import axios from "axios";

const BttnSend = styled.button`
  width: 70%;
  border-radius: 0.3rem;
  align-self: center;
  border: none;
  background-color: lightgreen;
  margin-top: 2.2rem;
  cursor: pointer;
  padding: 0.5rem;
  font-weight: 500;
  font-size: 1.2rem;
  
  &:hover {
    background-color: #75d475;
  }
`

const ResponseContainer = styled.div`
  margin-top: 1rem;
  padding: 1rem;
  border: 1px solid #ddd;
  border-radius: 0.5rem;
  background-color: #f9f9f9;
  max-height: 200px;
  overflow-y: auto;
`

const ResponseText = styled.p`
    color: darkgrey;
    font-size: 1.1rem;
    font-family: monospace;
`

const AIINte = () => {
    const { fileCurrent } = useContext(EditorFunctionsContext);
    const [response, setResponse] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
      const {sheets, setSheets} = UseData()

    const callAssistantTest = () =>{
        alert(fileCurrent.Text)
    }

    const callAssistant = async () => {
        if (!fileCurrent.Text || fileCurrent.Text.trim() === '') {
            alert('Por favor, ingresa algún texto primero');
            return;
        }

        setLoading(true);
        setError('');
        setResponse('');

        try {
            const res = await axios.post("http://localhost:4000/assistant/resume", {
                text: fileCurrent.Text,
                sessionId: fileCurrent?.id || 'default-session',
                sheets: sheets
            });

            console.log('Respuesta del servidor:', res.data);
            
            if (res.data.success) {
                setResponse(res.data.response);
            } else {
                setError(res.data.error || 'Error desconocido');
            }

        } catch (error) {
            console.error('Error en la petición:', error);
            setError(error.response?.data?.error || 'Error de conexión con el servidor');
        } finally {
            setLoading(false);
        }
    }

    return (
        <div>
            <BttnSend onClick={e => callAssistant(e)}>
                {loading ? 'Procesando...' : 'Resumir'}
            </BttnSend>

            {error && (
                <ResponseContainer style={{ color: 'red', borderColor: 'red' }}>
                    <strong>Error:</strong> {error}
                </ResponseContainer>
            )}

            {response && (
                <ResponseContainer>
                    <strong>Respuesta del AI:</strong>
                    <ResponseText>{response}</ResponseText>
                </ResponseContainer>
            )}
        </div>
    )
}

export default AIINte;