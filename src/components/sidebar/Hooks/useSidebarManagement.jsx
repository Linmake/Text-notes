<<<<<<< HEAD
import { positionSideContext } from '@context/SideProv'
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

=======
import { positionSideContext } from '@context/SideProv'
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

>>>>>>> 1223f99ee06a0a92a5bd8f2f92bd5b31e4eb6a13
export default useSidebarManagement