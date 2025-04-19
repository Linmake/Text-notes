import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFile } from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";
import { navItem, navLink } from "./Hooks/themaStyled";
import { UseData } from '../../context/dataContext';
import { useContext } from 'react'
import { positionSideContext } from '../../context/SideProv'
import { EditorFunctionsContext } from "../../context/editorFunctions";

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
          
  export const File = styled.div`
  display: flex;
  flex-direction: row;
  margin-left: 8%;
  height: 50%;
  &.selected {
    background-color: #5a5a5a67;
  }
  &.noSelected {
    background-color: transparent;
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

const Icon = styled(FontAwesomeIcon)`
  width: 5%;
`

/**
 * Componente que despliega la lista de los files visuales desde la bd 
 * @returns Lista de Files 
 */
export const FileList = () => {
  const { files } = UseData();
  const { addNewFile } = useContext(positionSideContext)
  const { fileCurrent, setFileCurrent } = useContext(EditorFunctionsContext);

  if ((!files || files.length === 0) && !addNewFile) {
    return <p>No files available</p>; // Maneja el caso cuando no hay archivos
  }

  const handlerFile = (file) => {
    setFileCurrent(file) //actualiza el file seleccionado en el context de fileCurrent de EditorFunctionsContext
  }
  
  return (
    <UlFile className="nav nav-pills flex-column ul-liFile">
      {
        files.map(file => (
          <LiFile className="nav-item" key={file.Id}>
            <File className="nav-link text-white file" onClick={event => handlerFile(file)}>
              <Icon id={`iconFile-${file.Id}`} icon={faFile} />
              <InputFile
                readOnly
                value={file.Title}
                id={`file-${file.Id}`} // IDs únicos
              />
            </File>
          </LiFile>
        ))
      }
    </UlFile >
  );
};
