import { faFolderBlank } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useContext, useEffect, useRef } from 'react';
import { positionSideContext } from '../../context/SideProv';
import styled from 'styled-components';
import { navItem, navLink } from './Hooks/themaStyled';
import { getDate } from './Hooks/date'
import { UseData } from '../../context/dataContext';
import { v4 as uuidV4 } from 'uuid';
import axios from 'axios';

export const Li = styled.li`
list-style: none;
  &.hiddens {
    display: none;
  }
  &>.nav-item {
    ${navItem}
  }
  & > .nav-link {
    ${navLink}
  }
`;
export const InputFolder = styled.input`
  width: 100%;
  background-color: #5e5e5f;
  outline: none;
  border: none;
  color: azure;
`
const NewFolderContent = () => {
  const { data, folders, setFolders } = UseData();
  const inputRefNewFolder = useRef(null);
  const {
    addNewFolder,
    setAddNewFolder,
    setProjectVoid
  } = useContext(positionSideContext);

  const { project } = UseData()

  useEffect(() => {
    if (addNewFolder) {
      inputRefNewFolder.current.focus();
    }
  }, [addNewFolder]);

  /**
   * Guarda la creacion de un folder con la tecla Enter, una vez ingresado el nombre
   * @param {*} event 
   * @returns folder nuevo 
   */
  const handlerNewFolders = async (event) => {
    if (event.keyCode !== 13) {
      return;
    }
    if (inputRefNewFolder.current.value === "") {
      setAddNewFolder(false);
      return;
    }
    const newFolder = {
      Id: uuidV4(),
      Title: inputRefNewFolder.current.value,
      Void: true,
      Date: getDate,
      Files: [],
      IdProyect: data.key
    }
    try {
      const resFolders = await axios.post(`http://localhost:4000/folder/create/${project.Id}`, newFolder);
      setFolders([...folders, newFolder])
      inputRefNewFolder.current.value = "";
      setAddNewFolder(false);
      setProjectVoid(false);
      return resFolders;
    } catch (error) {
      console.error(error);
    }
    // project.Folders.push(newFolder)
  };


  const inputFolderOnBlur = () => {
    const newFolder = inputRefNewFolder.current.value;

    if (newFolder === "") {
      setAddNewFolder(false);
      if (folders.length === 0) {
        setProjectVoid(true);
        return;
      }
      return;
    } else {
    }
  };
  return (
    <Li className={`nav-item ${addNewFolder ? '' : 'hiddens'}`}>
      <div className="nav-link text-white">
        <FontAwesomeIcon id="iconFolder" icon={faFolderBlank} />
        <span className="fs-4 d-none d-sm-inline fa-table-list">
          <InputFolder
            ref={inputRefNewFolder}
            type="text"
            id="newFolderInp"
            onKeyDown={e => handlerNewFolders(e)}
            onBlur={inputFolderOnBlur}
          />
        </span>
      </div>
    </Li>
  );
};
export default NewFolderContent;