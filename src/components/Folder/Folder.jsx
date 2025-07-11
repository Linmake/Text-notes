import {
  faChevronDown,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";
import { UseData } from "../../context/dataContext";
import { useContext } from "react";
import { positionSideContext } from "../../context/SideProv";

const Icon = styled(FontAwesomeIcon)`
  cursor: pointer;
  color: #c6cccc;
`;

const FolderContent = styled.div`
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

const Folder = ({
  folder,
  index,
}) => {

  const { 
    setOpenFolder, 
    setFiles, 
    folders, 
} = UseData();

  const {
    selectedFolderIndex,
    setSelectedFolderIndex,
    setStatusSelectFolder,
    setAddNewFile,
    statusSelectFolder,
    setIdFolderSelect,
  } = useContext(positionSideContext);

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
    <Folder
        className={`folder liFolder ${
            selectedFolderIndex == index ? "selected" : "noSelected"
        }`}
        role="button"
    >
      <Icon
        icon={
          selectedFolderIndex == index && statusSelectFolder
            ? faChevronDown
            : faChevronRight
        }
        className={` ${selectedFolderIndex == index ? "selected" : ""}`}
        onClick={() => handlerSelectFolder(index, folder.Id)}
        role="button"
      />
      <Title
        id={folder.Title}
        className="input-folder"
        value={folder.Title}
        readOnly
      ></Title>
    </Folder>
  );
};
export default Folder;