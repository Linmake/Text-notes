import { faCloud } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios"
import { useContext, useRef } from "react";
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


    const handlerSave = async () => {
        if (fileCurrent && fileCurrent !== "") {
            const newFile = {
                Id: fileCurrent.Id,
                IdFolder: idFolderSelect,
                Title: fileCurrent.Title,
                Text: quillRef.getText().trim() // Now accessing the ref correctly
            }
            try {
                const { status } = await axios.put('http://localhost:4000/file/edit-text/', {
                    Text: quillRef.getText().trim(),
                    Id: fileCurrent.Id
                })
                if (status !== 200) return;
                setFileCurrent(newFile)
                const folder = folders.find(folder => folder.Id === newFile.IdFolder);
                if (!folder) {
                    console.error("Folder not found for the current file.");
                    return;
                }
                const fileOnFolder = folder.Files.find(file => file.Id === newFile.Id);
                if (!fileOnFolder) {
                    console.error("File not found in the folder.");
                    return;
                }
                
                console.log(fileOnFolder.Title);

            } catch (error) {
                console.error("Error en la solicitud PATCH:", error);
            }
        } else {
            //si no esta seleccionado ningun file se crea el file dentro de la primer folder del primer project
            //si esta seleccionado un project pero no el folder se crea dentro del primer folder del project
            //si esta seleccionado un project y un folder se crea dentro de estos con este Text
        }
    }

    return (<SaveBttn onClick={handlerSave}> <Icon icon={faCloud}></Icon> </SaveBttn>)
}

export default SaveFileBttn;