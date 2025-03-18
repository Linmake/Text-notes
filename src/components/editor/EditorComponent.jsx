import HeaderEditorComponent from "../headers/HeaderEditorComponent"
import SideBar from "../sidebar/SideBar"
import QuillEditor from "./QuillEditor"

const EditorComponent = () => {
    return(
    <>
        <SideBar />
        <HeaderEditorComponent />
        <QuillEditor />
    </>
    )
}


export default EditorComponent