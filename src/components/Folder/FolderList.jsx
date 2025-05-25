import { useContext, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronRight,
  faChevronDown,
} from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";
import { positionSideContext } from "../../context/SideProv";
import axios from "axios";
import { UseData } from "../../context/dataContext";
import { FileList } from "../File/FileList";
import { useNavigate, useParams } from "react-router-dom";
import NewFileContent from "../File/NewFileComponent";
import styles from "../../styles/components/editor/FolderList.css";

const FoldersContainer = styled.ul`
  margin-top: 3%;
  height: 12%;
`;

export const LiFolder = styled.li`
  width: 100%;
  box-sizing: border-box;
  align-items: center;
  &.selected {
    background-color: #5a5a5a8a;
  }
  &.noSelected {
    background-color: transparent;
  }
`;

export const FolderContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const Folder = styled.div`
  box-sizing: border-box;
  gap: 3%;
  display: flex;
  word-wrap: break-word;
  white-space: nowrap;
  text-align: center;
  align-items: center;
  border-radius: 0 !important;
  padding-left: 8%;
  width: 100%;
  cursor: pointer;
  box-sizing: border-box;
  vertical-align: middle;
  &:hover {
    background-color: rgba(183, 183, 183, 0.17);
  }
`;

const Title = styled.input`
  color: #c1cccc;
  font-size: 1.1rem;
  cursor: pointer;
  outline: none;
  border: none;
  background: transparent;
`;

const Icon = styled(FontAwesomeIcon)`
  cursor: pinter;
  color: #c6cccc;
`;

/**
 * Componente que despliega la lista de los Folders desde la bd
 * @returns Lista de Folders
 */
const FolderList = () => {
  const DbUrl = "http://localhost:4000";
  const { projectId } = useParams();

  const {
    selectedFolderIndex,
    setSelectedFolderIndex,
    setStatusSelectFolder,
    setAddNewFile,
    addNewFile,
    statusSelectFolder,
    idFolderSelect,
    setIdFolderSelect,
  } = useContext(positionSideContext);

  const { 
    data,
    setOpenFolder,
    setFiles, 
    openFolder, 
    folders, 
    setFolders
   } = UseData();

  useEffect(() => {
    const getFolders = async () => {
      try {
        const res = await axios({
          url: `${DbUrl}/folder/all/${projectId}`,
          method: "GET",
        });
        return res;
      } catch (error) {
        console.error(
          new Error(
            `Server status code: (${res.status}, ${res.statusText}), ${res.data}`
          )
        );
        return;
      }
    };
    const fetchData = async () => {
      const resFetch = await getFolders();
      if (resFetch.status == "200") {
        setFolders(resFetch.data);
      }
    };

    fetchData();
  }, [data, setFolders]);

  const navigateFolder = useNavigate();
  const cleanSamePath = () => {
    let currentPath = window.location.pathname;
    let segments = currentPath.split("/").filter(Boolean); // Divide en segmentos
    if (segments.length > 2) {
      segments.pop(); // Elimina el penúltimo segmento
      segments.pop(); // Elimina el último segmento
      let newPath = `/${segments.join("/")}`; // Une de nuevo en formato de URL
      navigateFolder(newPath, { replace: true }); // Reemplaza en la historia del navegador
    } else {
      navigateFolder(`/${segments.join("/")}`, { replace: true }); // Mantiene la URL base
    }
  };

  const changePath = (currentPath) => {
    let segments = currentPath.split("/").filter(Boolean); // Divide en segmentos
    if (segments.length <= 2) {
      return currentPath;
    }
    segments.pop(); // Elimina el último segmento
    let newPath = `/${segments.join("/")}`; // Une de nuevo en formato de URL
    return newPath;
  };

  const handlerSelectFolder = (index, id) => {
    const folder = folders.find((folder) => folder.Id == id);
    if (!folder) {
      return;
    }
    setIdFolderSelect(folder.Id);
    setOpenFolder(true);
    setFiles(folder.Files);

    if (statusSelectFolder && selectedFolderIndex === index) {
      setStatusSelectFolder(false);
      setSelectedFolderIndex("");
    } else {
      setStatusSelectFolder(true);
      setAddNewFile(false);
      setSelectedFolderIndex(index);
    }
    return;
  };
  return (
    <FoldersContainer className="nav">
      {folders.map((folder, index) => (
        <LiFolder
          className="nav-item liFolder"
          key={index}
          onClick={() => handlerSelectFolder(index, folder.Id)}
          role="button"
        >
          <FolderContainer className="text-white" role="button">
            <Folder
              className={` folder ${
                selectedFolderIndex == index ? "selected" : "noSelected"
              }`}
              role="button"
            >
              <Icon
                icon={
                  selectedFolderIndex === index && statusSelectFolder
                    ? faChevronDown
                    : faChevronRight
                }
                className={` ${
                  selectedFolderIndex === index ? "selected" : ""
                }`}
                onClick={() => handlerSelectFolder(index, folder.Id)}
                role="button"
              />
              <Title
                id="folder.id"
                className="input-folder"
                value={folder.Title}
                readOnly
              ></Title>
            </Folder>
            {openFolder && selectedFolderIndex === index && (
              <>
                <NewFileContent
                  className={`nav-item ${addNewFile ? "" : "hidde"}`}
                  key={"InputNewFile"}
                  IdFolder={folder.Id}
                />
                <FileList />
              </>
            )}
          </FolderContainer>
        </LiFolder>
      ))}
    </FoldersContainer>
  );
};
export default FolderList;