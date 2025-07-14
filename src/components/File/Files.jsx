import styled from "styled-components";
import { navItem, navLink } from "../Hooks/themaStyled";
import { UseData } from '../../context/dataContext';
import { useContext, useEffect } from 'react'
import { positionSideContext } from '../../context/SideProv'
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
  &:hover{
    background-color: #2A2D2E;
  }
`;

export const InputFile = styled.input`
  outline: 1px solid #08538D;
  border: none;
  width: 70%;
  height: 2rem;
  background-color: transparent;
  color: #fff;
  cursor: pointer;
  font-size: 1.2rem;
  width: 100%;
`;

export const Files = () => {
  const { files, setFiles } = UseData();
  const { addNewFile } = useContext(positionSideContext)

  if ((!files || files.length === 0) && !addNewFile) {
    return <p>No files available</p>
  }

  const handlerSelectFile = (e) => {
    console.log('Selected file');
  }

  useEffect(() => { }, [files, setFiles]);

  return (
    <UlFile className="nav nav-pills flex-column ul-liFile">
      {
        files.map(file => (
          <LiFile
            onClick={(e) => handlerSelectFile(e)}
            className="nav-item"
            key={file.Id}
          >
            <File
              file={file}
              onClick={() => handlerSelectFile()}
            />
          </LiFile>
        ))
      }
    </UlFile >
  );
};