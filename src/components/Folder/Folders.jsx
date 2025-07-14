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
  user-select: none;
  `;
  
  const ContainerTitle = styled.div`
  width: 100%;
  padding-left: 0.8rem !important;
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

const Icon = styled(FontAwesomeIcon)`
  cursor: pointer;
  color: #c6cccc;
  margin-right: 0.5rem;
`;

const ContainerMenu = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 0.2rem;
  position: absolute;
  right: 10px;
  top: 5px;
  width: 8rem;
  z-index: 1000000;
  background-color: #1f1f1f;
  border: 1px solid #3e3e3e;
  padding-top: 0.2rem;
  padding-bottom: 0.2rem;
  padding-left: 0.3rem;
  padding-right: 0.3rem;
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

const EditFolderInput = styled.input`
  width: 65%;
  height: 98%;
  border: none;
  border-radius: 0.2rem;
  outline: none;
`;

const ContainerFile = styled.div`
  display: flex;
  flex-direction: row;
  gap: 0.4rem;
  justify-content: center;
  align-items: center;
`;

const ButtonEdit = styled.div`
  border-radius: 0.2rem;
  color: rgb(255, 255, 255);
  width: 100%;
  text-align: center;
  font-weight: 500;
  &:hover {
    cursor: pointer;
    background-color: #0078d4;
  }
  &:active {
    cursor: pointer;
    background-color: #0078d4;
  }
`;

const ButtonDelete = styled.div`
  border-radius: 0.2rem;
  color: rgb(255, 255, 255);
  font-weight: 500;
  width: 100%;
  text-align: center;
  &:hover {
    background-color: #0078d4;
    cursor: pointer;
  }
  &:active {
    cursor: pointer;
    background-color: #0078d4;
  }
`;

const Title = styled.input`
  color: rgb(198, 251, 251);
  font-size: 1.1rem;
  cursor: pointer;
  outline: none;
  border: none;
  background: transparent;
`;

const EditTitle = styled.input`
  color: rgb(224, 198, 251);
  font-size: 1.1rem;
  cursor: pointer;
  outline: none;
  border: none;
  background: transparent;
`;

const ContainerButtonEdit = styled.div`
  width: 100%;
  border-bottom: 1px solid #3e3e3e;
  padding: 0.2rem;
`;

const ContainerButtonDelete = styled.div`
  width: 100%;
  padding: 0.2rem;
`;

const NewFileContainer = styled.div``;
const FileContainer = styled.div``;
const FolderList = () => {
  const DbUrl = "http://localhost:4000";
  const { projectId } = useParams();
  const [optsMenu, setOptsMenu] = useState(false);
  const [edit, setEdit] = useState(false);
  const [idOptMenu, setIdOptMenu] = useState(null);
  const refEditInput = useRef(null); 
  const refMenuContainer = useRef(null);
  const [newTitle, setNewTitle] = useState(null);

  const {
    selectedFolderIndex,
    setSelectedFolderIndex,
    setStatusSelectFolder,
    setAddNewFile,
    addNewFile,
    statusSelectFolder,
    setIdFolderSelect,
    idFolderSelect,
  } = useContext(positionSideContext);
  const { data, setOpenFolder, setFiles, files, openFolder, folders, setFolders } =
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

  useEffect(() => {
    const handlerOutMenu = (event) => {
      const menu = refMenuContainer.current;
      if (menu && !menu.contains(event.target)) {
        setOptsMenu(false);
      }
    };
    document.addEventListener("click", handlerOutMenu, true);
    document.addEventListener("contextmenu", handlerOutMenu, true);
    return () => {
      document.removeEventListener("click", handlerOutMenu, true);
      document.removeEventListener("contextmenu", handlerOutMenu, true);
    };
  }, [setOptsMenu]);

  useEffect(() => {}, [statusSelectFolder]);

  const handlerSelectFolder = (e, index, id) => {
    console.clear()
    const folder = folders.find((folder) => folder.Id == id);
    if (!folder) return;
    
    if(idFolderSelect === folder.Id && statusSelectFolder) {
      setOpenFolder(false);
      setStatusSelectFolder(false);
      setSelectedFolderIndex("");
      return;
    }

    setIdFolderSelect(folder.Id);
    setOpenFolder(true);
    setFiles(folder.Files); /** Set Files */
    console.log(files)
    if (statusSelectFolder && selectedFolderIndex === index) {
      setStatusSelectFolder(false);
      setSelectedFolderIndex("");
    }
    setStatusSelectFolder(true);
    setAddNewFile(false);
    setSelectedFolderIndex(index);
  };

  const handlerOptsMenu = (e, folderId) => {
    e.stopPropagation()
    e.preventDefault()
    const stringStyles = ContainerMenu.componentStyle.rules.join(";")
    const newStylesStr = stringStyles.concat(`left: ${e.pageX + 35}px; top: ${((e.pageY)-60)}px;`)
    ContainerMenu.componentStyle.rules[0] = newStylesStr
    setOptsMenu(true);
    setIdOptMenu(folderId);
  };

  const handlerEdit = (folderId) => {
    setEdit(true);
    setOptsMenu(false);
  };

  useEffect(() => {}, [setEdit, setNewTitle]);

  const handlerDelete = async (e, FolderId) => {
    const { status } = await axios.delete(
      `http://localhost:4000/folder/delete/${projectId}/${FolderId}`
    );
    if (!status) return;
    const currentFolders = folders.filter((folder) => folder.Id !== FolderId);
    setFolders(currentFolders);
    setOptsMenu(false);
  };

  const handlerOnBlur = (e) => {
    setEdit(false);
    setOptsMenu(false);
  };

  const handlerSaveEdit = async (event, FolderId) => {
    if (event.keyCode !== 13) return;
    const { status } = await axios.put(
      `http://localhost:4000/folder/edit/${projectId}/${FolderId}`,
      { Title: newTitle },
      { withCredentials: true }
    );
    if (status !== 200) console.info("Folder don't save");
    const folder = folders.find((folder) => folder.Id == FolderId);
    const newFolder = folders.find((folder) => folder.Id == FolderId);
    newFolder.Title = newTitle;
    const indexFolder = folders.findIndex((folder) => folder.Id == FolderId);
    const filterFolders = folders.filter((folder) => folder.Id !== FolderId);
    const newFolders = [...filterFolders];
    newFolders.splice(indexFolder, 0, newFolder);
    setFolders(newFolders);
    setEdit(false);
    setNewTitle(refEditInput.current.value);
    setOptsMenu(false);
  };
 
  return (
    <Container className="nav">
      {folders.map((folder, index) => (
        <LiFolder
          className="nav-item liFolder"
          key={index}
          role="button"
        >
          <FolderContainer>
            <Folder
              className={` folder ${
                selectedFolderIndex == index ? "selected" : "noSelected"
              }`}
              role="button"
              >
              <ContainerTitle
                onClick={(e) => handlerSelectFolder(e, index, folder.Id)}
                onContextMenu={(e) => handlerOptsMenu(e, folder.Id)}
              >
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
                {edit && idOptMenu == folder.Id ? (
                  <EditTitle
                    id="folder.id"
                    className="input-folder"
                    ref={refEditInput}
                    onChange={() => setNewTitle(refEditInput.current.value)}
                    onKeyDown={(e) => handlerSaveEdit(e, folder.Id)}
                    onBlur={(e) => handlerOnBlur(e)}
                    autoFocus
                  />
                ) : (
                  <Title
                    id="folder.id"
                    className="input-folder"
                    value={folder.Title}
                    readOnly
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
              {optsMenu && idOptMenu == folder.Id ? (
                <ContainerMenu 
                  ref={refMenuContainer}
                >
                  <ContainerButtonEdit>
                    <ButtonEdit
                      title="Edit"
                      onClick={() => handlerEdit(folder.Id)}
                    >
                      Rename
                    </ButtonEdit>
                  </ContainerButtonEdit>

                  <ContainerButtonDelete>
                    <ButtonDelete
                      title="Delete"
                      onClick={(e) => handlerDelete(e, folder.Id)}
                    >
                      Delete
                    </ButtonDelete>
                  </ContainerButtonDelete>
                </ContainerMenu>
              ) : (
                <></>
              )}
          </FolderContainer>
        </LiFolder>
      ))}
    </Container>
  );
};
export default FolderList;