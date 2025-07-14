import { faFile } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import axios, { Axios } from "axios";

export const FileComponent = styled.div`
  display: flex;
  flex-direction: row;
  margin-left: 8%;
  padding-left: 4% !important;
  height: 50%;
  &.selected {
    background-color: #5a5a5a67;
  }
  &.noSelected {
    background-color: transparent;
  }
`;

const Icon = styled(FontAwesomeIcon)`
  width: 5%;
`
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

const ContainerMenu = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 0.2rem;
  position: absolute;
  right: 10px;
  top: 5px;
  width: 8rem;
  z-index: 1000000;
  background-color: #1f1f1f;
  border: 1px solid #3e3e3e;
  padding-top: 0.2rem;
  padding-bottom: 0.2rem;
  padding-left: 0.3rem;
  padding-right: 0.3rem;
`;

const ButtonEdit = styled.div`
  border-radius: 0.2rem;
  color: rgb(255, 255, 255);
  width: 100%;
  text-align: center;
  font-weight: 500;
  &:hover {
    cursor: pointer;
    background-color: #0078d4;
  }
  &:active {
    cursor: pointer;
    background-color: #0078d4;
  }
`;

const ButtonDelete = styled.div`
  border-radius: 0.2rem;
  color: rgba(255, 124, 124, 1);
  font-weight: 500;
  width: 100%;
  text-align: center;
  &:hover {
    background-color: #0078d4;
    cursor: pointer;
  }
  &:active {
    cursor: pointer;
    background-color: #0078d4;
  }
`;


const ContainerButtonEdit = styled.div`
  width: 100%;
  border-bottom: 1px solid #3e3e3e;
  padding: 0.2rem;
`;

const ContainerButtonDelete = styled.div`
  width: 100%;
  padding: 0.2rem;
`;

/**
 * File component
 * @param {*} param0 
 * @returns 
 */

const File = ({ file }) => {
  const [fileCurrent, setFile] = useState(null)
  const [optsMenu, setOptsMenu] = useState(false);
  const [idOptMenu, setIdOptMenu] = useState(null);
  const refMenuContainer = useRef(null);

  const handlerFile = async (file) => {
    const { data } = await axios.get("http://localhost:4000/account/idAccount", { withCredentials: true })
    alert(data)
  }

    const handlerOptsMenu = (e, fileId) => {
    e.preventDefault()
    const stringStyles = ContainerMenu.componentStyle.rules.join(";")
    const newStylesStr = stringStyles.concat(`left: ${e.pageX + 35}px; top: ${((e.pageY) - 60)}px;`)
    ContainerMenu.componentStyle.rules[0] = newStylesStr
    setOptsMenu(true);
    setIdOptMenu(fileId);
  };

  useEffect(() => { }, [setFile])

   useEffect(() => {
    const handlerOutMenu = (event) => {
      const menu = refMenuContainer.current;
      if (menu && !menu.contains(event.target)) {
        setOptsMenu(false);
      }
    };
    document.addEventListener("click", handlerOutMenu, true);
    return () => {
      document.removeEventListener("click", handlerOutMenu, true);
    };
  }, [setOptsMenu]);


  return (
    <FileComponent
      className="nav-link text-white file"
      onClick={() => handlerFile(file)}
      onContextMenu={(e) => handlerOptsMenu(e, file.Id)}
    >
      <Icon id={`iconFile-${file.Id}`} icon={faFile} />
      <InputFile readOnly value={file.Title} id={`file-${file.Id}`} />
      {optsMenu && idOptMenu == file.Id ? (
        <ContainerMenu
          ref={refMenuContainer}
        >
          <ContainerButtonEdit>
            <ButtonEdit
              title="Edit"
              onClick={() => handlerEdit(file.Id)}
            >
              Rename
            </ButtonEdit>
          </ContainerButtonEdit>

          <ContainerButtonDelete>
            <ButtonDelete
              title="Delete"
              onClick={(e) => handlerDelete(e, file.Id)}
            >
              Delete
            </ButtonDelete>
          </ContainerButtonDelete>
        </ContainerMenu>
      ) : (
        <></>
      )}
    </FileComponent>
  );
}
export default File