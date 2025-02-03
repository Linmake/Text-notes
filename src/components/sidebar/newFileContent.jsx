import { faFile } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styled from 'styled-components';
import { navItem, navLink } from './Hooks/themaStyled';
import { useContext, useEffect, useRef } from 'react';
import { positionSideContext } from '../../context/SideProv';
import { DataProvider } from '../../context/dataContext'
import { UseData } from '../../context/dataContext';
import { v4 as uuidV4 } from 'uuid';

export const Li = styled.li`
list-style: none;
margin-left: 8%;
& > .nav-link {
  ${navItem}
}
& > .nav-item {
  ${navLink}
}
&.hidde{
display: none;
}
`
export const InputFile = styled.input`
  width: 100%;
  background-color: #5e5e5f;
  outline: none;
  border: none;
  color: azure;
  font-size: 1.3rem;
`

const NewFileContent = () => {
  const inputRefNewFile = useRef(null);
  const inputRefNewFolder = useRef(null);

  const {
    addNewFile,
    setAddNewFile,
    selectedFolderIndex,
    statusSelectFolder
  } = useContext(positionSideContext);

  const { folders, setFolders } = UseData()

  useEffect(() => {

    if (addNewFile) {
      inputRefNewFile.current.focus();
    }
    if (statusSelectFolder) {
      inputRefNewFile.current.focus();
      return
    }
  }, [addNewFile, inputRefNewFile]);

  /**
   * Guarda la creacion de un file con la tecla Enter, una vez ingresado el nombre
   * @param {*} e 
   * @returns file nuevo 
   */
  const handlerNewFiles = (e) => {
    if (e.keyCode !== 13) {
      return;
    }
    const newFile = {
      id: uuidV4(),
      titulo: inputRefNewFile.current.value,
      texto: ""
    };

    const idFolderSelect = selectedFolderIndex;

    const folder = folders.find(
      folder => folder.id === idFolderSelect
    )

    if (!folder) {
      console.error(`Folder with id ${idFolderSelect} not found.`);
      return;
    }
    const filesList = folder.files;
    filesList.push(newFile);
    inputRefNewFile.current.value = "";
    setAddNewFile(false);
  };

  const inputFileOnBlur = () => {
    const newFileName = inputRefNewFile.current.value
    if (addNewFile) {
      setAddNewFile(false)
      return
    }

    if (newFileName.length === 0) {
      setAddNewFile(false)
      return
    }
    return
  }


  return (
    <Li className={`nav-item ${(addNewFile) ? '' : 'hidde'}`}>
      <div className="nav-link text-white">
        <FontAwesomeIcon id="iconFolder" icon={faFile} />
        <span className="fs-4 d-none d-sm-inline fa-table-list newFileInp">
          <InputFile
            ref={inputRefNewFile} type="text"
            id="newFileInp"
            onKeyDown={e => handlerNewFiles(e)}
            onblur={inputFileOnBlur}

          />
        </span>
      </div>
    </Li >
  );
}

export default NewFileContent