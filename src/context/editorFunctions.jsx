import { useState, createContext, useContext } from "react"
import PropTypes from "prop-types"

export const EditorFunctionsContext = createContext(true)

export function EditorProvider({ children }) {

  const [saveFile, setSaveFile] = useState(false)
  const [textEditor, setTextEditor] = useState("")

  return (
    <EditorFunctionsContext.Provider value={{ saveFile, setSaveFile, textEditor, setTextEditor }}>
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