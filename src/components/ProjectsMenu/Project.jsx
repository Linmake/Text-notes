import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import ContextMenuComponent from "./ContextMenu/ContextMenu";
const Project = styled(Link)`
  border-bottom: 1px solid #c4c7c5;
  font-size: 1.3rem;
  list-style: none;
  font-family: "Poppins", "Lucida Sans", "Lucida Sans Regular";
  width: 58vw;
  height: 80px;
  padding-top: 0.625rem;
  padding-left: 1.2rem;
  overflow-wrap: break-word;
  text-overflow: ellipsis;
  white-space: nowrap;
  display: flex;
  align-items: center;
  color: #000;
  cursor: pointer;
  &:last-child {
    border: none;
  }
  &:hover {
    background-color: rgba(242, 244, 245, 0.45);
  }
`;
/**
 * Gets projects from Db
 * @param {String} param0 Title
 * @returns Project
 */
const ProjectComponent = ({ Title, Id }) => {
  const [contextMenu, setContextMenu] = useState(false)
  const contextMenuRef = useRef(null)
  const handlerShowMenu = (e) => {
    if( contextMenuRef.current && contextMenuRef.current.contains(e.target) ) return
    e.preventDefault()
    setContextMenu(true)
    console.info("click")
  }
  const hideMenu = () => {
  
    setContextMenu(false)
  }
  useEffect(() => {

    document.addEventListener("click", hideMenu)
    if(contextMenu){
      document.addEventListener("contextmenu", hideMenu)
    }
    return () => {
      document.removeEventListener("click", hideMenu)
    }

  }, [])
  return (
    <>
      {contextMenu
        ? (
          <>
            <Project
              to={`/Project/${Id}`}
            >
              {Title}
            </Project>
            <ContextMenuComponent
            ref={contextMenuRef}
            />
          </>
        )
        : (
          <Project
            to={`/Project/${Id}`}
            onContextMenu={e => handlerShowMenu(e)}
          >
            {Title}
          </Project>
        )
      }
    </>
  )
}
export default ProjectComponent