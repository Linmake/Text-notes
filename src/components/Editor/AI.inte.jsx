import styled from "styled-components"
import { EditorFunctionsContext } from "../../context/editorFunctions";
import { useContext } from "react";


const BttnSend = styled.button`
  width: 70%;
  border-radius: 0.3rem;
  align-self: center;
  border: none;
  background-color: lightgreen;
  margin-top: 2.2rem;
  cursor: pointer;
`

const AIINte = () => {

    const { fileCurrent, setSaveFile } = useContext(EditorFunctionsContext);
    const handlerResume = () => {
        alert(fileCurrent?.Text)
    }

    return(
        <BttnSend onClick={e => handlerResume(e)} onSelect={e => handlerResume(e)}>
            Send
        </BttnSend>
    )
}

export default AIINte