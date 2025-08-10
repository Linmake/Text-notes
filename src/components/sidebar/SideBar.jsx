import "../../styles/components/sidebar/SideBarComponent.css";
import ContainerProject from "./ContainerProject";
import ContainerNotFolders from "../Folder/ContainerNotFolders";
import SideContenedor from "./ContainerSideBar";
import styled from "styled-components";

const breakpoints = {
  xsm: "376px",
  sm: "576px",  // móviles horizontales / tablets pequeñas
  md: "768px",  // tablets verticales
  lg: "905px",  // laptops pequeñas
  xl: "1200px", // pantallas grandes
  xxl: "1400px", // TVs/monitores extra grandes
};

const SidebarContainer = styled.div`
  box-sizing: border-box;
  position: fixed;
  grid-area: aside;
  width: 17%;
  height: 100%;
  top: 5.8%;
  background-color: #181818;

  /* Mobile First (estilo base para móviles) */
  @media (min-width: ${breakpoints.xsm}) {
    width: 17%;
  }

  media (min-width: ${breakpoints.sm}) {
    width: 17%;
  }

  /* Tablet (≥ 768px) */
  @media (min-width: ${breakpoints.md}) {
    width: 17%;
  }

  /* Desktop (≥ 905px) */
  @media (min-width: ${breakpoints.lg}) {
    width: 17%;
  }
  
  @media (min-width: ${breakpoints.xl}) {
    width: 17%;
  }

  @media (min-width: ${breakpoints.xxl}) {
    width: 19%;
  }
`;

const SideBar = () => {
  return (
    <SidebarContainer className={"slider-contenedor col-auto col-md-2"}>
      <SideContenedor >
        <ContainerProject />
        <ContainerNotFolders />
      </SideContenedor>
    </SidebarContainer>
  );
};

export default SideBar;
