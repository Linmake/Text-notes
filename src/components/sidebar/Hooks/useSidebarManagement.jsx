import { positionSideContext } from '../../../context/SideProv'
import { useState, useContext } from "react";

const useSidebarManagement = () => {
  const [proyectoVacio, setProyectoVacio] = useState(false);
  const { sidebarVisible, setSidebarVisible } = useContext(positionSideContext);

  return (
    proyectoVacio,
    setProyectoVacio,
    sidebarVisible,
    setSidebarVisible
  )
}

export default useSidebarManagement