import "../../sass/components/sidebar/css/SideBarComponent.css";
import ProyectoContenedor from "./proyectoContenedor";
import SinFoldersContenedor from "./sinFoldersContenedor";
import NewFolderContent from "./newFolderContent";
import { useContext } from "react";
import { positionSideContext } from '../../context/SideProv';
import SideContenedor from "./sideContenedor";
import styled from "styled-components";
import FolderList from "./FolderList";

// Styled-components
const DivSidebar = styled.div`
  position: fixed;
  grid-area: aside;
  width: 17%;
  height: 100%;
  top: 6.8%;
  display: grid;
  grid-template-areas: "sideContent bttnHidde";
  grid-template-columns: 85% 15%;
  &.hidden {
    display: none;
  }
`;
const DivButtonSidebar = styled.div`
  height: 100%;
  display: flex;
  justify-content: flex-end;
  &>.button-side {
    background-color: #66666694;
    color: #fff;
    border: none;
    cursor: pointer;
    grid-area: "bttnHidde";
    margin-top: 37vh;
    height: 15%;
    width: 1.8rem;
  }
`;

const SideBar = () => {
  const { sidebarVisible, setSidebarVisible } = useContext(positionSideContext);
  const toggleSidebar = () => {
    setSidebarVisible(!sidebarVisible);
  };

  return (
    <DivSidebar className={`slider-contenedor bg-dark col-auto col-md-2 ${(sidebarVisible) ? '' : 'hidden'}`}>
      <SideContenedor >
        <ProyectoContenedor />
        <SinFoldersContenedor />
        <NewFolderContent />
        <FolderList />
      </SideContenedor>
      <DivButtonSidebar className="container-button-sidebar">
        <button className="button-side" onClick={toggleSidebar}></button>
      </DivButtonSidebar>
    </DivSidebar>
  );
};

export default SideBar;
