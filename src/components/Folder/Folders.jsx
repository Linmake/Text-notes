import { useContext, useEffect, useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronRight,
  faChevronDown,
  faPenToSquare,
  faTrashAlt,
  faEllipsis,
} from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";
import { positionSideContext } from "../../context/SideProv";
import axios from "axios";
import { UseData } from "../../context/dataContext";
import { Files } from "../File/Files";
import { useParams } from "react-router-dom";
import styles from "../../styles/components/editor/FolderList.css";
import NewFile from "../File/NewFile";

const Container = styled.ul`
  margin-top: 3%;
  height: 12%;
`;
const LiFolder = styled.li`
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
const FolderContainer = styled.div`
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
  padding-left: 9%;
  width: 100%;
  cursor: pointer;
  box-sizing: border-box;
  vertical-align: middle;
  &:hover {
    background-color: rgba(183, 183, 183, 0.17);
  }
  &:active {
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
const MenuIcon = styled(FontAwesomeIcon)`
  width: 1.7rem;
  margin-right: 0.5rem;
  color: rgb(26, 79, 104);
  &:hover {
    cursor: pointer;
  }
  &:active {
    cursor: pointer;
  }
`;
const ContainerMenu = styled.div`
  display: flex;
  flex-direction: row;
  gap: 0.5rem;
  justify-content: center;
  align-items: center;
  border-radius: 0.2rem;
  position: relative;
  right: 42%;
  top: 85%;
  padding: 0.5rem;
  width: 5.5rem;
  height: 100%;
  z-index: 100;
  background-color: white;
  border: 1px solid grey;
`;
const DeleteIcon = styled(FontAwesomeIcon)`
  width: 1.5rem;
  color: rgb(247, 93, 76);
  &:hover {
    cursor: pointer;
  }
  &:active {
    cursor: pointer;
  }
`;
const EditIcon = styled(FontAwesomeIcon)`
  width: 1.5rem;
  color: rgb(102, 196, 240);
  &:hover {
    cursor: pointer;
  }
  &:active {
    cursor: pointer;
  }
`;
const NewFileContainer = styled.div``;
const FileContainer = styled.div``;
const FolderList = () => {
  const DbUrl = "http://localhost:4000";
  const { projectId } = useParams();
  const [openFo, setOpenFo] = useState(false);
  const [optsMenu, setOptsMenu] = useState(false);
  const [edit, setEdit] = useState(false);
  const [idOptMenu, setIdOptMenu] = useState(false);
  const refInput = useRef(null);
  const refEditInput = useRef(null);
  const refMenuContainer = useRef(null);

  const {
    selectedFolderIndex,
    setSelectedFolderIndex,
    setStatusSelectFolder,
    setAddNewFile,
    addNewFile,
    statusSelectFolder,
    setIdFolderSelect,
  } = useContext(positionSideContext);
  const { data, setOpenFolder, setFiles, openFolder, folders, setFolders } =
    UseData();

  useEffect(() => {
    const fetch = async () => {
      try {
        const { status, data } = await axios.get(
          `${DbUrl}/folder/all/${projectId}`,
          { withCredentials: true }
        );
        if (status == "200") setFolders(data);
      } catch (error) {
        console.error(error);
      }
    };
    fetch();
  }, [data, setFolders]);

  useEffect(() => {}, [setStatusSelectFolder, setSelectedFolderIndex]);

  const handlerSelectFolder = (index, id) => {
    const folder = folders.find((folder) => folder.Id == id);
    if (!folder) return;
    setIdFolderSelect(folder.Id);
    setOpenFolder(true);
    setFiles(folder.Files);
    if (statusSelectFolder && selectedFolderIndex === index) {
      setStatusSelectFolder(false);
      setSelectedFolderIndex("");
    }
    setStatusSelectFolder(true);
    setAddNewFile(false);
    setSelectedFolderIndex(index);
  };

  const handlerOptsMenu = (e, folderId) => {
    setOptsMenu(true);
    setIdOptMenu(folderId)
  };

  const handlerDelete = async (e) => {
    const { status } = await axios.delete(
      `http://localhost:4000/folder/delete/${projectId}/${Id}`
    );
    if (!status) return;
    const currentProjects = projects.filter((project) => project.Id !== Id);
    setProjects(currentProjects);
    setOptsMenu(false);
  };

  const handlerEdit = (e) => {
    setEdit(true);
    setOptsMenu(false);
  };

  const handlerOnBlur = (e) => {
    setEdit(false)
    setOptsMenu(false)
  }

  const handlerSaveEdit = async (event) => {
    if (event.keyCode !== 13) return;
    const { status } = await axios.put(
      `http://localhost:4000/project/edit/${Id}`,
      { Title: newTitle }
    );
    if (status !== 200) console.info("project no guardado");
    const projectsList = projects.filter((project) => project.Id !== Id);
    const editProject = projects.find( project => project.Id == Id )
    const indexOrigProject = projects.indexOf(editProject)
    editProject.Title = newTitle
    projectsList.splice(indexOrigProject, 0, editProject)
    setProjects(projectsList)
    setEdit(false)
    setOptsMenu(false)
  };


  return (
    <Container className="nav">
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
                className={`${selectedFolderIndex === index ? "selected" : ""}`}
                onClick={() => handlerSelectFolder(index, folder.Id)}
                role="button"
              />
              {!edit ? (
                <Title
                  id="folder.id"
                  className="input-folder"
                  value={folder.Title}
                  readOnly
                ></Title>
              ) : (
                <EditProjectInput
                  autoFocus
                  ref={refEditInput}
                  onChange={(e) => setNewTitle(refEditInput.current.value)}
                  onKeyDown={(e) => handlerSaveEdit(e)}
                  onBlur={(e) => handlerOnBlur(e)}
                />
              )}
              <MenuIcon
                title="Options"
                icon={faEllipsis}
                onClick={(e) => handlerOptsMenu(e, folder.Id)}
              />
              {(optsMenu && idOptMenu == folder.Id ) ? (
                <ContainerMenu ref={refMenuContainer}>
                  <EditIcon
                    title="Edit"
                    icon={faPenToSquare}
                    onClick={(e) => handlerEdit(e)}
                  />
                  <DeleteIcon
                    title="Delete"
                    icon={faTrashAlt}
                    onClick={(e) => handlerDelete(e)}
                  />
                </ContainerMenu>
              ) : (
                <></>
              )}
            </Folder>
            {/*file*/}
            {openFolder &&
              selectedFolderIndex === index &&
              (addNewFile ? (
                <NewFileContainer>
                  <NewFile key={folder.Id} IdFolder={folder.Id} />
                  <Files />
                </NewFileContainer>
              ) : (
                <FileContainer>
                  <Files />
                </FileContainer>
              ))}
          </FolderContainer>
        </LiFolder>
      ))}
    </Container>
  );
};
export default FolderList;
