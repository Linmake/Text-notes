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
  z-index: 20;
  border-radius: 0.2rem;
  width: 4.3rem;
  height: 2.5rem;
  color: white;
  border: none;
  box-shadow: rgba(222, 222, 222, 0.15) 0px 2px 5px 0px, rgba(222, 222, 222, 0.15) 0px 1px 1px 0px;
  background-color: #2791e2ff;
`;

const Icon = styled(FontAwesomeIcon)`
  width: 3rem;
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