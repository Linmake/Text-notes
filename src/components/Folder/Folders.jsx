import { useContext, useEffect, useState } from "react";
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
  padding-left: 8%;
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
const NewFileContainer = styled.div``;
const FileContainer = styled.div``;
const FolderList = () => {
  const DbUrl = "http://localhost:4000";
  const { projectId } = useParams();
  const [openFo, setOpenFo] = useState(false)
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
  useEffect(() => {}, [setStatusSelectFolder, setSelectedFolderIndex]);
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
              <Title
                id="folder.id"
                className="input-folder"
                value={folder.Title}
                readOnly
              ></Title>
            </Folder>
            {/*file*/}
            {openFolder &&
              selectedFolderIndex === index &&
              (addNewFile ? (
                <NewFileContainer>
                  <NewFile key={folder.Id} IdFolder={folder.Id} />
                  <FileList />
                </NewFileContainer>
              ) : (
                <FileContainer>
                  <FileList />
                </FileContainer>
              ))}
          </FolderContainer>
        </LiFolder>
      ))}
    </Container>
  );
};
export default FolderList;
