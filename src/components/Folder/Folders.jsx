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
  &.selected {
    background-color: #5a5a5a8a;
  }
  &.noSelected {
    background-color: transparent;
  }
`;

const FolderContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

const Folder = styled.div`
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  word-wrap: break-word;
  white-space: nowrap;
  border-radius: 0 !important;
  padding-left: 9%;
  width: 80%;
  box-sizing: border-box;
  vertical-align: middle;
`;

const ContainerTitle = styled.div`
  width: 11rem;
  display: flex;
  flex-direction: row;
  gap: 0.4rem;
  justify-content: center;
  align-items: center;
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
  cursor: pointer;
  color: #c6cccc;
  margin-right: 0.5rem;
`;

const MenuIcon = styled(FontAwesomeIcon)`
  margin-left: 0.5rem;
  padding: 0;
  color: rgb(195, 216, 225);
  font-size: 1.3rem;
  z-index: -100;
`;

const ContainerMenu = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.3rem;
  justify-content: center;
  align-items: center;
  border-radius: 0.2rem;
  position: relative;
  left: 25%;
  top: 25%;
  width: 8rem;
  height: 5rem;
  z-index: 10000000;
  background-color: #1F1F1F;
  border: 1px solid rgb(176, 176, 176);
`;

const DeleteIcon = styled(FontAwesomeIcon)`
  width: 2rem;
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
  color: rgb(25, 62, 78);
  &:hover {
    cursor: pointer;
  }
  &:active {
    cursor: pointer;
  }
`;

const EditFolderInput = styled.input`
  width: 65%;
  height: 98%;
  border: none;
  border-radius: 0.2rem;
  outline: none;
`;

const ContainerOptions = styled.div`
  display: flex;
  flex-direction: row;
  position: relative;
  left: 1%;
  width: 10rem;
  z-index: 10;
`;

const ContainerFile = styled.div`
  display: flex;
  flex-direction: row;
  gap: 0.4rem;
  justify-content: center;
  align-items: center;
`;

const ButtonEdit = styled.div`
  color: rgb(255, 255, 255);
  width: 100%;
  text-align: center;
  font-weight: 500;
  &:hover {
    cursor: pointer;
    background-color: #0078D4;
  }
  &:active {
    cursor: pointer;
    background-color: #0078D4;
  }
`;

const ButtonDelete = styled.div`
  color: rgb(255, 255, 255);
  font-weight: 500;
  width: 100%;
  text-align: center;
  &:hover {
    background-color: #0078D4;
    cursor: pointer;
  }
  &:active {
    cursor: pointer;
    background-color: #0078D4;
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
    setIdOptMenu(folderId);
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
    setEdit(false);
    setOptsMenu(false);
  };

  const handlerSaveEdit = async (event) => {
    if (event.keyCode !== 13) return;
    const { status } = await axios.put(
      `http://localhost:4000/project/edit/${Id}`,
      { Title: newTitle }
    );
    if (status !== 200) console.info("project no guardado");
    const projectsList = projects.filter((project) => project.Id !== Id);
    const editProject = projects.find((project) => project.Id == Id);
    const indexOrigProject = projects.indexOf(editProject);
    editProject.Title = newTitle;
    projectsList.splice(indexOrigProject, 0, editProject);
    setProjects(projectsList);
    setEdit(false);
    setOptsMenu(false);
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
          <FolderContainer>
            <Folder
              className={` folder ${
                selectedFolderIndex == index ? "selected" : "noSelected"
              }`}
              role="button"
            >
              <ContainerTitle>
                <Icon
                  icon={
                    selectedFolderIndex === index && statusSelectFolder
                      ? faChevronDown
                      : faChevronRight
                  }
                  className={`${
                    selectedFolderIndex === index ? "selected" : ""
                  }`}
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
                  <EditFolderInput
                    autoFocus
                    ref={refEditInput}
                    onChange={(e) => setNewTitle(refEditInput.current.value)}
                    onKeyDown={(e) => handlerSaveEdit(e)}
                    onBlur={(e) => handlerOnBlur(e)}
                  />
                )}
              </ContainerTitle>
              <ContainerFile>
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
              </ContainerFile>
            </Folder>
            <ContainerOptions>
              <MenuIcon
                title="Options"
                icon={faEllipsis}
                onClick={(e) => handlerOptsMenu(e, folder.Id)}
              />
              {optsMenu && idOptMenu == folder.Id ? (
                <ContainerMenu ref={refMenuContainer}>
                  <ButtonEdit title="Edit" onClick={(e) => handlerEdit(e)}>
                    {" "}
                    Edit{" "}
                  </ButtonEdit>
                  <ButtonDelete
                    title="Delete"
                    onClick={(e) => handlerDelete(e)}
                  >
                    {" "}
                    Delete{" "}
                  </ButtonDelete>
                </ContainerMenu>
              ) : (
                <></>
              )}
            </ContainerOptions>
          </FolderContainer>
        </LiFolder>
      ))}
    </Container>
  );
};
export default FolderList;
