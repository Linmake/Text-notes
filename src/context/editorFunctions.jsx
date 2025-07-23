import { useState, createContext, useContext } from "react"
import PropTypes from "prop-types"

export const EditorFunctionsContext = createContext(true)

export function EditorProvider({ children }) {

  const [saveFile, setSaveFile] = useState(false)
  const [textEditor, setTextEditor] = useState("")
  const [fileCurrent, setFileCurrent] = useState("")
  const [quillReference, setQuillReference] = useState("")

  return (
    <EditorFunctionsContext.Provider value={{ saveFile, setSaveFile, textEditor, setTextEditor, fileCurrent, setFileCurrent, quillReference, setQuillReference }}>
      {children}
    </EditorFunctionsContext.Provider>
  )

}

EditorFunctionsContext.PropTypes = {
  children: PropTypes.node.isRequired,
}

export function useEditor() {
  return useContext(EditorFunctionsContext)
}