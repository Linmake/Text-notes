import { faFile } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styled from 'styled-components';
import { navItem, navLink } from './Hooks/themaStyled';
import { useContext, useEffect, useRef } from 'react';
import { positionSideContext } from '../../context/SideProv';
import { DataProvider } from '../../context/dataContext'
import { UseData } from '../../context/dataContext';
import { v4 as uuidV4 } from 'uuid';

import axios from 'axios';

export const Ul = styled.ul`
list-style: none;
margin-left: 8%;
& > .nav-link {
  ${navItem}
}
& > .nav-item {
  ${navLink}
}
& > .hidde {
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

  const {
    addNewFile,
    setAddNewFile,
    idFolderSelect,
    statusSelectFolder
  } = useContext(positionSideContext);

  const { folders, files, setFolders, setFiles } = UseData()

  useEffect(() => {

    if (addNewFile) {
      inputRefNewFile.current.focus();
    }
    if (!statusSelectFolder) {
      setAddNewFile(false)
    }

  }, [addNewFile, inputRefNewFile, statusSelectFolder]);

  /**
   * Guarda la creacion de un file con la tecla Enter, una vez ingresado el nombre
   * @param {*} e 
   * @returns file nuevo 
   */
  const handlerNewFiles = async (event) => {
    setAddNewFile(true);

    if (event.keyCode !== 13) {
      return;
    } else {

      const IdFolder = idFolderSelect;

      const folder = folders.find(
        folder => folder.Id === IdFolder
      )

      if (!folder) {
        console.error(`Folder with id ${IdFolder} not found.`);
        return;
      }

      const newFile = {
        Id: uuidV4(),
        FolderId: folder.Id,
        Title: inputRefNewFile.current.value,
        Text: " "
      };

      const filesList = folder.Files;

      try {
        const resFiles = await axios.post(`http://localhost:4000/file/create`, newFile)
        setFiles([...filesList, newFile])
        inputRefNewFile.current.value = "";
        filesList.push(newFile);
        setAddNewFile(false);
        return resFiles
      } catch (error) {
        console.error(error);
      }
    };

    const NewFileOnBlur = () => {
      setAddNewFile(false)
      const newFileName = inputRefNewFile.current.value
      if (newFileName === "" || newFileName.lentgh == 0) {
        setAddNewFile(false)
      }
      return
    }
  }

  return (
    <Ul 
    className={
      `nav-item ${(addNewFile) ? '' : 'hidde'}`
    }>
      <div className="nav-link text-white">
        <FontAwesomeIcon id="iconFolder" icon={faFile} />
        <span className="fs-4 d-none d-sm-inline fa-table-list newFileInp">
          <InputFile
            ref={inputRefNewFile} 
            type="text"
            id="newFileInp"
            onKeyDown={event => handlerNewFiles(event)}
          />
        </span>
      </div>
    </Ul >
  );
}

export default NewFileContent