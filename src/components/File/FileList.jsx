import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFile } from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";
import { navItem, navLink } from "../Hooks/themaStyled";
import { UseData } from '../../context/dataContext';
import { useContext } from 'react'
import { positionSideContext } from '../../context/SideProv'
import { EditorFunctionsContext } from "../../context/editorFunctions";
import File from "./File";

// Styled components
export const UlFile = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  max-height: 100%;
  flex-grow: 1;
  height: 50%;
  &:last-child{
    margin-bottom: 3%;
  }  
`;

export const LiFile = styled.li`
  display: flex;
  list-style: none;
  align-items: center;
  
  &:hover{
    background-color: #5a5a5a2b;
  }
  & > .nav-item {
    ${navItem}
    }
    
  & > .nav-link {
    ${navLink}
  &.selected {
    background-color: #5a5a5a67;
  }
  &.hidden {
    display: none;
  }
  `;

export const InputFile = styled.input`
  outline: none;
  border: none;
  width: 70%;
  height: 2rem;
  background-color: transparent;
  color: #fff;
  cursor: pointer;
  font-size: 1.2rem;
`;
export const FileList = () => {
  const { files } = UseData();
  const { addNewFile } = useContext(positionSideContext)
  const { fileCurrent, setFileCurrent } = useContext(EditorFunctionsContext);

  if ((!files || files.length === 0) && !addNewFile) {
    return <p>No files available</p>
  }

  const handlerFile = (file) => {
    setFileCurrent(file)
  }
  
  return (
    <UlFile className="nav nav-pills flex-column ul-liFile">
      {
        files.map(file => (
          <LiFile className="nav-item" key={file.Id}>
            <File file={file} />
          </LiFile>
        ))
      }
    </UlFile >
  );
};