import { useState, createContext, useContext } from "react"
import PropTypes from "prop-types"

const EditorFunctions = createContext(true)

export function editorProvider = ({ children }){

  const [saveFile, setSaveFile] = useState(false)
  return (
    <EditorFunctions.Provider value={{ saveFile, setSaveFile }}>
      {children}
    </EditorFunctions.Provider>
  )

}

EditorFunctions.PropTypes = {
  children: PropTypes.node.isRequired,
}

export function useEditor() {
  return useContext(EditorFunctions)
}