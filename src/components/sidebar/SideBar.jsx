import "../../styles/components/sidebar/SideBarComponent.css";
import ContainerProject from "./ContainerProject";
import ContainerNotFolders from "./ContainerNotFolders";
import NewFolderContent from "./ContainerNewFolders";
import { useContext } from "react";
import { positionSideContext } from '../../context/SideProv';
import SideContenedor from "./ContainerSideBar";
import styled from "styled-components";

// Styled-components
const DivSidebar = styled.div`
  position: fixed;
  grid-area: aside;
  width: 17%;
  height: 100%;
  top: 5.8%;
  display: grid;
  grid-template-areas: "sideContent bttnHidde";
  grid-template-columns: 85% 15%;
  &.hidden {
    transform: translateX(-78%);
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
        <ContainerProject />
        <ContainerNotFolders />
        <NewFolderContent />
      </SideContenedor>
      <DivButtonSidebar className="container-button-sidebar">
        <button className="button-side" onClick={toggleSidebar}></button>
      </DivButtonSidebar>
    </DivSidebar>
  );
};

export default SideBar;
