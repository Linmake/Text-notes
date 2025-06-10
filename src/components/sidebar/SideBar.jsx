import "../../styles/components/sidebar/SideBarComponent.css";
import ContainerProject from "./ContainerProject";
import ContainerNotFolders from "../Folder/ContainerNotFolders";
import SideContenedor from "./ContainerSideBar";
import styled from "styled-components";

// Styled-components
const DivSidebar = styled.div`
  box-sizing: border-box;
  position: fixed;
  grid-area: aside;
  width: 17%;
  height: 100%;
  top: 5.8%;
  background-color: #181818;
`;

const SideBar = () => {
  return (
    <DivSidebar className={"slider-contenedor col-auto col-md-2"}>
      <SideContenedor >
        <ContainerProject />
        <ContainerNotFolders />
      </SideContenedor>
    </DivSidebar>
  );
};

export default SideBar;
