import "../../styles/components/sidebar/SideBarComponent.css";
import ContainerProject from "./ContainerProject";
import ContainerNotFolders from "./ContainerNotFolders";
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
`;

const SideBar = () => {
  return (
    <DivSidebar className={"slider-contenedor bg-dark col-auto col-md-2"}>
      <SideContenedor >
        <ContainerProject />
        <ContainerNotFolders />
      </SideContenedor>
    </DivSidebar>
  );
};

export default SideBar;
