import { faCloud } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import { useContext, useEffect } from "react";
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
`;

const Icon = styled(FontAwesomeIcon)`
  width: 2rem;
`;

const SaveFileBttn = ({ quillRef }) => {
  const { fileCurrent, setFileCurrent, setQuillReference } = useContext(EditorFunctionsContext);
  const { setFiles, files, folders } = UseData();
  const { idFolderSelect } = useContext(positionSideContext);

  useEffect(() => {}, [setFiles]);

  const handlerSave = async () => {
    if (!fileCurrent || !fileCurrent.Id) {
      console.info("No file selected to save.");
      return;
    }

    const currentText = quillRef.current?.getText()?.trim();

    if (currentText === undefined) {
      console.warn("Editor is empty or not ready.");
      return;
    }

    const newFile = {
      ...fileCurrent,
      Text: currentText,
    };

    try {
      const editText = await axios.put(
        "http://localhost:4000/file/edit-text/",
        { Text: currentText, Id: fileCurrent.Id },
        { withCredentials: true }
      );

      if (editText.status !== 200) return;

      const folder = folders.find((folder) => folder.Id === idFolderSelect);
      if (!folder) {
        console.error("Folder not found for the current file.");
        return;
      }

      const getFolders = await axios.get(
        `http://localhost:4000/folder/all/${folder.ProjectId}`,
        { withCredentials: true }
      );

      if (getFolders.status !== 200) return;

      setFileCurrent(newFile);

      const { data } = await axios.get(
        `http://localhost:4000/file/all/${idFolderSelect}`,
        { withCredentials: true }
      );

      setFiles(data);
      setQuillReference(quillRef);
    } catch (error) {
      console.error("Error updating file:", error);
    }
  };

  return (
    <SaveBttn onClick={handlerSave}>
      <Icon icon={faCloud} />
    </SaveBttn>
  );
};

export default SaveFileBttn;