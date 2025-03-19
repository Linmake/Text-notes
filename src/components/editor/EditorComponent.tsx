import HeaderEditorComponent from "../headers/HeaderEditorComponent"
import SideBar from "../sidebar/SideBar"
import QuillEditor from "./QuillEditor"

const EditorComponent: function = () => {
    return(
    <>
        <SideBar />
        <HeaderEditorComponent />
        <QuillEditor />
    </>
    )
}


export default EditorComponent