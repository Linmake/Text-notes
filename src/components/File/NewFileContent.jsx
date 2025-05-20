import { faFile } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styled from 'styled-components';
import { navItem, navLink } from "../Hooks/themaStyled";
import { useContext, useEffect, useRef } from 'react';
import { positionSideContext } from '../../context/SideProv';
import { useNewFile } from './Hook/useNewFile';
export const Ul = styled.ul`
list-style: none;
margin-top: 5%;
margin-bottom: 5%;
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
  height: 2rem;
  background-color:#313131;
  outline: none;
  border: 1px solid #0466B0;
  color: azure;
  font-size: 1rem;
  border-radius: 3px;
`
const NewFileContent = () => {
  const inputRefNewFile = useRef(null);
  const {
    addNewFile,
    setAddNewFile,
    idFolderSelect,
    statusSelectFolder
  } = useContext(positionSideContext);
  const {
  } = useNewFile()
  useEffect(() => {
    if (addNewFile) {
      inputRefNewFile.current.focus();
    }
    if (!statusSelectFolder) {
      setAddNewFile(false)
    }
  }, [addNewFile, inputRefNewFile, statusSelectFolder]);
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
            onKeyDown={event => useNewFile(event)}
          />
        </span>
      </div>
    </Ul >
  );
}
export default NewFileContent