import NewFileContent from './newFileContent';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styled from "styled-components";
import { navItem, navLink } from "./Hooks/themaStyled";
import { faFile } from '@fortawesome/free-solid-svg-icons';
import folders from '../../data/folders';
import { positionSideContext } from '@context/SideProv';
import { useContext } from 'react';
import PropTypes from 'prop-types';

export const UlFile = styled.ul`
  list-style: none;
`;

export const LiFile = styled.li`
  display: flex;
  border-left: 1px solid #66666694;
  margin-left: 8%;
  list-style: none;

  & > .nav-item {
    ${navItem}
  }

  & > .nav-link {
    ${navLink}
    
    &.selected {
      background-color: #5a5a5a67;
    }
    }
  &.hiddens {
    display: none;
  }
`;

export const File = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 0;
  align-items: baseline;
  margin-left: 3%;
  
  &.selected {
    background-color: #5a5a5a67;
  }
  &.noSelected {
    background-color: transparent;
  }
  
  &:hover {
    background-color: #5a5a5a2b;
  }
`;

export const InputFile = styled.input`
  outline: none;
  border: none;
  width: 70%;
  height: 5%;
  background-color: transparent;
  color: #fff;
  cursor: pointer;
  font-size: 1.3rem;
`;

export const FileList = ({ indexFolder }) => {
  const { selectedFolderIndex, statusSelectFile, setStatusSelectFile, selectedFileIndex, setSelectedFileIndex } = useContext(positionSideContext);
  const idFolderSelect = selectedFolderIndex;
  const folder = folders.find(folder => folder.id == idFolderSelect);
  const filesData = folder ? folder.files : [];

  const handlerSelectFile = (index) => {

    if (statusSelectFile && selectedFileIndex == index) {
      setStatusSelectFile(false)
      return
    }
    setStatusSelectFile(true)
    setSelectedFileIndex(index)
  }

  const handlerBlur = () => {
    setStatusSelectFile(false)
    setSelectedFileIndex(-1)
  }

  return (
    <UlFile className={`nav nav-pills flex-column ul-liFile ${(indexFolder !== selectedFolderIndex) ? 'hiddens' : ''} `}>
      <NewFileContent />
      {filesData.map((file, index) => (
        <LiFile className={`nav-item ${filesData.length === 0 ? 'hiddens' : ''} ${(indexFolder !== selectedFolderIndex) ? 'hiddens' : ''} ${index == selectedFileIndex ? "selected" : "noSelected"} `} key={file.id} id="liFile" onClick={() => handlerSelectFile(index)} onBlur={handlerBlur}>
          <File className="nav-link text-white file">
            <FontAwesomeIcon id="iconFolder" icon={faFile} />
            <InputFile
              readOnly
              value={file.titulo}
              id={file.titulo}
            />
          </File>
        </LiFile>
      ))}
    </UlFile>
  );
};

FileList.propTypes = {
  indexFolder: PropTypes.number.isRequired
}

