import { faCloud } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios"
import { useContext, useEffect, useRef } from "react";
import styled from "styled-components";
import { EditorFunctionsContext } from "../../context/editorFunctions";
import { UseData } from "../../context/dataContext";
import { positionSideContext } from "../../context/SideProv";

const SaveBttn = styled.button`
position: absolute;
top: 1.6%;
left: 73%;
width: 4.4rem;
z-index: 20;
border-radius: 5%;
width: 4%;
height: 5%;
color: white;
border: none;
background-color: #2791e2ff;
`

const Icon = styled(FontAwesomeIcon)`
  width: 2rem;
`

const SaveFileBttn = ({ quillRef }) => {
    const {
        fileCurrent,
        setFileCurrent
    } = useContext(EditorFunctionsContext);

    const { data, setOpenFolder, setFiles, files, openFolder, folders, setFolders } = UseData();

    const {
        idFolderSelect
    } = useContext(positionSideContext);

    useEffect(() => {}, [setFiles])


    const handlerSave = async () => {
        if (fileCurrent && fileCurrent !== "") {
            const newFile = {
                Id: fileCurrent.Id,
                IdFolder: idFolderSelect,
                Title: fileCurrent.Title?.replace(/[^a-zA-Z0-9\s]/g, "") ?? "Untitled",
                Text: quillRef.getText().trim(),
                UserId: "User"
            }
            try {
                const editText = await axios.put('http://localhost:4000/file/edit-text/', {
                    Text: quillRef.getText().trim(),
                    Id: fileCurrent.Id
                })
                if (editText.status !== 200) return;
                const folder = folders.find(folder => folder.Id === newFile.IdFolder);
                const getFolders = await axios.get(`http://localhost:4000/folder/all/${folder.ProjectId}`, { withCredentials: true });
                if (getFolders.status !== 200) return;
                // setFolders([...folders, folder])
                if (!folder) {
                    console.error("Folder not found for the current file.");
                    return;
                }
                const file = folder.Files.find(file => file.Id === newFile.Id);
                if (!file) {
                    console.error("File not found in the folder.");
                    return;
                }
                // const remainingFiles = folder.Files.filter(file => file.Id !== fileCurrent.Id)
                // const newEditedFiles = [...remainingFiles, fileCurrent]
                setFileCurrent(newFile)
                const filesInFolder =  await axios.get(`http://localhost:4000/file/get/${folder.Id}`, { withCredentials: true })
                setFiles(filesInFolder.data)
            } catch (error) {
                console.error("Error en la solicitud PATCH:", error);
            }
        } else {
            console.info("not select any file for save text")
            //si esta seleccionado un project pero no el folder se crea dentro del primer folder del project
            //si esta seleccionado un project y un folder se crea dentro de estos con este Text
        }
    }

    return (<SaveBttn onClick={handlerSave}> <Icon icon={faCloud}></Icon> </SaveBttn>)
}

export default SaveFileBttn;